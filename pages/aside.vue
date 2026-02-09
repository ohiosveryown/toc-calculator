<template>
  <div class="app">
    <header class="header-hero">
      <span class="type-kicker">Kicker</span>
      <h1 class="type-heading-800">
        Cost comparison for food & beverage businesses
      </h1>
      <p class="type-body text-muted">
        Don't let your profits get toasted. Square Plus includes essential tools
        like online ordering, SMS marketing, and staff management that others
        charge extra for. F&B merchants save on average 24% with Square.
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
          <p
            v-if="showHighVolumeMessage"
            class="stepper-sales-message type-body text-muted"
          >
            Managing a large operation? We provide tailored solutions and bulk
            discounts for larger teams.

            <!-- That's a lot of {{ highVolumeMessageLabel }}. We can help out with
            that by -->
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
                <p class="type-body text-muted">{{ feature.name }}</p>
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
                  Get Started with Square Plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Testomonial />

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
        max-width: 17ch;
      }
      p {
        max-width: 76ch;
      }
    }
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
  }

  .customization-header {
    padding: 1.6rem 0 0;

    h3 {
      color: $color-neutral-000;
    }
  }

  .steppers-grid {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6.4rem;

    @include breakpoint(md) {
      flex-direction: row;
      gap: 3.2rem;
      margin: 0 0.1rem;
      width: grid-width(5);
    }
  }

  .stepper-sales-message {
    margin: 0;
    margin-top: 1.2rem;
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
    flex-shrink: 0;
    align-self: flex-start;
    position: sticky;
    top: 2rem;

    @include breakpoint(md) {
      position: sticky;
      top: 2.2rem;
      margin-top: 2.2rem;
      width: grid-width(4);
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
      name: 'Text message marketing',
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
