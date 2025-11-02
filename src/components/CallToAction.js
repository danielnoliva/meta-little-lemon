import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="hero__cta" to="/booking">
            Reserve a Table
          </Link>
        </div>
        <div className="hero__image">
          <img
            src="/greek-salad.jpg"
            alt="Signature dish from Little Lemon served outdoors"
          />
        </div>
      </div>
    </section>
  );
}
