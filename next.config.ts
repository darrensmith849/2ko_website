import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  images: {
    // Served directly (no image-optimization Worker) so the deploy has no hard
    // dependency on Cloudflare Images. Swap to a Cloudflare Images loader later
    // if on-the-fly optimisation is wanted.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

// Makes Cloudflare bindings + env available during `next dev` (no-op at build).
initOpenNextCloudflareForDev();
