enum Month {
  'January' = 1,
  'February' = 2,
  'March' = 3,
  'April' = 4,
  'May' = 5,
  'June' = 6,
  'July' = 7,
  'August' = 8,
  'September' = 9,
  'October' = 10,
  'November' = 11,
  'December' = 12,
}

export function getMonthName(monthNumber: number): string | null {
  return Month[monthNumber] ?? null;
}

export function getMonthNumber(monthName: string): number | null {
  return Month[monthName] ?? null;
}
