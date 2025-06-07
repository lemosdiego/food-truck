import "../contacts.css";

export default function Form() {
  return (
    <form>
      <div>
        <input placeholder="Nome" />
        <input placeholder="Email" />
      </div>
      <input placeholder="Assunto" />
      <textarea placeholder="Mensagem"></textarea>
      <button>Enviar</button>
    </form>
  );
}
