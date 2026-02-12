<template>
  <section class="mobile-app">
    <div class="mobile-app__container">
      <div class="mobile-app__left">
        <div class="mobile-app__visual">
          <img
            src="/img/mobile-app-hand@2x.png"
            alt="Hand holding mobile device with Square app"
            class="mobile-app__image"
          />
        </div>
        <div class="mobile-app__copy">
          <h2 class="mobile-app__title type-heading-700-serif">
            Try Square on your mobile device
          </h2>
          <p class="mobile-app__subtitle type-body-100">
            Download and explore the app to get started.
          </p>
        </div>
      </div>

      <div class="mobile-app__right">
        <p class="mobile-app__scan-label type-auxiliary">Scan to get started</p>
        <div class="mobile-app__qr-row">
          <div class="mobile-app__qr-block">
            <img
              src="/img/qr-ios.svg"
              alt="QR code for iOS App Store"
              class="mobile-app__qr"
            />
            <a
              href="#"
              class="mobile-app__link type-body-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              iOS
            </a>
          </div>
          <div class="mobile-app__qr-block">
            <img
              src="/img/qr-android.svg"
              alt="QR code for Android Play Store"
              class="mobile-app__qr"
            />
            <a
              href="#"
              class="mobile-app__link type-body-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .mobile-app {
    background-color: $color-neutral-000;
    padding: 4rem 0;

    @include breakpoint(mdl) {
      padding: 13.2rem 0;
    }
  }

  .mobile-app__container {
    margin: 0 auto;
    max-width: 200rem;
    padding: 0 grid-width(1.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    @include breakpoint(mdl) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      //   padding-right: grid-width(1.5);
      gap: 4rem;
    }
  }

  .mobile-app__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    text-align: center;

    @include breakpoint(mdl) {
      flex-direction: row;
      align-items: center;
      text-align: left;
      gap: 4rem;
    }
  }

  .mobile-app__visual {
    flex-shrink: 0;
  }

  .mobile-app__image {
    display: block;
    width: 18rem;
    height: auto;
    object-fit: cover;

    @include breakpoint(mdl) {
      width: 26rem;
      //   max-width: 32rem;
    }
  }

  .mobile-app__copy {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    @include breakpoint(mdl) {
      align-items: flex-start;
      gap: 1.2rem;
    }
  }

  .mobile-app__title {
    margin: 0;
    color: $color-neutral-1000;
    // max-width: 20ch;
  }

  .mobile-app__subtitle {
    margin: 0;
    color: $color-neutral-700;

    @include breakpoint(mdl) {
      color: $color-neutral-500;
      margin-left: 0.2rem;
    }
  }

  .mobile-app__right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    @include breakpoint(mdl) {
      align-items: flex-end;
    }
  }

  .mobile-app__scan-label {
    margin: 0 auto;
    color: $color-neutral-1000;
    text-align: center;
  }

  .mobile-app__qr-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2.4rem;

    @include breakpoint(mdl) {
      justify-content: flex-end;
    }
  }

  .mobile-app__qr-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }

  .mobile-app__qr {
    display: block;
    width: 10rem;
    height: 10rem;
    object-fit: contain;
    /* QR assets: white modules on transparent for dark background */
  }

  .mobile-app__link {
    color: $color-neutral-1000;
    text-decoration: underline;
    transition: color 0.2s ease;
    text-align: center;

    // &:hover {
    //   color: $button-cta-fill-primary;
    // }
  }
</style>
