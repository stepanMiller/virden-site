import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
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
