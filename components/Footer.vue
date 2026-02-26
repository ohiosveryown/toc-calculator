<template>
  <footer>
    <!-- <p>
      This calculator provides estimates for illustrative purposes only. Results
      are based on the information you provide and publicly available competitor
      pricing sourced from Merchant Maverick as of [Month Day, Year]. Pricing,
      features, and terms are subject to change without notice. Actual costs
      will vary based on your business needs, transaction volume, and selected
      plan. For the most accurate comparison, upload your current bill or
      contact the provider directly. Please consult with your business advisor
      on the best solution for you.
    </p> -->
    <p>
      Total cost of ownership for Toast is based on publicly available rates and
      research as of January 8, 2026. Since Toast doesn't publicly display all
      add-on pricing, some figures are estimates based on industry standards.
      Actual costs may vary based on your contract terms, hardware needs, or
      location. Contact Toast directly for a personalized quote.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
  @import '~/style/grid.scss';
  @import '~/style/colors.scss';
  footer {
    // margin-top: 6.4rem;
    margin: 0 auto;
    padding: 6.4rem 2.4rem 2rem;
    width: 100vw;
    height: 72rem;
    background: $color-neutral-000;
    color: $color-neutral-300;
    @include breakpoint(md) {
      padding: 6.4rem 8rem 2rem;
    }
  }

  p {
    margin-bottom: 2rem;
  }
</style>
