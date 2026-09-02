import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders Little Lemon home page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", {
      name: /little lemon/i,
      level: 1,
    })
  ).toBeInTheDocument();
});

test("renders not found page for unknown routes", () => {
  render(
    <MemoryRouter initialEntries={["/unknown-page"]}>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: /page not found/i })
  ).toBeInTheDocument();
});
