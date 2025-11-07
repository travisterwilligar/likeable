// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    // Use local Kongponents repo instead of npm package
    '../kongponents-repo/nuxt'
  ],
  kongponents: {
    components: {
      // Include all components
      include: [],
      exclude: []
    },
    composables: true
  }
})
