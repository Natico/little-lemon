import "./BookingForm.css";
import Button from "../../components/Button/Button";

function BookingForm() {
  return (
    <form className="booking-form">
      <div className="booking-form__field">
        <label htmlFor="booking-date">Date</label>
        <input
          id="booking-date"
          name="date"
          type="date"
        />
      </div>

      <div className="booking-form__field">
        <label htmlFor="booking-time">Time</label>
        <select id="booking-time" name="time">
          <option value="">Select a time</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
        </select>
      </div>

      <div className="booking-form__field">
        <label htmlFor="guests">Number of Diners</label>
        <input
          id="guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          placeholder="2"
        />
      </div>

      <div className="booking-form__field">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion">
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>

      <fieldset className="booking-form__seating">
        <legend>Seating options</legend>

        <label>
          <input
            type="radio"
            name="seating"
            value="standard"
            defaultChecked
          />
          Standard
        </label>

        <label>
          <input
            type="radio"
            name="seating"
            value="outside"
          />
          Outside
        </label>
      </fieldset>

      <Button type="submit">Let's go</Button>
    </form>
  );
}

export default BookingForm;