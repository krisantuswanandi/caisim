// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@unocss/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '@/styles/global.css',
  ],
})
