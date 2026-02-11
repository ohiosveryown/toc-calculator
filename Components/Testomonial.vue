<template>
  <section class="testimonial">
    <div class="testimonial__layout">
      <div class="testimonial__media-col">
        <img
          :src="imageSrc"
          alt=""
          loading="lazy"
        />
      </div>
      <div class="testimonial__content-col">
        <p class="testimonial__quote type-heading-600-serif text-heading">
          {{ quote }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
  defineProps({
    quote: {
      type: String,
      default:
        'Trusted by millions. Square powers payments and point of sale for businesses of all sizes in Mexico and around the world.',
    },
    imageSrc: {
      type: String,
      default: '/img/testimonial@2x.jpg',
    },
  })
</script>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .testimonial {
    background-color: $background-accent;
    padding: 6rem grid-width(0.5);

    @include breakpoint(mdl) {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }

  .testimonial__layout {
    display: flex;
    flex-direction: column;
    gap: 0;

    @include breakpoint(mdl) {
      flex-direction: row;
      align-items: stretch;
      gap: $gutter;
      max-width: 100%;
    }
  }

  .testimonial__media-col {
    width: 100%;
    flex-shrink: 0;

    @include breakpoint(mdl) {
      width: grid-width(6, true);
    }

    img {
      width: 100%;
      height: auto;
      min-height: 28rem;
      display: block;
      object-fit: cover;
      object-position: center;

      @include breakpoint(mdl) {
        min-height: 40rem;
        height: 100%;
      }
    }
  }

  .testimonial__content-col {
    display: flex;
    align-items: center;
    padding: 4rem 0 0;

    @include breakpoint(mdl) {
      width: grid-width(6, true);
      padding: 0 grid-width(0.5) 0 grid-width(0.25);
    }
  }

  .testimonial__quote {
    margin: 0;
    max-width: 42ch;
  }
</style>
