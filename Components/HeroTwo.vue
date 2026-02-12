<template>
  <section class="hero-two">
    <div class="hero-two__inner">
      <!-- Surrounding images (positioned around center) -->
      <div class="hero-two__images">
        <div class="hero-two__img hero-two__img--top-left">
          <img
            src="/img/hero/fig-01@3x.png"
            alt="Cafe barista"
            loading="eager"
          />
        </div>

        <img
          src="/img/hero/glpyh-02@3x.png"
          alt=""
          class="glyph gracias"
        />

        <div class="hero-two__img hero-two__img--top-right">
          <img
            src="/img/hero/fig-04@3x.png"
            alt="Retail display"
            loading="eager"
          />
        </div>

        <img
          src="/img/hero/glpyh-01@3x.png"
          alt=""
          class="glyph prices"
        />

        <div class="hero-two__img hero-two__img--bottom-left">
          <img
            src="/img/hero/fig-02@3x.png"
            alt="Art and commerce"
            loading="eager"
          />
        </div>
        <div class="hero-two__img hero-two__img--bottom-right">
          <img
            src="/img/hero/fig-03@3x.png"
            alt="Restaurant team"
            loading="eager"
          />
        </div>
      </div>

      <!-- Central content -->
      <div class="hero-two__center">
        <h1 class="hero-two__title type-hero">
          Grow with a modern point of sale – and payments that perfectly
          integrate.
        </h1>
        <div class="hero-two__actions">
          <Button variant="primary-light">Get started</Button>
          <Button variant="primary">Contact sales</Button>
        </div>
      </div>

      <!-- Value props strip -->
      <ul class="hero-two__value-props">
        <li class="hero-two__value-prop">
          <span class="hero-two__value-prop-icon">
            <IconCreditCard />
          </span>
          <span class="hero-two__value-prop-text"
            >Payments and point of sale, unified</span
          >
        </li>
        <li class="hero-two__value-prop">
          <span class="hero-two__value-prop-icon">
            <IconLineChart />
          </span>
          <span class="hero-two__value-prop-text"
            >Pricing that adjusts as your business grows</span
          >
        </li>
        <li class="hero-two__value-prop">
          <span class="hero-two__value-prop-icon">
            <IconPieChart />
          </span>
          <span class="hero-two__value-prop-text"
            >Free point of sale, inventory, and reporting tools</span
          >
        </li>
        <li class="hero-two__value-prop">
          <span class="hero-two__value-prop-icon">
            <IconReceipt />
          </span>
          <span class="hero-two__value-prop-text"
            >Sell in person or online with checkout links</span
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .glyph {
    position: absolute;
    width: 6.4rem;
    height: auto;
    object-fit: contain;
  }

  .hero-two {
    position: relative;
    background-color: $color-neutral-000;
    min-height: 90dvh;
    overflow: hidden;

    @include breakpoint(mdl) {
      min-height: 90rem;
    }
  }

  .hero-two__inner {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 grid-width(0.5);
    min-height: inherit;
  }

  .hero-two__images {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .hero-two__img {
    position: absolute;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .hero-two__img--top-left {
    width: 14rem;
    height: 14rem;
    top: 4rem;
    left: grid-width(0.5);

    @include breakpoint(md) {
      width: 18rem;
      height: 18rem;
      top: 5rem;
    }

    @include breakpoint(mdl) {
      width: 41rem;
      height: 24rem;
      top: 6rem;
      left: grid-width(0.32);
    }
  }

  .hero-two__img--top-right {
    width: 12rem;
    height: 10rem;
    top: 6rem;
    right: grid-width(0.5);

    @include breakpoint(md) {
      width: 16rem;
      height: 13rem;
      top: 5rem;
    }

    @include breakpoint(mdl) {
      width: 21rem;
      height: 12.4rem;
      top: 6.4rem;
      right: grid-width(2);
    }
  }

  .gracias {
    z-index: var(--z1);
    right: 0;
    top: 0;
    @include breakpoint(mdl) {
      top: 3.2rem;
      right: grid-width(1.75);
    }
  }

  .hero-two__gracias {
    position: absolute;
    top: -1.2rem;
    left: 0.4rem;
    font-family: var(--font-cash-mono);
    font-size: var(--font-size-auxiliary);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-wide);
    color: $color-neutral-1000;
    white-space: nowrap;
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
    opacity: 0.9;
    z-index: 1;
  }

  .hero-two__img--bottom-left {
    width: 14rem;
    height: 14rem;
    bottom: 12rem;
    left: grid-width(0.5);

    @include breakpoint(md) {
      width: 18rem;
      height: 18rem;
      bottom: 14rem;
    }

    @include breakpoint(mdl) {
      width: 16rem;
      height: 21.8rem;
      bottom: 16rem;
      left: grid-width(2);
    }
  }

  .prices {
    z-index: var(--z1);
    left: 0;
    bottom: 0;
    @include breakpoint(mdl) {
      bottom: 12.88rem;
      left: grid-width(1.8);
    }
  }

  .hero-two__prices {
    position: absolute;
    bottom: -0.8rem;
    left: 0.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem;
    font-family: var(--font-cash-mono);
    font-size: 1.2rem;
    color: $color-neutral-1000;
    opacity: 0.95;
    z-index: 1;

    span {
      display: inline-block;
      padding: 0.2rem 0.4rem;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 0.2rem;
    }
  }

  .hero-two__img--bottom-right {
    width: 16rem;
    height: 16rem;
    bottom: 12rem;
    right: grid-width(0.5);

    @include breakpoint(md) {
      width: 20rem;
      height: 20rem;
      bottom: 14rem;
    }

    @include breakpoint(mdl) {
      width: 28rem;
      height: 36rem;
      bottom: 16rem;
      right: grid-width(0.25);
    }
  }

  .hero-two__center {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 18rem 0 2rem;
    margin: 0 auto;
    gap: 2.3rem;

    @include breakpoint(mdl) {
      //   padding-top: 12rem;
      //   padding-bottom: 3.2rem;
      padding: auto 0;
      transform: translateY(5.6rem);
    }
  }

  .hero-two__title {
    margin: 0;
    color: $color-neutral-1000;
    max-width: 14ch;

    @include breakpoint(mdl) {
      max-width: none;
      width: grid-width(6.75);
    }
  }

  .hero-two__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 2rem;
  }

  .hero-two__value-props {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-top: auto;
    margin-bottom: 4rem;
    padding: 0 0.4rem;

    @include breakpoint(md) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 5rem;
    }

    @include breakpoint(mdl) {
      margin-bottom: 4rem;
      justify-content: space-between;
    }
  }

  .hero-two__value-prop {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .hero-two__value-prop-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-neutral-1000;
    opacity: 0.95;
  }

  .hero-two__value-prop-text {
    font-family: var(--font-cash-sans);
    font-size: var(--font-size-100);
    line-height: var(--line-height-100);
    color: $color-neutral-1000;
    opacity: 0.95;
  }

  .btn {
    font-size: 1.8rem !important;
    padding: 1.5rem 2.4rem !important;
  }
</style>
