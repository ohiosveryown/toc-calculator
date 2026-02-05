<template>
  <div class="dropdown-container">
    <label
      v-if="label"
      class="dropdown-label type-body-medium"
    >
      {{ label }}
    </label>
    <div class="dropdown-wrapper">
      <select
        :value="modelValue"
        @input="handleChange"
        class="dropdown-select type-body"
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
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
  }

  .dropdown-label {
    color: $color-neutral-000;
  }

  .dropdown-wrapper {
    position: relative;
    width: 100%;
  }

  .dropdown-select {
    width: 100%;
    padding: 1.2rem 4rem 1.2rem 1.6rem;
    background: $color-neutral-1000;
    border: 1px solid $border-muted;
    border-radius: 1rem;
    color: $color-neutral-000;
    font-family: var(--font-cash-sans);
    font-size: var(--font-size-100);
    line-height: var(--line-height-100);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: $color-neutral-500;
    }

    &:focus {
      outline: 2px solid $button-cta-fill-primary;
      outline-offset: 2px;
      border-color: $button-cta-fill-primary;
    }

    &:disabled {
      background: $color-neutral-900;
      cursor: not-allowed;
      color: $color-neutral-500;
    }
  }

  .dropdown-icon {
    position: absolute;
    right: 1.6rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: $color-neutral-000;
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
  }

  const props = withDefaults(defineProps<Props>(), {
    min: 0,
    max: 10,
    step: 1,
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
