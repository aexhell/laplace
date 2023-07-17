<template>
   <div class="__LAPLACE-PROJECT border-solid border border-gray py-24 px-6 hover:scale-105 relative hover:bg-gray/5 transition">
      <img class="pointer-events-none select-none absolute transition-all top-0 left-0 object-cover w-full h-full" :src="`/projects/${data.code}.png`">
      <div class="__LAPLACE-PROJECT-DETAILS transition-all duration-500 absolute bottom-5 text-white left-4">
         <h3 class="text-sm my-0 font-light" v-text="data.position || 'Contributor'" />
         <h2 class="my-0" v-text="data.title" />
      </div>
   </div>
</template>

<style>
.__LAPLACE-PROJECT:hover img {
   opacity: 0.2
}

.__LAPLACE-PROJECT:hover .__LAPLACE-PROJECT-DETAILS {
   @apply opacity-100 text-black left-[-15px]
}
</style>

<script>
export default {
   props: ['data']
}
</script>