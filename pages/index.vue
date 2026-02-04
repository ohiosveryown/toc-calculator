<template>
  <div class="app">
    <header class="header-hero">
      <span class="type-kicker">Eyebrow</span>
      <h1 class="type-hero">Cost comparison for food & beverage businesses</h1>
      <h2 class="type-body">
        Don't let your profits get toasted. Square Plus includes essential tools
        like online ordering, loyalty, and staff management that others charge
        extra for. On average, total costs for F&B merchants are 24% lower with
        Square.
      </h2>
    </header>

    <section class="pricing-cards">
      <div class="pricing-cards-container">
        <header class="header-pricing-cards">
          <h3 class="type-heading-500-serif">Customize you comparison</h3>
        </header>

        <ul class="cards-list">
          <!-- Square Card -->
          <li class="pricing-card">
            <div class="card-header">
              <h4 class="type-subheading-300">Square</h4>
            </div>

            <div class="card-price">
              <p class="type-heading-700">$114</p>
              <p class="type-body text-muted">per month • Square Plus</p>
            </div>

            <div class="card-features">
              <div class="features-header">
                <p class="type-body-medium">Included features:</p>
              </div>

              <div class="features-list">
                <div class="feature-row">
                  <span class="type-body text-muted">SMS marketing</span>
                  <span class="type-body-medium">Standard</span>
                </div>
                <div class="feature-row">
                  <span class="type-body text-muted">Online ordering site</span>
                  <span class="type-body-medium">Standard</span>
                </div>
                <div class="feature-row">
                  <span class="type-body text-muted">Loyalty program</span>
                  <span class="type-body-medium">Standard</span>
                </div>
                <a
                  href="#"
                  class="feature-link type-body-medium"
                  >See all features</a
                >
              </div>
            </div>
          </li>

          <!-- Toast Card -->
          <li class="pricing-card">
            <div class="card-header">
              <h4 class="type-subheading-300">Toast</h4>
            </div>

            <div class="card-price">
              <p class="type-heading-700">$424</p>
              <p class="type-body text-muted">
                per month • Toast equivalent plan<sup class="card-sup">2</sup>
              </p>
            </div>

            <div class="card-features">
              <div class="features-header">
                <p class="type-body-medium">Additional costs:</p>
              </div>

              <div class="features-list">
                <div class="feature-row">
                  <span class="type-body text-muted">SMS marketing</span>
                  <span class="type-body-medium">$50/month</span>
                </div>
                <div class="feature-row">
                  <span class="type-body text-muted">Online ordering site</span>
                  <span class="type-body-medium">$60/month</span>
                </div>
                <div class="feature-row">
                  <span class="type-body text-muted">Loyalty program</span>
                  <span class="type-body-medium">$45/month</span>
                </div>
              </div>
            </div>
          </li>

          <!-- Savings Card -->
          <li class="pricing-card savings-card">
            <div class="card-header">
              <h4 class="type-subheading-300">No more crumbs. Save: 73%.</h4>
            </div>

            <div class="card-savings">
              <div class="savings-item">
                <p class="type-heading-700">$3,720</p>
                <p class="type-body text-muted">savings per year</p>
              </div>
              <div class="savings-item">
                <p class="type-heading-700">$310</p>
                <p class="type-body text-muted">savings per month</p>
              </div>
            </div>

            <div class="card-cta">
              <div class="cta-header">
                <p class="type-body-medium">
                  Don't let your profits get toasted.
                </p>
              </div>

              <div class="cta-content">
                <p class="type-body text-muted">
                  Choose a platform that earns your business daily with
                  transparent pricing and no contracts.
                </p>
                <button class="btn-primary type-body-medium">
                  Get started with Square Plus
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .app {
    margin: 0 auto;
  }

  .header-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin: 6.4rem auto 8.8rem;
    max-width: 160rem;

    h1,
    h2 {
      text-align: center;
    }

    h2 {
      max-width: 88ch;
      color: $text-body-muted;
    }

    @include breakpoint(md) {
      width: grid-width(8);
    }
  }

  .pricing-cards {
    padding: 3.2rem 0 6.4rem;
    width: 100%;
    background: $color-neutral-900;
  }

  .pricing-cards-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: 0 auto;
    padding: 0 10.8rem;
    max-width: 160rem;

    @include breakpoint(md) {
      //   border: 1px solid red;
      padding: 0 2rem;
    }

    @include breakpoint(mdl) {
      //   border: 1px solid blue;
      width: grid-width(10);
    }
  }

  .header-pricing-cards {
    padding-top: 1.6rem;

    h3 {
      color: $color-neutral-000;
    }
  }

  // Cards List
  .cards-list {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;

    @include breakpoint(md) {
      flex-direction: row;
    }
  }

  .pricing-card {
    flex: 1;
    background: $color-neutral-1000;
    border-radius: 1rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    &.savings-card {
      background: $color-neutral-900;
      border: 1px solid $border-muted;
    }
  }

  .card-header {
    padding-bottom: 3rem;
    border-bottom: 1px solid $border-muted;
    position: relative;

    h4 {
      color: $color-neutral-000;
    }
  }

  .card-sup {
    font-family: var(--font-cash-sans);
    font-size: 1.2rem;
    color: $color-neutral-300;
    font-style: normal;
    font-weight: 400;
    vertical-align: super;
    line-height: 0;
  }

  .card-price {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p:first-child {
      color: $color-neutral-000;
    }
  }

  .card-features {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .features-header {
    padding-bottom: 2rem;
    border-bottom: 1px solid $border-muted;

    p {
      color: $color-neutral-000;
    }
  }

  .features-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
  }

  .feature-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    span:first-child {
      flex: 1;
    }

    span:last-child {
      flex: 1;
      text-align: right;
      color: $color-neutral-000;
    }
  }

  .feature-link {
    padding-top: 1.6rem;
    padding-bottom: 0.2rem;
    color: $color-neutral-000;
    text-decoration: none;
    width: fit-content;
    cursor: pointer;
    display: inline-flex;
    gap: 0.4rem;
    align-items: center;
    position: relative;
    border-bottom: 1px solid transparent;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: $border-base;
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(0);
    }
  }

  // Savings Card Specific
  .card-savings {
    display: flex;
    gap: 2rem;
  }

  .savings-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p:first-child {
      color: $color-neutral-000;
    }
  }

  .card-cta {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .cta-header {
    padding-bottom: 2rem;
    border-bottom: 1px solid $border-muted;

    p {
      color: $color-neutral-000;
    }
  }

  .cta-content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .btn-primary {
    background: $button-cta-fill-primary;
    color: $button-cta-text-primary;
    border: none;
    border-radius: 5rem;
    width: fit-content;
    padding: 1rem 2rem;
    cursor: pointer;
  }
</style>
