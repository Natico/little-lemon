export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00"];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return state;

    default:
      return state;
  }
}