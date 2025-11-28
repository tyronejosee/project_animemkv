import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anitousen.com",
      },
      {
        protocol: "https",
        hostname: "www3.animeflv.net",
      },
    ],
  },
};

export default nextConfig;
