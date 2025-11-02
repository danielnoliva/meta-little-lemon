import React from "react";
import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch, onSubmit }) {
  return (
    <section className="booking" id="reservations">
      <div className="booking__inner">
        <h1>Reserve a Table</h1>
        <p>
          Planning a night out? Reserve your table at Little Lemon and we will
          make sure everything is ready when you arrive.
        </p>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  );
}
