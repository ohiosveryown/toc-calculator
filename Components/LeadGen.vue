<template>
  <section class="lead-gen">
    <div class="lead-gen__container">
      <h2 class="lead-gen__heading type-hero">
        Bring your point of sale and your payments together
      </h2>
      <div class="lead-gen__actions">
        <Button variant="primary-light">Get started</Button>
        <Button variant="primary">Contact sales</Button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .lead-gen {
    background-color: $color-neutral-000;
    padding: 10rem 0;

    @include breakpoint(mdl) {
      padding: 12rem 0;
    }
  }

  .lead-gen__container {
    margin: 0 auto;
    max-width: 200rem;
    padding: 0 grid-width(0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2.4rem;

    @include breakpoint(mdl) {
      gap: 6.4rem;
    }
  }

  .lead-gen__heading {
    margin: 0;
    color: $color-neutral-1000;
    max-width: 22ch;

    @include breakpoint(mdl) {
      max-width: 24ch;
    }
  }

  .lead-gen__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.2rem;
  }
</style>

<script setup>
  import Button from '@/components/Button.vue'
</script>
