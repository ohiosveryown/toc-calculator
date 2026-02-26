<template>
  <div class="closing-cta">
    <h2 class="closing-cta__heading type-heading-700-serif">
      Ramp up your speed and service with Square
    </h2>
    <div class="closing-cta__lockup">
      <a
        href="#"
        class="closing-cta__btn closing-cta__btn--secondary type-body-medium"
      >
        Get started
      </a>
      <a
        href="#"
        class="closing-cta__btn closing-cta__btn--primary type-body-medium"
      >
        Contact sales
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/style/grid.scss';
  @import '~/style/colors.scss';

  .closing-cta {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin: 0 auto;
    padding: 4rem 2rem;
    width: 100%;

    @include breakpoint(md) {
      align-items: center;
      flex-direction: row;
      gap: 3.2rem;
      justify-content: space-between;
      padding: 16rem 0 16rem;
      width: grid-width(11);
    }
  }

  .closing-cta__heading {
    margin: 0;
  }

  .closing-cta__lockup {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex-shrink: 0;
  }

  .closing-cta__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 3.2rem;
    border-radius: 5rem;
    font-family: var(--font-cash-sans-medium);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &--primary {
      background: $button-cta-fill-primary;
      color: $button-cta-text-primary;
      border: none;
    }

    &--secondary {
      background: $button-cta-fill-secondary;
      color: $button-cta-text-secondary;
      border: 1px solid $button-cta-stroke-secondary;
    }
  }
</style>

<script setup lang="ts"></script>
