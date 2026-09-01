import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import BookingForm from "../../features/booking/BookingForm";
import {
  initializeTimes,
  updateTimes,
} from "../../features/booking/bookingReducer";

import "./BookingPage.css";

import {
  loadBookingDraft,
  saveBookingDraft,
} from "../../features/booking/bookingStorage";

function BookingPage() {
  const navigate = useNavigate();
  const savedBookingDraft = loadBookingDraft();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const handleBookingSubmit = (bookingData) => {
    saveBookingDraft(bookingData);

    navigate("/booking/details", {
      state: {
        bookingData,
      },
    });
  };

  return (
    <section className="booking-page">
      <div className="booking-page__content">
        <div className="booking-page__intro">
          <h1 className="display-title">Little Lemon</h1>
          <h2 className="sub-title">Chicago</h2>
          <p className="paragraph">Find a table for any occasion</p>
        </div>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          onSubmit={handleBookingSubmit}
          initialData={savedBookingDraft}
        />
      </div>
    </section>
  );
}

export default BookingPage;