"use client";

import Link from "next/link";
import "./nav.css";

const linksNavigation = [
  {
    href: "#champions",
    text: "Tops do truk",
  },
  {
    href: "/paradas",
    text: "Próximas Paradas",
  },
  {
    href: "/cardapio",
    text: "Cardápio",
  },
];

export default function Navigation() {
  return (
    <nav className="container-navigation">
      <ul className="list-navigation">
        {linksNavigation.map((link) => (
          <li key={link.href} className="item-navigation">
            <Link href={link.href} className="navigation">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
