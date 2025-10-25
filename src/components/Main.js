import React from "react";

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "Our signature Greek salad combines crisp lettuce, peppers, olives, and Chicago style feta topped with crunchy garlic croutons.",
    image: "/greek-salad.jpg",
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Grilled bread dressed with garlic, olive oil, and fresh tomatoes for the perfect shareable starter.",
    image: "/greek-salad.jpg",
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "A bright lemon custard layered with whipped mascarpone, inspired by grandma's original recipe.",
    image: "/greek-salad.jpg",
  },
];

const testimonials = [
  {
    name: "Casey M.",
    quote:
      "The food is always fresh and the staff know just how to make you feel at home.",
    rating: "Rating: 5 stars",
  },
  {
    name: "Harper L.",
    quote:
      "Love the weekly specials. The bruschetta is the best I have ever had.",
    rating: "Rating: 5 stars",
  },
  {
    name: "Morgan P.",
    quote:
      "Consistently great service and the desserts keep me coming back.",
    rating: "Rating: 4 stars",
  },
  {
    name: "River S.",
    quote:
      "Little Lemon nails the balance between cozy atmosphere and modern dishes.",
    rating: "Rating: 5 stars",
  },
];

export default function Main() {
  return (
    <main className="App-main">
      <section className="hero" id="home">
        <div className="hero__inner">
          <div className="hero__copy">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <a className="hero__cta" href="#reservations">
              Reserve a Table
            </a>
          </div>
          <div className="hero__image">
            <img
              src="/greek-salad.jpg"
              alt="Signature dish from Little Lemon served outdoors"
            />
          </div>
        </div>
      </section>

      <section className="section specials" id="menu">
        <div className="section__header">
          <h2>Specials</h2>
          <div className="section__actions">
            <a className="secondary-btn" href="#menu">
              Online Menu
            </a>
          </div>
        </div>

        <div className="specials__grid">
          {specials.map((special) => (
            <article className="special-card" key={special.title}>
              <img src={special.image} alt={special.title} />
              <div className="special-card__body">
                <div className="special-card__top">
                  <span>{special.title}</span>
                  <span className="special-card__price">{special.price}</span>
                </div>
                <p>{special.description}</p>
                <a className="special-card__footer" href="#order-online">
                  Order a delivery <span aria-hidden="true">{">"}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="testimonials__inner">
          <h2>Testimonials</h2>
          <div className="testimonials__grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <p className="testimonial-card__rating">{testimonial.rating}</p>
                <p className="testimonial-card__name">{testimonial.name}</p>
                <p className="testimonial-card__quote">{testimonial.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about__text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="about__gallery">
          <img src="/greek-salad.jpg" alt="Little Lemon dining room" />
          <img src="/greek-salad.jpg" alt="Little Lemon chef preparing food" />
        </div>
      </section>
    </main>
  );
}
