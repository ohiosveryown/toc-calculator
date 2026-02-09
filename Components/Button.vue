<template>
  <component
    :is="tag"
    :type="tag === 'button' ? nativeType : undefined"
    :href="tag === 'a' ? href : undefined"
    class="btn"
    :class="`btn--${variant}`"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <span class="btn__label">
      <slot />
    </span>
  </component>
</template>

<style lang="scss" scoped>
  @import '@/style/colors.scss';

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 1rem 2rem; /* Figma: Spacing 10 vertical, Spacing 20 horizontal */
    font-family: var(--font-cash-sans-medium);
    font-size: var(--font-size-100);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-100);
    letter-spacing: 0;
    text-decoration: none;
    border-radius: 9999px; /* pill */
    cursor: pointer;
    transition:
      opacity 0.2s ease,
      background-color 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  .btn__label {
    display: inline-block;
  }

  /* Primary: solid blue fill, white text (Figma CTA Primary) */
  .btn--primary {
    color: $button-cta-text-primary;
    background-color: $button-cta-fill-primary;
    border: none;

    // &:hover:not(:disabled) {
    //   opacity: 0.9;
    // }
  }

  /* Primary light: white fill, blue text (e.g. on dark hero) */
  .btn--primary-light {
    color: $button-cta-fill-primary;
    background-color: $color-neutral-1000;
    border: none;

    // &:hover:not(:disabled) {
    //   opacity: 0.9;
    // }
  }

  /* Secondary: transparent fill, blue stroke and text (Figma CTA Secondary) */
  .btn--secondary {
    color: $button-cta-text-secondary;
    background-color: $button-cta-fill-secondary;
    border: 2px solid $button-cta-stroke-secondary;

    // &:hover:not(:disabled) {
    //   opacity: 0.9;
    // }
  }
</style>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      /** 'primary' = filled blue; 'primary-light' = white bg, blue text; 'secondary' = outline blue */
      variant?: 'primary' | 'primary-light' | 'secondary'
      /** Render as <button> or <a> */
      tag?: 'button' | 'a'
      /** For <a>, link destination */
      href?: string
      /** Only when tag is 'button' */
      nativeType?: 'button' | 'submit' | 'reset'
      disabled?: boolean
    }>(),
    {
      variant: 'primary',
      tag: 'button',
      nativeType: 'button',
      disabled: false,
    },
  )
</script>
