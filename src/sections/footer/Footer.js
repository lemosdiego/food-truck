import Link from "next/link";
import "./footer.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const iconsFooter = [
  {
    icon: <FaWhatsapp size={25} />,
    link: "https://wa.me/seunumero",
  },
  {
    icon: <FaInstagram size={25} />,
    link: "https://instagram.com/seuperfil",
  },
  {
    icon: <FaFacebookF size={25} />,
    link: "https://facebook.com/seupagina",
  },
  {
    icon: <FaYoutube size={25} />,
    link: "https://youtube.com/seucanal",
  },
];

export default function Footer() {
  return (
    <footer className="bg-image">
      <div className="overlay-footer"></div>
      <div className="content-footer">
        <div className="logo-footer">
          <p>
            Obrigado por rodar com a gente. Que nunca falte burger, boas
            histórias e bons encontros!
          </p>
        </div>
        <nav className="nav-footer">
          <h4>Links Rápidos</h4>
          <ul>
            <li>Sobre nós</li>
            <li>Campeões</li>
          </ul>
        </nav>
        <nav className="nav-footer">
          <h4>Contatos</h4>
          <ul>
            <li>(11) 99999-9999</li>
            <li>contatoburguer@gmail.com</li>
          </ul>
        </nav>
      </div>

      <div className="social-footer">
        {iconsFooter.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        ))}
      </div>

      <div className="copyright">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
