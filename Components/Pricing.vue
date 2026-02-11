<template>
  <section class="pricing">
    <div class="pricing__container">
      <div
        class="pricing__top-border"
        aria-hidden="true"
      ></div>
      <header class="pricing__header">
        <h2 class="pricing__title type-heading-600-serif text-heading">
          Pricing that adapts as your business grows
        </h2>
        <p class="pricing__description type-body-100 text-muted">
          One simple rate for all cards, with automatic discounts as your
          monthly sales increase. No monthly fees. No contracts. No surprises.
        </p>
      </header>

      <div class="pricing__cards">
        <article
          v-for="(tier, i) in tiers"
          :key="tier.name"
          class="pricing-card"
        >
          <h3 class="pricing-card__tier type-subheading-300">
            {{ tier.name }}
          </h3>
          <div
            class="pricing-card__separator"
            aria-hidden="true"
          />
          <p class="pricing-card__range type-heading-500 text-heading">
            {{ tier.range }}
          </p>
          <Button
            :variant="tier.ctaVariant"
            class="pricing-card__cta"
          >
            {{ tier.ctaLabel }}
          </Button>
          <div class="pricing-card__fees">
            <span class="pricing-card__fees-label type-body-medium"
              >Processing fees:</span
            >
            <span class="pricing-card__fees-value type-body-100 text-muted">{{
              tier.fee
            }}</span>
          </div>
        </article>
      </div>

      <footer class="pricing__footer">
        <h4 class="pricing__footer-title type-body-medium text-heading">
          Direct and transparent pricing
        </h4>
        <p class="pricing__footer-disclaimer type-body-100 text-muted">
          Your processing rate automatically adjusts based on your monthly sales
          volume. Discounted rates apply starting the following month once a
          tier is reached. The money will be settled the next business day
          through the linked bank account<sup>1</sup>.
        </p>
      </footer>
    </div>
  </section>
</template>

<script setup>
  import Button from '@/components/Button.vue'

  const tiers = [
    {
      name: 'Tier 1',
      range: 'Less than $30,000',
      ctaLabel: 'Try free for 30 days',
      ctaVariant: 'secondary',
      fee: '3.45% + IVA',
    },
    {
      name: 'Tier 2',
      range: '$30,000 - $100,000',
      ctaLabel: 'Try free for 30 days',
      ctaVariant: 'primary',
      fee: '3.20% + IVA',
    },
    {
      name: 'Tier 3',
      range: '$100,000 - $300,000',
      ctaLabel: 'Try free for 30 days',
      ctaVariant: 'secondary',
      fee: '2.99% + IVA',
    },
    {
      name: 'Tier 4',
      range: '$300,000 or More',
      ctaLabel: 'Try free for 30 days',
      ctaVariant: 'secondary',
      fee: '2.79% + IVA',
    },
  ]
</script>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .pricing {
    background-color: $color-neutral-900;
    padding: 6rem 0 8rem;

    @include breakpoint(mdl) {
      padding-top: 8rem;
      padding-bottom: 11.2rem;
    }
  }

  .pricing__container {
    margin: 0 auto;
    padding: 0 grid-width(0.5);
    max-width: 100%;
  }

  .pricing__top-border {
    border-top: 1px solid $border-muted;
    margin-bottom: 4rem;

    @include breakpoint(mdl) {
      margin-bottom: 5.6rem;
    }
  }

  .pricing__header {
    margin-bottom: 4rem;
    max-width: grid-width(10);

    @include breakpoint(mdl) {
      margin-bottom: 5.6rem;
      max-width: grid-width(4);
    }
  }

  .pricing__title {
    margin: 0 0 1.6rem;
  }

  .pricing__description {
    margin: 0;
  }

  .pricing__cards {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
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
    border-radius: 2rem;
    flex: 1 1 0;

    // @include breakpoint(md) {
    //   width: grid-width(6, true);
    //   flex: 0 0 grid-width(6, true);
    // }

    // @include breakpoint(mdl) {
    //   width: grid-width(3, true);
    //   flex: 0 0 grid-width(3, true);
    // }
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

  .pricing-card__cta {
    margin-bottom: 3.2rem;
    width: 100%;
    justify-content: center;
  }

  .pricing-card__fees {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    margin-top: auto;
  }

  .pricing__footer {
    max-width: grid-width(10);

    @include breakpoint(mdl) {
      max-width: grid-width(8);
    }
  }

  .pricing__footer-title {
    margin: 0 0 1.2rem;
  }

  .pricing__footer-disclaimer {
    margin: 0;
    max-width: 72ch;

    sup {
      font-size: 0.75em;
      vertical-align: super;
      line-height: 0;
    }
  }
</style>
