<template>
  <section class="hero-bg">
    <!-- <div
      class="hero-bg__overlay"
      aria-hidden="true"
    /> -->
    <div class="hero-bg__content">
      <span class="hero-bg__kicker type-kicker">MAXIMIZE YOUR MARGINS</span>
      <h1 class="hero-bg__headline type-heading-900">
        Compare total costs for your food & beverage business
      </h1>
      <p class="hero-bg__body type-body text-muted">
        Don't let your profits get toasted. Square Plus includes essential tools
        like online ordering, SMS marketing, and staff management that others
        charge extra for. F&B merchants save on average 24% with
        Square<sup>1</sup>.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '~/style/grid.scss';

  .hero-bg {
    position: relative;
    display: flex;
    justify-content: center;
    height: 64rem;
    margin-top: -7.2rem;
    margin-bottom: 4rem;
    padding-top: 15rem;
    background-image: url('/img/hero-2@2x.png');
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
  }

  //   .hero-bg__overlay {
  //     position: absolute;
  //     inset: 0;
  //     background: linear-gradient(
  //       to bottom,
  //       rgba(0, 0, 0, 0.75) 0%,
  //       rgba(0, 0, 0, 0.5) 45%,
  //       rgba(0, 0, 0, 0.35) 100%
  //     );
  //     pointer-events: none;
  //   }

  .hero-bg__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.4rem;
    max-width: 90vw;
    margin: 0 auto;
  }

  .hero-bg__kicker {
    color: #fff;
    opacity: 0.8;
  }

  .hero-bg__headline {
    color: #fff;
    max-width: 20ch;

    @include breakpoint(md) {
      max-width: 20ch;
    }
  }

  .hero-bg__body {
    margin-top: 1.6rem;
    line-height: 1.5 !important;
    font-size: 1.8rem !important;
    color: rgba(255, 255, 255, 0.88);
    max-width: 60ch;
    line-height: var(--line-height-100);
    @include breakpoint(md) {
      max-width: 80ch;
    }
  }
</style>
