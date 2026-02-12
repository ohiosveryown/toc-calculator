<template>
  <nav class="nav">
    <div class="nav__container">
      <!-- Left Links -->
      <div class="nav__links-left">
        <!-- Logo/Icon -->
        <div class="nav__logo">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3232 0C20.3546 0 22.0005 1.64594 22 3.67676V18.3232C22 20.3541 20.3541 22 18.3232 22H3.67676C1.64644 22 0 20.3541 0 18.3232V3.67676C0 1.64594 1.64644 0 3.67676 0H18.3232ZM5.16602 4.00098C4.52507 4.00098 4.00586 4.52019 4.00586 5.16113V16.8398C4.00586 17.4808 4.52507 18 5.16602 18H16.8447C17.485 17.9998 18.0039 17.4807 18.0039 16.8398V5.16113C18.0039 4.52032 17.485 4.00119 16.8447 4.00098H5.16602ZM13.334 8.00098C13.7028 8.00104 13.9999 8.30059 14 8.66992V13.332C13.9998 13.7013 13.7028 14.0009 13.334 14.001H8.66504C8.2973 14.0008 7.9992 13.7013 7.99902 13.332V8.66992C7.99914 8.30063 8.29726 8.00111 8.66504 8.00098H13.334Z"
              fill="black"
            />
          </svg>
        </div>

        <NuxtLink
          v-for="link in leftLinks"
          :key="link.text"
          :to="link.href"
          class="nav__link nav__links--left"
        >
          {{ link.text }}
        </NuxtLink>
      </div>

      <!-- Right Links -->
      <div class="nav__links-right">
        <NuxtLink
          v-for="link in rightLinks"
          :key="link.text"
          :to="link.href"
          class="nav__link"
        >
          {{ link.text }}
        </NuxtLink>

        <!-- Shopping Cart Icon -->
        <button
          class="nav__icon-button"
          aria-label="Shopping cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              fill-rule="evenodd"
              d="M7 14c-.55 0-1 .45-1 1s.45 1 1 1h13v2H7c-1.65 0-3-1.35-3-3 0-1.17.68-2.18 1.67-2.67L4 4H2V2h6v2h12l-2 10zm9.36-2 1.2-6H6.44l1.2 6zM7.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  @import '@/style/grid.scss';

  .nav {
    width: 100%;
    height: 72px;
    background-color: white;
    position: relative;

    &__container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 3.8rem;
      margin: 0 auto;
      max-width: 258rem;
    }

    &__links-left,
    &__links-right {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    &__logo {
      display: flex;
      align-items: center;
      height: 2.4em;
      width: 2.2rem;

      svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    &__link {
      font-family: var(--font-cash-sans-medium);
      font-size: 1.8rem; // 18px - matching Figma design
      font-weight: var(--font-weight-medium);
      line-height: 2.7rem; // 27px - matching Figma design
      color: var(--text-link);
      text-decoration: none;
      transition: opacity 0.2s ease;
      opacity: 1;

      &:hover {
        opacity: 1;
      }

      &:hover ~ & {
        opacity: 0.64;
      }
    }

    &__links-left:has(.nav__link:hover) .nav__link:not(:hover),
    &__links-right:has(.nav__link:hover) .nav__link:not(:hover) {
      opacity: 0.64;
    }

    &__icon-button {
      width: 24px;
      height: 24px;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.7;
      }

      svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  // Responsive adjustments
  @media (max-width: 768px) {
    .nav {
      &__container {
        padding: 0 20px;
      }

      &__links-left,
      &__links-right {
        gap: 12px;
      }

      &__link {
        font-size: 1.6rem; // Scale down on mobile
        line-height: 2.4rem;
      }
    }
  }

  .nav__links--left,
  .nav__links-right {
    display: none;
    @include breakpoint(mdl) {
      display: flex;
    }
  }
</style>

<script setup lang="ts">
  const leftLinks = [
    { text: 'Business types', href: '/' },
    { text: 'Products', href: '/' },
    { text: 'Pricing', href: '/' },
    { text: 'Hardware', href: '/' },
    { text: "What's New", href: '/' },
  ]

  const rightLinks = [
    { text: 'Sign in', href: '/' },
    { text: 'Support', href: '/' },
  ]
</script>
