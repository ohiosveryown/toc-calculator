<template>
  <div class="stepper-container">
    <label class="stepper-label type-body-medium">{{ label }}</label>
    <div
      class="stepper-track"
      role="group"
      :aria-label="label"
    >
      <button
        type="button"
        class="stepper-btn stepper-btn-minus"
        :disabled="modelValue <= min"
        :aria-label="`Decrease ${label}`"
        @click="decrement"
      >
        <span
          class="stepper-icon"
          aria-hidden="true"
          >−</span
        >
      </button>
      <input
        ref="inputRef"
        type="number"
        class="stepper-input type-subheading-200"
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
        class="stepper-btn stepper-btn-plus"
        :disabled="modelValue >= max"
        :aria-label="`Increase ${label}`"
        @click="increment"
      >
        <span
          class="stepper-icon"
          aria-hidden="true"
          >+</span
        >
      </button>
    </div>
    <a
      v-if="showContactSales"
      href="#"
      class="contact-sales type-body-medium"
      :class="{ 'is-visible': modelValue >= max }"
    >
      Contact sales
    </a>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/style/colors.scss';

  .stepper-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 16rem;
    width: 100%;
  }

  .stepper-label {
    display: block;
    color: $color-neutral-000;
  }

  .stepper-track {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    width: 100%;
    min-height: 4.8rem;
    padding: 0.8rem 1.2rem;
    background: $color-neutral-1000;
    border: 1px solid $border-muted;
    border-radius: 10rem;
  }

  .stepper-btn {
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

  .stepper-icon {
    font-family: var(--font-cash-sans);
    font-size: var(--font-size-200);
    font-weight: var(--font-weight-regular);
    line-height: 1;
    transform: translateY(-0.1rem);
  }

  .stepper-input {
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

  .contact-sales {
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
    modelValue: number
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
