<template>
  <section class="pricing">
    <div class="pricing__container">
      <div
        class="pricing__top-border"
        aria-hidden="true"
      />
      <header class="pricing__header">
        <h2 class="pricing__title type-heading-600-serif text-heading">
          Pricing that adapts as your business grows
        </h2>
        <p class="pricing__description type-body-100 text-muted">
          One simple rate for all cards, with automatic discounts as your
          monthly sales increase. No monthly fees. No contracts. No surprises.
        </p>
        <Button
          variant="primary"
          class="pricing__cta"
        >
          Get started
        </Button>
      </header>

      <div class="pricing__cards">
        <article
          v-for="(tier, i) in tiers"
          :key="i"
          class="pricing-card"
        >
          <h3 class="pricing-card__tier type-subheading-300 text-heading">
            {{ tier.name }}
          </h3>
          <div
            class="pricing-card__separator"
            aria-hidden="true"
          />
          <p class="pricing-card__range type-heading-500 text-heading">
            {{ tier.range }}
          </p>
          <div class="pricing-card__fees">
            <span class="pricing-card__fees-label type-body-medium text-heading"
              >Processing fees:</span
            >
            <span class="pricing-card__fees-value type-body-100 text-muted">{{
              tier.fee
            }}</span>
          </div>
        </article>
      </div>

      <footer class="pricing__footer">
        <h4 class="pricing__footer-title type-body-100-medium">
          Direct and transparent pricing
        </h4>
        <p class="pricing__footer-disclaimer type-body-100 text-muted">
          Your processing rate automatically adjusts based on your monthly sales
          volume. Discounted rates apply starting the following month once a
          tier is reached. <br />The money will be settled the next business day
          through the linked bank account<sup>1</sup>.
        </p>
      </footer>
    </div>
  </section>
</template>

<script setup>
  import Button from '@/components/Button.vue'

  const tiers = [
    { name: 'Tier 1', range: 'Less than $30,000', fee: '3.45% + IVA' },
    { name: 'Tier 2', range: '$30,000 - $100,000', fee: '3.20% + IVA' },
    { name: 'Tier 3', range: '$100,000 - $300,000', fee: '2.99% + IVA' },
    { name: 'Tier 3', range: '$300,000 or More', fee: '2.79% + IVA' },
  ]
</script>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .pricing {
    background-color: $color-neutral-900;
    padding: 0;

    @include breakpoint(mdl) {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }

  .pricing__container {
    margin: 0 auto;
    max-width: 200rem;
    padding: 0 grid-width(0.5);
  }

  .pricing__top-border {
    // border-top: 1px solid $border-muted;
    margin-bottom: 4rem;
  }

  .pricing__header {
    margin-bottom: 4rem;
    max-width: grid-width(10);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @include breakpoint(mdl) {
      margin-bottom: 5.6rem;
      max-width: grid-width(6);
    }
  }

  .pricing__title {
    margin: 0 0 1.6rem;
  }

  .pricing__description {
    margin: 0 0 2.4rem;
  }

  .pricing__cta {
    flex-shrink: 0;
  }

  .pricing__cards {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 3.2rem;

    @include breakpoint(md) {
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2rem;
      margin-bottom: 4rem;
    }
  }

  .pricing-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4rem 2.4rem;
    background-color: $color-neutral-1000;
    border-radius: 1rem;
    flex: 1 1 0;
  }

  .pricing-card__tier {
    margin: 0 0 2.4rem;
  }

  .pricing-card__separator {
    width: 100%;
    height: 1px;
    margin-bottom: 2.8rem;
    background-color: $border-muted;
  }

  .pricing-card__range {
    margin: 0 0 2.8rem;
    max-width: 12ch;
    line-height: 1.2;
  }

  .pricing-card__fees {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    margin-top: auto;
  }

  .pricing__footer {
    padding: 0 0.8rem;
    max-width: grid-width(12);

    @include breakpoint(mdl) {
      padding: 0;
      max-width: grid-width(12);
    }
  }

  .pricing__footer-title {
    margin: 0 0 1.2rem;
  }

  .pricing__footer-disclaimer {
    margin: 0;
    // max-width: 72ch;

    sup {
      font-size: 0.75em;
      vertical-align: super;
      line-height: 0;
    }
  }
</style>
