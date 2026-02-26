<template>
  <section class="three-up">
    <h2 class="three-up__heading type-heading-700-serif">
      Your time is money – so get more of both
    </h2>
    <ul class="three-up__grid">
      <li class="three-up__item">
        <div class="three-up__img-wrap">
          <img
            src="/img/tri-01@3x.png"
            alt=""
            class="three-up__img"
          />
        </div>
        <h3 class="three-up__title type-body-medium">Automate your ops</h3>
        <p class="three-up__desc type-body text-muted">
          Spend more time doing what you love: serving your customers and
          perfecting your craft.
        </p>
      </li>
      <li class="three-up__item">
        <div class="three-up__img-wrap">
          <img
            src="/img/tri-02@3x.png"
            alt=""
            class="three-up__img"
          />
        </div>
        <h3 class="three-up__title type-body-medium">Ditch your contracts</h3>
        <p class="three-up__desc type-body text-muted">
          Own your hardware, and forget hidden fees. Enjoy transparent,
          all-in-one pricing.
        </p>
      </li>
      <li class="three-up__item">
        <div class="three-up__img-wrap">
          <img
            src="/img/tri-05@3x.png"
            alt=""
            class="three-up__img"
          />
        </div>
        <h3 class="three-up__title type-body-medium">Grow on your terms</h3>
        <p class="three-up__desc type-body text-muted">
          Scale with flexible tools designed to fit your business today — and
          wherever you're headed tomorrow.
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @import '~/style/grid.scss';
  @import '~/style/colors.scss';
  @import '~/style/type.scss';

  .three-up {
    margin: 0 auto;
    padding: 4rem 2rem;
    width: 100%;

    @include breakpoint(md) {
      padding: 16rem 0 16rem;
      width: grid-width(11);
    }
  }

  .three-up__heading {
    margin: 0 0 4rem;
    color: $color-neutral-000;
    text-wrap: balance;
    @include breakpoint(md) {
      margin-bottom: 6.4rem;
    }
  }

  .three-up__grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3.2rem 0;

    @include breakpoint(md) {
      grid-template-columns: repeat(3, 1fr);
      gap: 14rem;
    }
  }

  .three-up__item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
  }

  .three-up__img-wrap {
    position: relative;
    width: 100%;
    background: $color-neutral-800;
    overflow: hidden;

    /* Staggered heights to match mockup: left short, middle tall, right medium */
    .three-up__item:nth-child(1) & {
      aspect-ratio: 2 / 1.25;
    }
    .three-up__item:nth-child(2) & {
      aspect-ratio: 21 / 23;
    }
    .three-up__item:nth-child(3) & {
      aspect-ratio: 4 / 3;
    }
  }

  .three-up__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .three-up__title {
    margin: 1rem 0 0;
    color: $color-neutral-000;
  }

  .three-up__desc {
    margin: 0;
  }
</style>
