import React from "react";

export default function BookingPage() {
  return (
    <section className="booking" id="reservations">
      <div className="booking__inner">
        <h1>Reserve a Table</h1>
        <p>
          Planning a night out? Reserve your table at Little Lemon and we will
          make sure everything is ready when you arrive.
        </p>

        <form className="booking-form">
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" name="res-date" />

          <label htmlFor="res-time">Choose time</label>
          <input type="time" id="res-time" name="res-time" />

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="12"
            defaultValue="2"
          />

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion" defaultValue="birthday">
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>

          <button type="submit" className="primary-btn">
            Make Your Reservation
          </button>
        </form>
      </div>
    </section>
  );
}
