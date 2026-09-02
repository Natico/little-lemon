import {
  clearBookingDrafts,
  loadBookingDraft,
  loadCustomerDraft,
  loadLastBooking,
  saveBookingDraft,
  saveCustomerDraft,
  saveLastBooking,
} from "./bookingStorage";

describe("bookingStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("writes and reads booking draft from localStorage", () => {
    const bookingData = {
      date: "2026-09-10",
      time: "18:30",
      guests: "2",
      occasion: "birthday",
      seating: "standard",
    };

    saveBookingDraft(bookingData);

    expect(loadBookingDraft()).toEqual(bookingData);
  });

  test("writes and reads customer draft from localStorage", () => {
    const customerData = {
      firstName: "John",
      lastName: "Doe",
      phone: "123456789",
      email: "john@example.com",
      specialRequest: "",
    };

    saveCustomerDraft(customerData);

    expect(loadCustomerDraft()).toEqual(customerData);
  });

  test("writes and reads last booking from localStorage", () => {
    const reservationData = {
      date: "2026-09-10",
      time: "18:30",
      firstName: "John",
    };

    saveLastBooking(reservationData);

    expect(loadLastBooking()).toEqual(reservationData);
  });

  test("clears booking and customer drafts", () => {
    saveBookingDraft({
      date: "2026-09-10",
    });

    saveCustomerDraft({
      firstName: "John",
    });

    clearBookingDrafts();

    expect(loadBookingDraft()).toBeNull();
    expect(loadCustomerDraft()).toBeNull();
  });

  test("returns null and clears invalid stored booking draft JSON", () => {
    localStorage.setItem("littleLemon.bookingDraft", "{invalid-json");

    expect(loadBookingDraft()).toBeNull();
    expect(localStorage.getItem("littleLemon.bookingDraft")).toBeNull();
  });

  test("returns null and clears invalid stored customer draft JSON", () => {
    localStorage.setItem("littleLemon.customerDraft", "{invalid-json");

    expect(loadCustomerDraft()).toBeNull();
    expect(localStorage.getItem("littleLemon.customerDraft")).toBeNull();
  });

  test("returns null and clears invalid stored last booking JSON", () => {
    localStorage.setItem("littleLemon.lastBooking", "{invalid-json");

    expect(loadLastBooking()).toBeNull();
    expect(localStorage.getItem("littleLemon.lastBooking")).toBeNull();
  });
});
