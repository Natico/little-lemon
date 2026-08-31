import "./BookingForm.css";
import Button from "../../components/Button/Button";

function BookingForm({ availableTimes, dispatch }) {
  const handleDateChange = (event) => {
    dispatch({
      type: "UPDATE_TIMES",
      date: event.target.value,
    });
  };

  return (
    <form className="booking-form">
      <div className="booking-form__field">
        <label htmlFor="booking-date">Date</label>
        <input
          id="booking-date"
          name="date"
          type="date"
          onChange={handleDateChange}
        />
      </div>

      <div className="booking-form__field">
        <label htmlFor="booking-time">Time</label>
        <select id="booking-time" name="time">
          <option value="">Select a time</option>

          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
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