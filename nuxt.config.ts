// import {resolve} from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    assets: "/<rootDir>/assets"
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // "@nuxtjs/supabase", 
    "@nuxtjs/tailwindcss"
  ],
  // Tailwind CSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
