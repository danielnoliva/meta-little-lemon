import React from "react";
import logo from "../assets/icons/Logo.svg";
import Nav from "./Nav";

export default function Footer() {
  return (
    <footer className="App-footer">
      <div className="App-footer__inner">
        <div className="App-footer__brand">
          <img src={logo} className="App-logo" alt="Little Lemon Logo" />
          <p>Little Lemon</p>
          <p>Chicago</p>
        </div>

        <section>
          <p>Doormat Navigation</p>
          <Nav />
        </section>

        <section>
          <p>Contact</p>
          <ul>
            <li>1234 Lemon St.</li>
            <li>Chicago, IL 60601</li>
            <li>(123) 456-7890</li>
            <li>info@littlelemon.com</li>
          </ul>
        </section>

        <section>
          <p>Social Media</p>
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
