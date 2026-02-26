<template>
  <section class="faq">
    <div class="faq__container">
      <!-- <div
        class="faq__top-border"
        aria-hidden="true"
      ></div> -->
      <div class="faq__layout">
        <h2 class="faq__heading type-heading-600-serif text-heading">
          {{ heading }}
        </h2>
        <div class="faq__accordion">
          <details
            v-for="(item, index) in items"
            :key="index"
            class="faq__item"
          >
            <summary class="faq__question">
              <span class="faq__question-text type-body-medium text-heading">{{
                item.question
              }}</span>
              <span
                class="faq__icon"
                aria-hidden="true"
              ></span>
            </summary>
            <div
              v-if="item.answer || item.answerHtml"
              class="faq__answer"
              role="region"
            >
              <div
                v-if="item.answerHtml"
                class="faq__answer-body type-body-100"
                v-html="item.answerHtml"
              />
              <div
                v-else
                class="faq__answer-body type-body-100"
              >
                {{ item.answer }}
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  defineProps({
    heading: { type: String, required: true },
    items: { type: Array, required: true },
  })
</script>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .faq {
    // background-color: $color-neutral-900;
    background: #fff;
    padding: 6rem 0 8rem;

    @include breakpoint(mdl) {
      padding-top: 8rem;
      padding-bottom: 11.2rem;
    }
  }

  .faq__container {
    margin: 0 auto;
    max-width: 200rem;
    padding: 0 grid-width(0.5);
  }

  .faq__top-border {
    border-top: 1px solid $border-muted;
    margin-bottom: 4rem;

    @include breakpoint(mdl) {
      margin-bottom: 5.6rem;
    }
  }

  .faq__layout {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @include breakpoint(mdl) {
      flex-direction: row;
      align-items: flex-start;
      gap: 0;
    }
  }

  .faq__heading {
    flex-shrink: 0;
    margin: 0;
    width: grid-width(10);

    @include breakpoint(mdl) {
      width: grid-width(3);
      margin-right: grid-width(1);
    }
  }

  .faq__accordion {
    flex: 1 1 auto;
    min-width: 0;

    @include breakpoint(mdl) {
      width: grid-width(7);
    }
  }

  .faq__item {
    border-bottom: 1px solid $border-muted;
  }

  .faq__question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2.4rem 0;
    margin: 0;
    border: none;
    background: none;
    cursor: pointer;
    text-align: left;
    gap: 1.6rem;
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }

    &::marker {
      display: none;
    }
  }

  .faq__question-text {
    flex: 1 1 auto;
    min-width: 0;
  }

  .faq__icon {
    flex-shrink: 0;
    font-size: 2.4rem;
    line-height: 1;
    color: $color-neutral-000;
    font-weight: 300;

    &::after {
      content: '+';
    }
  }

  .faq__item[open] .faq__icon::after {
    content: '−';
  }

  .faq__answer {
    overflow: hidden;
  }

  .faq__answer-body {
    padding: 0 0 2.4rem 0;

    :deep(ul) {
      margin: 0;
      padding: 0 0 0 2.4rem;
      list-style-type: disc !important;
      list-style-position: outside;
    }

    :deep(li) {
      margin-bottom: 1.2rem;
      line-height: 1.5;
      list-style: disc outside !important;
      display: list-item;

      &:last-child {
        margin-bottom: 0;
      }
    }

    :deep(.faq__link),
    :deep(a) {
      color: $button-cta-fill-primary;
      text-decoration: underline;

      &:hover {
        color: darken($button-cta-fill-primary, 8%);
      }
    }
  }
</style>
