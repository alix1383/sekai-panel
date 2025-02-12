// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // i18n: {
  //   locales: [{ code: "en", language: "en-US" }],
  //   defaultLocale: "en",
  //   langDir: "lang",
  // },
  $production: {
    image: {
      provider: "cloudflare",
    },
  },

  image: {
    inject: false,
    format: ["webp"],
    quality: 80,

    cloudflare: {
      baseURL: "https://sekai-panel.ali-x.ir",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/image"],
});
