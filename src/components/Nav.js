import { Link, useLocation } from "react-router-dom";

export default function Nav({ className = "" }) {
  const location = useLocation();
  const listClassName = className
    ? `nav-links ${className}`.trim()
    : "nav-links";
  const navItems = [
    {
      to: "/",
      label: "Home",
      getAriaCurrent: ({ pathname, hash }) =>
        pathname === "/" && !hash ? "page" : undefined,
    },
    {
      to: "/#about",
      label: "About",
      getAriaCurrent: ({ pathname, hash }) =>
        pathname === "/" && hash === "#about" ? "location" : undefined,
    },
    {
      to: "/#menu",
      label: "Menu",
      getAriaCurrent: ({ pathname, hash }) =>
        pathname === "/" && hash === "#menu" ? "location" : undefined,
    },
    {
      to: "/booking",
      label: "Reservations",
      getAriaCurrent: ({ pathname }) =>
        pathname === "/booking" ? "page" : undefined,
    },
    {
      to: "/#order-online",
      label: "Order Online",
      getAriaCurrent: ({ pathname, hash }) =>
        pathname === "/" && hash === "#order-online"
          ? "location"
          : undefined,
    },
    {
      to: "/#login",
      label: "Login",
      getAriaCurrent: ({ pathname, hash }) =>
        pathname === "/" && hash === "#login" ? "location" : undefined,
    },
  ];

  return (
    <ul className={listClassName}>
      {navItems.map((item) => {
        const ariaCurrent = item.getAriaCurrent(location);
        return (
          <li key={item.to}>
            <Link to={item.to} aria-current={ariaCurrent}>
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
