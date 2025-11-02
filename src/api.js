const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

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
const submitAPI = function (formData) {
  return true;
};

function normalizeDate(value) {
  if (value instanceof Date) {
    return value;
  }
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

export function fetchData(dateInput) {
  const date = normalizeDate(dateInput);
  // eslint-disable-next-line no-undef
  const slots = fetchAPI(date);
  return Array.isArray(slots) ? slots : [];
}

export async function submitReservation(formData) {
  // eslint-disable-next-line no-undef
  return submitAPI(formData);
}
