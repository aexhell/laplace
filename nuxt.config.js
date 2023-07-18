// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: [
      '@unocss/nuxt',
   ],
   generate: {
      fallback: true
   },
   app: {
      rootId: '__LAPLACE',
      head: {
         htmlAttrs: {
            lang: 'en'
         },
         title: 'Aexhell',
         meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
         ],
         script: [],
         link: [
            { rel: 'icon', href: '/icon.png', type: 'image/png' }
         ],
         style: [],
         noscript: [
            { children: 'JavaScript is required' }
         ]
      }
   },
   css: [
      '@/assets/global.css'
   ]
})
