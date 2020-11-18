export default function getUniqueValues<Obj, Key extends keyof Obj>(
  array: Array<Obj>,
  key: Key
): Array<string> {
  const temporary: Record<string, Obj[Key]> = {};

  array.forEach((obj) => {
    const value = obj[key];

    temporary[String(value)] = value;
  });

  return Object.keys(temporary);
}
