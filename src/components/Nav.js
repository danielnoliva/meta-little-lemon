import { Link } from "react-router-dom";

export default function Nav({ className = "" }) {
  const listClassName = className
    ? `nav-links ${className}`.trim()
    : "nav-links";

  return (
    <ul className={listClassName}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/#about">About</Link>
      </li>
      <li>
        <Link to="/#menu">Menu</Link>
      </li>
      <li>
        <Link to="/booking">Reservations</Link>
      </li>
      <li>
        <Link to="/#order-online">Order Online</Link>
      </li>
      <li>
        <Link to="/#login">Login</Link>
      </li>
    </ul>
  );
}
