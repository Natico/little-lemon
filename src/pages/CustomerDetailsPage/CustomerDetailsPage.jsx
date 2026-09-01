import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./CustomerDetailsPage.css";
import {
  loadBookingDraft,
  loadCustomerDraft,
  saveCustomerDraft,
} from "../../features/booking/bookingStorage";

function CustomerDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state?.bookingData || loadBookingDraft();

  const savedCustomerDraft =
    location.state?.customerData || loadCustomerDraft();

  const [customerData, setCustomerData] = useState({
    firstName: savedCustomerDraft?.firstName || "",
    lastName: savedCustomerDraft?.lastName || "",
    phone: savedCustomerDraft?.phone || "",
    email: savedCustomerDraft?.email || "",
    specialRequest: savedCustomerDraft?.specialRequest || "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
  });

  const isFormValid =
    customerData.firstName.trim() &&
    customerData.lastName.trim() &&
    customerData.phone.trim() &&
    customerData.email.trim();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCustomerData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    saveCustomerDraft(customerData);

    navigate("/booking/review", {
      state: {
        bookingData,
        customerData,
      },
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerData.email);

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
              onBlur={handleBlur}
              required
              aria-invalid={touched.firstName && !customerData.firstName.trim()}
            />
            {touched.firstName && !customerData.firstName.trim() && (
              <p className="form-error" role="alert">
                First name is required.
              </p>
            )}
          </div>

          <div className="customer-details-form__field">
            <label htmlFor="last-name">Last name</label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              value={customerData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={touched.lastName && !customerData.lastName.trim()}
            />
            {touched.lastName && !customerData.lastName.trim() && (
              <p className="form-error" role="alert">
                Last name is required.
              </p>
            )}
          </div>

          <div className="customer-details-form__field">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={customerData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={touched.phone && !customerData.phone.trim()}
            />
            {touched.phone && !customerData.phone.trim() && (
              <p className="form-error" role="alert">
                Phone number is required.
              </p>
            )}
          </div>

          <div className="customer-details-form__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={customerData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={touched.email && !isEmailValid}
            />
            {touched.email && !isEmailValid && (
              <p className="form-error" role="alert">
                Please enter a valid email address.
              </p>
            )}
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
            <Button type="submit" disabled={!isFormValid}>
              Continue
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CustomerDetailsPage;
