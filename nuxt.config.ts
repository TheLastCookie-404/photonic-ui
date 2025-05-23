// https://nuxt.com/docs/api/configuration/nuxt-config
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
});
