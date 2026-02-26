<template>
  <div class="resources">
    <h2 class="resources__heading type-heading-700-serif">
      Read how businesses like yours use Square to grow their business and serve
      their neighborhoods
    </h2>
    <ul class="resources__list">
      <li class="resources__item">
        <img
          src="/img/luckybean.png"
          alt="Taziki's Mediterranean Café"
          class="resources__img"
        />
        <h3 class="resources__headline type-body-medium">
          How Lucky Bean Uses the New Square Pricing Bundle To Grow
        </h3>
      </li>
      <li class="resources__item">
        <img
          src="/img/saucy.jpeg"
          alt="Ggiata deli"
          class="resources__img"
        />
        <h3 class="resources__headline type-body-medium">
          Why Saucy Brew Works Switched To Square for Savings and Flexibility
        </h3>
      </li>
      <li class="resources__item">
        <img
          src="/img/blind-tiger.jpeg"
          alt="The Kebab Shop"
          class="resources__img"
        />
        <h3 class="resources__headline type-body-medium">
          Switching From Unstable Systems to a Reliable Partnership: Blind
          Tiger's Journey Back To Square
        </h3>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/style/grid.scss';
  @import '~/style/colors.scss';
  @import '~/style/type.scss';

  .resources {
    margin: 0 auto;
    padding: 4rem 2rem;
    width: 100%;

    @include breakpoint(md) {
      padding: 16rem 0 16rem;
      width: grid-width(11);
    }
  }

  .resources__heading {
    margin: 0 0 4rem;
    color: $color-neutral-000;
    text-wrap: balance;
    @include breakpoint(md) {
      margin-bottom: 6.4rem;
      max-width: 40ch;
    }
  }

  .resources__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3.2rem 0;

    @include breakpoint(md) {
      grid-template-columns: repeat(3, 1fr);
      gap: 3.2rem 2.4rem;
    }
  }

  .resources__item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
  }

  .resources__img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    background: $color-neutral-800;
  }

  .resources__headline {
    margin: 0;
    color: $color-neutral-000;
  }
</style>

<script setup lang="ts"></script>
