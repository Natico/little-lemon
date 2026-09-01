import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./ConfirmedBookingPage.css";
import { loadLastBooking } from "../../features/booking/bookingStorage";

function ConfirmedBookingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const reservationData = location.state?.reservationData || loadLastBooking();

  if (!reservationData) {
    return (
      <section className="confirmed-booking-page">
        <div className="confirmed-booking-page__content">
          <h1 className="sub-title">Reservation not found</h1>
          <p className="paragraph">
            Please start your reservation from the booking page.
          </p>
          <Button onClick={() => navigate("/booking")}>Back to Booking</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="confirmed-booking-page">
      <div className="confirmed-booking-page__content">
        <div className="confirmed-booking-card">
          <p className="confirmed-booking-card__eyebrow">Reservation confirmed</p>

          <h1 className="sub-title">Thank you, {reservationData.firstName}!</h1>

          <p className="paragraph">
            Your table has been reserved at Little Lemon Chicago.
          </p>

          <dl className="confirmed-booking-list">
            <div>
              <dt>Date</dt>
              <dd>{reservationData.date}</dd>
            </div>

            <div>
              <dt>Time</dt>
              <dd>{reservationData.time}</dd>
            </div>

            <div>
              <dt>Number of diners</dt>
              <dd>{reservationData.guests}</dd>
            </div>

            <div>
              <dt>Seating</dt>
              <dd>{reservationData.seating}</dd>
            </div>
          </dl>

          <Button onClick={() => navigate("/booking")}>Make another reservation</Button>
        </div>
      </div>
    </section>
  );
}

export default ConfirmedBookingPage;