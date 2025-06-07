import Card from "@/components/card/Card";
import "./champions.css";
import Link from "next/link";

const championsData = [
  {
    title: "Clássico da Casa",
    description:
      "Pão brioche, hambúrguer artesanal 150g, queijo prato, alface, tomate, picles e maionese especial da casa.",
    image:
      "https://res.cloudinary.com/dkrpmbjml/image/upload/v1749296800/classic_lk3eqc.webp",
    link: "",
  },
  {
    title: "Brutal Bacon",
    description:
      "Pão australiano, 2 burgers 150g, queijo cheddar duplo, bacon crocante e molho barbecue defumado.",
    image:
      "https://res.cloudinary.com/dkrpmbjml/image/upload/v1749296807/bacon_c9jb2g.webp",
    link: "",
  },
  {
    title: "Chicken Crunch",
    description:
      "Frango crocante empanado, queijo muçarela, alface americana, tomate e maionese de alho.",
    image:
      "https://res.cloudinary.com/dkrpmbjml/image/upload/v1749296804/chicken_rmygpv.webp",
    link: "",
  },
  {
    title: "Fogo na Brasa",
    description:
      " Hambúrguer artesanal, cheddar cremoso, jalapeños grelhados, cebola crocante e maionese picante da casa.",
    image:
      "https://res.cloudinary.com/dkrpmbjml/image/upload/v1749297636/brasa_iygtzv.webp",
    link: "",
  },
];

export default function Champions() {
  return (
    <section className="champions" id="champions">
      <div className="overlay-champions"></div>
      <h2>Nossos Campeões</h2>
      <div className="container-card">
        {championsData.map((item, index) => (
          <Card className="card-champions" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="content-champions">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link href={item.link} className="button-champions">
                Peça agora
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
