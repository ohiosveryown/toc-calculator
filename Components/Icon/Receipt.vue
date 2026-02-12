<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 2.5C3.17157 2.5 2.5 3.17157 2.5 4V16C2.5 16.8284 3.17157 17.5 4 17.5H16C16.8284 17.5 17.5 16.8284 17.5 16V4C17.5 3.17157 16.8284 2.5 16 2.5H4ZM3.75 5.5H16.25V6.75H3.75V5.5ZM3.75 8.5H16.25V9.75H3.75V8.5ZM3.75 11.5H12V12.75H3.75V11.5ZM3.75 14.5H10V15.75H3.75V14.5Z"
      fill="white"
    />
  </svg>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      size?: number
    }>(),
    { size: 20 },
  )
</script>
