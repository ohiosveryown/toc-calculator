<template>
  <div class="app">
    <Hero />
    <PropsVertical />
    <PropsHorizontal />
    <Hardware />
    <Testomonial
      image-src="/img/quote.png"
      quote="Trusted by millions. Square powers payments and point of sale for businesses of all sizes in Mexico and around the world."
    />
    <Pricing />
    <FAQ />

    <!-- <header class="section-header">
      <h1 class="type-hero">
        Grow with a modern point of sale — and payments that perfectly
        integrate.
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

    <section class="features">
      <h2 class="features__heading">
        Run your business with all your tools – together
      </h2>
      <div class="features__list">
        <article class="features__item">
          <div class="features__content">
            <h3 class="features__title">Do more with one system</h3>
            <p class="features__body">
              Accept card payments and manage sales on a single platform. Your
              free point of sale helps you sell, manage payments, track
              performance, and more, so you can save time on day-to-day
              operations.
            </p>
          </div>
          <div class="features__media features__media--image">
            <img
              src="/cc-img@3x.webp"
              alt=""
              width="640"
              height="360"
              loading="lazy"
            />
          </div>
        </article>
        <div
          class="features__divider"
          aria-hidden="true"
        ></div>
        <article class="features__item">
          <div class="features__content">
            <h3 class="features__title">Pay less as you grow</h3>
            <p class="features__body">
              Your rates adjust automatically based on your monthly sales — no
              contracts or surprises — so the price you pay keeps up with your
              business.
            </p>
          </div>
          <div class="features__media features__media--image">
            <img
              src="/1143_JeJu_0011@2x.webp"
              alt=""
              width="640"
              height="360"
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </section>

    <section class="sub-features">
      <div class="sub-features__inner">
        <h2 class="sub-features__heading">
          Solutions designed to boost your business.
        </h2>
        <article class="sub-features__card">
          <div class="sub-features__media">
            <img
              src="/1143_JeJu_0011@2x.webp"
              alt=""
              width="640"
              height="360"
              loading="lazy"
            />
          </div>
          <h3 class="sub-features__title">Stay focused on what matters</h3>
          <p class="sub-features__body">
            Cut down on steps and mistakes with software designed to be easy to
            use and intuitive to learn. With one system controlling your
            business, you'll get to spend more time with your customers.
          </p>
        </article>
        <article class="sub-features__card">
          <div class="sub-features__media">
            <img
              src="/cc-img@3x.webp"
              alt=""
              width="640"
              height="360"
              loading="lazy"
            />
          </div>
          <h3 class="sub-features__title">Reach customers wherever they are</h3>
          <p class="sub-features__body">
            Accept payments from anywhere in the country by sending customers a
            secure payment link.
          </p>
        </article>
      </div>
    </section>

    -->
  </div>
</template>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .app {
    margin: 0 auto;
  }

  // -------------------------------------------------------------------------
  // section.features — 12-col grid: left 5 cols, right 6 cols (gutter col 6)
  // -------------------------------------------------------------------------
  .features {
    // padding: 4rem 1.6rem 6rem;

    @include breakpoint(mdl) {
      margin: 0 auto;
      // max-width: 200rem;
      padding-left: grid-width(0.5);
      padding-right: grid-width(0.5);
      padding-top: 8rem;
      padding-bottom: 10rem;
    }
  }

  .features__heading {
    margin: 0 0 4rem;
    font-family: var(--font-exact-block);
    font-size: var(--font-size-600);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-600);
    letter-spacing: var(--letter-spacing-tight-3);
    color: $color-neutral-000;

    @include breakpoint(mdl) {
      max-width: 20ch;
      font-size: var(--font-size-700);
      line-height: var(--line-height-700);
      letter-spacing: var(--letter-spacing-tight-4);
      margin-bottom: 6rem;
    }
  }

  .features__list {
    display: flex;
    flex-direction: column;
    gap: 0;
    border-top: 1px solid $border-muted;
    padding-top: 4rem;
  }

  .features__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
    gap: 2rem 0;
  }

  .features__content {
    @include breakpoint(mdl) {
      width: grid-width(3.5);
    }
  }

  .features__title {
    margin: 0 0 1.2rem;
    font-family: var(--font-cash-sans-medium);
    font-size: var(--font-size-100);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-300);
    letter-spacing: var(--letter-spacing-tight-1);
    color: $color-neutral-000;
  }

  .features__body {
    margin: 0;
    font-family: var(--font-cash-sans);
    font-size: var(--font-size-100);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-100);
    color: $text-body-muted;
  }

  .features__media {
    overflow: hidden;
    flex-shrink: 0;

    @include breakpoint(mdl) {
      margin-right: grid-width(2);
      width: grid-width(4);
    }
  }

  .features__media--image {
    aspect-ratio: 16 / 9;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .features__media--placeholder {
    background: #c4b8a8;
  }

  .features__divider {
    height: 1px;
    margin: 3.2rem 0;
    background: $border-muted;

    @include breakpoint(mdl) {
      margin: 4.8rem 0;
    }
  }

  // -------------------------------------------------------------------------
  // section.sub-features — 12-col: heading grid-width(3), cards grid-width(4) each
  // -------------------------------------------------------------------------
  .sub-features {
    @include breakpoint(mdl) {
      padding: 4rem 1.6rem 6rem;
      width: grid-width(12);
      padding-left: grid-width(0.5);
      padding-right: grid-width(0.5);
      padding-top: 8rem;
      padding-bottom: 10rem;
    }
  }

  .sub-features__inner {
    border-top: 1px solid $border-muted;
    padding-top: 4rem;
    @include breakpoint(mdl) {
      display: grid;
      grid-template-columns: grid-width(3) grid-width(3) grid-width(3);
      column-gap: grid-width(1);
      align-items: start;
    }
  }

  .sub-features__heading {
    margin: 0 0 3.2rem;
    font-family: var(--font-exact-block);
    font-size: var(--font-size-600);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-600);
    letter-spacing: var(--letter-spacing-tight-3);
    color: $color-neutral-000;

    @include breakpoint(mdl) {
      font-size: var(--font-size-700);
      line-height: var(--line-height-700);
      letter-spacing: var(--letter-spacing-tight-4);
      margin-bottom: 0;
    }
  }

  .sub-features__card {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;

    @include breakpoint(mdl) {
      margin-bottom: 0;
      margin-right: grid-width(1);
    }
  }

  .sub-features__media {
    width: 100%;
    aspect-ratio: 3 / 2;
    overflow: hidden;
    margin-bottom: 1.6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .sub-features__title {
    margin: 0 0 1.2rem;
    font-family: var(--font-cash-sans-medium);
    font-size: var(--font-size-100);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-300);
    letter-spacing: var(--letter-spacing-tight-1);
    color: $color-neutral-000;
  }

  .sub-features__body {
    margin: 0;
    font-family: var(--font-cash-sans);
    font-size: var(--font-size-100);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-100);
    color: $text-body-muted;
  }
</style>
