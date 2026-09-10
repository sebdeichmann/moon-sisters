const DEFAULT_TIME_ZONE = 'Europe/Berlin';

export function dateKeyInTimeZone(date = new Date(), timeZone = DEFAULT_TIME_ZONE) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function isOfferVisible(offer, date = new Date()) {
  return isOfferVisibleOnDateKey(offer, dateKeyInTimeZone(date));
}

export function isOfferVisibleOnDateKey(offer, currentDateKey) {
  if (!offer.expiresAfter) return true;
  return currentDateKey <= offer.expiresAfter;
}
