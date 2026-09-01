import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./BookingReviewPage.css";

function BookingReviewPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state?.bookingData;
  const customerData = location.state?.customerData;

  if (!bookingData || !customerData) {
    return (
      <section className="booking-review-page">
        <div className="booking-review-page__content">
          <h1 className="sub-title">Reservation details missing</h1>
          <p className="paragraph">
            Please start your reservation from the booking page.
          </p>
          <Button onClick={() => navigate("/booking")}>Back to Booking</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="booking-review-page">
      <div className="booking-review-page__content">
        <div className="booking-review-page__intro">
          <h1 className="sub-title">Review your reservation</h1>
          <p className="paragraph">
            Please check your reservation details before confirming.
          </p>
        </div>

        <div className="booking-review-card">
          <div className="booking-review-card__section">
            <h2 className="card-title">Booking details</h2>

            <dl className="booking-review-list">
              <div>
                <dt>Date</dt>
                <dd>{bookingData.date}</dd>
              </div>

              <div>
                <dt>Time</dt>
                <dd>{bookingData.time}</dd>
              </div>

              <div>
                <dt>Number of diners</dt>
                <dd>{bookingData.guests}</dd>
              </div>

              <div>
                <dt>Occasion</dt>
                <dd>{bookingData.occasion || "Not selected"}</dd>
              </div>

              <div>
                <dt>Seating</dt>
                <dd>{bookingData.seating}</dd>
              </div>
            </dl>
          </div>

          <div className="booking-review-card__section">
            <h2 className="card-title">Customer details</h2>

            <dl className="booking-review-list">
              <div>
                <dt>Name</dt>
                <dd>
                  {customerData.firstName} {customerData.lastName}
                </dd>
              </div>

              <div>
                <dt>Phone</dt>
                <dd>{customerData.phone}</dd>
              </div>

              <div>
                <dt>Email</dt>
                <dd>{customerData.email}</dd>
              </div>

              <div>
                <dt>Special request</dt>
                <dd>{customerData.specialRequest || "No special request"}</dd>
              </div>
            </dl>
          </div>

          <div className="booking-review-card__actions">
            <Button
              type="button"
              onClick={() =>
                navigate("/booking/details", {
                  state: {
                    bookingData,
                  },
                })
              }
            >
              Back
            </Button>

            <Button type="button" onClick={() => navigate("/booking/confirmed")}>
              Confirm Reservation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingReviewPage;