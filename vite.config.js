// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        koebbillet: resolve(__dirname, "src/koebbillet.html"),
        forestillinger: resolve(__dirname, "src/forestillinger.html"),
        spilletider: resolve(__dirname, "src/spilletider.html"),
        vaermed: resolve(__dirname, "src/vaermed.html"),

        sitemap: resolve(__dirname, "src/sitemap.html"),

        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
