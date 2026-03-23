// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'SYSADMIN // PORTFOLIO',
      meta: [
        { name: 'description', content: 'Cybersecurity Analyst & Full-Stack Developer Portfolio' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&family=Inter:wght@400;600;900&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
})
