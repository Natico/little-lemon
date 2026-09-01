import { fetchAPI } from "../../services/bookingApi";

export function initializeTimes() {
  return fetchAPI(new Date());
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date));

    default:
      return state;
  }
}