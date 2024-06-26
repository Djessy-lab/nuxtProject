// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@prisma/nuxt", "@nuxt/icon"],
  routeRules: {
    "/": { prerender: true },
    "/prerender-multiple/**": { prerender: true },
  },
    alias: {
      ".prisma/client/index-browser":
        "./node_modules/@prisma/client/index-browser.js",
    },
});
