<template>
  <section class="testimonial-section">
    <div class="testimonial-container">
      <div class="testimonial-content">
        <p class="type-auxiliary text-muted eyebrow">Hear from sellers</p>

        <div class="testimonial-main">
          <div class="testimonial-quote-wrapper">
            <blockquote class="type-heading-600-serif testimonial-quote">
              {{ selectedQuote }}
            </blockquote>
          </div>

          <div class="testimonial-attribution">
            <div class="testimonial-image">
              <img
                src="/img/fine@3x.png"
                alt="Ryan from FineDetailing"
                class="avatar"
              />
            </div>
            <div class="testimonial-author">
              <p class="author-name">Ryan</p>
              <p class="author-role">Owner</p>
              <p class="author-company">FineDetailing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '../style/colors.scss';
  @import '../style/type.scss';
  @import '@/style/grid.scss';

  .testimonial-section {
    background-color: $color-neutral-1000;
    display: flex;
    align-items: center;
    padding: 12rem 6rem 18rem;
    width: 100%;
  }

  .testimonial-container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }

  .testimonial-content {
    border-top: 1px solid $border-muted;
    padding-top: 6.4rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 60px;
  }

  .eyebrow {
    width: grid-width(4);
  }

  .testimonial-main {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: grid-width(8);
  }

  .testimonial-quote-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .testimonial-quote {
    color: $color-neutral-000;
    white-space: pre-wrap;
    margin: 0;
    width: 100%;
  }

  .testimonial-attribution {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .testimonial-image {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;

    .avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .testimonial-author {
    font-family: var(--font-cash-sans-medium);
    font-weight: var(--font-weight-medium);
    font-size: 1.4rem;
    line-height: 2.1rem;
    letter-spacing: 0.28px;
    color: $color-neutral-000;

    p {
      margin: 0;
    }

    .author-name {
      font-weight: var(--font-weight-medium);
    }

    .author-role {
      font-weight: var(--font-weight-regular);
    }

    .author-company {
      font-weight: var(--font-weight-regular);
    }
  }

  // Responsive adjustments
  @media (max-width: 1200px) {
    .testimonial-content {
      flex-direction: column;
      gap: 30px;
    }

    .eyebrow {
      width: 100%;
    }

    .testimonial-main {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .testimonial-section {
      padding: 60px 30px;
    }

    .testimonial-content {
      padding-top: 20px;
      gap: 20px;
    }

    .testimonial-main {
      gap: 30px;
    }

    .testimonial-attribution {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>

<script setup>
  import { ref } from 'vue'

  const quotes = [
    'It has everything that I need just in one package...I like simplicity...I like that this is complete for my business.',
    "The bundle is killer. And just to know my monthly amount...it's really nice to not have 15 different bills come\u00a0in.",
  ]

  const selectedQuote = ref(quotes[Math.floor(Math.random() * quotes.length)])
</script>
