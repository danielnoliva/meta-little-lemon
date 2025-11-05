import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/Logo.svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="App-header">
      <nav className="main-nav" aria-label="Primary">
        <Link to="/" aria-label="Little Lemon home">
          <img src={logo} className="App-logo" alt="Little Lemon Logo" />
        </Link>
        <Nav />
      </nav>
    </header>
  );
}
