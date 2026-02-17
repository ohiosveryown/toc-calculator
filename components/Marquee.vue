<template>
  <div
    class="marquee"
    aria-hidden="true"
  >
    <div
      ref="trackRef"
      class="marquee__track"
      :style="trackStyle"
    >
      <span
        ref="spanRef"
        class="marquee__content"
        >{{ displayText }}</span
      ><span class="marquee__content type-auxiliary">{{ displayText }}</span
      ><span class="marquee__content type-auxiliary">{{ displayText }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/style/colors.scss';

  .marquee {
    position: relative;
    margin: auto;
    width: 100%;
    overflow: hidden;
    margin-top: 0.4rem;
    user-select: none;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 8rem;
      pointer-events: none;
      z-index: 1;
    }

    &::before {
      left: 0;
      background: linear-gradient(
        to right,
        $color-neutral-1000 10%,
        transparent 100%
      );
    }

    &::after {
      right: 0;
      background: linear-gradient(
        to left,
        $color-neutral-1000 10%,
        transparent 100%
      );
    }
  }

  .marquee__track {
    display: flex;
    width: max-content;
    white-space: nowrap;
    font-family: var(--font-cash-sans-medium);
    font-size: var(--font-size-auxiliary);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-auxiliary);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    color: $color-neutral-200;
    animation: marquee 13s linear infinite;
  }

  .marquee__content {
    flex-shrink: 0;
    white-space: nowrap;
    font-weight: 600;
    color: #707070;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-1 * var(--marquee-width, 50%)));
    }
  }
</style>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      savingsPercentage?: number
      message?: string
    }>(),
    { savingsPercentage: 0 },
  )

  const displayText = computed(() => {
    if (props.message != null) return props.message
    // Trailing space after bullet so "• No" at repeat; use \u00A0 so it isn't trimmed
    return `No more crumbs • Save ${props.savingsPercentage}% •\u00A0`
  })

  const trackRef = ref<HTMLElement | null>(null)
  const spanRef = ref<HTMLElement | null>(null)
  const contentWidth = ref(0)

  function measure() {
    nextTick(() => {
      if (spanRef.value) contentWidth.value = spanRef.value.offsetWidth
    })
  }

  onMounted(measure)
  watch(displayText, measure)

  const trackStyle = computed(() => ({
    '--marquee-width': contentWidth.value ? `${contentWidth.value}px` : '50%',
  }))
</script>
