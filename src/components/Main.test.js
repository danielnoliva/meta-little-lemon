import { initializeTimes, updateTimes } from "./Main";

const storage = () => window.localStorage;

function availabilityKey(date) {
  return `little-lemon:availability:${new Date(date)
    .toISOString()
    .split("T")[0]}`;
}

describe("reservation times reducer with local storage API", () => {
  beforeEach(() => {
    storage().clear();
  });

  test("initializeTimes seeds default availability for the given date", () => {
    const date = new Date("2023-07-08T12:00:00");
    const result = initializeTimes(date);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);

    const stored = JSON.parse(storage().getItem(availabilityKey(date)));
    expect(stored).toEqual(result);
  });

  test("updateTimes reads stored availability for the dispatched date", () => {
    const date = "2023-07-09";
    const slots = ["19:00", "19:30"];
    storage().setItem(availabilityKey(date), JSON.stringify(slots));

    const result = updateTimes([], { type: "date", date });
    expect(result).toEqual(slots);
  });

  test("updateTimes returns existing state when action type is unknown", () => {
    const state = ["17:00", "18:00"];
    const result = updateTimes(state, { type: "other" });
    expect(result).toBe(state);
  });
});
