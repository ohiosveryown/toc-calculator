<template>
  <div class="app">
    <header class="header-hero">
      <span class="type-kicker">MAXIMIZE YOUR MARGINS</span>
      <h1 class="type-heading-800">
        Compare total costs for your food & beverage business
      </h1>
      <p class="type-body text-muted">
        Don't let your profits get toasted. Square Plus includes essential tools
        like online ordering, SMS marketing, and staff management that others
        charge extra for. F&B merchants save on average 24% with
        Square<sup>1</sup>.
      </p>
    </header>

    <section class="pricing-section">
      <div class="pricing-container">
        <div class="pricing-header">
          <div class="customization-header">
            <h3 class="type-subheading-400">Customize you comparison</h3>
            <!-- <p class="type-body text-muted">
              Have a Toast quote or a recent invoice? Drag and drop it anywhere
              on this page or upload it and we’ll map your existing costs
              directly to a Square Plus plan so you can see your exact savings1.
            </p> -->
          </div>

          <div class="steppers-grid">
            <div class="steppers">
              <Stepper
                class="stepper-spacing"
                label="Locations"
                v-model="locations"
                :min="1"
                :max="99"
              />
              <Stepper
                class="stepper-spacing"
                label="Kiosk devices"
                v-model="kioskDevices"
                :min="0"
                :max="99"
              />
              <Stepper
                class="stepper-spacing"
                label="KDS devices"
                v-model="kdsDevices"
                :min="0"
                :max="99"
              />
            </div>
          </div>
          <p
            v-if="showHighVolumeMessage"
            class="stepper-sales-message type-body text-muted"
          >
            Managing a large operation? We can help.

            <!-- That's a lot of {{ highVolumeMessageLabel }}. We can help out with
            that by -->

            <br />We provide tailored solutions and bulk discounts for larger
            teams.

            <a
              href="#"
              class="stepper-sales-link"
              >Talk to an expert</a
            >
            to get started.
          </p>
        </div>

        <div class="content-grid">
          <div class="features-table">
            <div class="table-header">
              <p class="type-body-medium">Feature</p>
              <p
                class="type-body-medium text-center"
                style="transform: translateX(0.4rem)"
              >
                Square
              </p>
              <p
                class="type-body-medium text-center"
                style="transform: translateX(1rem)"
              >
                Toast
              </p>
            </div>

            <div
              v-for="feature in features"
              :key="feature.id"
              class="table-row"
            >
              <div class="feature-cell">
                <input
                  type="checkbox"
                  v-model="feature.checked"
                  class="custom-checkbox"
                />
                <p class="type-body feature-name-with-icon">
                  {{ feature.name }}
                  <span
                    v-if="feature.id === 'sms'"
                    class="feature-info-icon"
                    aria-hidden="true"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M11.9175 15.5832H10.0842V10.5415H11.9175V15.5832Z"
                          fill="currentColor"
                        />
                        <path
                          d="M11.0009 5.95821C11.7602 5.95821 12.3759 6.57382 12.3759 7.33321C12.3759 8.0926 11.7602 8.70821 11.0009 8.70821C10.2415 8.70821 9.62585 8.0926 9.62585 7.33321C9.62585 6.57382 10.2415 5.95821 11.0009 5.95821Z"
                          fill="currentColor"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.51884 4.51786C8.09864 0.938056 13.9031 0.938056 17.4829 4.51786C21.0627 8.09767 21.0627 13.9021 17.4829 17.4819C13.9031 21.0617 8.09865 21.0617 4.51884 17.4819C0.939032 13.9021 0.939033 8.09767 4.51884 4.51786ZM16.1866 5.81409C13.3228 2.95024 8.67891 2.95024 5.81506 5.81409C2.95122 8.67793 2.95122 13.3218 5.81506 16.1857C8.67891 19.0495 13.3228 19.0495 16.1866 16.1857C19.0505 13.3218 19.0505 8.67793 16.1866 5.81409Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </span>
                </p>
              </div>
              <p class="type-body value-cell">Included</p>
              <p class="type-body value-cell-right">{{ feature.cost }}</p>
            </div>

            <div class="table-row table-row-total">
              <div class="feature-cell">
                <p class="type-subheading-200">Total cost</p>
              </div>
              <p class="value-cell type-subheading-200">
                {{ formatCurrency(squarePrice) }}/month
              </p>
              <p class="value-cell-right type-subheading-200">
                {{ formatCurrency(toastPrice) }}/month
              </p>
            </div>
          </div>

          <div class="aside-column">
            <div class="glpyhs-list-wrapper">
              <TransitionGroup
                tag="ul"
                name="glyph"
                class="glpyhs-list"
              >
                <li
                  v-for="(position, i) in glyphItems"
                  :key="position"
                  :class="{
                    'glyph-fifth-pulse':
                      i === glyphItems.length - 1 && pulseLastGlyph,
                  }"
                >
                  <img
                    class="glpyh"
                    :class="`glyph-rotate-${position % 8}`"
                    :src="glyphSrcByPosition(position)"
                    :alt="`Glyph ${position + 1}`"
                  />
                </li>
              </TransitionGroup>
            </div>
            <div class="aside-card">
              <div class="card-header">
                <h4 class="type-subheading-200">
                  No more crumbs: save {{ savingsPercentage }}%.
                </h4>
              </div>

              <div class="card-savings">
                <div class="savings-item">
                  <p class="type-heading-700">
                    {{ formatCurrency(annualSavings) }}
                  </p>
                  <p class="type-body text-muted">savings per year</p>
                </div>
                <div class="savings-item">
                  <p class="type-heading-700">
                    {{ formatCurrency(monthlySavings) }}
                  </p>
                  <p class="type-body text-muted">savings per month</p>
                </div>
              </div>

              <div class="card-cta">
                <div class="cta-header">
                  <p class="type-body-medium">
                    Don't let your profits get toasted.
                  </p>
                </div>
                <div class="cta-content">
                  <p class="type-body text-muted">
                    Choose a platform that earns your business with transparent
                    pricing and no contracts.
                  </p>
                  <button class="btn-primary type-body-medium">
                    {{
                      showHighVolumeMessage
                        ? 'Get started with Square Plus'
                        : 'Get started with Square Plus'
                    }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ValueProp image-src="/img/value@2x.png" />

    <Savings />

    <!-- <Testomonial /> -->

    <section class="disclosure-section">
      <div class="disclosure-container">
        <div class="disclosure-card">
          <div class="disclosure-content">
            <!-- <div class="disclosure-heading">
              <h4 class="type-subheading-300">Disclosures</h4>
            </div> -->
            <p class="text-muted">
              Total cost of ownership for Toast is based on publicly available
              rates and research as of January 8, 2026. Since Toast doesn't
              publicly display all add-on pricing, some figures are estimates
              based on industry standards. Actual costs may vary based on your
              contract terms, hardware needs, or location. Contact Toast
              directly for a personalized quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <Footer />
</template>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .app {
    margin: 0 auto;
    background: $color-neutral-1000;
  }

  .header-hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
    margin: 6.4rem auto 6.1rem;
    padding: 0 10.8rem;
    max-width: 160rem;

    @include breakpoint(md) {
      padding: 0 2rem;
      width: grid-width(10);
      h1 {
        max-width: 20ch;
      }
      p {
        max-width: 76ch;
      }
    }
  }

  .type-kicker {
    // font-weight: 600;
    color: $text-body-muted;
  }

  .pricing-section {
    padding-bottom: 6.4rem;
    width: 100%;
    background: $color-neutral-1000;
  }

  .pricing-container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin: 0 auto;
    padding: 0 10.8rem;
    max-width: 160rem;

    @include breakpoint(md) {
      padding: 0 2rem;
      width: grid-width(10);
    }
  }

  .pricing-header {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 100%;
  }

  .customization-header {
    padding: 1.6rem 0 0;

    h3 {
      color: $color-neutral-000;
    }
  }

  .steppers-grid {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .steppers {
    display: flex;
    gap: 3.2rem;
    flex-shrink: 0;
  }

  .aside-column {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    flex-shrink: 0;
    align-self: flex-start;
    width: 100%;

    @include breakpoint(md) {
      width: grid-width(4);
    }
  }

  .glpyhs-list-wrapper {
    overflow: hidden;
    position: relative;
    padding: 0.2rem 0;
    min-width: 0;
    width: 100%;
    /* Fixed height so aside card never moves when glyph count changes */
    height: 4.4rem; /* 4rem glyph + 0.2rem padding top/bottom */

    &::after {
      content: '';
      position: absolute;
      top: -0.5rem;
      right: 0;
      bottom: 0;
      width: 32rem;
      height: calc(100% + 1rem);
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 90%);
      pointer-events: none;
    }
  }

  .glpyhs-list {
    /* Snappy 0.25s spring with ~18% overshoot for a clear bounce */
    --spring-easing: linear(
      0,
      0.01 3%,
      0.08 8%,
      0.28 15%,
      0.58 24%,
      0.88 34%,
      1.18 45%,
      1.06 58%,
      1.01 72%,
      0.999 88%,
      1 100%
    );
    --spring-duration: 0.25s;
    display: flex;
    gap: 1.2rem;
    align-items: center;
    margin-right: 1.2rem;
  }

  .glyph-enter-from,
  .glyph-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }

  .glyph-enter-active,
  .glyph-leave-active {
    transition:
      opacity 0.25s ease-out,
      transform var(--spring-duration) var(--spring-easing);
  }

  .glyph-enter-to,
  .glyph-leave-from {
    opacity: 1;
    transform: scale(1);
  }

  .glyph-move {
    transition: transform var(--spring-duration) var(--spring-easing);
  }

  .glyph-fifth-pulse {
    animation: glyph-fifth-pulse 0.35s ease-out;
  }

  @keyframes glyph-fifth-pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  .glpyh.glyph-rotate-0 {
    transform: rotate(-7deg);
  }

  .glpyh.glyph-rotate-1 {
    transform: rotate(7deg);
  }

  .glpyh.glyph-rotate-2 {
    transform: rotate(-3deg);
  }

  .glpyh.glyph-rotate-3 {
    transform: rotate(2deg);
  }

  .glpyh.glyph-rotate-4 {
    transform: rotate(5deg);
  }

  .glpyh.glyph-rotate-5 {
    transform: rotate(-3deg);
  }

  .glpyh.glyph-rotate-6 {
    transform: rotate(4deg);
  }

  .glpyh.glyph-rotate-7 {
    transform: rotate(-5deg);
  }

  .glpyh {
    max-width: 4rem;
    max-height: 4rem;
    min-width: 4rem;
    min-height: 4rem;
    object-fit: contain;
  }

  .stepper-sales-message {
    margin: 0;
    transform: translateY(-0.8rem);
  }

  .stepper-sales-link {
    color: $color-neutral-000;
    text-decoration: underline;
    text-underline-offset: 0.2em;

    &:hover {
      color: $color-neutral-300;
    }
  }

  .content-grid {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    @include breakpoint(md) {
      flex-direction: row;
    }
  }

  .features-table {
    flex: 1;
    display: flex;
    flex-direction: column;

    @include breakpoint(md) {
      padding-right: grid-width(0.5);
    }
  }

  .table-header {
    display: flex;
    gap: 5.4rem;
    align-items: center;
    padding: 2rem 0;

    p:first-child {
      flex: 1;
      color: $color-neutral-000;
    }

    p {
      color: $color-neutral-000;
      width: 12.1rem;
      white-space: nowrap;
    }
  }

  .table-row {
    display: flex;
    gap: 4.7rem;
    align-items: center;
    padding: 2rem 0;
    border-top: 1px solid $border-muted;
  }

  .table-row-total {
    padding-top: 2.4rem;
    border-top-width: 2px;

    .value-cell,
    .value-cell-right {
      white-space: nowrap;
    }
  }

  .feature-cell {
    display: flex;
    flex: 1;
    gap: 1.6rem;
    align-items: center;

    p {
      flex: 1;
    }

    .feature-name-with-icon {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
    }

    .feature-info-icon {
      display: inline-flex;
      flex-shrink: 0;
      vertical-align: middle;
      line-height: 1;
      transform: translateY(0.1rem);

      svg {
        // width: 1.6rem;
        // height: 1.6rem;
        display: block;
      }
    }
  }

  .custom-checkbox {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: $color-neutral-1000;
    border: 1px solid $color-neutral-000;
    border-radius: 0.2rem;
    position: relative;
    transition: all 0.2s ease;

    &:checked {
      background-color: $color-neutral-000;
      border-color: $color-neutral-000;

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 42%;
        width: 0.5rem;
        height: 1rem;
        border: solid $color-neutral-1000;
        border-width: 0 0.2rem 0.2rem 0;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }

    &:hover {
      border-color: $color-neutral-300;
    }

    &:focus {
      outline: 2px solid $color-neutral-500;
      outline-offset: 2px;
    }
  }

  .value-cell {
    width: 12.1rem;
    text-align: center;
    color: $color-neutral-000;
  }

  .value-cell-right {
    width: 12.1rem;
    text-align: right;
    color: $color-neutral-000;
  }

  .aside-card {
    background: $background-accent;
    border-radius: 1rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: sticky;
    top: 2rem;

    @include breakpoint(md) {
      position: sticky;
      top: 2.2rem;
    }
  }

  .card-header {
    padding-bottom: 3rem;
    border-bottom: 1px solid $border-muted;

    h4 {
      color: $color-neutral-000;
    }
  }

  .card-savings {
    display: flex;
    gap: 2rem;
  }

  .savings-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p:first-child {
      color: $color-neutral-000;
    }
  }

  .card-cta {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .cta-header {
    padding-bottom: 2rem;
    border-bottom: 1px solid $border-muted;

    p {
      color: $color-neutral-000;
    }
  }

  .cta-content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .btn-primary {
    background: $button-cta-fill-primary;
    color: $button-cta-text-primary;
    border: none;
    border-radius: 5rem;
    width: fit-content;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.9;
    }
  }

  .disclosure-section {
    margin: 0 auto;
    padding: 6.4rem 0;
    width: 100%;
    background: $background-accent;
  }

  .disclosure-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 10.8rem;
    max-width: 160rem;

    @include breakpoint(md) {
      padding: 0 2rem;
      width: grid-width(12);
    }
  }

  .disclosure-card {
    // background: $background-accent;
    border-radius: 1rem;
    padding: 3rem;
  }

  .disclosure-content {
    display: flex;
    gap: 2.9rem;
    align-items: flex-start;

    @include breakpoint(md) {
      flex-direction: column;
      gap: 1.6rem;
    }

    p {
      flex: 1;
      font-size: var(--font-size-auxiliary);
    }
  }

  .disclosure-heading {
    flex-shrink: 0;
    width: 47.6rem;

    h4 {
      color: $color-neutral-000;
    }

    @include breakpoint(md) {
      width: 100%;
    }
  }
