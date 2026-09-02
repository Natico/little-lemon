import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];

  const renderBookingForm = (props = {}) => {
    const dispatch = jest.fn();
    const onSubmit = jest.fn();

    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={onSubmit}
        {...props}
      />,
    );

    return {
      dispatch,
      onSubmit,
    };
  };

  test("renders booking form fields", () => {
    renderBookingForm();

    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of diners/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(
      screen.getByRole("group", { name: /seating options/i }),
    ).toBeInTheDocument();
  });

  test("renders available booking times", () => {
    renderBookingForm();

    expect(screen.getByRole("option", { name: "17:00" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "18:00" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "19:00" })).toBeInTheDocument();
  });

  test("date field is required", () => {
    renderBookingForm();

    expect(screen.getByLabelText(/date/i)).toBeRequired();
  });

  test("time field is required", () => {
    renderBookingForm();

    expect(screen.getByLabelText(/time/i)).toBeRequired();
  });

  test("guests field has correct min and max values", () => {
    renderBookingForm();

    const guestsInput = screen.getByLabelText(/number of diners/i);

    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("submit button is disabled when form is invalid", () => {
    renderBookingForm();

    expect(screen.getByRole("button", { name: /let's go/i })).toBeDisabled();
  });

  test("submit button becomes enabled when required fields are valid", () => {
    renderBookingForm();

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: {
        name: "date",
        value: "2026-09-10",
      },
    });

    fireEvent.change(screen.getByLabelText(/time/i), {
      target: {
        name: "time",
        value: "18:00",
      },
    });

    expect(screen.getByRole("button", { name: /let's go/i })).toBeEnabled();
  });

  test("changing the date dispatches UPDATE_TIMES", () => {
    const { dispatch } = renderBookingForm();

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: {
        name: "date",
        value: "2026-09-10",
      },
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      date: "2026-09-10",
    });
  });

  test("submits booking data when form is valid", () => {
    const { onSubmit } = renderBookingForm();

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: {
        name: "date",
        value: "2026-09-10",
      },
    });

    fireEvent.change(screen.getByLabelText(/time/i), {
      target: {
        name: "time",
        value: "18:00",
      },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /let's go/i,
      }),
    );

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        date: "2026-09-10",
        time: "18:00",
        guests: "2",
        seating: "standard",
      }),
    );
  });
  test("date field does not allow dates before today", () => {
    renderBookingForm();

    const dateInput = screen.getByLabelText(/date/i);
    const today = new Date().toISOString().split("T")[0];

    expect(dateInput).toHaveAttribute("min", today);
  });
  test("shows unavailable message when no times are available", () => {
    renderBookingForm({
      availableTimes: [],
      initialData: {
        date: "2026-09-10",
        time: "",
        guests: "2",
        occasion: "",
        seating: "standard",
      },
    });

    expect(
      screen.getByText(/no reservation times are available/i),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/time/i)).toBeDisabled();
  });
});
