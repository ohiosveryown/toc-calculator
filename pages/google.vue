<template>
  <NuxtLink to="/aside">
    <img
      src="/img/svt@2x.png"
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

  //   useSlideNavigation('/slides/two')
</script>
