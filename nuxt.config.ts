// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/style/reset.scss', '~/style/type.scss', '~/style/colors.scss'],
  app: {
    baseURL: '/sites/pw-mx/',
  },
  ssr: false,
})
