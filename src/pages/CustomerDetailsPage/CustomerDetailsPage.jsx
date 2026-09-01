import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./CustomerDetailsPage.css";

function CustomerDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state?.bookingData;

  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    specialRequest: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCustomerData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/booking/review", {
      state: {
        bookingData,
        customerData,
      },
    });
  };

  if (!bookingData) {
    return (
      <section className="customer-details-page">
        <div className="customer-details-page__content">
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
    <section className="customer-details-page">
      <div className="customer-details-page__content">
        <div className="customer-details-page__intro">
          <h1 className="sub-title">Customer Details</h1>
          <p className="paragraph">
            Add your contact details so we can confirm your reservation.
          </p>
        </div>

        <form className="customer-details-form" onSubmit={handleSubmit}>
          <div className="customer-details-form__field">
            <label htmlFor="first-name">First name</label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              value={customerData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="customer-details-form__field">
            <label htmlFor="last-name">Last name</label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              value={customerData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="customer-details-form__field">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={customerData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="customer-details-form__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={customerData.email}
              onChange={handleChange}
            />
          </div>

          <div className="customer-details-form__field">
            <label htmlFor="special-request">Special request</label>
            <textarea
              id="special-request"
              name="specialRequest"
              rows="4"
              value={customerData.specialRequest}
              onChange={handleChange}
            />
          </div>

          <div className="customer-details-form__actions">
            <Button type="button" onClick={() => navigate("/booking")}>
              Back
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CustomerDetailsPage;