<template>
  <header class="section-header">
    <h1 class="type-hero">
      Grow with a modern point of sale — and payments that perfectly integrate.
    </h1>
    <div class="section-header__actions">
      <Button variant="primary-light">Get started</Button>
      <Button variant="primary">Contact sales</Button>
    </div>

    <ul class="section-header__value-props">
      <li class="section-header__value-prop">
        <span class="section-header__value-prop-icon">
          <IconCreditCard />
        </span>
        <span class="section-header__value-prop-text"
          >Payments and point of sale, unified</span
        >
      </li>
      <li class="section-header__value-prop">
        <span class="section-header__value-prop-icon">
          <IconLineChart />
        </span>
        <span class="section-header__value-prop-text"
          >Pricing that adjusts as your business grows</span
        >
      </li>
      <li class="section-header__value-prop">
        <span class="section-header__value-prop-icon">
          <IconPieChart />
        </span>
        <span class="section-header__value-prop-text"
          >Free point of sale, inventory, and reporting tools</span
        >
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .section-header {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-image: url('/1143_JeJu_0011@2x.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;

    @include breakpoint(mdl) {
      min-height: 85rem;
      padding: 0rem grid-width(0.5);
      h1 {
        max-width: 14ch;
        padding: 12rem 0 3.2rem;
      }
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.35) 0%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(0, 0, 0, 0.75) 100%
      );
      z-index: 0;
    }

    .type-hero,
    .section-header__actions,
    .section-header__value-props {
      position: relative;
      z-index: 1;
    }

    .type-hero {
      color: $text-heading-base;
    }
  }

  .section-header__value-props {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin: auto 0 8rem 0.8rem;
  }

  .section-header__value-prop {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .section-header__value-prop-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-neutral-1000;
    opacity: 0.95;
  }

  .section-header__value-prop-text {
    font-family: var(--font-cash-sans);
    font-size: var(--font-size-100);
    line-height: var(--line-height-100);
    color: $color-neutral-1000;
    opacity: 0.95;
  }

  .section-header__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin-top: 2rem;
  }
</style>
