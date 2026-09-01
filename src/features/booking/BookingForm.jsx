import { useState } from "react";
import Button from "../../components/Button/Button";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    date: initialData?.date || "",
    time: initialData?.time || "",
    guests: initialData?.guests || "2",
    occasion: initialData?.occasion || "",
    seating: initialData?.seating || "standard",
  });

  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
  });

  const handleBlur = (event) => {
    const { name } = event.target;

    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  };

  const isFormValid =
    formData.date &&
    formData.time &&
    Number(formData.guests) >= 1 &&
    Number(formData.guests) <= 10;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;

    setFormData((currentData) => ({
      ...currentData,
      date: selectedDate,
      time: "",
    }));

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__field">
        <label htmlFor="booking-date">Date</label>
        <input
          id="booking-date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleDateChange}
          onBlur={handleBlur}
          required
          aria-invalid={touched.date && !formData.date}
        />
        {touched.date && !formData.date && (
          <p className="form-error" role="alert">
            Please select a reservation date.
          </p>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="booking-time">Time</label>
        <select
          id="booking-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-invalid={touched.time && !formData.time}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {touched.time && !formData.time && (
          <p className="form-error" role="alert">
            Please select a reservation time.
          </p>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="booking-guests">Number of Diners</label>
        <input
          id="booking-guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-invalid={
            touched.guests &&
            (Number(formData.guests) < 1 || Number(formData.guests) > 10)
          }
        />
        {touched.guests &&
          (Number(formData.guests) < 1 || Number(formData.guests) > 10) && (
            <p className="form-error" role="alert">
              Number of diners must be between 1 and 10.
            </p>
          )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="booking-occasion">Occasion</label>
        <select
          id="booking-occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>

      <fieldset className="booking-form__fieldset">
        <legend>Seating options</legend>

        <label>
          <input
            type="radio"
            name="seating"
            value="standard"
            checked={formData.seating === "standard"}
            onChange={handleChange}
          />
          Standard
        </label>

        <label>
          <input
            type="radio"
            name="seating"
            value="outside"
            checked={formData.seating === "outside"}
            onChange={handleChange}
          />
          Outside
        </label>
      </fieldset>

      <Button type="submit" disabled={!isFormValid}>
        Let's go
      </Button>
    </form>
  );
}

export default BookingForm;
