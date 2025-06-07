"use client";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Card from "@/components/card/Card";
import "./testimonials.css";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export const testimonialsData = [
  {
    id: 1,
    name: "Bruna Ribeiro",
    text: "O melhor hambúrguer que já comi na vida! A carne é suculenta e o tempero é único. Virei cliente fiel!",
  },
  {
    id: 2,
    name: "Carlos Martins",
    text: "Atendimento rápido, lanche fresquinho e aquele sabor que só se encontra aqui. Recomendo demais!",
  },
  {
    id: 3,
    name: "Rafaela Souza",
    text: "Toda semana paro nesse truck com a galera! Ambiente descontraído e comida de verdade.",
  },
  {
    id: 4,
    name: "Diego Lima",
    text: "Já experimentei todos os campeões e não consigo escolher um favorito. Um melhor que o outro!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <div className="overlay-testimonials"></div>
      <h2>Quem Prova, Aprova</h2>
      <div className="container-card-testimonials">
        {testimonialsData.map(
          (testimonial, index) =>
            index === currentIndex && (
              <Card key={testimonial.id} className="card-testimonials">
                <FaQuoteLeft className="quote-icon left" />
                <p>{testimonial.text}</p>
                <FaQuoteRight className="quote-icon right" />
                <div className="container-profile">
                  <FaUserCircle className="img-profile" />
                  <p> {testimonial.name}</p>
                </div>
              </Card>
            )
        )}
        <div className="dots">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
