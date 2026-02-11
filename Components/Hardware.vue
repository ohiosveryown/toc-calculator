<template>
  <section class="hardware">
    <div class="hardware__inner">
      <h2 class="hardware__heading">
        Start taking payments with Square, powered by dLocal
      </h2>
      <div
        class="hardware__grid"
        role="list"
      >
        <!-- Card 1: Kushki UltraP (with printer) -->
        <article
          class="hardware__card"
          role="listitem"
        >
          <div class="hardware__card-default">
            <div class="hardware__card-media">
              <img
                src="/img/kushki-2@2x.png"
                alt=""
                width="400"
                height="300"
                loading="lazy"
              />
            </div>
            <p class="hardware__card-label">Kushki UltraP (with printer)</p>
          </div>
          <div class="hardware__card-hover">
            <div class="hardware__card-bg">
              <img
                src="/img/kushki-1@2x.png"
                alt=""
                width="640"
                height="360"
                loading="lazy"
              />
            </div>
            <div class="hardware__card-overlay"></div>
            <div class="hardware__card-content hardware__card-content--light">
              <div
                class="hardware__card-divider"
                aria-hidden="true"
              ></div>
              <p class="hardware__card-title">Kushki UltraP (with printer)</p>
              <ul class="hardware__card-list">
                <li>Smart POS on Android OS</li>
                <li>Free 5G data connectivity for the first 10 months*</li>
                <li>Magnetic stripe, Chip & Pin, and NFC</li>
              </ul>
            </div>
          </div>
        </article>
        <!-- Card 2: Kushki Ultra (without printer) -->
        <article
          class="hardware__card"
          role="listitem"
        >
          <div class="hardware__card-default">
            <div class="hardware__card-media small-device">
              <img
                src="/img/kushki-3@2x.png"
                alt=""
                width="400"
                height="300"
                loading="lazy"
              />
            </div>
            <p class="hardware__card-label">Kushki Ultra (without Printer)</p>
          </div>
          <div class="hardware__card-hover">
            <div class="hardware__card-bg">
              <img
                src="/img/kushki-1@2x.png"
                alt=""
                width="640"
                height="360"
                loading="lazy"
              />
            </div>
            <div class="hardware__card-overlay"></div>
            <div class="hardware__card-content hardware__card-content--light">
              <div
                class="hardware__card-divider"
                aria-hidden="true"
              ></div>
              <p class="hardware__card-title">Kushki Ultra (without Printer)</p>
              <ul class="hardware__card-list">
                <li>Smart POS on Android OS</li>
                <li>Free 5G data connectivity for the first 10 months*</li>
                <li>Magnetic stripe, Chip & Pin, and NFC</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .hardware {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 4rem 1.6rem 12rem;

    @include breakpoint(mdl) {
      padding-left: grid-width(0.5);
      padding-right: grid-width(0.5);
      padding-top: 3.2rem;
    }
  }

  .hardware__inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: grid-width(12);
    margin: 0 auto;
    padding-top: 3.2rem;
    border-top: 1px solid $border-muted;
  }

  .hardware__heading {
    margin: 0 0 3.2rem;
    font-family: var(--font-exact-block);
    font-size: var(--font-size-600);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-600);
    letter-spacing: var(--letter-spacing-tight-3);
    color: $color-neutral-000;

    @include breakpoint(mdl) {
      font-size: var(--font-size-700);
      line-height: var(--line-height-700);
      letter-spacing: var(--letter-spacing-tight-4);
      margin-bottom: 4rem;
      width: grid-width(4);
    }
  }

  .hardware__grid {
    display: flex;
    flex-direction: column;
    gap: 0;

    @include breakpoint(mdl) {
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 0;
      align-items: stretch;
    }
  }

  .hardware__card {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 28rem;
    background: $color-neutral-900;

    @include breakpoint(mdl) {
      margin-right: 2rem;
      width: grid-width(5);
      height: 80rem;
    }
  }

  // Default state: device on light background + label (right side of Figma)
  .hardware__card-default {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: $color-neutral-900;
    transition: opacity 0.25s ease;

    .hardware__card:hover & {
      opacity: 0;
      pointer-events: none;
    }
  }

  .hardware__card-media {
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 2rem 0;
    overflow: hidden;

    img {
      width: auto;
      max-height: 80%;
      object-fit: contain;
      display: block;
    }
  }

  .small-device {
    img {
      transform: translateY(1rem);
      max-height: 64%;
    }
  }

  .hardware__card-label {
    flex-shrink: 0;
    margin: 0;
    padding: 1.6rem 2rem 2rem;
    font-family: var(--font-cash-sans-medium);
    font-size: var(--font-size-100);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-100);
    color: $color-neutral-000;
  }

  // Hover state: photo + overlay + white text (left side of Figma)
  .hardware__card-hover {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.25s ease;

    .hardware__card:hover & {
      opacity: 1;
      z-index: 2;
    }
  }

  .hardware__card-bg {
    position: absolute;
    inset: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .hardware__card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      transparent 100%
    );
  }

  .hardware__card-content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2.4rem;
  }

  .hardware__card-divider {
    width: 100%;
    height: 1px;
    background: $color-neutral-1000;
    margin: 0 0 1.2rem;
    opacity: 0.9;
  }

  .hardware__card-content--light .hardware__card-title {
    font-family: var(--font-cash-sans-medium);
    font-size: var(--font-size-300);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-300);
    color: $color-neutral-1000;
    margin: 0 0 1.2rem;
  }

  .hardware__card-content--light .hardware__card-list {
    margin: 0;
    font-family: var(--font-cash-sans);
    font-size: var(--font-size-100);
    font-weight: var(--font-weight-regular);
    line-height: 1.5;
    color: $color-neutral-1000;
    opacity: 0.95;
  }

  .hardware__card-title {
    font-size: 1.7rem !important;
  }

  .hardware__card-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .hardware__bar {
    width: 100%;
    height: 0.8rem;
    background: $color-neutral-200;
    margin-top: 0;

    @include breakpoint(mdl) {
      height: 1rem;
    }
  }
</style>
