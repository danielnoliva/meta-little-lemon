import React from "react";
import logo from "../assets/icons/Logo.svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="App-header">
      <nav>
        <img src={logo} className="App-logo" alt="Little Lemon Logo" />
        <Nav />
      </nav>
    </header>
  );
}
