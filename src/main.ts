/* eslint-disable no-console */

import type { MyEvents } from './myEvent';
import getMyEvents from './helpers/getMyEvents';
import App from './app.svelte';

const MY_EVENTS_URL = './data/events.json';

async function main() {
  let myEvents: MyEvents = [];

  try {
    myEvents = await getMyEvents(MY_EVENTS_URL);
  } catch (error) {
    console.error(error);
  }

  Reflect.construct(App, [
    {
      target: document.body,
      props: { myEvents },
    },
  ]);
}

main();
