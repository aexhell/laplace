<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }

    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>

<script setup>
useServerSeoMeta({
  ogTitle: 'Aexhell',
  description: 'Web Developer / UX Artist',
  ogDescription: 'Web Developer / UX Artist',
  ogImage: '/banner.png',
  twitterCard: 'summary_large_image'
});
</script>
