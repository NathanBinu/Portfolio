import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio | Developer & Designer",
    short_name: "Portfolio",
    description: "Modern portfolio showcasing projects, experience, and insights in web development and design.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#059669",
    icons: [
      {
        src: "/favicon-192x192.jpg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512x512.jpg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
