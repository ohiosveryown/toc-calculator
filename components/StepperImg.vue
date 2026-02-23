<template>
  <div class="stepper-img-container">
    <div class="stepper-img-header">
      <label class="stepper-img-label type-body-medium">{{ label }}</label>
      <span
        v-if="price"
        class="stepper-img-price"
        >x {{ price }}</span
      >
    </div>
    <!-- Gray wrapper: image + original stepper container -->
    <div
      class="stepper-img-shell"
      role="group"
      :aria-label="label"
    >
      <div
        class="stepper-img-thumb"
        aria-hidden="true"
      >
        <img
          :src="image"
          alt=""
          class="stepper-img-image"
        />
      </div>
      <!-- White "original stepper" container (minus / number / plus) -->
      <div class="stepper-img-inner">
        <button
          type="button"
          class="stepper-img-btn stepper-img-btn-minus"
          :disabled="modelValue <= min"
          :aria-label="`Decrease ${label}`"
          @click="decrement"
        >
          <span
            class="stepper-img-icon"
            aria-hidden="true"
            >−</span
          >
        </button>
        <input
          ref="inputRef"
          type="number"
          class="stepper-img-input type-subheading-200"
          :min="min"
          :max="max"
          :step="step"
          :value="inputValue"
          :aria-valuenow="modelValue"
          :aria-valuemin="min"
          :aria-valuemax="max"
          :aria-label="`${label} value`"
          @input="onInput"
          @blur="commitValue"
          @keydown.enter="commitValue"
        />
        <button
          type="button"
          class="stepper-img-btn stepper-img-btn-plus"
          :disabled="modelValue >= max"
          :aria-label="`Increase ${label}`"
          @click="increment"
        >
          <span
            class="stepper-img-icon"
            aria-hidden="true"
            >+</span
          >
        </button>
      </div>
    </div>
    <a
      v-if="showContactSales"
      href="#"
      class="stepper-img-contact type-body-medium"
      :class="{ 'is-visible': modelValue >= max }"
    >
      Contact sales
    </a>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/style/grid.scss';
  @import '~/style/colors.scss';

  .stepper-img-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 12rem;
    width: 100%;
    @include breakpoint(md) {
      min-width: 16rem;
    }
  }

  .stepper-img-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 1.4rem 0 0.6rem;
  }

  .stepper-img-label {
    color: $color-neutral-000;
  }

  .stepper-img-price {
    flex-shrink: 0;
    color: $color-neutral-400;
    font-family: var(--font-cash-sans);
    font-size: var(--font-size-auxiliary);
    font-weight: var(--font-weight-regular);
    // text-decoration: underline;
  }

  /* Gray outer container: wraps image + stepper */
  .stepper-img-shell {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
    min-width: fit-content;
    // padding: 0.2rem 0.2rem 0.2rem 1rem;
    padding-left: 0.8rem;
    background: #f0f0f2;
    border-radius: 10rem;
  }

  .stepper-img-thumb {
    flex-shrink: 0;
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .stepper-img-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* White "original stepper" container (same look as Stepper.vue track) */
  .stepper-img-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    flex: 1;
    padding: 0.8rem 0.9rem;
    background: $color-neutral-1000;
    border: 1px solid $border-muted;
    border-radius: 10rem;
  }

  .stepper-img-btn {
    flex-shrink: 0;
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: $color-neutral-800;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: $color-neutral-000;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover:not(:disabled) {
      background: $color-neutral-700;
    }

    &:focus {
      outline: 2px solid $button-cta-fill-primary;
      outline-offset: 2px;
    }

    &:disabled {
      cursor: default;
      color: $color-neutral-500;
      background: $color-neutral-800;
    }
  }

  .stepper-img-icon {
    font-family: var(--font-cash-sans);
    font-size: var(--font-size-200);
    font-weight: var(--font-weight-regular);
    line-height: 1;
    transform: translateY(-0.1rem);
  }

  .stepper-img-input {
    flex: 1;
    width: 0;
    min-width: 3ch;
    text-align: center;
    color: $color-neutral-000;
    background: transparent;
    border: none;
    font: inherit;
    -moz-appearance: textfield;
    appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
    }
  }

  .stepper-img-contact {
    padding-bottom: 0.2rem;
    color: $color-neutral-000;
    text-decoration: none;
    width: fit-content;
    cursor: pointer;
    display: inline-flex;
    position: relative;
    border-bottom: 1px solid transparent;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.2s ease,
      visibility 0.2s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: $border-base;
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(0);
    }

    &.is-visible {
      opacity: 1;
      visibility: visible;
    }
  }
</style>

<script setup lang="ts">
  import { ref, watch } from 'vue'

  interface Props {
    label: string
    /** Image URL for the circular thumbnail (e.g. /img/locations@2x.png) */
    image: string
    modelValue: number
    /** Optional price string shown top-right (e.g. "$110") */
    price?: string
    min?: number
    max?: number
    step?: number
    showContactSales?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    min: 0,
    max: 10,
    step: 1,
    showContactSales: false,
  })

  const emit = defineEmits<{
    'update:modelValue': [value: number]
  }>()

  const inputRef = ref<HTMLInputElement | null>(null)
  const inputValue = ref(props.modelValue.toString())

  watch(
    () => props.modelValue,
    (val) => {
      if (inputRef.value !== document.activeElement) {
        inputValue.value = val.toString()
      }
    },
  )

  function onInput(e: Event) {
    const target = e.target as HTMLInputElement
    inputValue.value = target.value
  }

  function commitValue() {
    const raw = inputValue.value.trim()
    if (raw === '') {
      emit('update:modelValue', props.min)
      inputValue.value = props.min.toString()
      return
    }
    const parsed = Number(raw)
    if (!Number.isFinite(parsed)) {
      inputValue.value = props.modelValue.toString()
      return
    }
    const stepped = Math.round(parsed / props.step) * props.step
    const clamped = Math.max(props.min, Math.min(props.max, stepped))
    emit('update:modelValue', clamped)
    inputValue.value = clamped.toString()
  }

  function increment() {
    const next = Math.min(props.max, props.modelValue + props.step)
    emit('update:modelValue', next)
    inputValue.value = next.toString()
  }

  function decrement() {
    const next = Math.max(props.min, props.modelValue - props.step)
    emit('update:modelValue', next)
    inputValue.value = next.toString()
  }
</script>
