<script type="text/typescript">
  export let className: string = '';
  export let name: string = '';
  export let options: Array<string> = [];
</script>

<style type="text/scss">
  /* stylelint-disable property-no-vendor-prefix */
  .select {
    display: inline-block;
    height: 50px;
    min-width: 200px;
    position: relative;
    vertical-align: middle;
    width: 100%;

    &__element,
    &__option {
      $map: (
        400px: 19px,
        600px: 20px,
        800px: 21px,
        1000px: 22px,
        1200px: 23px,
        1440px: 24px,
      );

      color: #2e282c;
      cursor: pointer;
      font-size: 18px;
      font-weight: 500;
      line-height: (33px / 24px);
      padding: 0 38px 0 22px;

      @each $breakpoint, $font-size in $map {
        @media (min-width: $breakpoint) {
          font-size: $font-size;
        }
      }
    }

    &__element {
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      border: 0;
      border-radius: 6px;
      box-shadow: inset 0 0 0 1px #444444;
      font-family: inherit;
      height: 100%;
      vertical-align: middle;
      width: 100%;
    }

    &__option {
      padding-right: 22px;
    }

    &__icon {
      display: inline-block;
      flex-shrink: 0;
      pointer-events: none;
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      vertical-align: middle;

      path {
        stroke: #444444;
      }
    }
  }
</style>

<div class="{`select ${className}`.trim()}">
  <select class="select__element" {name}>
    <option class="select__option" value="All">All</option>
    {#each options as option}
      <option class="select__option" value="{option}">{option}</option>
    {/each}
  </select>
  <svg
    class="select__icon"
    width="14"
    height="8"
    viewBox="0 0 14 8"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M1 1l6 6 6-6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    ></path>
  </svg>
</div>
