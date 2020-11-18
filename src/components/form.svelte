<script type="text/typescript">
  import noop from '../helpers/noop';
  import Select from './select.svelte';

  export let className: string = '';
  export let action: string = '';
  export let method: string = '';
  export let name: string = '';
  export let formChangeHandler: (event: Event) => void = noop;
  export let selects: Array<{
    title: string;
    name: string;
    options: Array<string>;
  }> = [];
</script>

<style type="text/scss">
  .form {
    display: flex;
    flex-wrap: wrap;

    &__label-wrapper {
      align-items: center;
      display: flex;
      width: 100%;

      &:not(:last-child) {
        margin-bottom: (30px / (1440px - 100px * 2) * 100%);
      }

      @media (min-width: 768px) {
        width: auto;

        &:not(:last-child) {
          margin-bottom: 0;
          margin-right: (30px / (1440px - 100px * 2) * 100%);
        }
      }

      @media (min-width: 1440px) {
        &:not(:last-child) {
          margin-right: 30px;
        }
      }
    }

    &__title {
      $map: (
        400px: 19px,
        600px: 20px,
        800px: 21px,
        1000px: 22px,
        1200px: 23px,
        1440px: 24px,
      );

      color: #2e282c;
      font-size: 18px;
      font-weight: 500;
      line-height: (33px / 24px);
      margin-right: ((20px - 5px) / 24px * 1em);

      @each $breakpoint, $font-size in $map {
        @media (min-width: $breakpoint) {
          font-size: $font-size;
        }
      }

      @media (min-width: 1440px) {
        margin-right: 20px;
      }
    }

    &__select {
      flex-grow: 1;
    }
  }
</style>

<form
  class="{`form ${className}`.trim()}"
  {action}
  {method}
  {name}
  on:change|preventDefault="{formChangeHandler}"
>
  {#each selects as { title, name, options }}
    <label class="form__label-wrapper">
      <span class="form__title">{title}:</span>
      <div class="form__select">
        <Select {name} {options} />
      </div>
    </label>
  {/each}
</form>
