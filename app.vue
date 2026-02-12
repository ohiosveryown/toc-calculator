<template>
  <div>
    <Nav v-if="!darkVariant" />
    <NavDark v-else />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { darkVariant, toggle } = useDesignAlt()
const { toggle: toggleLocale } = useLocale()

function onKeydown(e: KeyboardEvent) {
  const shiftD = e.key === 'D' && e.shiftKey
  const cmdD = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'd'
  if (shiftD || cmdD) {
    e.preventDefault()
    toggle()
    return
  }
  const shiftS = e.key === 'S' && e.shiftKey
  const cmdS = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's'
  if (shiftS && !cmdS) {
    e.preventDefault()
    toggleLocale()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>
