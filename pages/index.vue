<template>
   <div id="__LAPLACE_LANDING" class="md:w-2/3 m-auto w-full h-full flex md:flex-row flex-col">
      <div class="px-12 md:w-1/2 w-full my-auto">
         <h1 class="md:text-6xl mb-2 text-4xl font-700 lowercase">Aexhell</h1>
         <p class="my-0">FRONT-END DEVELOPER / UX ARTIST</p>
         <p class="my-2">프론트엔드 개발자</p>
         <p class="mb-8">BASED IN MADRID, SPAIN</p>
         <a href="https://github.com/aexhell" class="uppercase active:translate-y-px no-underline hover:underline transition text-gray hover:text-black w-fit text-sm">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 24 24" fill="none">
               <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </a>
      </div>
      <div id="__LAPLACE_PROJECTS_LIST" class="px-12 md:py-0 pb-12 scroll-smooth border-y border-solid border-gray border-x-0 overflow-y-auto md:w-1/2 h-full my-auto flex flex-col gap-4">
         <SlideDown />
         <Project v-for="proj of projects" :key="proj.code" :data="proj" />
      </div>
   </div>
</template>

<script setup>
const projects = ref([
   {
      code: 'mylium',
      position: 'Senior Developer',
      title: 'Mylium'
   },
   {
      code: 'puroto',
      position: 'Front-end',
      title: 'Puroto'
   },
   {
      code: 'mylium',
      title: 'Mylium'
   },
   {
      code: 'puroto',
      title: 'Puroto'
   },
   {
      code: 'mylium',
      title: 'Mylium'
   },
   {
      code: 'puroto',
      title: 'Puroto'
   },
   {
      code: 'mylium',
      title: 'Mylium'
   },
   {
      code: 'puroto',
      title: 'Puroto'
   },
   {
      code: 'mylium',
      title: 'Mylium'
   },
   {
      code: 'puroto',
      title: 'Puroto'
   },
   {
      code: 'mylium',
      title: 'Mylium'
   },
   {
      code: 'puroto',
      title: 'Puroto'
   },
   {
      code: 'mylium',
      title: 'Mylium'
   },
   {
      code: 'puroto',
      title: 'Puroto'
   },
   {
      code: 'mylium',
      title: 'Mylium'
   },
   {
      code: 'puroto',
      title: 'Puroto'
   },
   {
      code: 'mylium',
      title: 'Mylium'
   },
   {
      code: 'puroto',
      title: 'Puroto'
   },
]);
</script>
