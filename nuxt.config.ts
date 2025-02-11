// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // i18n: {
  //   locales: [{ code: "en", language: "en-US" }],
  //   defaultLocale: "en",
  //   langDir: "lang",
  // },
  image: {
    inject: true,
    format: ["webp"],
    quality: 80,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/image"],
});