</style>

<script setup lang="ts">
  import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
  import Stepper from '@/components/Stepper.vue'
  import Nav from '@/components/Nav.vue'

  const locations = ref(1)
  const kioskDevices = ref(0)
  const kdsDevices = ref(0)

  // All glyph image names in public/img (order: location-1 first, then the rest)
  const GLYPH_IMAGE_NAMES = [
    'location-1',
    'location-2',
    'location-3',
    'location-4',
    'location-5',
    'location-6',
    'location-7',
    'kiosk-1',
    'kiosk-2',
    'kiosk-3',
    'kds-1',
    'kds-2',
    'kds-3',
    'kds-4',
    'kds-5',
    'kds-6',
  ] as const

  const GLYPH_IMAGE_COUNT = GLYPH_IMAGE_NAMES.length

  // Show (raw - 1) glyphs: 0 when raw <= 1, 1 when raw = 2, etc., at most number of images
  const totalGlyphCount = computed(() => {
    const raw = locations.value + kioskDevices.value + kdsDevices.value
    return Math.min(GLYPH_IMAGE_COUNT, Math.max(0, raw - 1))
  })

  const glyphItems = computed<number[]>(() =>
    Array.from({ length: totalGlyphCount.value }, (_, i) => i),
  )

  const glyphSrcByPosition = (position: number) => {
    const name = GLYPH_IMAGE_NAMES[Math.min(position, GLYPH_IMAGE_COUNT - 1)]
    return `/img/${name}@3x.png`
  }

  const pulseLastGlyph = ref(false)
  watch(
    [locations, kioskDevices, kdsDevices],
    ([newLoc, newKiosk, newKds], [oldLoc, oldKiosk, oldKds]) => {
      if (oldLoc === undefined) return
      const increased =
        newLoc! > oldLoc! || newKiosk! > oldKiosk! || newKds! > oldKds!
      if (increased && totalGlyphCount.value > 0) {
        pulseLastGlyph.value = true
        setTimeout(() => {
          pulseLastGlyph.value = false
        }, 350)
      }
    },
  )

  // Enforce minimum value of 1 for locations
  watch(locations, (newValue) => {
    if (newValue < 1) {
      locations.value = 1
    }
  })

  const showHighVolumeMessage = computed(
    () =>
      locations.value > 10 || kioskDevices.value > 10 || kdsDevices.value > 10,
  )

  const highVolumeMessageLabel = computed(() => {
    const parts: string[] = []
    if (locations.value > 10) parts.push('locations')
    if (kioskDevices.value > 10) parts.push('kiosk devices')
    if (kdsDevices.value > 10) parts.push('KDS devices')
    if (parts.length === 0) return 'locations/devices'
    if (parts.length === 1) return parts[0]
    if (parts.length === 2) return `${parts[0]} and ${parts[1]}`
    return `${parts[0]}, ${parts[1]}, and ${parts[2]}`
  })

  // Pricing constants
  const SQUARE_BASE_PRICE = 114
  const TOAST_BASE_PRICE = 424

  const FEATURE_COSTS = {
    sms: 50,
    online: 75,
    loyalty: 50,
    staff: 149,
    gift: 25,
    qr: 20,
    customer: 30,
    email: 50,
  } as const

  type FeatureId = keyof typeof FEATURE_COSTS

  const features = ref<
    Array<{
      id: FeatureId
      name: string
      cost: string
      checked: boolean
    }>
  >([
    {
      id: 'sms',
      name: 'SMS marketing',
      cost: '+$50/month',
      checked: true,
    },
    {
      id: 'online',
      name: 'Online ordering site',
      cost: '+$75/month',
      checked: true,
    },
    {
      id: 'loyalty',
      name: 'Loyalty program',
      cost: '+$50/month',
      checked: true,
    },
    {
      id: 'staff',
      name: 'Staff management',
      cost: '+$149/month',
      checked: true,
    },
    { id: 'gift', name: 'Gift cards', cost: '+$25/month', checked: true },
    { id: 'qr', name: 'QR code ordering', cost: '+$20/month', checked: true },
    {
      id: 'customer',
      name: 'Customer directory',
      cost: '+$30/month',
      checked: true,
    },
    { id: 'email', name: 'Email marketing', cost: '+$50/month', checked: true },
  ])

  // Computed pricing
  const squarePrice = computed(() => {
    return SQUARE_BASE_PRICE * locations.value
  })

  const toastPrice = computed(() => {
    let cost = TOAST_BASE_PRICE * locations.value

    features.value.forEach((feature) => {
      if (feature.checked) {
        cost += FEATURE_COSTS[feature.id]
      }
    })

    return cost
  })

  const monthlySavings = computed(() => {
    return toastPrice.value - squarePrice.value
  })

  const annualSavings = computed(() => {
    return monthlySavings.value * 12
  })

  const savingsPercentage = computed(() => {
    if (toastPrice.value === 0) return 0
    return Math.round((monthlySavings.value / toastPrice.value) * 100)
  })

  // Format currency
  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`
  }

  // Navigate to index page with left arrow key
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      // Left arrow - navigate to index page
      navigateTo('/')
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyPress)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyPress)
  })
</script>
