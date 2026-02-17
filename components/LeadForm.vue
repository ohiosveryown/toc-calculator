<template>
  <section class="passive-lead-form">
    <div class="lead-container">
      <h2 class="type-heading-800">Keep more of what you&nbsp;make</h2>
      <div class="content">
        <p class="type-subheading-200">
          Learn how top-tier businesses manage their cash flow and keep their
          margins high with Square. No hidden costs, just growth.
        </p>
        <div class="input-container">
          <input
            type="text"
            class="lead-input"
            placeholder="Email address"
          />
          <button class="btn-primary">Submit</button>
        </div>
        <span class="disclosure text-muted"
          >*This information may be transcribed, used, and stored by third
          parties in accordance with our Privacy Policy.</span
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '~/style/grid.scss';
  @import '~/style/colors.scss';
  @import '~/style/type.scss';

  .passive-lead-form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin: 0 auto;
    padding: 0 2rem;
    background: $background-accent;
    @include breakpoint(md) {
      padding: 0;
    }
  }

  .lead-container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    text-align: center;

    .content {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      align-items: center;
    }

    .input-container {
      display: flex;
      gap: 1.2rem;
      justify-content: center;
      width: 100%;
      max-width: 48rem;
    }

    @include breakpoint(md) {
      gap: 4.2rem;
      flex-direction: column;
      margin: 0 auto;
      padding: 11.2rem 0 4.8rem;
      max-width: 160rem;
      width: grid-width(11);
      text-align: center;
      align-items: center;

      h2 {
        // margin-right: grid-width(1);
        // width: grid-width(4.5);
      }

      .input-container {
        max-width: none;
      }
    }
  }

  .content {
    align-items: center;

    @include breakpoint(lg) {
      width: grid-width(5);
    }
  }

  .disclosure {
    transform: translateY(-1rem);
    @include breakpoint(lg) {
      width: grid-width(8);
    }
  }

  .lead-input {
    width: 100%;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    background: $color-neutral-1000;
    border: 1px solid $border-muted;
    font-family: inherit;
    font-size: 1.6rem;
    color: $color-neutral-200;
    transition: border-color 0.2s ease;

    &::placeholder {
      color: $text-body-muted;
    }

    &:focus {
      outline: none;
      border-width: 2px;
      border-color: $button-cta-fill-primary;
      padding: calc(1.2rem - 1px) calc(1.6rem - 1px); // compensate for thicker border
    }
  }

  .btn-primary {
    font-family: var(--font-cash-sans-medium);
    font-size: 1.6rem;
    font-weight: var(--font-weight-medium);
    padding: 1rem 3.2rem;
    border-radius: 5rem;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    background: $button-cta-fill-primary;
    color: $button-cta-text-primary;
    border: none;
  }
</style>
