import { initializeTimes, updateTimes } from "./Main";
import { fetchData } from "../api";

test("initializeTimes returns weekend booking slots", () => {
  const saturday = new Date("2023-07-08T12:00:00");
  const expected = fetchData(saturday);
  expect(initializeTimes(saturday)).toEqual(expected);
});

test("updateTimes returns new availability for supplied date", () => {
  const date = "2023-07-08";
  const result = updateTimes([], { type: "date", date });
  expect(result).toEqual(fetchData(new Date(date)));
});

test("updateTimes returns the provided state when action is unhandled", () => {
  const state = ["17:00", "18:00"];
  const result = updateTimes(state, { type: "unknown" });
  expect(result).toBe(state);
});
