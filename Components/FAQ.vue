<template>
  <section class="faq">
    <div class="faq__container">
      <div
        class="faq__top-border"
        aria-hidden="true"
      ></div>
      <div class="faq__layout">
        <h2 class="faq__heading type-heading-600-serif text-heading">{{ t('faq.heading') }}</h2>
        <div class="faq__accordion">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="faq__item"
          >
            <button
              type="button"
              class="faq__question"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-answer-${index}`"
              :id="`faq-question-${index}`"
              @click="toggle(index)"
            >
              <span class="faq__question-text type-body-medium text-heading">{{
                item.questionKey ? t(item.questionKey) : item.question
              }}</span>
              <span
                class="faq__icon"
                aria-hidden="true"
              >
                {{ openIndex === index ? '−' : '+' }}
              </span>
            </button>
            <div
              :id="`faq-answer-${index}`"
              class="faq__answer"
              role="region"
              :aria-labelledby="`faq-question-${index}`"
              :hidden="openIndex !== index"
            >
              <div
                v-if="item.answerKey || item.answerHtml"
                class="faq__answer-body type-body-100 text-muted"
                v-html="item.answerKey ? t(item.answerKey) : item.answerHtml"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  const { t } = useLocale()

  const openIndex = ref(0)

  function toggle(index) {
    openIndex.value = openIndex.value === index ? -1 : index
  }

  const items = [
    { questionKey: 'faq.q1', answerKey: 'faq.a1' },
    { questionKey: 'faq.q2' },
    { questionKey: 'faq.q3' },
    { questionKey: 'faq.q4' },
    { questionKey: 'faq.q5' },
    { questionKey: 'faq.q6' },
    { questionKey: 'faq.q7' },
    { questionKey: 'faq.q8' },
    { questionKey: 'faq.q9' },
    { questionKey: 'faq.q10' },
    { questionKey: 'faq.q11' },
    { questionKey: 'faq.q12' },
    { questionKey: 'faq.q13' },
  ]
</script>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .faq {
    background-color: $color-neutral-900;
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
  }

  .faq__answer {
    overflow: hidden;

    &[hidden] {
      display: none;
    }
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
