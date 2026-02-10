<template>
  <div class="app">
    <header
      class="header-hero"
      :class="{ 'left-aligned-mode': leftAlignedMode }"
    >
      <span class="type-kicker">Eyebrow</span>
      <h1 class="type-hero">Cost comparison for food & beverage businesses</h1>
      <h2 class="type-body">
        Don't let your profits get toasted. Square Plus includes essential tools
        like online ordering, loyalty, and staff management that others charge
        extra for. On average, total costs for F&B merchants are 24% lower with
        Square<sup>1</sup>.
      </h2>
    </header>

    <section
      class="pricing-cards"
      :class="{ 'left-aligned-mode': leftAlignedMode }"
    >
      <div class="pricing-cards-container">
        <header
          v-if="inputMode === 'sliders'"
          class="header-pricing-cards"
          :class="{ 'left-aligned-mode': leftAlignedMode }"
        >
          <div class="header-content">
            <h3 class="type-heading-500">Customize you comparison</h3>
            <p
              v-if="!leftAlignedMode"
              class="type-body text-muted"
            >
              Adjust your location count and select the specific tools you need
              to see a personalized cost breakdown. We’ve matched our Square
              Plus features to leading alternatives to help you find the most
              accurate total cost for your business.
            </p>
            <!-- <p class="type-body text-muted">
              Have a Toast quote or a recent invoice? Drag and drop it anywhere
              on this page or upload it and we'll map your existing costs
              directly to a Square Plus plan so you can see your exact
              savings<sup class="card-sup">1</sup>.
            </p>
            <button class="top-spacer btn-secondary type-body-medium">
                Upload
            </button> -->
          </div>
        </header>

        <div
          class="sliders-grid"
          :class="{
            'inline-dropdowns-mode': inputMode === 'inline-dropdowns',
            'stacked-dropdowns-mode': inputMode === 'stacked-dropdowns',
          }"
        >
          <template v-if="inputMode === 'sliders'">
            <Slider
              label="Locations:"
              v-model="locations"
              :min="0"
              :max="10"
              :show-contact-sales="showContactSalesOnLocations"
            />
            <Slider
              label="Kiosk devices:"
              v-model="kioskDevices"
              :min="0"
              :max="10"
              :show-contact-sales="showContactSalesOnKiosk"
            />
            <Slider
              label="KDS devices:"
              v-model="kdsDevices"
              :min="0"
              :max="10"
              :show-contact-sales="showContactSalesOnKDS"
            />
          </template>
          <template v-else-if="inputMode === 'inline-dropdowns'">
            <Dropdown
              label="Locations:"
              v-model="locations"
              :min="1"
              :max="10"
              variant="inline"
            />
            <Dropdown
              label="Kiosk devices:"
              v-model="kioskDevices"
              :min="0"
              :max="10"
              variant="inline"
            />
            <Dropdown
              label="KDS devices:"
              v-model="kdsDevices"
              :min="0"
              :max="10"
              variant="inline"
            />
          </template>
          <template v-else>
            <Dropdown
              label="Locations:"
              v-model="locations"
              :min="1"
              :max="10"
              variant="stacked"
            />
            <Dropdown
              label="Kiosk devices:"
              v-model="kioskDevices"
              :min="0"
              :max="10"
              variant="stacked"
            />
            <Dropdown
              label="KDS devices:"
              v-model="kdsDevices"
              :min="0"
              :max="10"
              variant="stacked"
            />
          </template>
        </div>

        <ul class="cards-list">
          <!-- Square Card -->
          <li class="pricing-card">
            <div class="card-header">
              <h4 class="type-subheading-300">Square</h4>
            </div>

            <div class="card-price">
              <p class="type-heading-700">
                {{ formatCurrency(squareMonthlyCost) }}
              </p>
              <p class="type-body text-muted">per month • Square Plus</p>
            </div>

            <div class="card-features">
              <div class="features-header">
                <p class="type-body-medium">Included features:</p>
              </div>

              <div class="features-list">
                <div class="feature-row">
                  <span class="type-body text-muted">SMS marketing</span>
                  <span class="type-body-medium">Standard</span>
                </div>
                <div class="feature-row">
                  <span class="type-body text-muted">Online ordering site</span>
                  <span class="type-body-medium">Standard</span>
                </div>
                <div class="feature-row">
                  <span class="type-body text-muted">Loyalty program</span>
                  <span class="type-body-medium">Standard</span>
                </div>
                <div class="gradient-overlay"></div>
                <a
                  href="#detailed-breakdown"
                  class="feature-link type-body-medium"
                  @click.prevent="scrollToBreakdown"
                  >See all features</a
                >
              </div>
            </div>
          </li>

          <!-- Toast Card -->
          <li class="pricing-card">
            <div class="card-header">
              <h4 class="type-subheading-300">Toast</h4>
            </div>

            <div class="card-price">
              <p class="type-heading-700">
                {{ formatCurrency(toastMonthlyCost) }}
              </p>
              <p class="type-body text-muted">
                per month • Toast equivalent plan<sup class="card-sup">1</sup>
              </p>
            </div>

            <div class="card-features">
              <div class="features-header">
                <p class="type-body-medium">Additional costs:</p>
              </div>

              <div class="features-list">
                <div class="feature-row">
                  <span class="type-body text-muted">SMS marketing</span>
                  <span class="type-body-medium">$50/month</span>
                </div>
                <div class="feature-row">
                  <span class="type-body text-muted">Online ordering site</span>
                  <span class="type-body-medium">$75/month</span>
                </div>
                <div class="feature-row">
                  <span class="type-body text-muted">Loyalty program</span>
                  <span class="type-body-medium">$50/month</span>
                </div>
                <div class="gradient-overlay"></div>
                <a
                  href="#"
                  class="feature-link type-body-medium hide"
                  >See all features</a
                >
              </div>
            </div>
          </li>

          <!-- Savings Card -->
          <li class="pricing-card savings-card">
            <div class="card-header">
              <h4 class="type-subheading-300">
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
                  Choose a platform that earns your business daily with
                  transparent pricing and no contracts.
                </p>
                <button class="btn-primary type-body-medium">
                  Get started with Square Plus
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section
      id="detailed-breakdown"
      class="breakdown-section"
    >
      <div class="breakdown-container">
        <div class="breakdown-table">
          <div class="table-header">
            <h3 class="type-heading-500">Detailed cost breakdown</h3>
            <p class="type-body-medium">
              Square: {{ formatCurrency(squareMonthlyCost) }} /mo.
            </p>
            <p class="type-body-medium ml-1">
              Toast: {{ formatCurrency(toastMonthlyCost) }} /mo.
            </p>
          </div>

          <div class="table-row">
            <div class="feature-cell">
              <input
                type="checkbox"
                v-model="features.smsMarketing"
                class="custom-checkbox"
              />
              <p class="type-body text-muted">SMS marketing</p>
            </div>
            <p class="type-body value-cell">Standard</p>
            <p class="type-body value-cell-right">+$50/month</p>
          </div>

          <div class="table-row">
            <div class="feature-cell">
              <input
                type="checkbox"
                v-model="features.onlineOrdering"
                class="custom-checkbox"
              />
              <p class="type-body text-muted">Online ordering site</p>
            </div>
            <p class="type-body value-cell">Standard</p>
            <p class="type-body value-cell-right">+$75/month</p>
          </div>

          <div class="table-row">
            <div class="feature-cell">
              <input
                type="checkbox"
                v-model="features.loyalty"
                class="custom-checkbox"
              />
              <p class="type-body text-muted">Loyalty program</p>
            </div>
            <p class="type-body value-cell">Standard</p>
            <p class="type-body value-cell-right">+$50/month</p>
          </div>

          <div class="table-row">
            <div class="feature-cell">
              <input
                type="checkbox"
                v-model="features.staffManagement"
                class="custom-checkbox"
              />
              <p class="type-body text-muted">Staff management</p>
            </div>
            <p class="type-body value-cell">Standard</p>
            <p class="type-body value-cell-right">+$149/month</p>
          </div>

          <div class="table-row">
            <div class="feature-cell">
              <input
                type="checkbox"
                v-model="features.giftCards"
                class="custom-checkbox"
              />
              <p class="type-body text-muted">Gift cards</p>
            </div>
            <p class="type-body value-cell">Standard</p>
            <p class="type-body value-cell-right">+$25/month</p>
          </div>

          <div class="table-row">
            <div class="feature-cell">
              <input
                type="checkbox"
                v-model="features.qrCode"
                class="custom-checkbox"
              />
              <p class="type-body text-muted">QR code ordering</p>
            </div>
            <p class="type-body value-cell">Standard</p>
            <p class="type-body value-cell-right">+$20/month</p>
          </div>

          <div class="table-row">
            <div class="feature-cell">
              <input
                type="checkbox"
                v-model="features.customerDirectory"
                class="custom-checkbox"
              />
              <p class="type-body text-muted">Customer directory</p>
            </div>
            <p class="type-body value-cell">Standard</p>
            <p class="type-body value-cell-right">+$30/month</p>
          </div>

          <div class="table-row">
            <div class="feature-cell">
              <input
                type="checkbox"
                v-model="features.emailMarketing"
                class="custom-checkbox"
              />
              <p class="type-body text-muted">Email marketing</p>
            </div>
            <p class="type-body value-cell">Standard</p>
            <p class="type-body value-cell-right">+$50/month</p>
          </div>
        </div>
      </div>
    </section>

    <Testomonial class="testimonial-section" />

    <section class="disclosure-section">
      <div class="disclosure-container">
        <div class="disclosure-card">
          <div class="disclosure-content">
            <!-- <div class="disclosure-heading">
              <h4 class="type-subheading-300">Disclosure</h4>
            </div> -->
            <p class="font-size-auxiliary text-muted">
              <sup class="card-sup">1</sup>Total cost of ownership for Toast is
              based on publicly available rates and research as of January 8,
              2026. Since Toast doesn't publicly display all add-on pricing,
              some figures are estimates based on industry standards. Actual
              costs may vary based on your contract terms, hardware needs, or
              location. Contact Toast directly for a personalized quote.
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
  }

  .header-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin: 6.4rem auto 8.8rem;

    h1,
    h2 {
      text-align: center;
    }

    h1 {
      max-width: 17ch;
    }

    h2 {
      max-width: 88ch;
      color: $text-body-muted;
    }

    // @include breakpoint(md) {
    //   width: grid-width(7);
    // }

    &.left-aligned-mode {
      align-items: flex-start;
      max-width: 160rem;
      padding: 0 10.8rem;
      margin-bottom: 5.6rem;

      @include breakpoint(md) {
        padding: 0 2rem;
      }

      @include breakpoint(mdl) {
        width: grid-width(10);
      }

      h1,
      h2 {
        text-align: left;
      }
    }
  }

  // Customization Section
  .customization-section {
    padding: 0 2rem;
    margin: 0 auto 6.4rem;
    max-width: 160rem;
  }

  .customization-container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 1.6rem 0;

    h3 {
      color: $color-neutral-000;
    }
  }

  .sliders-grid {
    display: flex;
    flex-direction: column;
    gap: 8.8rem;

    @include breakpoint(md) {
      flex-direction: row;
      gap: 8.8rem;
    }

    &.inline-dropdowns-mode {
      flex-direction: row;
      gap: 4rem;
      align-items: center;
      padding: 2.4rem 0;

      > *:not(:last-child)::after {
        content: '';
        position: absolute;
        right: 0rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 2rem;
        background: rgba(0, 0, 0, 0.3);
      }

      > * {
        position: relative;
        padding-right: 1.6rem;
      }
    }

    &.stacked-dropdowns-mode {
      flex-direction: column;
      gap: 2.4rem;
      padding: 0;

      .dropdown-container {
        width: 32%;
      }

      @include breakpoint(md) {
        flex-direction: row;
      }
    }
  }

  .pricing-cards {
    padding: 3.2rem 0 6.4rem;
    width: 100%;
    background: $color-neutral-900;

    &.left-aligned-mode {
      background: #fff;
    }
  }

  .pricing-cards-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: 0 auto;
    padding: 0 10.8rem;
    max-width: 160rem;

    @include breakpoint(md) {
      //   border: 1px solid red;
      padding: 0 2rem;
    }

    @include breakpoint(mdl) {
      //   border: 1px solid blue;
      width: grid-width(10);
    }

    .pricing-cards.left-aligned-mode & {
      gap: 2.4rem;
    }
  }

  .header-pricing-cards {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    padding: 2.4rem 0;

    @include breakpoint(md) {
      //   flex-direction: column;
      //   align-items: flex-start;
    }

    &.left-aligned-mode {
      align-items: flex-start;

      .header-content {
        h3 {
          text-align: left;
        }
      }
    }
  }

  .header-content {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    flex: 1;

    h3 {
      color: $color-neutral-000;
    }

    p {
      max-width: 71.4rem;
    }
  }

  // Cards List
  .cards-list {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;

    @include breakpoint(md) {
      flex-direction: row;
    }
  }

  .pricing-card {
    flex: 1;
    background: $color-neutral-1000;
    border-radius: 1rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .pricing-cards.left-aligned-mode & {
      background: #f7f6f5;
    }

    &.savings-card {
      background: $color-neutral-900;
      border: 1px solid $border-muted;

      .pricing-cards.left-aligned-mode & {
        background: #f7f6f5;
      }
    }
  }

  .card-header {
    padding-bottom: 3rem;
    border-bottom: 1px solid $border-muted;
    position: relative;

    h4 {
      color: $color-neutral-000;
    }
  }

  .card-sup {
    font-family: var(--font-cash-sans);
    font-size: 1.2rem;
    color: $color-neutral-300;
    font-style: normal;
    font-weight: 400;
    vertical-align: super;
    line-height: 0;
  }

  .card-price {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p:first-child {
      color: $color-neutral-000;
    }
  }

  .card-features {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .features-header {
    padding-bottom: 2rem;
    border-bottom: 1px solid $border-muted;

    p {
      color: $color-neutral-000;
    }
  }

  .features-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;

    .gradient-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 12rem;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(255, 255, 255, 1) 100%
      );
      pointer-events: none;
      z-index: var(--z1);

      .pricing-cards.left-aligned-mode & {
        background: linear-gradient(
          to bottom,
          rgba(247, 246, 245, 0) 0%,
          rgba(247, 246, 245, 0.6) 50%,
          rgba(247, 246, 245, 1) 100%
        );
      }
    }
  }

  .feature-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    span:first-child {
      flex: 1;
    }

    span:last-child {
      flex: 1;
      text-align: right;
      color: $color-neutral-000;
    }
  }

  .feature-link {
    padding-top: 1.6rem;
    padding-bottom: 0.2rem;
    color: $color-neutral-000;
    text-decoration: none;
    width: fit-content;
    cursor: pointer;
    display: inline-flex;
    gap: 0.4rem;
    align-items: center;
    position: relative;
    border-bottom: 1px solid transparent;
    z-index: 2;

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
  }

  // Savings Card Specific
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
  }

  .btn-secondary {
    background: transparent;
    color: $button-cta-text-secondary;
    border: 1px solid $button-cta-stroke-secondary;
    border-radius: 5rem;
    min-width: 12rem;
    padding: 1rem 2rem;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .top-spacer {
    margin-top: 1rem;
  }

  .hide {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  .ml-1 {
    transform: translateX(1rem);
  }

  // Breakdown Section
  .breakdown-section {
    margin: 0 auto;
    padding: 6.4rem 0 0;
    width: 100%;
    background: $color-neutral-1000;
    @include breakpoint(md) {
      //   width: grid-width(11);
    }
  }

  .breakdown-container {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 0 auto;
    padding: 0 10.8rem;
    max-width: 160rem;

    @include breakpoint(md) {
      padding: 0 2rem;
    }

    @include breakpoint(mdl) {
      width: grid-width(9);
    }
  }

  .testimonial-section {
    @include breakpoint(md) {
      margin: 0 auto !important;
      width: grid-width(9.5) !important;
    }
  }

  .breakdown-table {
    display: flex;
    flex-direction: column;
    padding: 0 0.2rem;
  }

  .table-header {
    display: flex;
    gap: 4.7rem;
    align-items: baseline;
    padding: 2rem 0;

    h3 {
      flex: 1;
      color: $color-neutral-000;
      white-space: nowrap;
    }

    p {
      color: $color-neutral-000;
      white-space: nowrap;
      width: 12.1rem;
      text-align: center;
    }
  }

  .table-row {
    display: flex;
    gap: 4.7rem;
    align-items: center;
    padding: 2rem 0;
    border-top: 1px solid $border-muted;
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

  // Disclosure Section
  .disclosure-section {
    margin: 6.4rem auto 0;
    padding: 6.4rem 0;
    width: 100%;
    background: $background-accent;
  }

  .disclosure-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    // padding: 0 10.8rem;
    // max-width: 160rem;
  }

  .disclosure-card {
    // background: $background-accent;
    border-radius: 1rem;
    padding: 8rem 3rem;
  }

  .disclosure-content {
    display: flex;
    gap: 2.9rem;
    align-items: flex-start;

    @include breakpoint(md) {
      flex-direction: column;
      gap: 1.6rem;
      //   max-width: 160rem;
      width: grid-width(10);
      margin: 0 auto;
    }

    p {
      //   width: grid-width(8);
      flex: 1;
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
  import Slider from '@/components/Slider.vue'
  import Dropdown from '@/components/Dropdown.vue'

  const locations = ref(1)
  const kioskDevices = ref(0)
  const kdsDevices = ref(0)
  const inputMode = ref<'sliders' | 'inline-dropdowns' | 'stacked-dropdowns'>(
    'sliders',
  )
  const leftAlignedMode = ref(false)

  // Feature checkboxes state
  const features = ref({
    smsMarketing: true,
    onlineOrdering: true,
    loyalty: true,
    staffManagement: true,
    giftCards: true,
    qrCode: true,
    customerDirectory: true,
    emailMarketing: true,
  })

  // Enforce minimum value of 1 for locations
  watch(locations, (newValue) => {
    if (newValue < 1) {
      locations.value = 1
    }
  })

  // Base pricing per location
  const SQUARE_BASE_PRICE = 114
  const TOAST_BASE_PRICE = 424

  // Device pricing (Square includes these, Toast charges extra)
  const SQUARE_KIOSK_PRICE = 0 // Included in Square Plus
  const TOAST_KIOSK_PRICE = 50
  const SQUARE_KDS_PRICE = 0 // Included in Square Plus
  const TOAST_KDS_PRICE = 40

  // Feature pricing (Toast additional costs, Square includes all)
  const FEATURE_COSTS = {
    smsMarketing: 50,
    onlineOrdering: 75,
    loyalty: 50,
    staffManagement: 149,
    giftCards: 25,
    qrCode: 20,
    customerDirectory: 30,
    emailMarketing: 50,
  }

  // Computed pricing
  const squareMonthlyCost = computed(() => {
    return (
      SQUARE_BASE_PRICE * locations.value +
      SQUARE_KIOSK_PRICE * kioskDevices.value +
      SQUARE_KDS_PRICE * kdsDevices.value
    )
  })

  const toastMonthlyCost = computed(() => {
    // Calculate base Toast cost
    let cost =
      TOAST_BASE_PRICE * locations.value +
      TOAST_KIOSK_PRICE * kioskDevices.value +
      TOAST_KDS_PRICE * kdsDevices.value

    // Add feature costs if checked
    if (features.value.smsMarketing) cost += FEATURE_COSTS.smsMarketing
    if (features.value.onlineOrdering) cost += FEATURE_COSTS.onlineOrdering
    if (features.value.loyalty) cost += FEATURE_COSTS.loyalty
    if (features.value.staffManagement) cost += FEATURE_COSTS.staffManagement
    if (features.value.giftCards) cost += FEATURE_COSTS.giftCards
    if (features.value.qrCode) cost += FEATURE_COSTS.qrCode
    if (features.value.customerDirectory)
      cost += FEATURE_COSTS.customerDirectory
    if (features.value.emailMarketing) cost += FEATURE_COSTS.emailMarketing

    return cost
  })

  const monthlySavings = computed(() => {
    return toastMonthlyCost.value - squareMonthlyCost.value
  })

  const annualSavings = computed(() => {
    return monthlySavings.value * 12
  })

  const savingsPercentage = computed(() => {
    if (toastMonthlyCost.value === 0) return 0
    return Math.round((monthlySavings.value / toastMonthlyCost.value) * 100)
  })

  // Format currency
  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`
  }

  // Only show "Contact sales" on the first slider that reaches 10+
  const showContactSalesOnLocations = computed(() => {
    return locations.value >= 10
  })

  const showContactSalesOnKiosk = computed(() => {
    return !showContactSalesOnLocations.value && kioskDevices.value >= 10
  })

  const showContactSalesOnKDS = computed(() => {
    return (
      !showContactSalesOnLocations.value &&
      !showContactSalesOnKiosk.value &&
      kdsDevices.value >= 10
    )
  })

  // Smooth scroll to breakdown section
  const scrollToBreakdown = () => {
    const element = document.getElementById('detailed-breakdown')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  // Toggle between sliders and dropdowns with uppercase 'D'
  // Cycle through input modes with uppercase 'D'
  // Toggle left-aligned layout with uppercase 'L'
  // Navigate to aside page with right arrow key
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'D' && event.shiftKey) {
      // Shift + D - cycle through modes
      if (inputMode.value === 'sliders') {
        inputMode.value = 'inline-dropdowns'
      } else if (inputMode.value === 'inline-dropdowns') {
        inputMode.value = 'stacked-dropdowns'
      } else {
        inputMode.value = 'sliders'
      }
    } else if (event.key === 'L' && event.shiftKey) {
      // Shift + L - toggle left-aligned mode
      leftAlignedMode.value = !leftAlignedMode.value
    } else if (event.key === 'ArrowRight') {
      // Right arrow - navigate to aside page
      navigateTo('/aside')
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyPress)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyPress)
  })
</script>
