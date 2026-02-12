<template>
  <div class="container-props-vertical">
    <header>
      <h2 class="type-heading-600-serif">
        Run your business with all your tools — together
      </h2>
    </header>

    <section class="prop-section">
      <div class="prop-section__content">
        <h3 class="type-body-medium">Do more with one system</h3>
        <p class="type-body-100 text-muted">
          Accept card payments and manage sales on a single platform. Your free
          point of sale helps you sell, manage payments, track performance, and
          more, so you can save time on day-to-day operations.
        </p>
      </div>
      <div class="prop-section__media">
        <img
          src="/img/01-2@2x.png"
          alt="Card payment input with Mastercard"
          loading="lazy"
        />
      </div>
    </section>

    <section class="prop-section">
      <div class="prop-section__content">
        <h3 class="type-body-medium">Pay less as you grow</h3>
        <p class="type-body-100 text-muted">
          Your rates adjust automatically based on your monthly sales — no
          contracts or surprises — so the price you pay keeps up with your
          business.
        </p>
      </div>
      <div class="prop-section__media">
        <img
          src="/img/02@2x.png"
          alt="Business owner on laptop and phone"
          loading="lazy"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .container-props-vertical {
    margin: 0 auto;
    max-width: 200rem;
    padding: 4.8rem grid-width(0.5) 0;
    @include breakpoint(mdl) {
      padding-top: 11.2rem;
    }
  }

  header {
    width: grid-width(10);
    @include breakpoint(mdl) {
      width: grid-width(5);
    }
    @include breakpoint(lg) {
      width: grid-width(4);
    }
  }

  .prop-section {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    padding-top: 4.8rem;
    gap: 2.4rem;
    border-top: 1px solid $border-muted;
    @include breakpoint(mdl) {
      flex-direction: row;
      margin-top: 8rem;
      gap: 0;
    }
  }

  .prop-section:nth-of-type(odd) {
    padding-top: 2rem;
    @include breakpoint(mdl) {
      padding-top: 4.8rem;
    }
  }

  .prop-section:nth-of-type(even) {
    margin-bottom: 4.8rem;
    margin-top: 1rem;
    padding-bottom: 8rem;
    border-top: none;
    border-bottom: 1px solid $border-muted;
    @include breakpoint(mdl) {
      margin-top: 4rem;
      margin-bottom: 4.8rem;
      padding-bottom: 12rem;
    }
  }

  .prop-section__content {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    @include breakpoint(mdl) {
      width: grid-width(4);
      margin-right: grid-width(3);
      flex-shrink: 0;
    }
  }

  .prop-section__media {
    flex-shrink: 0;
    @include breakpoint(mdl) {
      width: grid-width(4);
    }
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
</style>
