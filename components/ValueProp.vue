<template>
  <section class="value-prop-section">
    <div class="value-prop-layout">
      <div class="value-prop-image-wrap">
        <div
          v-if="videoSrc"
          class="value-prop-video-wrap"
        >
          <video
            ref="videoEl"
            :src="videoSrc"
            class="value-prop-image value-prop-video"
            autoplay
            muted
            loop
            playsinline
            @click="toggleVideo"
          />
          <div
            class="value-prop-video-overlay"
            @click="toggleVideo"
          >
            <!-- <button
              type="button"
              class="value-prop-play-btn"
              aria-label="Play video"
            >
              <span class="value-prop-play-icon" />
            </button> -->
          </div>
        </div>
        <img
          v-else-if="imageSrc"
          :src="imageSrc"
          alt=""
          class="value-prop-image"
        />
        <div
          v-else
          class="value-prop-image value-prop-image-placeholder"
        />
      </div>

      <div class="value-prop-content">
        <h2 class="type-heading-600-serif value-prop-heading">
          Your time is money — so get <br />
          more of both
        </h2>

        <ul class="value-prop-list">
          <li
            v-for="(item, i) in valueProps"
            :key="i"
            class="value-prop-item"
          >
            <h3 class="type-body-medium value-prop-item-title">
              {{ item.title }}
            </h3>
            <p class="type-body text-muted value-prop-item-desc">
              {{ item.description }}
            </p>
          </li>
        </ul>

        <div class="value-prop-testimonial">
          <blockquote class="type-heading-500-serif value-prop-quote">
            {{ testimonial.quote }}
          </blockquote>
          <div class="value-prop-attribution">
            <div class="value-prop-avatar">
              <img
                v-if="testimonial.avatarSrc"
                :src="testimonial.avatarSrc"
                :alt="testimonial.name"
                class="avatar-img"
              />
              <div
                v-else
                class="avatar-placeholder"
              />
            </div>
            <div class="value-prop-author">
              <p class="author-name">{{ testimonial.name }}</p>
              <p class="author-role">{{ testimonial.role }}</p>
              <p class="author-company">{{ testimonial.company }}</p>
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
  @import '~/style/grid.scss';

  .value-prop-section {
    margin-top: 4rem;
    margin-bottom: 2rem;
    background-color: $color-neutral-1000;
    padding: 0 2rem;
    width: 100%;
    @include breakpoint(mdl) {
      margin-top: 12rem;
      margin-bottom: 12rem;
      padding: 0;
    }
  }

  .value-prop-layout {
    border-top: 1px solid $border-muted;
    padding-top: 6.4rem;
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    // min-height: 100%;
    // max-width: 1440px;
    margin: 0 auto;
    @include breakpoint(mdl) {
      display: flex;
      align-items: flex-start;
      max-width: 160rem;
      width: grid-width(11);
    }
  }

  .value-prop-image-wrap {
    @include breakpoint(mdl) {
      margin-right: grid-width(0.75);
      width: grid-width(5.5);
    }
  }

  .value-prop-image {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .value-prop-image-placeholder {
    background-color: $color-neutral-800;
  }

  .value-prop-video-wrap {
    position: relative;
    width: 100%;
    min-height: 480px;
    overflow: hidden;
  }

  .value-prop-video {
    object-fit: cover;
  }

  .value-prop-video-overlay {
    position: absolute;
    inset: 0;
    // background: rgba(0, 0, 0, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .value-prop-play-btn {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition:
      transform 0.2s ease,
      background 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.35);
      transform: scale(1.05);
    }

    &:focus-visible {
      outline: 2px solid white;
      outline-offset: 4px;
    }
  }

  .value-prop-play-icon {
    width: 0;
    height: 0;
    margin-left: 6px;
    border-style: solid;
    border-width: 16px 0 16px 28px;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.95);
  }

  .value-prop-content {
    padding: 8rem 6rem 8rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
    @include breakpoint(mdl) {
      width: grid-width(5.5);
    }
  }

  .value-prop-heading {
    color: $color-neutral-000;
    margin: 0;
  }

  .value-prop-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    @include breakpoint(md) {
      gap: 4.8rem;
    }
  }

  .value-prop-item {
    margin: 0;
  }

  .value-prop-item-title {
    color: $color-neutral-000;
    margin: 0 0 0.4rem;
  }

  .value-prop-item-desc {
    margin: 0;
    color: $color-neutral-300;
    @include breakpoint(md) {
      max-width: 64ch;
    }
  }

  .value-prop-testimonial {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding-top: 2rem;
    border-top: 1px solid $border-muted;
  }

  .value-prop-quote {
    color: $color-neutral-000;
    margin: 0;
  }

  .value-prop-attribution {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .value-prop-avatar {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .avatar-placeholder {
    width: 100%;
    height: 100%;
    background-color: $color-neutral-800;
  }

  .value-prop-author {
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

    .author-role,
    .author-company {
      font-weight: var(--font-weight-regular);
    }
  }

  @media (max-width: 1024px) {
    .value-prop-layout {
      grid-template-columns: 1fr;
    }

    .value-prop-image-wrap {
      min-height: 360px;
    }

    .value-prop-video-wrap {
      min-height: 360px;
    }

    .value-prop-image,
    .value-prop-image-placeholder {
      min-height: 360px;
    }

    .value-prop-content {
      padding: 4rem 2rem 4rem;
    }
  }

  @media (max-width: 768px) {
    .value-prop-content {
      padding: 3rem 2rem 3rem;
      gap: 3rem;
    }

    .value-prop-heading {
      font-size: 3rem;
      line-height: 3.6rem;
    }

    .value-prop-list {
      gap: 2rem;
    }

    .value-prop-attribution {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>

<script setup>
  import { ref } from 'vue'

  const videoEl = ref(null)

  function toggleVideo() {
    if (!videoEl.value) return
    if (videoEl.value.paused) {
      videoEl.value.play()
    } else {
      videoEl.value.pause()
    }
  }

  defineProps({
    imageSrc: {
      type: String,
      default: '',
    },
    videoSrc: {
      type: String,
      default: '',
    },
    valueProps: {
      type: Array,
      default: () => [
        {
          title: 'Automate your ops',
          description:
            'Spend more time doing what you love: serving your customers and perfecting your craft.',
        },
        {
          title: 'Ditch your contracts',
          description:
            'Own your hardware, and forget hidden fees. Enjoy transparent, all-in-one pricing.',
        },
        {
          title: 'Grow on your terms',
          description:
            "Scale with flexible tools designed to fit your business today — and wherever you're headed tomorrow.",
        },
      ],
    },
    testimonial: {
      type: Object,
      default: () => ({
        quote:
          '“I think Square is worth every cent. There’s obviously the point of sale, but also the staff scheduling, the customer feedback, the Dashboard analytics. The ability to segment your customers, look into data.”',
        name: 'Mat Pond',
        role: 'Owner, The Epicurean Trader',
        company: 'San Francisco, CA',
        avatarSrc: '/img/fine@3x.png',
      }),
    },
  })
</script>
