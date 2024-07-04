// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@prisma/nuxt", "@nuxt/icon"],

  routeRules: {
    "/": { prerender: true },
    "/prerender-multiple/**": { prerender: true },
  },
  compatibilityDate: "2024-07-03",
});
