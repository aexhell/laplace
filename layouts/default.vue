<template>
   <main id="__LAPLACE_CONTENT" class="w-full h-full flex items-center" :class="{ 'cursor-none': isMouseEnabled }">
      <slot />
      <audio autoplay loop>
         <source src="/revelation.flac" type="audio/flac">
         <source src="/revelation.ogg" type="audio/ogg">
      </audio>
      <Cursor v-if="isMouseEnabled" />
   </main>
</template>

<script setup>
const isMouseEnabled = ref(false);
</script>