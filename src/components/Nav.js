export default function Nav({ className = "" }) {
  const listClassName = className
    ? `nav-links ${className}`.trim()
    : "nav-links";

  return (
    <ul className={listClassName}>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#menu">Menu</a>
      </li>
      <li>
        <a href="#reservations">Reservations</a>
      </li>
      <li>
        <a href="#order-online">Order Online</a>
      </li>
      <li>
        <a href="#login">Login</a>
      </li>
    </ul>
  );
}
