/**
 * Date utility functions for Orson Vision
 * Provides consistent date formatting and manipulation across the application
 */

/**
 * Format a date to a human-readable string
 * @param date - Date to format
 * @param locale - Locale for formatting (default: 'fr-FR')
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string,
  locale: string = 'fr-FR'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Format a date to a short string (e.g., "15 Jan 2024")
 * @param date - Date to format
 * @param locale - Locale for formatting (default: 'fr-FR')
 * @returns Short formatted date string
 */
export function formatShortDate(
  date: Date | string,
  locale: string = 'fr-FR'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Get relative time (e.g., "2 days ago", "3 hours ago")
 * @param date - Date to compare
 * @param locale - Locale for formatting (default: 'fr-FR')
 * @returns Relative time string
 */
export function getRelativeTime(
  date: Date | string,
  locale: string = 'fr-FR'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, 'second');
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return rtf.format(-minutes, 'minute');
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return rtf.format(-hours, 'hour');
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return rtf.format(-days, 'day');
  } else if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return rtf.format(-months, 'month');
  } else {
    const years = Math.floor(diffInSeconds / 31536000);
    return rtf.format(-years, 'year');
  }
}

/**
 * Check if a date is today
 * @param date - Date to check
 * @returns True if the date is today
 */
export function isToday(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();

  return dateObj.toDateString() === today.toDateString();
}

/**
 * Check if a date is in the past
 * @param date - Date to check
 * @returns True if the date is in the past
 */
export function isPast(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();

  return dateObj < now;
}

/**
 * Check if a date is in the future
 * @param date - Date to check
 * @returns True if the date is in the future
 */
export function isFuture(date: Date | string): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();

  return dateObj > now;
}

/**
 * Get the start of a day
 * @param date - Date to get start of day for
 * @returns Date object set to start of day
 */
export function startOfDay(date: Date | string): Date {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const start = new Date(dateObj);
  start.setHours(0, 0, 0, 0);
  return start;
}

/**
 * Get the end of a day
 * @param date - Date to get end of day for
 * @returns Date object set to end of day
 */
export function endOfDay(date: Date | string): Date {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const end = new Date(dateObj);
  end.setHours(23, 59, 59, 999);
  return end;
}

/**
 * Add days to a date
 * @param date - Base date
 * @param days - Number of days to add
 * @returns New date with days added
 */
export function addDays(date: Date | string, days: number): Date {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const result = new Date(dateObj);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Subtract days from a date
 * @param date - Base date
 * @param days - Number of days to subtract
 * @returns New date with days subtracted
 */
export function subtractDays(date: Date | string, days: number): Date {
  return addDays(date, -days);
}

/**
 * Get the difference in days between two dates
 * @param date1 - First date
 * @param date2 - Second date
 * @returns Difference in days
 */
export function getDaysDifference(
  date1: Date | string,
  date2: Date | string
): number {
  const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
  const d2 = typeof date2 === 'string' ? new Date(date2) : date2;

  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

/**
 * Format a date for input fields (YYYY-MM-DD)
 * @param date - Date to format
 * @returns Formatted date string for input fields
 */
export function formatDateForInput(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
 * Parse a date from input field format (YYYY-MM-DD)
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Date object
 */
export function parseDateFromInput(dateString: string): Date {
  return new Date(dateString + 'T00:00:00');
}

/**
 * Get the current date in input format
 * @returns Current date in YYYY-MM-DD format
 */
export function getCurrentDateInput(): string {
  return formatDateForInput(new Date());
}

/**
 * Check if a date string is valid
 * @param dateString - Date string to validate
 * @returns True if the date string is valid
 */
export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
}
