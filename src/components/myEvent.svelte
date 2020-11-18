<script type="text/typescript">
  export let className: string = '';
  export let image: string = '';
  export let title: string = '';
  export let date: string = '';
  export let checked: boolean = false;

  const [day = '', month = '', year = ''] = date.split('.');
</script>

<style type="text/scss">
  .my-event {
    background-color: #c4c4c4;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
    box-shadow: 0 8px 16px 0 #0000001f;
    height: 0;
    padding-bottom: (400px / 600px * 100%);
    position: relative;
    width: 100%;

    &__overlay {
      background-color: #00000033;
      border-radius: 6px;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    &__title,
    &__date {
      $map: (
        400px: 30px,
        500px: 36px,
        600px: 42px,
        700px: 48px,
        768px: 30px,
        1000px: 36px,
        1200px: 42px,
        1440px: 48px,
      );

      color: #ffffff;
      font-size: 24px;
      line-height: (66px / 48px);

      @each $breakpoint, $font-size in $map {
        @media (min-width: $breakpoint) {
          font-size: $font-size;
        }
      }
    }

    &__title {
      bottom: (42px / 400px * 100%);
      font-weight: 900;
      left: 0;
      margin-bottom: 0;
      margin-top: 0;
      overflow: hidden;
      padding: 0 (40px / 600px * 100%);
      position: absolute;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;

      @media (min-width: 1440px) {
        bottom: 42px;
        padding: 0 40px;
      }
    }

    &__date {
      align-items: center;
      border-radius: 6px;
      box-shadow: inset 0 0 0 2px #ffffff;
      box-sizing: border-box;
      display: flex;
      font-weight: 400;
      height: (80px / 400px * 100%);
      justify-content: center;
      left: (40px / 600px * 100%);
      position: absolute;
      top: (40px / 400px * 100%);
      width: (80px / 600px * 100%);

      @media (min-width: 1440px) {
        height: 80px;
        left: 40px;
        top: 40px;
        width: 80px;
      }
    }

    &__icon {
      display: inline-block;
      flex-shrink: 0;
      height: (20px / 400px * 100%);
      pointer-events: none;
      position: absolute;
      right: (40px / 600px * 100%);
      top: (40px / 400px * 100%);
      vertical-align: middle;
      width: (16px / 600px * 100%);

      @media (min-width: 1440px) {
        height: 20px;
        right: 40px;
        top: 40px;
        width: 16px;
      }

      path {
        stroke: #ffffff;
      }
    }
  }
</style>

<article
  class="{`my-event ${className}`.trim()}"
  style="background-image: url({image});"
>
  <div class="my-event__overlay">
    <h2 class="my-event__title" {title}>{title}</h2>
    <time
      class="my-event__date"
      aria-label="{day}.{month}.{year}"
      title="{day}.{month}.{year}"
      datetime="{year}-{month}-{day}"
    >
      <span>{day}</span>
    </time>
    {#if checked}
      <svg
        class="my-event__icon"
        width="16"
        height="20"
        viewBox="0 0 16 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M15 19l-7-5-7 5V3a2 2 0 012-2h10a2 2 0 012 2v16z"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
      </svg>
    {/if}
  </div>
</article>
