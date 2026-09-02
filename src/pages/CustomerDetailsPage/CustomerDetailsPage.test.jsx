import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CustomerDetailsPage from "./CustomerDetailsPage";

const renderPage = () => {
  render(
    <MemoryRouter
      initialEntries={[
        {
          pathname: "/booking/details",
          state: {
            bookingData: {
              date: "2026-09-10",
              time: "18:00",
              guests: "2",
              occasion: "",
              seating: "standard",
            },
          },
        },
      ]}
    >
      <CustomerDetailsPage />
    </MemoryRouter>
  );
};

describe("CustomerDetailsPage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders customer detail fields", () => {
    renderPage();

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/special request/i)).toBeInTheDocument();
  });

  test("required fields have required validation", () => {
    renderPage();

    expect(screen.getByLabelText(/first name/i)).toBeRequired();
    expect(screen.getByLabelText(/last name/i)).toBeRequired();
    expect(screen.getByLabelText(/phone/i)).toBeRequired();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
  });

  test("email field uses email input type", () => {
    renderPage();

    expect(screen.getByLabelText(/email/i)).toHaveAttribute(
      "type",
      "email"
    );
  });

  test("continue button is disabled when form is empty", () => {
    renderPage();

    expect(
      screen.getByRole("button", { name: /continue/i })
    ).toBeDisabled();
  });

  test("continue button becomes enabled when required fields are filled", () => {
    renderPage();

    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: {
        name: "firstName",
        value: "John",
      },
    });

    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: {
        name: "lastName",
        value: "Doe",
      },
    });

    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: {
        name: "phone",
        value: "123456789",
      },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: {
        name: "email",
        value: "john@example.com",
      },
    });

    expect(
      screen.getByRole("button", { name: /continue/i })
    ).toBeEnabled();
  });

  test("continue button stays disabled when email is invalid", () => {
    renderPage();

    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: {
        name: "firstName",
        value: "John",
      },
    });

    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: {
        name: "lastName",
        value: "Doe",
      },
    });

    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: {
        name: "phone",
        value: "123456789",
      },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: {
        name: "email",
        value: "not-an-email",
      },
    });

    expect(
      screen.getByRole("button", { name: /continue/i })
    ).toBeDisabled();
  });
});
