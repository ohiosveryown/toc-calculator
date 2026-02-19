<template>
  <div class="app">
    <HeroBg />

    <!-- <header class="header-hero scroll-fade-in">
        <span class="type-kicker">MAXIMIZE YOUR MARGINS</span>
        <h1 class="type-heading-800">
          Compare total costs for your food & beverage business
        </h1>
        <p
          style="display: none"
          class="type-body text-muted"
        >
          Don't let your profits get toasted. Square Plus includes essential tools
          like online ordering, SMS marketing, and staff management that others
          charge extra for. F&B merchants save on average 24% with
          Square<sup>1</sup>.
        </p>
      </header> -->

    <section class="pricing-section scroll-fade-in">
      <div class="pricing-container">
        <div class="pricing-header">
          <header class="customization-header">
            <h3 class="type-subheading-400">
              Customize your Square Plus setup
            </h3>
            <!-- <p class="type-body text-muted">
                  Have a Toast quote or a recent invoice? Drag and drop it anywhere
                  on this page or upload it and we’ll map your existing costs
                  directly to a Square Plus plan so you can see your exact savings1.
                </p> -->
            <!-- <p class="type-body text-muted">
                  Don't let your profits get toasted. Square Plus includes essential
                  tools like online ordering, SMS marketing, and staff management
                  that others charge extra for. F&B merchants save on average 24%
                  with Square<sup>1</sup>.
                </p> -->
            <p class="type-body text-muted">
              Scale your operation without the contract traps. Build your bundle
              below to see how owning your hardware outright increases your
              total annual savings. No leases, no "locked-in" financing—just the
              tools you need to grow on your own terms. Learn more about Square
              <span class="link">hardware here</span>.
            </p>
          </header>

          <div class="steppers-grid">
            <div class="steppers">
              <StepperImg
                class="stepper-spacing"
                label="Locations"
                image="/img/stepper-location@2x.png"
                v-model="locations"
                :min="1"
                :max="99"
              />
              <StepperImg
                v-if="activeDeviceTypes.includes('Kiosks')"
                class="stepper-spacing"
                label="Kiosks"
                image="/img/stepper-kiosk@2x.png"
                v-model="kioskDevices"
                :min="0"
                :max="99"
              />
              <StepperImg
                v-if="activeDeviceTypes.includes('KDS devices')"
                class="stepper-spacing"
                label="KDS devices"
                image="/img/stepper-kds@2x.png"
                v-model="kdsDevices"
                :min="0"
                :max="99"
              />
              <StepperImg
                v-if="activeDeviceTypes.includes('Handheld')"
                class="stepper-spacing"
                label="Handheld"
                image="/img/handheld@2x.png"
                v-model="handheldDevices"
                :min="0"
                :max="99"
              />
              <div
                v-if="showAddHardwareDropdown"
                ref="addHardwareRef"
                class="add-hardware-wrap stepper-spacing"
              >
                <label class="add-hardware-label type-body-medium"
                  >Add hardware</label
                >
                <div class="add-hardware-select-wrap">
                  <button
                    type="button"
                    class="add-hardware-select type-body"
                    :class="{ 'is-open': addHardwareOpen }"
                    aria-haspopup="listbox"
                    :aria-expanded="addHardwareOpen"
                    aria-label="Add hardware device type"
                    @click="addHardwareOpen = !addHardwareOpen"
                  >
                    <span
                      class="add-hardware-select-text"
                      :class="{ 'is-placeholder': !addHardwareDevice }"
                    >
                      {{ addHardwareDevice || 'Select device' }}
                    </span>
                  </button>
                  <svg
                    class="add-hardware-chevron"
                    :class="{ 'is-open': addHardwareOpen }"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.70703 11.7071C8.31651 12.0976 7.68334 12.0976 7.29282 11.7071L1.29282 5.70711L2.70703 4.29289L7.99992 9.58579L13.2928 4.29289L14.707 5.70711L8.70703 11.7071Z"
                    />
                  </svg>
                  <Transition name="add-hardware-drop">
                    <ul
                      v-show="addHardwareOpen"
                      class="add-hardware-list"
                      role="listbox"
                      aria-label="Device type"
                    >
                      <li
                        v-for="opt in addHardwareOptions"
                        :key="opt"
                        class="add-hardware-option type-body"
                        :class="{
                          'is-selected': addHardwareDevice === opt,
                          'is-added': isHardwareOptionAdded(opt),
                        }"
                        role="option"
                        :aria-selected="addHardwareDevice === opt"
                        @click="selectAddHardware(opt)"
                      >
                        <span
                          v-if="isHardwareOptionAdded(opt)"
                          class="add-hardware-check"
                          aria-hidden="true"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.207 4.20718C13.5975 3.81665 13.5975 3.18349 13.207 2.79297C12.8165 2.40244 12.1833 2.40244 11.7928 2.79297L6.5 8.08578L4.70711 6.29289C4.31658 5.90237 3.68342 5.90237 3.29289 6.29289C2.90237 6.68342 2.90237 7.31658 3.29289 7.70711L5.79289 10.2071C6.18342 10.5976 6.81658 10.5976 7.20711 10.2071L13.207 4.20718Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <span
                          v-else
                          class="add-hardware-check-placeholder"
                        />
                        <span class="add-hardware-option-label">{{ opt }}</span>
                      </li>
                    </ul>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
          <Transition name="stepper-sales-fade">
            <p
              v-if="showHighVolumeMessage"
              class="stepper-sales-message type-body text-muted"
            >
              Managing a large operation? We can help.

              <!-- That's a lot of {{ highVolumeMessageLabel }}. We can help out with
                that by -->

              We offer tailored solutions and bulk discounts for larger teams.

              <a
                href="#"
                class="stepper-sales-link"
                >Talk to an expert</a
              >
              to get started.
            </p>
          </Transition>
        </div>

        <div class="content-grid">
          <div class="features-table">
            <div class="table-header">
              <p class="type-body-medium">Feature</p>
              <p
                class="type-body-medium text-center"
                style="transform: translateX(0.4rem)"
              >
                Square Plus
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
              <p class="type-body value-cell">$0</p>
              <p class="type-body value-cell-right">{{ feature.cost }}</p>
            </div>

            <div class="processing-fees-heading-wrap">
              <p class="processing-fees-heading type-body-medium">
                Processing fees
              </p>
              <span class="processing-fee-tooltip-trigger">
                <span
                  class="feature-info-icon processing-fees-header-icon"
                  aria-describedby="processing-fee-tooltip-header"
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
                <span
                  id="processing-fee-tooltip-header"
                  class="processing-fee-tooltip"
                  role="tooltip"
                >
                  Square Plus subscribers get flat-rate processing with no
                  hidden fees. See your potential savings with our
                  <a
                    href="#"
                    class="processing-fee-tooltip-link"
                    >fee calculator here.</a
                  >
                </span>
              </span>
            </div>
            <div
              v-for="fee in processingFees"
              :key="fee.id"
              class="table-row"
            >
              <div class="feature-cell">
                <span
                  class="checkbox-placeholder"
                  aria-hidden="true"
                ></span>
                <p class="type-body feature-name-with-icon text-muted">
                  {{ fee.name }}
                </p>
              </div>
              <p class="type-body value-cell">{{ fee.square }}</p>
              <p class="type-body value-cell-right">{{ fee.toast }}</p>
            </div>

            <!-- <div class="table-row table-row-total">
                <div class="feature-cell">
                  <p class="type-subheading-200">Total cost</p>
                </div>
                <p class="value-cell type-subheading-200">
                  {{ formatCurrency(squarePrice) }}/month
                </p>
                <p class="value-cell-right type-subheading-200">
                  {{ formatCurrency(toastPrice) }}/month<sup
                    class="total-footnote"
                    >1</sup
                  >
                </p>
              </div> -->
          </div>

          <div class="aside-column">
            <div
              class="glpyhs-list-wrapper"
              :class="{
                'glpyhs-list-wrapper--scrolled': glyphsScrolledLeft,
                'glpyhs-list-wrapper--marquee-hidden': !asideMarqueeVisible,
              }"
            >
              <div
                class="glpyhs-list-scroll"
                ref="glyphScrollRef"
                @scroll="onGlyphScroll"
              >
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
            </div>
            <div
              class="aside-card-frame"
              :class="{
                'aside-card-frame--marquee-hidden': !asideMarqueeVisible,
              }"
            >
              <div
                class="aside-card-marquee aside-card-marquee--top"
                aria-hidden="true"
              >
                <div class="aside-card-marquee__track">
                  <span
                    v-for="n in 8"
                    :key="'top-' + n"
                    class="aside-card-marquee__segment"
                    >{{ asideMarqueeText }}</span
                  >
                </div>
              </div>
              <div
                class="aside-card-marquee aside-card-marquee--right"
                aria-hidden="true"
              >
                <div
                  class="aside-card-marquee__track aside-card-marquee__track--vertical"
                >
                  <span
                    v-for="n in 8"
                    :key="'right-' + n"
                    class="aside-card-marquee__segment"
                    >{{ asideMarqueeText }}</span
                  >
                </div>
              </div>
              <div
                class="aside-card-marquee aside-card-marquee--bottom"
                aria-hidden="true"
              >
                <div class="aside-card-marquee__track">
                  <span
                    v-for="n in 8"
                    :key="'bottom-' + n"
                    class="aside-card-marquee__segment"
                    >{{ asideMarqueeText }}</span
                  >
                </div>
              </div>
              <div
                class="aside-card-marquee aside-card-marquee--left"
                aria-hidden="true"
              >
                <div
                  class="aside-card-marquee__track aside-card-marquee__track--vertical aside-card-marquee__track--vertical-down"
                >
                  <span
                    v-for="n in 8"
                    :key="'left-' + n"
                    class="aside-card-marquee__segment"
                    >{{ asideMarqueeText }}</span
                  >
                </div>
              </div>
              <div class="aside-card">
                <div class="card-header">
                  <h4 class="type-subheading-300">
                    <!-- No more crumbs: save {{ savingsPercentage }}%. -->
                    <!-- See your monthly difference -->
                    Save {{ formatCurrency(monthlySavings) }} per month
                    with&nbsp;Square&nbsp;Plus
                  </h4>
                  <!-- <span class="savings-badge savings-badge--above-header">
                    {{ formatCurrency(monthlySavings) }} in savings
                  </span> -->
                </div>

                <div class="card-savings">
                  <div class="savings-item savings-item-square">
                    <!-- <span class="savings-badge savings-badge--above-header">
                      {{ formatCurrency(monthlySavings) }} in savings
                    </span> -->
                    <p class="company">Square Plus</p>
                    <p class="type-heading-700">
                      {{ formatCurrency(squarePrice) }}
                    </p>
                    <p class="per-month text-muted">per month</p>
                  </div>
                  <div class="savings-item">
                    <!-- <span
                      style="opacity: 0"
                      class="savings-badge savings-badge--above-header"
                    >
                      {{ formatCurrency(monthlySavings) }} in savings
                    </span> -->
                    <p class="company">Toast</p>
                    <p class="type-heading-700">
                      {{ formatCurrency(toastPrice) }}
                    </p>
                    <p class="per-month text-muted">per month</p>
                  </div>
                </div>

                <div class="card-cta">
                  <!-- <div class="cta-header">
                    <p class="type-body-medium">
                      Don't let your profits get toasted. <br />Save
                      {{ savingsPercentage }}% with Square Plus.
                    </p>
                  </div> -->
                  <div class="cta-content">
                    <!-- <span class="savings-badge savings-badge--above-header">
                      {{ formatCurrency(monthlySavings) }} in savings
                    </span> -->
                    <p class="type-body">
                      Choose a platform that earns your business with
                      transparent pricing and no contracts.
                    </p>
                    <button class="btn-primary type-body-medium">
                      <span class="btn-primary__label btn-primary__label--short"
                        >Get started</span
                      >
                      <span class="btn-primary__label btn-primary__label--full"
                        >Get started with Square Plus</span
                      >
                    </button>
                    <small
                      >Estimates are for illustrative purposes only. Competitor
                      pricing via Merchant Maverick as of [Month 2025]. Actual
                      costs may vary.</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <ValueProp image-src="/img/value@2x.png" /> -->
    <div class="scroll-fade-in">
      <ValueProp video-src="/img/vid.mp4" />
    </div>

    <div class="scroll-fade-in">
      <Savings />
    </div>

    <div class="scroll-fade-in">
      <LeadForm />
    </div>

    <!-- <Testomonial /> -->

    <section class="disclosure-section scroll-fade-in">
      <div class="disclosure-container">
        <div class="disclosure-card">
          <div class="disclosure-content">
            <!-- <div class="disclosure-heading">
                  <h4 class="type-subheading-300">Disclosures</h4>
                </div> -->

            <p class="text-muted">
              This calculator provides estimates for illustrative purposes only.
              Results are based on the information you provide and publicly
              available competitor pricing sourced from Merchant Maverick as of
              [Month Day, Year]. Pricing, features, and terms are subject to
              change without notice. Actual costs will vary based on your
              business needs, transaction volume, and selected plan. For the
              most accurate comparison, upload your current bill or contact the
              provider directly. Please consult with your business advisor on
              the best solution for you.
            </p>
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
  @import '~/style/grid.scss';
  @import '~/style/colors.scss';

  small {
    color: $color-neutral-300;
    font-size: 1.25rem;
  }

  .app {
    margin: 0 auto;
    background: $color-neutral-1000;
  }

  /* Scroll-triggered fade-in (0 → 1 opacity) via Intersection Observer */
  .scroll-fade-in {
    opacity: 0;
    transition: opacity 0.6s ease-out;

    &.scroll-fade-in--visible {
      opacity: 1;
    }
  }

  .header-hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
    margin: 6.4rem auto 6.1rem;
    padding: 0 2rem;

    @include breakpoint(md) {
      padding: 0 2rem;
      max-width: 160rem;
      width: grid-width(11);
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
    padding: 0 2rem;

    @include breakpoint(md) {
      max-width: 160rem;
      width: grid-width(11);
    }
  }

  .pricing-header {
    display: flex;
    flex-direction: column;
    // gap: 3.2rem;
    position: relative;
    width: 100%;
    @include breakpoint(md) {
      // gap: 5.2rem;
    }
  }

  .customization-header {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 1.6rem 0 0;
    margin-bottom: 3.2rem;
    @include breakpoint(md) {
      p {
        max-width: 76ch;
      }
    }

    h3 {
      color: $color-neutral-000;
    }

    /* Prevent sup from adding extra top space to the line */
    sup {
      line-height: 0;
      vertical-align: super;
      font-size: 0.75em;
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
    gap: 2rem;
    flex-shrink: 0;
    flex-wrap: wrap;
    margin-bottom: 2.4rem;
    @include breakpoint(md) {
      //   gap: 2rem;
      flex-wrap: nowrap;
      margin-bottom: 0;
    }
  }

  .add-hardware-wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 12rem;
    width: 100%;
    @include breakpoint(md) {
      min-width: 16rem;
    }
  }

  .add-hardware-label {
    display: block;
    color: $color-neutral-000;
  }

  .add-hardware-select-wrap {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 5rem;
  }

  .add-hardware-select {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0.8rem 4rem 0.8rem 1.8rem;
    background: $color-neutral-1000;
    border: 1px solid $border-muted;
    border-radius: 10rem;
    color: $color-neutral-000;
    transition: border-color 0.2s ease;
    text-align: left;
    font: inherit;

    &:hover {
      border-color: $color-neutral-500;
    }

    &.is-open {
      border-color: $button-cta-fill-primary;
      outline: 2px solid $button-cta-fill-primary;
      outline-offset: 2px;
    }

    &:focus {
      outline: 2px solid $button-cta-fill-primary;
      outline-offset: 2px;
      border-color: $button-cta-fill-primary;
    }
  }

  .add-hardware-select-text.is-placeholder {
    opacity: 0.64;
    // color: $color-neutral-500;
  }

  .add-hardware-chevron {
    position: absolute;
    top: 50%;
    right: 1.6rem;
    transform: translateY(-50%);
    pointer-events: none;
    color: $color-neutral-200;
    transition: transform 0.2s ease;
    opacity: 0.64;

    &.is-open {
      transform: translateY(-50%) rotate(180deg);
    }
  }

  .add-hardware-list {
    position: absolute;
    top: calc(100% + 0.4rem);
    left: 0;
    right: 0;
    margin: 0;
    padding: 0.4rem 0;
    list-style: none;
    background: $color-neutral-1000;
    border: 1px solid $border-muted;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    z-index: 10;
    max-height: 20rem;
    overflow-y: auto;
    transition:
      opacity 0.15s ease,
      transform 0.15s ease;

    &.add-hardware-drop-enter-from,
    &.add-hardware-drop-leave-to {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  .add-hardware-option {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
    color: $color-neutral-000;
    transition: background-color 0.15s ease;

    &:hover {
      background: rgba($button-cta-fill-primary, 0.12);
    }

    &.is-selected {
      background: rgba($button-cta-fill-primary, 0.12);
    }
  }

  .add-hardware-check,
  .add-hardware-check-placeholder {
    flex-shrink: 0;
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-hardware-check {
    color: $color-neutral-200;
  }

  .add-hardware-option-label {
    flex: 1;
  }

  .aside-column {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    flex-shrink: 0;
    width: 100%;

    @include breakpoint(md) {
      margin-top: -0.8rem;
      gap: 0rem;
      width: grid-width(4);
      align-self: stretch; /* Fill row height so sticky card has room to stick */
    }
  }

  .glpyhs-list-wrapper {
    display: none;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    padding: 0.2rem 0;
    min-width: 0;
    width: 96%;
    /* Fixed height so aside card never moves when glyph count changes */
    height: 4.4rem; /* 4rem glyph + 0.2rem padding top/bottom */
    @include breakpoint(md) {
      display: inherit;
      transform: translateY(1.2rem);
    }

    &.glpyhs-list-wrapper--marquee-hidden {
      transform: translateY(0.6rem);
    }

    /* Left edge fade – only visible when list is scrolled */
    &::before {
      content: '';
      position: absolute;
      top: -0.5rem;
      left: 0;
      bottom: 0;
      width: 16rem;
      height: calc(100% + 1rem);
      background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 90%);
      pointer-events: none;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    &.glpyhs-list-wrapper--scrolled::before {
      opacity: 1;
    }

    /* Right edge fade */
    &::after {
      content: '';
      position: absolute;
      top: -0.5rem;
      right: 0;
      bottom: 0;
      width: 16rem;
      height: calc(100% + 1rem);
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 90%);
      pointer-events: none;
      z-index: 1;
    }
  }

  .glpyhs-list-scroll {
    padding: 0.2rem 0;
    overflow-x: auto;
    height: 100%;
    scroll-behavior: smooth;
    /* Hide scrollbar while keeping scroll */
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
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
    gap: 1.3rem;
    align-items: center;
    margin-right: 1.2rem;
    margin-left: 1.6rem;
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
    transform: rotate(22deg);
  }

  .glpyh.glyph-rotate-7 {
    transform: rotate(5deg);
  }

  .glpyh {
    max-width: 3.6rem;
    max-height: 3.6rem;
    min-width: 3.6rem;
    min-height: 3.6rem;
    object-fit: contain;
  }

  .stepper-sales-message {
    margin-top: 2rem;
    @include breakpoint(md) {
      max-width: 64ch;
    }
    // opacity fade-in when message appears
    &.stepper-sales-fade-enter-from {
      opacity: 0;
    }
    &.stepper-sales-fade-enter-to {
      opacity: 1;
    }
    &.stepper-sales-fade-enter-active {
      transition: opacity 0.3s ease;
    }
    // position: absolute;
    // top: 4rem;
    // right: 0;
    // margin: 0;
    // transform: translateY(-0.8rem);
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
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 2rem;

    @include breakpoint(md) {
      flex-direction: row;
      align-items: stretch; /* So aside-column is tall enough for sticky card */
    }
  }

  .features-table {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;

    @include breakpoint(md) {
      padding-right: grid-width(0.75);
    }
  }

  .processing-fees-heading-wrap {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    // padding: 2rem 0 0;
    margin: 0;
    border-top: 1px solid $border-muted;
  }

  .processing-fees-heading {
    padding: 2rem 0;
    margin: 0;
    color: $color-neutral-000;
  }

  .processing-fees-header-icon {
    transform: translateY(0.2rem);
    flex-shrink: 0;
  }

  .checkbox-placeholder {
    display: none;
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }

  .table-header {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    padding: 2rem 0;

    @include breakpoint(lg) {
      gap: 5.4rem;
    }

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
    gap: 0rem;
    align-items: center;
    padding: 2rem 0;
    border-top: 1px solid $border-muted;
    @include breakpoint(lg) {
      gap: 4.7rem;
    }
  }

  .table-row-total {
    padding-top: 2.4rem;
    border-top-width: 2px;

    .value-cell,
    .value-cell-right {
      white-space: nowrap;
    }

    .total-footnote {
      vertical-align: super;
      line-height: 0;
      font-size: 0.65em;
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

  .processing-fee-tooltip-trigger {
    position: relative;
    display: inline-flex;

    &:hover .processing-fee-tooltip,
    .processing-fee-tooltip:focus-within {
      opacity: 1;
      visibility: visible;
    }
  }

  .processing-fee-tooltip {
    position: absolute;
    bottom: 100%;
    left: 1.2rem;
    transform: translate(0, -0.4rem);
    padding: 1.2rem 1.6rem;
    background: $color-neutral-000;
    color: $color-neutral-1000;
    font-size: 1.4rem;
    line-height: 1.4;
    border-radius: 0.6rem;
    white-space: normal;
    width: 44rem;
    max-width: calc(100vw - 4rem);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.15s ease,
      visibility 0.15s ease;
    z-index: var(--z1);
    text-align: left;

    .processing-fee-tooltip-link {
      color: inherit;
      text-decoration: underline;
      text-underline-offset: 0.2em;
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

  /* Frame around aside card with scrolling marquee on all four sides */
  .aside-card-frame {
    position: relative;
    /* Extra padding = gap between card and 2.5rem marquee strips; bottom/right slightly larger so gap matches top/left */
    padding: 3rem 3.2rem 3.2rem 3rem;
    width: 100%;

    &.aside-card-frame--marquee-hidden .aside-card-marquee {
      display: none;
    }
  }

  .aside-card-marquee {
    display: inherit;
    position: absolute;
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    // font-family: var(--font-cash-sans-medium);
    font-family: var(--font-cash-mono);
    font-size: 1.3rem;
    // font-weight: 600;
    line-height: var(--line-height-auxiliary);
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: $color-neutral-500;

    &::before,
    &::after {
      content: '';
      position: absolute;
      pointer-events: none;
      z-index: 1;
    }

    /* Horizontal strips: fade at left and right edges */
    &--top,
    &--bottom {
      &::before,
      &::after {
        top: 0;
        bottom: 0;
        width: 8rem;
      }

      &::before {
        left: 0;
        background: linear-gradient(
          to right,
          $color-neutral-1000 40%,
          transparent 100%
        );
      }

      &::after {
        right: 0;
        background: linear-gradient(
          to left,
          $color-neutral-1000 40%,
          transparent 100%
        );
      }
    }

    /* Vertical strips: fade at top and bottom edges */
    &--right,
    &--left {
      &::before,
      &::after {
        left: 0;
        right: 0;
        height: 8rem;
      }

      &::before {
        bottom: 0;
        background: linear-gradient(
          to top,
          $color-neutral-1000 10%,
          transparent 100%
        );
      }

      &::after {
        top: 0;
        background: linear-gradient(
          to bottom,
          $color-neutral-1000 10%,
          transparent 100%
        );
      }
    }

    &--top {
      display: none;
      top: 0;
      left: 0;
      right: 0;
      height: 2.5rem;
    }

    &--right {
      display: none;
      top: 2.5rem;
      right: 0;
      bottom: 2.5rem;
      width: 2.5rem;
    }

    &--bottom {
      bottom: 0;
      left: 0;
      right: 0;
      height: 2.5rem;

      bottom: -0.6rem;
    }

    &--left {
      display: none;
      top: 2.5rem;
      left: 0;
      bottom: 2.5rem;
      width: 2.5rem;
    }
  }

  .aside-card-marquee__track {
    display: flex;
    width: max-content;
    white-space: nowrap;
    animation: aside-marquee-h 18s linear infinite;

    &--reverse {
      animation: aside-marquee-h-reverse 18s linear infinite;
    }

    &--vertical {
      flex-direction: column;
      height: max-content;
      width: auto;
      white-space: nowrap;
      animation: aside-marquee-v 18s linear infinite;

      &.aside-card-marquee__track--vertical-down {
        animation: aside-marquee-v-down 18s linear infinite;
      }
    }
  }

  .aside-card-marquee__segment {
    flex-shrink: 0;
  }

  .aside-card-marquee--right .aside-card-marquee__segment,
  .aside-card-marquee--left .aside-card-marquee__segment {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    display: inline-block;
  }

  @keyframes aside-marquee-h {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-12.5%);
    }
  }

  @keyframes aside-marquee-h-reverse {
    from {
      transform: translateX(-12.5%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes aside-marquee-v {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-12.5%);
    }
  }

  @keyframes aside-marquee-v-down {
    from {
      transform: translateY(-12.5%);
    }
    to {
      transform: translateY(0);
    }
  }

  .aside-card {
    border-radius: 1rem;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    position: sticky;
    top: 2rem;
    background: $background-accent;

    @include breakpoint(lg) {
      position: sticky;
      top: 2.2rem;
      padding: 3rem;
      gap: 2.4rem;
    }
  }

  .card-header {
    display: flex;
    flex-direction: column;
    padding-bottom: 2.4rem;
    border-bottom: 1px solid $border-muted;

    h4 {
      //   margin-top: -0.4rem;
      color: $color-neutral-000;
    }
  }

  .card-savings {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    @include breakpoint(lg) {
      flex-direction: row;
      gap: 2rem;
    }
  }

  .savings-item {
    display: flex;
    flex-direction: column;
    //   flex: 1;
    gap: 0.2rem;

    @include breakpoint(mdl) {
      gap: 0.4rem;
    }

    p:first-child {
      color: $color-neutral-000;
    }
  }

  .company {
    font-family: var(--font-cash-sans-medium);
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
  }

  .savings-badge {
    display: inline-block;
    width: fit-content;
    margin-left: -0.1rem;
    padding: 0.4rem 0.8rem;
    background: $color-neutral-800;
    color: $color-neutral-000;
    border-radius: 5rem;
    margin-bottom: 0.4rem;
    font-family: var(--font-cash-sans-medium);
    font-size: 1.3rem;
    letter-spacing: 0.25px;

    &--spacer {
      visibility: hidden;
      pointer-events: none;
    }

    &--above-header {
      display: block;
      margin-bottom: 1.2rem;
    }
  }

  .savings-item-square {
    @include breakpoint(mdl) {
      margin-right: 6.4rem;
    }
  }

  .card-cta {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    // margin-top: 0.3rem;
    // padding-top: 0.3rem;
    // border-top: 1px solid $border-muted;
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
    gap: 1.8rem;
    // margin-top: 1.2rem;

    p {
      margin-top: -0.4rem;
      padding-bottom: 0.5rem;
    }

    .savings-badge {
      margin-left: -0.3rem;
      margin-bottom: 0rem;
    }
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

    &__label--short {
      display: inline;
    }
    &__label--full {
      display: none;
    }
    @include breakpoint(lg) {
      &__label--short {
        display: none;
      }
      &__label--full {
        display: inline;
      }
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
    padding: 0 1.2rem;
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

  .link {
    // color: #000000;
    text-decoration: underline;
    text-underline-offset: 0.2em;
    cursor: pointer;
  }
</style>

<script setup lang="ts">
  import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
  definePageMeta({
    layout: 'default',
  })

  const locations = ref(1)
  const kioskDevices = ref(0)
  const kdsDevices = ref(0)
  const handheldDevices = ref(0)
  const activeDeviceTypes = ref<string[]>([])
  const addHardwareDevice = ref('')
  const addHardwareOpen = ref(false)
  const addHardwareRef = ref<HTMLElement | null>(null)
  const addHardwareOptions = ['Kiosks', 'KDS devices', 'Handheld'] as const

  const showAddHardwareDropdown = computed(
    () => activeDeviceTypes.value.length < 3,
  )

  function isHardwareOptionAdded(option: string) {
    return activeDeviceTypes.value.includes(option)
  }

  function selectAddHardware(option: string) {
    if (activeDeviceTypes.value.includes(option)) {
      activeDeviceTypes.value = activeDeviceTypes.value.filter(
        (t) => t !== option,
      )
      if (option === 'Kiosks') kioskDevices.value = 0
      else if (option === 'KDS devices') kdsDevices.value = 0
      else if (option === 'Handheld') handheldDevices.value = 0
    } else {
      activeDeviceTypes.value = [...activeDeviceTypes.value, option]
      if (option === 'Kiosks') kioskDevices.value = 1
      else if (option === 'KDS devices') kdsDevices.value = 1
      else if (option === 'Handheld') handheldDevices.value = 1
    }
    addHardwareDevice.value = ''
    addHardwareOpen.value = false
  }

  watch(kioskDevices, (v) => {
    if (v === 0)
      activeDeviceTypes.value = activeDeviceTypes.value.filter(
        (t) => t !== 'Kiosks',
      )
  })
  watch(kdsDevices, (v) => {
    if (v === 0)
      activeDeviceTypes.value = activeDeviceTypes.value.filter(
        (t) => t !== 'KDS devices',
      )
  })
  watch(handheldDevices, (v) => {
    if (v === 0)
      activeDeviceTypes.value = activeDeviceTypes.value.filter(
        (t) => t !== 'Handheld',
      )
  })

  function onDocumentClick(e: MouseEvent) {
    if (
      addHardwareOpen.value &&
      addHardwareRef.value &&
      !addHardwareRef.value.contains(e.target as Node)
    ) {
      addHardwareOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', onDocumentClick)
  })
  onUnmounted(() => {
    document.removeEventListener('click', onDocumentClick)
  })

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

  // Show (raw - 1) glyphs: 0 when raw <= 1, 1 when raw = 2, etc. (no cap; images loop 1–16)
  const totalGlyphCount = computed(() => {
    const raw =
      locations.value +
      kioskDevices.value +
      kdsDevices.value +
      handheldDevices.value
    return Math.max(0, raw - 1)
  })

  const glyphItems = computed<number[]>(() =>
    Array.from({ length: totalGlyphCount.value }, (_, i) => i),
  )

  const glyphSrcByPosition = (position: number) => {
    const name = GLYPH_IMAGE_NAMES[position % GLYPH_IMAGE_COUNT]
    return `/img/${name}@3x.png`
  }

  const pulseLastGlyph = ref(false)
  watch(
    [locations, kioskDevices, kdsDevices, handheldDevices],
    (
      [newLoc, newKiosk, newKds, newHand],
      [oldLoc, oldKiosk, oldKds, oldHand],
    ) => {
      if (oldLoc === undefined) return
      const increased =
        newLoc! > oldLoc! ||
        newKiosk! > oldKiosk! ||
        newKds! > oldKds! ||
        newHand! > oldHand!
      if (increased && totalGlyphCount.value > 0) {
        pulseLastGlyph.value = true
        setTimeout(() => {
          pulseLastGlyph.value = false
        }, 350)
      }
    },
  )

  // Keep glyph list scrolled to the end so the latest glyphs are visible
  const glyphScrollRef = ref<HTMLElement | null>(null)
  const glyphsScrolledLeft = ref(false)

  function updateGlyphsScrolledLeft() {
    const el = glyphScrollRef.value
    glyphsScrolledLeft.value = el ? el.scrollLeft > 0 : false
  }

  function onGlyphScroll() {
    updateGlyphsScrolledLeft()
  }

  function scrollGlyphsToEnd() {
    nextTick(() => {
      const el = glyphScrollRef.value
      if (!el) return
      el.scrollLeft = el.scrollWidth - el.clientWidth
      updateGlyphsScrolledLeft()
    })
  }

  watch([glyphItems], scrollGlyphsToEnd)
  onMounted(() => {
    scrollGlyphsToEnd()
    updateGlyphsScrolledLeft()
  })

  // Enforce minimum value of 1 for locations
  watch(locations, (newValue) => {
    if (newValue < 1) {
      locations.value = 1
    }
  })

  const showHighVolumeMessage = computed(
    () =>
      locations.value > 10 ||
      kioskDevices.value > 10 ||
      kdsDevices.value > 10 ||
      handheldDevices.value > 10,
  )

  const highVolumeMessageLabel = computed(() => {
    const parts: string[] = []
    if (locations.value > 10) parts.push('locations')
    if (kioskDevices.value > 10) parts.push('kiosk devices')
    if (kdsDevices.value > 10) parts.push('KDS devices')
    if (handheldDevices.value > 10) parts.push('handheld devices')
    if (parts.length === 0) return 'locations/devices'
    if (parts.length === 1) return parts[0]
    if (parts.length === 2) return `${parts[0]} and ${parts[1]}`
    if (parts.length === 3) return `${parts[0]}, ${parts[1]}, and ${parts[2]}`
    return `${parts[0]}, ${parts[1]}, ${parts[2]}, and ${parts[3]}`
  })

  // Pricing constants
  const SQUARE_BASE_PRICE = 69
  const TOAST_BASE_PRICE = 69

  // Device pricing (Square includes these, Toast charges extra)
  const SQUARE_KIOSK_PRICE = 0
  const TOAST_KIOSK_PRICE = 50
  const SQUARE_KDS_PRICE = 0
  const TOAST_KDS_PRICE = 40
  const SQUARE_HANDHELD_PRICE = 0
  const TOAST_HANDHELD_PRICE = 30

  const FEATURE_COSTS = {
    sms: 50,
    online: 60,
    loyalty: 45,
    staff: 40,
    gift: 25,
    qr: 20,
    customer: 30,
    email: 35,
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
      cost: '+$60/month',
      checked: true,
    },
    {
      id: 'loyalty',
      name: 'Loyalty program',
      cost: '+$45/month',
      checked: true,
    },
    {
      id: 'staff',
      name: 'Staff management',
      cost: '+$40/month',
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
    { id: 'email', name: 'Email marketing', cost: '+$35/month', checked: true },
  ])

  const processingFees = ref([
    {
      id: 'tap',
      name: 'Tap, dip, or swipe processing fee',
      square: '2.5% + $0.15',
      toast: '2.49% + $0.15',
    },
    {
      id: 'online',
      name: 'Online ordering processing fee',
      square: '2.9% + $0.30',
      toast: '3.5% + $0.15',
    },
  ])

  // Computed pricing
  const squarePrice = computed(() => {
    return (
      SQUARE_BASE_PRICE * locations.value +
      SQUARE_KIOSK_PRICE * kioskDevices.value +
      SQUARE_KDS_PRICE * kdsDevices.value +
      SQUARE_HANDHELD_PRICE * handheldDevices.value
    )
  })

  const toastPrice = computed(() => {
    let cost =
      TOAST_BASE_PRICE * locations.value +
      TOAST_KIOSK_PRICE * kioskDevices.value +
      TOAST_KDS_PRICE * kdsDevices.value +
      TOAST_HANDHELD_PRICE * handheldDevices.value

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

  const asideMarqueeText = computed(
    () => `NO MORE CRUMBS • SAVE ${savingsPercentage.value}% per month •\u00A0`,
  )

  const asideMarqueeVisible = ref(true)

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
    if (event.shiftKey && event.key === 'M') {
      asideMarqueeVisible.value = !asideMarqueeVisible.value
    }
  }

  // Scroll fade-in: opacity 0 → 1 when elements enter viewport (Intersection Observer)
  let scrollFadeObserver: IntersectionObserver | null = null
  onMounted(() => {
    window.addEventListener('keydown', handleKeyPress)

    scrollFadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-fade-in--visible')
            scrollFadeObserver?.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px', // trigger when ~40px from bottom of viewport
        threshold: 0.1,
      },
    )
    document.querySelectorAll('.scroll-fade-in').forEach((el) => {
      scrollFadeObserver?.observe(el)
    })
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyPress)
    scrollFadeObserver?.disconnect()
    scrollFadeObserver = null
  })
</script>
