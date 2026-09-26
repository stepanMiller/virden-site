import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const origin = "https://export-check.invalid";
const errors = [];
const titles = new Set();
let references = 0;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory()
    ? walk(path.join(directory, entry.name))
    : path.join(directory, entry.name)))).flat();
}

const files = await walk(root);
const pages = files.filter(file => file.endsWith("/index.html") && !/\/(?:_not-found|404)\//.test(file));
const decode = value => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]));

for (const file of pages) {
  const html = await readFile(file, "utf8");
  const route = `${basePath}/${path.relative(root, file).replace(/index\.html$/, "")}`;
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  if (!title || titles.has(title)) errors.push(`${route}: missing or duplicate title`);
  titles.add(title);
  if ((html.match(/<h1\b/g) ?? []).length !== 1) errors.push(`${route}: expected one h1`);
  if (!html.includes('id="main-content"')) errors.push(`${route}: missing skip-link target`);
  const tags = [...html.matchAll(/<(?:a|img|script|link|source|video|meta)\b[^>]*>/g)].map(match => match[0]);
  const canonical = tags.filter(tag => tag.startsWith("<link") && attrs(tag).rel === "canonical");
  if (canonical.length !== 1 || !attrs(canonical[0]).href?.startsWith("https://")) errors.push(`${route}: invalid canonical`);
  if (!tags.some(tag => tag.startsWith("<meta") && attrs(tag).name === "description" && attrs(tag).content)) errors.push(`${route}: missing description`);
  for (const tag of tags) {
    const attributes = attrs(tag);
    if (tag.startsWith("<img") && !("alt" in attributes)) errors.push(`${route}: missing image alt`);
    for (const key of ["href", "src", "poster"]) {
      const value = attributes[key];
      if (!value || value.startsWith("data:")) continue;
      const url = new URL(value, `${origin}${route}`);
      if (url.origin !== origin) continue;
      references++;
      if (basePath && url.pathname !== basePath && !url.pathname.startsWith(`${basePath}/`)) {
        errors.push(`${route}: reference escapes basePath: ${value}`);
        continue;
      }
      const relative = decodeURIComponent(url.pathname.slice(basePath.length)).replace(/^\//, "");
      let target = path.join(root, relative);
      try {
        if ((await stat(target)).isDirectory()) target = path.join(target, "index.html");
        await stat(target);
        if (url.hash && target.endsWith(".html")) {
          const targetHtml = await readFile(target, "utf8");
          const id = decodeURIComponent(url.hash.slice(1));
          if (!targetHtml.includes(`id="${id}"`)) errors.push(`${route}: missing anchor ${value}`);
        }
      } catch { errors.push(`${route}: missing target ${value}`); }
    }
  }
}

for (const required of ["sitemap.xml", "robots.txt", "404.html"]) {
  if (!files.includes(path.join(root, required))) errors.push(`Missing ${required}`);
}
if (errors.length) {
  console.error([...new Set(errors)].join("\n"));
  process.exitCode = 1;
} else {
  console.log(`PASS: ${pages.length} pages, ${references} local references; titles, descriptions, canonicals, headings, alt attributes and anchors checked.`);
}
