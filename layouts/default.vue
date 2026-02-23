<template>
  <div>
    <Nav :hero="isHeroPage" />
    <slot />
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
  const isHeroPage = computed(
    () => route.path === '/r1-hero' || route.path === '/r2',
  )
</script>
