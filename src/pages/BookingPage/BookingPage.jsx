import { useReducer } from "react";

import BookingForm from "../../features/booking/BookingForm";
import {
  initializeTimes,
  updateTimes,
} from "../../features/booking/bookingReducer";

import "./BookingPage.css";

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

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
        />
      </div>
    </section>
  );
}

export default BookingPage;