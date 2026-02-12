<template>
  <section
    class="footnotes"
    aria-label="Footnotes"
  >
    <div class="footnotes__container">
      <ol class="footnotes__list">
        <li
          v-for="(note, i) in notes"
          :key="i"
          class="footnotes__item"
        >
          <sup
            class="footnotes__num"
            aria-hidden="true"
            >{{ i + 1 }}</sup
          >
          {{ note }}
        </li>
      </ol>
    </div>
    <footer />
  </section>
</template>

<script setup>
  const notes = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis sit amet tellus eu iaculis. Morbi fringilla tortor sit amet risus condimentum, vel tincidunt enim posuere. Sed mauris velit, dignissim vel sapien mollis, condimentum fermentum ipsum. Etiam non metus suscipit est pharetra scelerisque nec at orci. Pellentesque fringilla neque libero, accumsan placerat tortor consequat sed. Duis laoreet diam diam, eget sollicitudin magna facilisis sit amet. Fusce non nisi elementum nibh dignissim vehicula ut nec ex.',
    'Integer egestas ligula ut gravida posuere. Curabitur lacinia finibus sodales. Sed consequat tincidunt nisi, nec molestie lorem tempor in. Curabitur id imperdiet dui, non porttitor libero. Fusce mi nisi, porta a sem sit amet, aliquam lobortis quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eu ipsum quis tellus sagittis aliquet. Donec ac turpis nisl. Vestibulum in consequat sapien. Duis ac ornare ante. Cras massa libero, mollis id auctor eu, pretium et leo.',
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eu purus scelerisque, suscipit augue non, porta erat. Vivamus venenatis ullamcorper leo, vel malesuada turpis pellentesque vitae. Vestibulum cursus lectus sit amet tempus iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eu congue elit. Pellentesque convallis hendrerit nisi, vitae consectetur elit maximus eget. Nam ac sapien ac urna lobortis pulvinar. Ut condimentum tincidunt vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    'Vestibulum convallis libero vitae porta semper. Pellentesque vitae turpis at diam suscipit cursus. Sed ac congue odio. Pellentesque pretium ex a tempus dapibus. Pellentesque vel nulla a tortor feugiat ultricies sit amet sit amet libero. Praesent tincidunt, tortor eu interdum eleifend, odio nulla interdum ipsum, a condimentum turpis metus ac ex. Ut semper dui ac purus aliquam ultricies. Nullam massa libero, varius eget dignissim in, laoreet ut neque. Suspendisse nisl tellus, venenatis a erat id, tincidunt scelerisque erat. Morbi et erat turpis. Etiam eu felis commodo, viverra ipsum vitae, pellentesque dolor. Quisque ultrices felis nibh, id semper justo tempus in. Sed eu pellentesque eros.',
  ]
</script>

<style lang="scss" scoped>
  @import '@/style/grid.scss';
  @import '@/style/colors.scss';

  .footnotes {
    background-color: $color-neutral-000;
    padding: 4rem 0;

    @include breakpoint(mdl) {
      padding: 6rem 0;
    }
  }

  .footnotes__container {
    margin: 0 auto;
    max-width: 200rem;
    padding: 0 grid-width(0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footnotes__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    @include breakpoint(mdl) {
      gap: 2.4rem;
    }
  }

  .footnotes__item {
    color: $text-body-muted;
    padding-left: 1rem;
    position: relative;
    font-size: 1.4rem;
    font-family: var(--font-cash-sans);
    font-weight: var(--font-weight-regular);
    letter-spacing: var(--letter-spacing-0);
  }

  .footnotes__num {
    position: absolute;
    left: 0;
    font-size: 0.75em;
    line-height: 1;
    vertical-align: super;
    top: 0.1em;
    opacity: 0.9;
  }

  footer {
    width: 100%;
    height: 10rem;
    // background: red;
  }
</style>
