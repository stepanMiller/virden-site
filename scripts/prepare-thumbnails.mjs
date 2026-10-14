import { createRequire } from "node:module";
import { readdir } from "node:fs/promises";
import { join, resolve } from "node:path";

const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
const folders = ["categories/furniture", "categories/textiles", "categories/tableware", "categories/amenities", "categories/merch", "categories/oem", "products/bathrobe"];
let count = 0;
for (const folder of folders) {
  const directory = resolve("public/assets", folder);
  for (const name of await readdir(directory)) {
    if (!/\.(jpg|webp)$/i.test(name) || name.endsWith("-thumb.webp") || name === "textile-sachet.webp") continue;
    await sharp(join(directory, name)).rotate().resize({ width: 192, height: 256, fit: "inside", withoutEnlargement: true }).webp({ quality: 84, effort: 6 }).toFile(join(directory, name.replace(/\.(jpg|webp)$/i, "-thumb.webp")));
    count++;
  }
}
console.log(`Prepared ${count} gallery thumbnails without changing full-size images.`);
