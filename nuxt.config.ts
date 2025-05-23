// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  future: {
    compatibilityVersion: 4,
  },
  srcDir: "src/",
  typescript: {
    typeCheck: true,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
  nitro: {
    routeRules: {
      "/api/**": { cors: true },
    },
  },
  css: ["~/assets/app.css"],
});
