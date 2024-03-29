// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@vueuse/nuxt"],
  runtimeConfig: {
    databaseUrl: "",
    databaseAuthToken: "",
    sessionPassword: "",
    appPassword: "",
  },
  css: ["@unocss/reset/tailwind.css"],
  experimental: {
    typedPages: true,
  },
  app: {
    head: {
      link: [{ rel: "icon", href: "/logo.png" }],
    },
  },
});
