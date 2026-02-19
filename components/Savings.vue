<template>
  <section class="savings-section">
    <div class="savings-container">
      <div class="savings-layout">
        <h2 class="type-heading-600-serif savings-heading">
          Keep the whole loaf as you grow
        </h2>

        <div class="savings-cards">
          <article
            v-for="(card, i) in cards"
            :key="i"
            class="savings-card"
          >
            <div class="savings-card-image-wrap">
              <img
                :src="card.imageSrc"
                :alt="card.title"
                class="savings-card-image"
              />
            </div>
            <h3 class="type-body savings-card-title">
              {{ card.title }}
            </h3>
            <p class="savings-card-amount">
              <span class="type-heading-500 savings-card-amount-value">{{
                card.savingsFormatted
              }}</span>
              <span class="text-muted savings-card-amount-label"
                >in annual savings<sup>{{ i + 1 }}</sup></span
              >
            </p>
            <p class="type-body-medium savings-card-resources">
              {{ card.resources }}
            </p>
            <p class="type-body text-muted savings-card-desc">
              {{ card.description }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '~/style/grid.scss';
  @import '../style/colors.scss';
  @import '../style/type.scss';

  .savings-section {
    background-color: $color-neutral-1000;
    width: 100%;
    padding: 8rem 0rem 10rem;
  }

  .savings-container {
    border-top: 1px solid $border-muted;
    padding-top: 3rem;
    max-width: 160rem;
    width: grid-width(11);
    margin: 0 auto;
  }

  .savings-layout {
    @include breakpoint(mdl) {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
      align-items: start;
    }
  }

  .savings-heading {
    color: $color-neutral-000;
    margin: 0 0 4rem;
    @include breakpoint(mdl) {
      margin: 0;
    }
  }

  .savings-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8rem;
    @include breakpoint(mdl) {
      grid-template-columns: repeat(2, 1fr);
      gap: 14rem;
    }
  }

  .savings-card {
    display: flex;
    flex-direction: column;
    background-color: $color-neutral-1000;
    overflow: hidden;
  }

  .savings-card-image-wrap {
    margin-bottom: 3.2rem;
    aspect-ratio: 3 / 2;
    overflow: hidden;
  }

  .savings-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .savings-card-title {
    margin-bottom: 1.2rem;
    font-family: var(--font-cash-sans-medium);
  }

  .savings-card-amount {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1.2rem;
  }

  .savings-card-amount-label {
    font-size: 1.4rem;
  }

  .savings-card-amount-value {
    color: $color-neutral-000;
  }

  .savings-card-resources {
    margin-bottom: 1rem;
    color: $color-neutral-000;
  }

  .savings-card-desc {
    flex-grow: 1;
  }

  @media (max-width: 1024px) {
    .savings-cards {
      grid-template-columns: 1fr;
    }

    .savings-section {
      padding: 6rem 3rem 8rem;
    }
  }

  @media (max-width: 768px) {
    .savings-section {
      padding: 4rem 2rem 6rem;
    }

    .savings-heading {
      margin-bottom: 3rem;
    }
  }
</style>

<script setup>
  import { computed } from 'vue'

  const defaultCards = [
    {
      id: 'starting',
      title: 'Getting started',
      imageSrc: '/img/small@3x.png',
      savings: 1872,
      locations: 1,
      kiosks: 2,
      kds: 2,
      description:
        'Take payments in person or online instantly. Simple, powerful tools to help you get your first sale and your hundredth.',
    },
    {
      id: 'scaling',
      title: 'Growing strong',
      imageSrc: '/img/medium@3x.png',
      savings: 2744,
      locations: 2,
      kiosks: 4,
      kds: 4,
      description:
        'Manage multiple locations and complex staff schedules. Scale your operations with software tailored to your industry.',
    },
    {
      id: 'established',
      title: 'Going further',
      imageSrc: '/img/large@3x.png',
      savings: 5616,
      locations: 3,
      kiosks: 6,
      kds: 6,
      description:
        'Connect your entire ecosystem with our robust API. Build custom workflows that handle high-volume transactions.',
    },
  ]

  const cards = computed(() =>
    defaultCards.map((card) => ({
      ...card,
      savingsFormatted: formatCurrency(card.savings),
      resources: `Based on ${card.locations} location${card.locations !== 1 ? 's' : ''}, ${card.kiosks} kiosks, and ${card.kds} KDS`,
    })),
  )

  function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }
</script>
