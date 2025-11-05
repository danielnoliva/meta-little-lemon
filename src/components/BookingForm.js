import React, { useEffect, useMemo } from "react";
import { useFormik } from "formik";

export default function BookingForm({
  availableTimes = [],
  dispatch = () => {},
  onSubmit = async () => true,
}) {
  const today = useMemo(
    () => new Date().toISOString().split("T")[0],
    []
  );

  useEffect(() => {
    dispatch({ type: "date", date: today });
  }, [dispatch, today]);

  const formik = useFormik({
    initialValues: {
      date: today,
      time: "",
      guests: 2,
      occasion: "birthday",
    },
    validateOnMount: true,
    validate(values) {
      const errors = {};
      if (!values.date) {
        errors.date = "Please choose a date.";
      } else if (values.date < today) {
        errors.date = "Date cannot be in the past.";
      }

      if (!values.time) {
        errors.time = "Select an available time.";
      }

      if (!values.guests) {
        errors.guests = "Please enter party size.";
      }

      if (values.guests < 1) {
        errors.guests = "At least one guest is required.";
      } else if (values.guests > 12) {
        errors.guests = "We can host up to 12 guests.";
      }

      if (!values.occasion) {
        errors.occasion = "Please select an occasion.";
      }

      return errors;
    },
    async onSubmit(values, { resetForm, setSubmitting }) {
      const success = await onSubmit(values);
      setSubmitting(false);
      if (success) {
        resetForm({
          values: {
            date: today,
            time: availableTimes[0] ?? "",
            guests: 2,
            occasion: "birthday",
          },
        });
        dispatch({ type: "date", date: today });
      }
    },
  });

  const {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = formik;

  useEffect(() => {
    if (!availableTimes.length) {
      if (values.time !== "") {
        setFieldValue("time", "", false);
      }
      return;
    }

    if (!availableTimes.includes(values.time)) {
      setFieldValue("time", availableTimes[0], false);
    }
  }, [availableTimes, setFieldValue, values.time]);

  function handleDateChange(event) {
    handleChange(event);
    dispatch({ type: "date", date: event.target.value });
  }

  const dateHasError = touched.date && errors.date;
  const timeHasError = touched.time && errors.time;
  const guestsHasError = touched.guests && errors.guests;
  const occasionHasError = touched.occasion && errors.occasion;

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <h2>Book Now</h2>
      <p className="sr-only" role="status" aria-live="polite">
        {availableTimes.length
          ? `${availableTimes.length} available reservation ${
              availableTimes.length === 1 ? "time" : "times"
            } for the selected date.`
          : "No available reservation times for the selected date."}
      </p>

      <div className="booking-form__field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          min={today}
          value={values.date}
          onChange={handleDateChange}
          onBlur={handleBlur}
          required
          aria-invalid={Boolean(dateHasError)}
          aria-describedby={dateHasError ? "res-date-error" : undefined}
          className={dateHasError ? "booking-form__input--error" : undefined}
        />
        {dateHasError && (
          <span
            className="booking-form__error"
            id="res-date-error"
            role="alert"
          >
            {formik.errors.date}
          </span>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={values.time}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          disabled={!availableTimes.length}
          aria-invalid={Boolean(timeHasError)}
          aria-describedby={timeHasError ? "res-time-error" : undefined}
          className={timeHasError ? "booking-form__input--error" : undefined}
        >
          <option value="" disabled>
            {availableTimes.length ? "Select a time" : "No times available"}
          </option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {timeHasError && (
          <span
            className="booking-form__error"
            id="res-time-error"
            role="alert"
          >
            {formik.errors.time}
          </span>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="12"
          value={values.guests}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-invalid={Boolean(guestsHasError)}
          aria-describedby={guestsHasError ? "guests-error" : undefined}
          className={guestsHasError ? "booking-form__input--error" : undefined}
        />
        {guestsHasError && (
          <span className="booking-form__error" id="guests-error" role="alert">
            {formik.errors.guests}
          </span>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={values.occasion}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          aria-invalid={Boolean(occasionHasError)}
          aria-describedby={occasionHasError ? "occasion-error" : undefined}
          className={
            occasionHasError ? "booking-form__input--error" : undefined
          }
        >
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        {occasionHasError && (
          <span
            className="booking-form__error"
            id="occasion-error"
            role="alert"
          >
            {formik.errors.occasion}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="primary-btn"
        disabled={
          !isValid ||
          isSubmitting ||
          Boolean(errors.date) ||
          Boolean(errors.time)
        }
      >
        Submit Reservation
      </button>
    </form>
  );
}
