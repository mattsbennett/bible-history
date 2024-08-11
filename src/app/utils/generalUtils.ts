import { getYear } from 'date-fns'

export function getFormattedYear(date: Date | null): string | null {
  if (!date) {
    return date
  }
  const year = getYear(date)

  if (year < 0) {
    return `${Math.abs(year)} BCE`
  }

  return `${year}`
}
