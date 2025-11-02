import React, { useEffect, useMemo, useState } from "react";

export default function BookingForm({
  availableTimes = [],
  dispatch = () => {},
  onSubmit = async () => true,
}) {
  const today = useMemo(
    () => new Date().toISOString().split("T")[0],
    []
  );

  const [formData, setFormData] = useState(() => ({
    date: today,
    time: "",
    guests: 2,
    occasion: "birthday",
  }));

  useEffect(() => {
    dispatch({ type: "date", date: today });
  }, [dispatch, today]);

  useEffect(() => {
    if (!availableTimes.length) {
      return;
    }
    setFormData((prev) => {
      const hasCurrent = availableTimes.includes(prev.time);
      const nextTime = hasCurrent ? prev.time : availableTimes[0];
      return { ...prev, time: nextTime };
    });
  }, [availableTimes]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
    if (name === "date") {
      dispatch({ type: "date", date: value });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const success = await onSubmit(formData);
    if (success) {
      setFormData({
        date: today,
        time: availableTimes[0] ?? "",
        guests: 2,
        occasion: "birthday",
      });
      dispatch({ type: "date", date: today });
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Now</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select a time
        </option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="12"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>

      <button type="submit" className="primary-btn">
        Submit Reservation
      </button>
    </form>
  );
}
