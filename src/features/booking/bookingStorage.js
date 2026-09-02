const BOOKING_DRAFT_KEY = "littleLemon.bookingDraft";
const CUSTOMER_DRAFT_KEY = "littleLemon.customerDraft";
const LAST_BOOKING_KEY = "littleLemon.lastBooking";

function loadStoredJson(key) {
  const savedValue = localStorage.getItem(key);

  if (!savedValue) {
    return null;
  }

  try {
    return JSON.parse(savedValue);
  } catch (error) {
    localStorage.removeItem(key);
    return null;
  }
}

export function saveBookingDraft(bookingData) {
  localStorage.setItem(BOOKING_DRAFT_KEY, JSON.stringify(bookingData));
}

export function loadBookingDraft() {
  return loadStoredJson(BOOKING_DRAFT_KEY);
}

export function saveCustomerDraft(customerData) {
  localStorage.setItem(CUSTOMER_DRAFT_KEY, JSON.stringify(customerData));
}

export function loadCustomerDraft() {
  return loadStoredJson(CUSTOMER_DRAFT_KEY);
}

export function saveLastBooking(reservationData) {
  localStorage.setItem(LAST_BOOKING_KEY, JSON.stringify(reservationData));
}

export function loadLastBooking() {
  return loadStoredJson(LAST_BOOKING_KEY);
}

export function clearBookingDrafts() {
  localStorage.removeItem(BOOKING_DRAFT_KEY);
  localStorage.removeItem(CUSTOMER_DRAFT_KEY);
}
