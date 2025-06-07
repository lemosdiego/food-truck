import Card from "@/components/card/Card";
import "./schedule.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function Schedule() {
  return (
    <section className="schedule">
      <div className="schedule-content">
        <h2>Nossa Programação</h2>
        <div className="container-card-schedule">
          <Card className="card-schedule">
            <h3>Segunda-feira 11h às 15h</h3>
            <span>
              <p>
                Praça Central – Av. dos Trabalhadores, 550 – Centro, São Paulo –
                SP
              </p>
              <FaMapMarkerAlt className="location-icon" />
            </span>
          </Card>
          <Card className="card-schedule">
            <h3>Segunda-feira 11h às 15h</h3>
            <span>
              <p>
                Praça Central – Av. dos Trabalhadores, 550 – Centro, São Paulo –
                SP
              </p>
              <FaMapMarkerAlt className="location-icon" />
            </span>
          </Card>
          <Card className="card-schedule">
            <h3>Segunda-feira 11h às 15h</h3>
            <span>
              <p>
                Praça Central – Av. dos Trabalhadores, 550 – Centro, São Paulo –
                SP
              </p>
              <FaMapMarkerAlt className="location-icon" />
            </span>
          </Card>
          <Card className="card-schedule">
            <h3>Segunda-feira 11h às 15h</h3>
            <span>
              <p>
                Praça Central – Av. dos Trabalhadores, 550 – Centro, São Paulo –
                SP
              </p>
              <FaMapMarkerAlt className="location-icon" />
            </span>
          </Card>
        </div>
        <Link href={"/"} className="link-schedule">
          Ver no mapa
        </Link>
      </div>
      <div className="schedule-map"></div>
    </section>
  );
}
