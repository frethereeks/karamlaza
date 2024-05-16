// import {resolve} from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets"
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // "@nuxtjs/supabase", 
    "@nuxtjs/tailwindcss",
    // "@morpheme/alert",
    'nuxt-icon',
    'maz-ui/nuxt',
    'nuxt-swiper',
  ],
  mazUi: {
    injectComponents: true,
    injectCss: true,
    injectAos: {
      injectCss: true,
    },
    injectUseToast: true,
    injectUseThemeHandler: true,
    devtools: true,
  },
  runtimeConfig: {
    // include the maz-ui
  },
  // Tailwind CSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
