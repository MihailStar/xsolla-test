import type { KeysMyEvent } from '../myEvent';
import MY_EVENT from '../myEvent';

export default function validateData(
  data: unknown,
  keys: Array<string> | KeysMyEvent
): boolean {
  return (
    Array.isArray(data) &&
    data.every((dataItem) =>
      keys.every((key) => typeof dataItem[key] === MY_EVENT[key])
    )
  );
}
