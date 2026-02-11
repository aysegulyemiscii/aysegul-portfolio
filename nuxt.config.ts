export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap"],

  site: {
    url: "https://aysegul-portfolio.vercel.app",
  },

  sitemap: {},
})
