<script type="text/typescript">
  export let className: string = '';
  export let title: string = '';
</script>

<style type="text/scss">
  .title {
    $map: (
      400px: 28px,
      600px: 32px,
      800px: 36px,
      1000px: 40px,
      1200px: 44px,
      1440px: 48px,
    );

    color: #2e282c;
    font-size: 24px;
    font-weight: 900;
    line-height: (66px / 48px);
    margin-bottom: 0;
    margin-top: 0;

    @each $breakpoint, $font-size in $map {
      @media (min-width: $breakpoint) {
        font-size: $font-size;
      }
    }
  }
</style>

<h1 class="{`title ${className}`.trim()}">{title}</h1>
