import React from "react";

const testimonials = [
  {
    name: "Casey M.",
    quote:
      "The food is always fresh and the staff know just how to make you feel at home.",
    rating: 5,
    image: "https://i.pravatar.cc/96?img=12",
    location: "Chicago, IL",
  },
  {
    name: "Harper L.",
    quote:
      "Love the weekly specials. The bruschetta is the best I have ever had.",
    rating: 5,
    image: "https://i.pravatar.cc/96?img=16",
    location: "Oak Park, IL",
  },
  {
    name: "Morgan P.",
    quote:
      "Consistently great service and the desserts keep me coming back.",
    rating: 4,
    image: "https://i.pravatar.cc/96?img=22",
    location: "Evanston, IL",
  },
  {
    name: "River S.",
    quote:
      "Little Lemon nails the balance between cozy atmosphere and modern dishes.",
    rating: 5,
    image: "https://i.pravatar.cc/96?img=45",
    location: "Chicago, IL",
  },
];

function renderStars(rating) {
  return "★★★★★".slice(0, rating);
}

export default function CustomersSay() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <h2>Testimonials</h2>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <img
                className="testimonial-card__avatar"
                src={testimonial.image}
                alt={`Portrait of ${testimonial.name}`}
              />
              <div className="testimonial-card__details">
                <p
                  className="testimonial-card__rating"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {renderStars(testimonial.rating)}
                </p>
                <p className="testimonial-card__name">{testimonial.name}</p>
                <p className="testimonial-card__location">
                  {testimonial.location}
                </p>
              </div>
              <p className="testimonial-card__quote">{testimonial.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
