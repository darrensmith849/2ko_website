import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "2KO — Operational Excellence & AI Systems",
    short_name: "2KO",
    description:
      "2KO makes operational improvement permanent through Lean Six Sigma mastery and AI-powered management systems for complex organisations.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0d0c",
    theme_color: "#16a34a",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
