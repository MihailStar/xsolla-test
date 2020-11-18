import getData from './getData';
import type { MyEvents } from '../myEvent';
import validateData from './validateData';
import { keysMyEvent } from '../myEvent';

export default async function getMyEvents(url: string): Promise<MyEvents> {
  const data = await getData(url);
  const myEvents: MyEvents = <MyEvents>data;

  if (!validateData(data, keysMyEvent)) throw new Error('Data is not valid');

  return myEvents;
}
