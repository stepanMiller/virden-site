import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    qualities: [75, 90, 92, 94],
  },
  webpack: (config) => {
    // CI artifacts are cached by the runner; avoid duplicating the large
    // persistent webpack cache inside .next on space-constrained builders.
    if (process.env.CI === "true") {
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;
