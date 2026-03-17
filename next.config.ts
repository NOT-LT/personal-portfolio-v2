import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  compress: true,
  poweredByHeader: false,
  // No headers() here — Nginx handles caching
};

export default nextConfig;