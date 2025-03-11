import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://nikhilteja824.github.io/my-website",
  base: "/my-website/",
  output: "static",
  trailingSlash: "always",
  integrations: [tailwind()],
});