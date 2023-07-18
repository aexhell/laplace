<template>
   <div class="__LAPLACE-PROJECT border-solid border border-gray py-24 px-6 hover:scale-105 relative hover:bg-gray/5 transition">
      <img :alt="`${data.title} Image`" class="pointer-events-none select-none absolute transition-all top-0 left-0 object-cover w-full h-full" :src="`/projects/${data.code}.webp`" />
      <div class="__LAPLACE-PROJECT-DETAILS transition-all duration-500 absolute bottom-5 text-white left-6">
         <span class="text-xs border-t border-white md:border-solid border-x-0 border-b-0 pt-2 my-0 font-medium uppercase" v-text="data.position || 'Contributor'" />
         <h2 class="my-0" v-text="data.title" />
         <p class="text-sm mb-4" v-text="data.description || 'Description'" />
      </div>
   </div>
</template>

<style>
.__LAPLACE-PROJECT-DETAILS h3 {
   transition: 0.25s border ease-in-out
}

.__LAPLACE-PROJECT:hover span.border-white {
   @apply border-black
}

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