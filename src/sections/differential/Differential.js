import Card from "@/components/card/Card";
import "./differential.css";
import { GiHamburger } from "react-icons/gi";
import { FaMapMarkerAlt, FaUsers, FaBolt } from "react-icons/fa"; // novos ícones

const differentialData = [
  {
    title: "Artesanal de Verdade",
    description:
      "Nada de congelados! Nossos burgers são preparados na hora com blend próprio e pão sempre fresquinho.",
    icon: <GiHamburger size={100} color="#eab308" />,
  },
  {
    title: "Atendimento Rápido",
    description:
      "Servimos com agilidade, simpatia e sem perder a qualidade. Você sai com o lanche quente e o sorriso no rosto.",
    icon: <FaBolt size={100} color="#60a5fa" />, // ícone de raio
  },
  {
    title: "Estamos em Todo Lugar",
    description:
      "Nosso truck percorre os melhores pontos da cidade. Acompanhe nossas paradas e venha nos ver.",
    icon: <FaMapMarkerAlt size={100} color="#10b981" />, // ícone de localização
  },
  {
    title: "Conexão com a Comunidade",
    description:
      "Mais que comida, oferecemos um ambiente de encontro, música boa e energia positiva.",
    icon: <FaUsers size={100} color="#f472b6" />, // ícone de comunidade
  },
];

export default function Differential() {
  return (
    <section className="differential">
      <h2>Nossos Diferenciais</h2>
      <div className="container-card-differential">
        {differentialData.map((item, index) => (
          <Card className="card-differential" key={index}>
            <div className="icon-differential">{item.icon}</div>
            <div className="content-differential">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
