<template>
   <div id="__LAPLACE_LANDING" class="2xl:xl:w-10/12 m-auto w-full h-full flex lg:flex-row flex-col">
      <div class="px-12 md:py-0 pb-12 scroll-smooth border-y border-solid border-gray border-x overflow-y-auto md:w-2/3 h-full my-auto flex flex-col gap-4">
         <h1 class="md:text-6xl mb-2 text-4xl font-700 lowercase">Aexhɘll.</h1>
         <p class="2xl:text-base">
            I'm Aex, known on the internet as <code>aexhell</code>. I am a web developer based in Spain.
            I started as a game developer in 2014 creating small games using <a href="https://gamemaker.io/en">GML</a>.
            In 2018 I registered a Wikia account and learned basic web development.
            In 2019-2020 I learned how to use Vue.js + Nuxt.js and Electron.
            In 2023 I started using React + React Native and PHP.
         </p>
         <div class="flex w-full gap-2">
            <a aria-label="Visit my GitHub profile" href="https://github.com/aexhell" class="uppercase active:translate-y-px no-underline hover:underline transition text-gray hover:text-black w-fit text-sm">
               <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 24 24" fill="none">
                  <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </a>
            <a aria-label="Aexhell website" href="#" class="text-gray hover:text-black transition">
               <svg class="w-6 h-6" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H5.59444L9.39444 5.6L13.4056 0H19L17.3111 2.4H13.4056L9.60556 8H9.39444L5.59444 2.4H1.68889L0 0Z" fill="currentColor"/>
                  <path d="M1.68889 4.8H5.7L9.39444 10.4H9.60556L13.4056 4.8H17.3111L13.6167 10L19 17.6H17.3111L13.6167 12.4L12.7722 13.6L17.3111 20H13.4056L9.60556 14.4H9.39444L5.48889 20H1.68889L6.22778 13.6L5.38333 12.4L1.68889 17.6H0L5.38333 10L1.68889 4.8Z" fill="currentColor"/>
               </svg>
            </a>
            <a aria-label="Visit my Polywork profile" href="https://polywork.com/aexhell" class="text-gray hover:text-black transition">
               <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.125 0H4.875A4.865 4.865 0 0 0 0 4.875v14.25C0 21.825 2.175 24 4.875 24h6.6c2.7 0 4.875-2.175 4.875-4.875V16.65h2.775c2.7 0 4.875-2.175 4.875-4.875v-6.9C24 2.175 21.825 0 19.125 0zM16.5 1.275h2.625a3.6 3.6 0 0 1 3.6 3.6v2.7H16.5v-6.3zM15.075 9v6.45H8.85V9h6.225zM8.85 1.2h6.225v6.375H8.85V1.2zM1.275 4.8a3.6 3.6 0 0 1 3.6-3.6H7.5v6.375H1.275V4.8zM7.5 9v6.45H1.2V9h6.3zm0 13.725H4.8a3.6 3.6 0 0 1-3.6-3.6V16.8h6.3v5.925zm7.575-3.525a3.6 3.6 0 0 1-3.6 3.6H8.85v-5.925h6.225V19.2zm7.65-7.35a3.6 3.6 0 0 1-3.6 3.6H16.5V9h6.225v2.85z" fill="currentColor" />
               </svg>
            </a>
         </div>
      </div>
      <div id="__LAPLACE_PROJECTS_LIST" class="xl:px-16 ml-16 md:py-0 pb-12 scroll-smooth border-y border-solid border-gray border-x overflow-y-auto w-full h-full my-auto flex flex-col gap-4">
         <SlideDown />
         <Project v-for="proj of projects" :key="proj.code" :data="proj" />
      </div>
   </div>
</template>

<script setup>
const projects = ref([
   {
      code: 'nc',
      title: '???',
      position: 'Front-end',
      description: 'W.I.P.'
   },
   {
      code: 'mylium',
      position: 'Founder',
      title: 'Mylium',
      description: 'Connecting people with you.',
      time: 'Nov 2022 / ---'
   },
   {
      code: 'puroto',
      position: 'Volunteer',
      time: 'Aug 2022 / Dec 2022',
      title: 'Puroto',
      description: 'Social media for furries.'
   },
]);
</script>
