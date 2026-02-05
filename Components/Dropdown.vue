<template>
  <div
    class="dropdown-container"
    :class="{
      'variant-inline': variant === 'inline',
      'variant-stacked': variant === 'stacked'
    }"
  >
    <label
      v-if="label"
      class="dropdown-label"
      :class="variant === 'inline' ? 'type-subheading-300' : 'type-body-medium'"
    >
      {{ label }}
    </label>
    <div class="dropdown-wrapper">
      <select
        :value="modelValue"
        @input="handleChange"
        class="dropdown-select"
        :class="variant === 'inline' ? 'type-subheading-300' : 'type-body'"
      >
        <option
          v-for="option in options"
          :key="option"
          :value="option"
        >
          {{ displayValue(option) }}
        </option>
      </select>
      <svg
        class="dropdown-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.70703 11.7071C8.31651 12.0976 7.68334 12.0976 7.29282 11.7071L1.29282 5.70711L2.70703 4.29289L7.99992 9.58579L13.2928 4.29289L14.707 5.70711L8.70703 11.7071Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/style/colors.scss';

  .dropdown-container {
    display: flex;
    flex-shrink: 0;

    &.variant-inline {
      align-items: center;
      gap: 0.2rem;
    }

    &.variant-stacked {
      flex-direction: column;
      gap: 0.8rem;
      width: 100%;
    }
  }

  .dropdown-label {
    color: $color-neutral-000;

    .variant-inline & {
      white-space: nowrap;
    }
  }

  .dropdown-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    .variant-stacked & {
      width: 100%;
    }
  }

  .dropdown-select {
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    color: $color-neutral-000;

    .variant-inline & {
      padding: 0 2.8rem 0 0;
      background: transparent;
      border: none;
      text-align: right;
    }

    .variant-stacked & {
      width: 100%;
      padding: 1.2rem 4rem 1.2rem 1.6rem;
      background: $color-neutral-1000;
      border: 1px solid $border-muted;
      border-radius: 1rem;
      transition: border-color 0.2s ease;

      &:hover {
        border-color: $color-neutral-500;
      }
    }

    &:focus {
      outline: 2px solid $button-cta-fill-primary;
      outline-offset: 2px;

      .variant-inline & {
        border-radius: 0.4rem;
      }

      .variant-stacked & {
        border-color: $button-cta-fill-primary;
      }
    }

    &:disabled {
      cursor: not-allowed;
      color: $color-neutral-500;

      .variant-stacked & {
        background: $color-neutral-900;
      }
    }
  }

  .dropdown-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: $color-neutral-000;

    .variant-inline & {
      right: 0.4rem;
    }

    .variant-stacked & {
      right: 1.6rem;
    }
  }
</style>

<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    label?: string
    modelValue: number
    min?: number
    max?: number
    step?: number
    variant?: 'inline' | 'stacked'
  }

  const props = withDefaults(defineProps<Props>(), {
    min: 0,
    max: 10,
    step: 1,
    variant: 'inline',
  })

  const emit = defineEmits<{
    'update:modelValue': [value: number]
  }>()

  // Generate options array from min to max
  const options = computed(() => {
    const opts: number[] = []
    for (let i = props.min; i <= props.max; i += props.step) {
      opts.push(i)
    }
    return opts
  })

  const displayValue = (value: number) => {
    return value >= 10 ? '10+' : value.toString()
  }

  const handleChange = (event: Event) => {
    const target = event.target as HTMLSelectElement
    emit('update:modelValue', Number(target.value))
  }
</script>
