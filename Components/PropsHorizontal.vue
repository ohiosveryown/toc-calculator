<template>
  <div class="container-props-horizontal">
    <div class="props-horizontal__layout">
      <header class="props-horizontal__heading-col">
        <h2 class="type-heading-600-serif text-heading">
          {{ t('propsHorizontal.heading') }}
        </h2>
      </header>
      <div class="props-horizontal__cards-col">
        <article class="prop-card">
          <div class="prop-card__media">
            <img
              src="/img/03@2x.png"
              alt="Busy commercial kitchen or restaurant"
              loading="lazy"
            />
          </div>
          <h3 class="type-body-medium">{{ t('propsHorizontal.stayFocusedTitle') }}</h3>
          <p class="type-body-100 text-muted">
            {{ t('propsHorizontal.stayFocusedBody') }}
          </p>
        </article>
        <article class="prop-card">
          <div class="prop-card__media">
            <img
              src="/img/04-3@2x.png"
              alt="Invoice and payment options on tablet"
              loading="lazy"
            />
          </div>
          <h3 class="type-body-medium">{{ t('propsHorizontal.reachCustomersTitle') }}</h3>
          <p class="type-body-100 text-muted">
            {{ t('propsHorizontal.reachCustomersBody') }}
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useLocale()
</script>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .container-props-horizontal {
    margin: 0 auto;
    max-width: 200rem;
    padding: 0rem grid-width(0.5) 0;

    @include breakpoint(mdl) {
      padding-top: 0rem;
      padding-bottom: 11.2rem;
    }
  }

  .props-horizontal__layout {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @include breakpoint(mdl) {
      flex-direction: row;
      align-items: flex-start;
      gap: 0;
    }
  }

  .props-horizontal__heading-col {
    flex-shrink: 0;
    width: grid-width(10);
    @include breakpoint(mdl) {
      width: grid-width(3.5);
      margin-right: grid-width(1);
    }
  }

  .props-horizontal__cards-col {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    flex-shrink: 0;
    @include breakpoint(mdl) {
      flex-direction: row;
      width: grid-width(6);
      gap: grid-width(0.5);
    }
    @include breakpoint(lg) {
      width: grid-width(7);
      gap: grid-width(1);
    }
  }

  .prop-card {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    flex: 1 1 0;
    min-width: 0;
  }

  .prop-card__media {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
</style>
