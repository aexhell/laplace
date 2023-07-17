<template>
   <div id="__LAPLACE_LANDING" class="md:w-2/3 m-auto w-full h-full flex md:flex-row flex-col">
      <div class="px-12 md:w-1/2 w-full my-auto">
         <h1 class="md:text-6xl mb-2 text-4xl font-700 lowercase">Aexhell</h1>
         <p class="my-0">FRONT-END DEVELOPER / UX ARTIST</p>
         <p class="my-2">프론트엔드 개발자</p>
         <p class="mb-8">BASED IN MADRID, SPAIN</p>
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
