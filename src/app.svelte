<script type="text/typescript">
  import type { MyEvents, MyEvent } from './myEvent';
  import { getMonthName, getMonthNumber } from './helpers/translateMonth';
  import Title from './components/title.svelte';
  import Form from './components/form.svelte';
  import MyEvt from './components/myEvent.svelte';

  export let myEvents: MyEvents = [];

  type MyEventWithMonths = MyEvent & { month: string };
  type MyEventsWithMonths = Array<MyEventWithMonths>;

  const myEventsWithMonths: MyEventsWithMonths = myEvents.map((myEvent) => ({
    ...myEvent,
    month: getMonthName(Number.parseInt(myEvent.date.split('.')[1], 10)),
  }));

  const uniqueCities = myEventsWithMonths
    .map(({ city }) => city)
    .filter((city, index, array) => array.indexOf(city) === index)
    .sort((cityA, cityB) => {
      if (cityA > cityB) return 1;
      if (cityA < cityB) return -1;
      return 0;
    });

  const uniqueMonths = myEventsWithMonths
    .map(({ month }) => month)
    .filter((month, index, array) => array.indexOf(month) === index)
    .sort((monthA, monthB) => {
      if (getMonthNumber(monthA) > getMonthNumber(monthB)) return 1;
      if (getMonthNumber(monthA) < getMonthNumber(monthB)) return -1;
      return 0;
    });

  const selects = [
    { title: 'City', name: 'city', options: uniqueCities },
    { title: 'Month', name: 'month', options: uniqueMonths },
  ];

  let filterProperties: {
    key: string;
    value: string;
  }[] = [];

  $: filteredMyEventsWithMonths =
    filterProperties.length === 0
      ? myEventsWithMonths
      : myEventsWithMonths.filter((myEventWithMonths) =>
          filterProperties.every(
            ({ key, value }) => myEventWithMonths[key] === value
          )
        );

  function formChangeHandler(event: Event) {
    if (
      !(event.currentTarget instanceof HTMLFormElement) ||
      !(event.target instanceof HTMLSelectElement)
    )
      return;

    const formData = new FormData(event.currentTarget);

    let filterProps: typeof filterProperties = [];

    selects.forEach((select) => {
      const key = select.name;
      const value = formData.get(key) as string;

      filterProps = filterProps.concat(value === 'All' ? [] : [{ key, value }]);
    });

    filterProperties = filterProps;
  }

  const myEventsChecked: Array<MyEvent['id']> = ['01', '02'];
</script>

<style type="text/scss">
  .wrapper {
    background-color: #ffffff;
    margin: 0 auto;
    max-width: 1440px;
    min-width: 320px;
    padding: (100px / 1440px * 100%);

    @media (min-width: 1440px) {
      border-radius: 16px;
      box-shadow: 0 16px 32px 0 #0000001f;
      padding: 100px;
      padding-bottom: 80px;
    }
  }

  .header {
    &__title,
    &__form {
      margin-bottom: (40px / (1440px - 100px * 2) * 100%);

      @media (min-width: 1440px) {
        margin-bottom: 40px;
      }
    }
  }

  .main {
    &__events {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__events:not(:empty) {
      margin-bottom: (-40px / (1440px - 100px * 2) * 100%);

      @media (min-width: 1440px) {
        margin-bottom: -40px;
      }
    }

    &__event {
      margin-bottom: (40px / (1440px - 100px * 2) * 100%);
      margin-left: auto;
      margin-right: auto;
      max-width: 600px;
      width: 100%;

      @media (min-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        width: (600px / (1440px - 100px * 2) * 100%);
      }

      @media (min-width: 1440px) {
        margin-bottom: 40px;
        width: 600px;
      }
    }

    &__message {
      color: #2e282c;
      font-size: 24px;
      font-weight: 500;
      line-height: (33px / 24px);
      margin-bottom: 40px;
      margin-top: 0;
    }
  }
</style>

<div class="wrapper">
  <header class="header">
    <div class="header__title">
      <Title title="Event Listing" />
    </div>
    <div class="header__form">
      <Form
        name="event"
        action="./events"
        method="get"
        {formChangeHandler}
        {selects}
      />
    </div>
  </header>
  <main class="main">
    <div class="main__events">
      {#each filteredMyEventsWithMonths as { image, name, date, id } (id)}
        <div class="main__event">
          <MyEvt
            {image}
            title="{name}"
            {date}
            checked="{myEventsChecked.includes(id)}"
          />
        </div>
      {:else}
        <p class="main__message">No events</p>
      {/each}
    </div>
  </main>
</div>
