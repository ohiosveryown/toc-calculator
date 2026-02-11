<template>
  <NuxtLink to="/aside">
    <img
      :src="`${baseURL}img/svt@2x.png`"
      alt="Google"
    />
  </NuxtLink>
</template>

<style lang="scss" scoped>
  img {
    cursor: default;
  }
</style>

<script setup lang="ts">
  definePageMeta({
    layout: 'blank',
  })

  const config = useRuntimeConfig()
  const baseURL = config.app.baseURL

  //   useSlideNavigation('/slides/two')
</script>
