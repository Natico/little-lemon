const BOOKING_DRAFT_KEY = "littleLemon.bookingDraft";
const CUSTOMER_DRAFT_KEY = "littleLemon.customerDraft";
const LAST_BOOKING_KEY = "littleLemon.lastBooking";

export function saveBookingDraft(bookingData) {
  localStorage.setItem(BOOKING_DRAFT_KEY, JSON.stringify(bookingData));
}

export function loadBookingDraft() {
  const savedBooking = localStorage.getItem(BOOKING_DRAFT_KEY);

  if (!savedBooking) {
    return null;
  }

  return JSON.parse(savedBooking);
}

export function saveCustomerDraft(customerData) {
  localStorage.setItem(CUSTOMER_DRAFT_KEY, JSON.stringify(customerData));
}

export function loadCustomerDraft() {
  const savedCustomer = localStorage.getItem(CUSTOMER_DRAFT_KEY);

  if (!savedCustomer) {
    return null;
  }

  return JSON.parse(savedCustomer);
}

export function saveLastBooking(reservationData) {
  localStorage.setItem(LAST_BOOKING_KEY, JSON.stringify(reservationData));
}

export function loadLastBooking() {
  const savedBooking = localStorage.getItem(LAST_BOOKING_KEY);

  if (!savedBooking) {
    return null;
  }

  return JSON.parse(savedBooking);
}

export function clearBookingDrafts() {
  localStorage.removeItem(BOOKING_DRAFT_KEY);
  localStorage.removeItem(CUSTOMER_DRAFT_KEY);
}