<template>
  <div class="slide-container">
    <h2>What are we doing?</h2>
    <!-- <h1>
        We want to take an AI-native approach to Public Web and create an adaptive
        experience. We also wnat to reflect a seller's brand and business through
        Square as quickly as possible.
      </h1> -->
    <h1>We have a couple of goals:</h1>
    <ul>
      <li>Ai-native experience for Public Web</li>
      <li>
        Reflect a seller's brand and business through Square as quickly as
        possible
      </li>
      <li>
        Explore how different initiatives & surfaces can come together: Public
        Web, Dashboard nUX, Onboarding, Managerbot, etc.
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  ul {
    list-style-type: disc !important;
    padding-left: 4rem;
    margin: 4rem auto 0;
    width: 60%;
  }

  li {
    list-style: disc !important;
    font-size: 2.4rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
</style>

<script setup lang="ts">
  definePageMeta({
    layout: 'slides',
  })

  //   useSlideNavigation('/slides/two')
</script>
