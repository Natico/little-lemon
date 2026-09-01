import { useState } from "react";
import Button from "../../components/Button/Button";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    seating: "standard",
  });

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
        />
      </div>

      <div className="booking-form__field">
        <label htmlFor="booking-time">Time</label>
        <select
          id="booking-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
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
        />
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

      <Button type="submit">Let's go</Button>
    </form>
  );
}

export default BookingForm;