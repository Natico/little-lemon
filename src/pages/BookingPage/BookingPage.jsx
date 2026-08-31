import BookingForm from "../../features/booking/BookingForm";
import "./BookingPage.css";

function BookingPage() {
  return (
    <section className="booking-page">
      <div className="booking-page__content">
        <div className="booking-page__intro">
          <h1 className="display-title">Little Lemon</h1>
          <h2 className="sub-title">Chicago</h2>
          <p className="paragraph">
            Find a table for any occasion
          </p>
        </div>

        <BookingForm />
      </div>
    </section>
  );
}

export default BookingPage;