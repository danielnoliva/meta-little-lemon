import React from "react";
import logo from "../assets/icons/Logo.svg";
import Nav from "./Nav";

export default function Footer() {
  return (
    <footer className="App-footer">
      <div className="App-footer__inner">
        <div className="App-footer__brand">
          <img src={logo} className="App-logo" alt="Little Lemon Logo" />
          <h2>Little Lemon</h2>
          <p>Chicago</p>
        </div>

        <nav aria-label="Footer">
          <h2>Doormat Navigation</h2>
          <Nav />
        </nav>

        <section>
          <h2>Contact</h2>
          <ul>
            <li>1234 Lemon St.</li>
            <li>Chicago, IL 60601</li>
            <li>(123) 456-7890</li>
            <li>info@littlelemon.com</li>
          </ul>
        </section>

        <section>
          <h2>Social Media</h2>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
