// API source provided by the Coursera Little Lemon Capstone project.
// Original reference:
// https://raw.githubusercontent.com/courseraap/capstone/main/api.js
//
// The original file defines fetchAPI and submitAPI as constants.
// In this React app, we export them as module functions so they can be
// imported into components/reducers and tested more easily.

const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return function () {
    return ((s = (s * a) % m) / m);
  };
};

export const fetchAPI = function (date) {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }

    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }

  return result;
};

export const submitAPI = function (formData) {
  return true;
};