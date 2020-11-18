const MY_EVENT = {
  id: 'string',
  name: 'string',
  date: 'string',
  city: 'string',
  genre: 'string',
  image: 'string',
} as const;

export default MY_EVENT;

export type KeyMyEvent = keyof typeof MY_EVENT;
export type KeysMyEvent = Array<KeyMyEvent>;

export type MyEvent = Record<KeyMyEvent, string>;
export type MyEvents = Array<MyEvent>;

export const keysMyEvent: KeysMyEvent = <KeysMyEvent>Object.keys(MY_EVENT);
