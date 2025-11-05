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

export default function Specials() {
  return (
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
                <h3 className="special-card__title">{special.title}</h3>
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
  );
}
