<template>
  <section class="value-prop-section">
    <div class="value-prop-layout">
      <div class="value-prop-image-wrap">
        <img
          v-if="imageSrc"
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
          Built for growth. <br />Not for billable add-ons.
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
          <blockquote class="type-heading-600-serif value-prop-quote">
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
  @import '@/style/grid.scss';

  .value-prop-section {
    margin-top: 12rem;
    margin-bottom: 12rem;
    background-color: $color-neutral-1000;
    width: 100%;
  }

  .value-prop-layout {
    border-top: 1px solid $border-muted;
    padding-top: 6.4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }

  .value-prop-image-wrap {
    min-height: 480px;
    width: grid-width(10);
  }

  .value-prop-image {
    width: 100%;
    height: 100%;
    min-height: 480px;
    object-fit: cover;
    display: block;
  }

  .value-prop-image-placeholder {
    background-color: $color-neutral-800;
  }

  .value-prop-content {
    padding: 8rem 6rem 8rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
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
    gap: 2rem;
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

    .value-prop-image,
    .value-prop-image-placeholder {
      min-height: 360px;
    }

    .value-prop-content {
      padding: 4rem 3rem 4rem;
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
  defineProps({
    imageSrc: {
      type: String,
      default: '',
    },
    valueProps: {
      type: Array,
      default: () => [
        {
          title: 'Grow on your terms',
          description:
            "Scale with flexible tools designed to fit your business today—and wherever you're headed tomorrow.",
        },
        {
          title: 'Reclaim your time',
          description:
            'We automate the complex ops so you can get back to what matters: your customers and your craft.',
        },
        {
          title: 'A partner you can bank on',
          description:
            'No guesswork. Just radical transparency and 24/7 support from a team that actually has your back.',
        },
        {
          title: 'Value without the fine print',
          description:
            "The industry's best total cost of ownership. No hidden fees, no locked-in contracts, no surprises.",
        },
      ],
    },
    testimonial: {
      type: Object,
      default: () => ({
        quote:
          '"The bundle is killer. And just to know my monthly amount...it\'s really nice to not have 15 different bills come in."',
        name: 'Ryan',
        role: 'Owner',
        company: 'FineDetailing',
        avatarSrc: '/img/fine@3x.png',
      }),
    },
  })
</script>
