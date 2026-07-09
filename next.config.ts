import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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

// Wire up Cloudflare bindings during `next dev` so server code that
// reaches for env vars / KV / R2 behaves the same locally as on the
// Worker. No-op at build/deploy time.
// eslint-disable-next-line @typescript-eslint/no-require-imports
import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) => {
  initOpenNextCloudflareForDev();
});
