import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { fetchData, submitReservation } from "../api";
import ConfirmedBookingPage from "./ConfirmedBookingPage";

export function initializeTimes(initialDate = new Date()) {
  const date = initialDate instanceof Date ? initialDate : new Date(initialDate);
  return fetchData(date);
}

export function updateTimes(state, action) {
  if (action.type === "date") {
    const selectedDate = action.date ? new Date(action.date) : new Date();
    return fetchData(selectedDate);
  }
  return state;
}

export default function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    new Date(),
    initializeTimes
  );

  async function handleReservationSubmit(formData) {
    const didSucceed = await submitReservation(formData);
    if (didSucceed) {
      console.log("Reservation confirmed:", formData);
      navigate("/confirmed");
    } else {
      console.warn("Reservation failed:", formData);
    }
    return didSucceed;
  }

  return (
    <main className="App-main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatchOnDateChange}
              onSubmit={handleReservationSubmit}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBookingPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </main>
  );
}
