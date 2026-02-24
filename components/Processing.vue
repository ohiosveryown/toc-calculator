<template>
  <section class="processing">
    <div class="processing__card">
      <div class="processing__left">
        <h2 class="processing__headline type-subheading">
          Monthly sales more than $250K? You may qualify for lower processing
          fees.
        </h2>
        <a
          href="#"
          class="processing__cta"
          @click.prevent
        >
          Talk to our team to learn more
        </a>
      </div>
      <p class="processing__body type-body text-muted">
        If you process over $250,000 per year, talk to our team to see if you're
        eligible for custom pricing and processing fees. You can also ask about
        hardware discounts, onboarding and implementation support, technical
        specialists, and account management.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @import '~/style/grid.scss';
  @import '~/style/colors.scss';
  @import '~/style/type.scss';

  .processing {
    margin: 0 auto;
    padding: 0 2rem;

    @include breakpoint(md) {
      margin-top: 9.6rem;
      padding: 0;
      width: grid-width(11);
    }
  }

  .processing__card {
    background: $background-accent;
    border-radius: 1rem;
    padding: 3.2rem 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    @include breakpoint(md) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 4rem;
      padding: 4rem 4.8rem;
    }
  }

  .processing__left {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    flex-shrink: 0;

    @include breakpoint(md) {
      min-width: 0;
      width: grid-width(4.5);
    }
  }

  .processing__headline {
    color: $color-neutral-000;
    margin: 0;
    text-wrap: balance;
  }

  .processing__body {
    margin: 0;

    @include breakpoint(md) {
      width: grid-width(7.5);
      padding-top: 0.2rem;
    }
  }

  .processing__cta {
    font-family: var(--font-cash-sans-medium);
    font-size: 1.6rem;
    font-weight: var(--font-weight-medium);
    line-height: 1.25;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: $button-cta-fill-secondary;
    color: $button-cta-text-secondary;
    border: 1px solid $button-cta-stroke-secondary;
    border-radius: 5rem;
    padding: 1.2rem 2rem;
    cursor: pointer;
    white-space: nowrap;
    width: fit-content;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.85;
    }
  }
</style>
