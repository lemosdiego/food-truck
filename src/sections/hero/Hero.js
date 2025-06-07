import Link from "next/link";
import "./hero.css";
import "../../assets/fonts.css";
import Navigation from "@/components/navigation/Navigation";

const links = [
  { label: "Faça Seu Pedido", href: "#" },
  { label: "Próxima parada", href: "#" },
];

export default function Hero() {
  return (
    <header>
      <img
        src="https://res.cloudinary.com/dkrpmbjml/image/upload/v1749308632/logo_tzvqdj.png"
        alt="Logo do Hamburguer"
      />
      <div className="overlay"></div>
      <h1>Esse é o Hambúrguer</h1>
      <p>
        Aqui é raiz: pão, carne, queijo e respeito! <br /> Descubra o sabor
        autêntico do Hambúrguer.
      </p>
      <div className="container-buttons">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="buttons">
            {link.label}
          </Link>
        ))}
      </div>
      <Navigation />
    </header>
  );
}
