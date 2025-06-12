"use client";

import Link from "next/link";
import "./nav.css";

const linksNavigation = [
  {
    id: 1,
    href: "#champions",
    text: "Peça Agora",
  },
  {
    id: 2,
    href: "#champions",
    text: "Tops Búrguers",
  },
  {
    id: 3,
    href: "#contacts",
    text: "Fale Conosco",
  },
];

export default function Navigation() {
  return (
    <nav className="container-navigation">
      <ul className="list-navigation">
        {linksNavigation.map((link) => (
          <li key={link.id} className="item-navigation">
            <Link href={link.href} className="navigation">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
