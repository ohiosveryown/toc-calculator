<template>
  <div class="slider-container">
    <div class="slider-header">
      <label class="slider-label type-subheading-200">{{ label }}</label>
      <span class="slider-value type-subheading-200">{{ displayValue }}</span>
    </div>
    <div class="slider-wrapper">
      <div
        ref="sliderRef"
        class="slider"
        @mousedown="handleMouseDown"
        @touchstart="handleTouchStart"
      >
        <!-- Background Track -->
        <div class="slider-track"></div>

        <!-- Filled Portion -->
        <div
          class="slider-fill"
          :style="{ width: fillWidth }"
        ></div>

        <!-- Knob -->
        <div
          class="slider-knob"
          :style="{ left: fillWidth }"
          tabindex="0"
          role="slider"
          :aria-label="label"
          :aria-valuemin="min"
          :aria-valuemax="max"
          :aria-valuenow="modelValue"
          @keydown="handleKeyDown"
        ></div>
      </div>
      
      <!-- Contact Sales Message -->
      <a 
        href="#"
        class="contact-sales type-body-medium"
        :class="{ 'is-visible': showContactSales && modelValue >= 10 }"
      >
        Contact sales
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/style/colors.scss';

  .slider-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .slider-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
  }

  .slider-label {
    flex: 1;
    color: $color-neutral-000;
  }

  .slider-value {
    color: $color-neutral-000;
  }

  .slider-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
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
    transition: opacity 0.2s ease, visibility 0.2s ease;
    
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

  .slider {
    position: relative;
    width: 100%;
    height: 2.4rem;
    cursor: pointer;
    user-select: none;
  }

  .slider-track {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 0.6rem;
    background: #dadada;
    border-radius: 10000px;
    transform: translateY(-50%);
  }

  .slider-fill {
    position: absolute;
    top: 50%;
    left: 0;
    height: 0.6rem;
    background: $color-neutral-000;
    border-radius: 10000px;
    transform: translateY(-50%);
    transition: width 0.1s ease-out;
    pointer-events: none;
  }

  .slider-knob {
    position: absolute;
    top: 50%;
    width: 2.4rem;
    height: 2.4rem;
    transform: translate(-50%, -50%);
    cursor: grab;
    pointer-events: none;
    transition: left 0.1s ease-out;

    // Knob styling
    background: $color-neutral-1000;
    border: 2px solid $color-neutral-000;
    border-radius: 50%;

    // Elevation/10 shadows from Figma
    box-shadow:
      0 0 4px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.2);

    &:active {
      cursor: grabbing;
    }

    &:focus {
      outline: 2px solid $button-cta-fill-primary;
      outline-offset: 2px;
    }
  }
</style>

<script setup lang="ts">
  import { ref, computed } from 'vue'

  interface Props {
    label: string
    modelValue: number
    min?: number
    max?: number
    step?: number
    showContactSales?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    min: 1,
    max: 10,
    step: 1,
    showContactSales: false,
  })

  const emit = defineEmits<{
    'update:modelValue': [value: number]
  }>()

  const sliderRef = ref<HTMLElement | null>(null)
  const isDragging = ref(false)

  const fillWidth = computed(() => {
    const percentage =
      ((props.modelValue - props.min) / (props.max - props.min)) * 100
    return `${percentage}%`
  })

  const displayValue = computed(() => {
    return props.modelValue >= 10 ? '10+' : props.modelValue.toString()
  })

  const updateValue = (clientX: number) => {
    if (!sliderRef.value) return

    const rect = sliderRef.value.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(1, x / rect.width))
    const rawValue = props.min + percentage * (props.max - props.min)
    const steppedValue = Math.round(rawValue / props.step) * props.step
    const clampedValue = Math.max(props.min, Math.min(props.max, steppedValue))

    emit('update:modelValue', clampedValue)
  }

  const handleMouseDown = (e: MouseEvent) => {
    isDragging.value = true
    updateValue(e.clientX)

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.value) {
        updateValue(e.clientX)
      }
    }

    const handleMouseUp = () => {
      isDragging.value = false
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleTouchStart = (e: TouchEvent) => {
    isDragging.value = true
    updateValue(e.touches[0].clientX)

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.value) {
        updateValue(e.touches[0].clientX)
      }
    }

    const handleTouchEnd = () => {
      isDragging.value = false
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }

    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleTouchEnd)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    let newValue = props.modelValue

    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      newValue = Math.min(props.max, props.modelValue + props.step)
      e.preventDefault()
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      newValue = Math.max(props.min, props.modelValue - props.step)
      e.preventDefault()
    } else if (e.key === 'Home') {
      newValue = props.min
      e.preventDefault()
    } else if (e.key === 'End') {
      newValue = props.max
      e.preventDefault()
    }

    if (newValue !== props.modelValue) {
      emit('update:modelValue', newValue)
    }
  }
</script>
