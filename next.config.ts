import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  typedRoutes: true,
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
