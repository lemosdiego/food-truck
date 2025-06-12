import "./contacts.css";

import Link from "next/link";
import Form from "./form/Form";

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="content-contacts">
        <h3>Quer o nosso truck no seu evento?</h3>
        <p>
          Aniversário, empresa, casamento ou festa de rua — a gente leva o sabor
          até você!Entre em contato e solicite um orçamento personalizado.
        </p>
        <Link href={"/"} className="link-media">
          Solicitar orçamentos
        </Link>
        <h3>Confira nossa agenda</h3>
        <p>
          Seja o primeiro a saber sobre nossos eventos! nos siga para ficar por
          dentro dos nossos eventos e promoções.
        </p>
        <Link href={"/"} className="link-media">
          Instagram
        </Link>
      </div>
      <div className="container-form">
        <Form />
      </div>
    </section>
  );
}
