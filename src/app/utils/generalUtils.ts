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

export function getImagePath(path: string): string {
  // TinaCMS adds /public to the path of the image to match its cloud media
  // path, but we don't want that in development
  if (process.env.NODE_ENV === 'development') {
    return path.replace('/public', '')
  }

  return path
}

export function formDataToJson(formData: FormData): { [key: string]: any } {
  const jsonObject: { [key: string]: any } = {};
  formData.forEach((value, key) => {
    jsonObject[key] = value;
  });
  return jsonObject;
}