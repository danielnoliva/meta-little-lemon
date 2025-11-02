import React from "react";

export default function ConfirmedBookingPage() {
  return (
    <section className="confirmation" aria-live="polite">
      <div className="confirmation__inner">
        <h1>Booking Confirmed</h1>
        <p>
          Thank you for reserving a table with Little Lemon. We look forward to
          welcoming you soon!
        </p>
        <p>
          A confirmation email with your reservation details has been sent to
          you. If you need to make any changes, please contact us at
          reservations@littlelemon.com.
        </p>
      </div>
    </section>
  );
}
