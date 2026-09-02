import {
  initializeTimes,
  updateTimes,
} from "./bookingReducer";
import { fetchAPI } from "../../services/bookingApi";

describe("bookingReducer", () => {
  test("initializeTimes returns available booking times", () => {
    const times = initializeTimes();

    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  test("initializeTimes returns times for an initial date when provided", () => {
    const times = initializeTimes("2026-09-10");

    expect(times).toEqual(fetchAPI(new Date("2026-09-10")));
  });

  test("updateTimes returns available times for selected date", () => {
    const action = {
      type: "UPDATE_TIMES",
      date: "2026-09-10",
    };

    const times = updateTimes([], action);

    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  test("updateTimes returns current state for unknown action", () => {
    const currentState = ["17:00", "18:00"];

    const result = updateTimes(currentState, {
      type: "UNKNOWN_ACTION",
    });

    expect(result).toEqual(currentState);
  });
});
