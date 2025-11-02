import React from "react";

export default function Chicago() {
  return (
    <section className="about" id="about">
      <div className="about__text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a cozy neighborhood bistro run by brothers Mario and
          Adrian. The menu celebrates bold Mediterranean flavors with a modern,
          Chicago-inspired twist.
        </p>
        <p>
          From the freshly baked focaccia to the citrus-forward desserts, every
          recipe is crafted from seasonal ingredients and family traditions
          passed down through generations.
        </p>
      </div>
      <div className="about__gallery">
        <img src="/greek-salad.jpg" alt="Little Lemon dining room" />
        <img src="/greek-salad.jpg" alt="Little Lemon chef preparing food" />
      </div>
    </section>
  );
}
