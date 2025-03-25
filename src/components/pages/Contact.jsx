import Input from "../form/Input"
import Submit from "../form/SubmitButton";
import TextArea from "../form/TextArea";

import styles from "./Contact.module.css"

function Contact(){
    return (
      <section>
        <h1>Contate-nos</h1>
        <div className={styles.contato}>
          <form className={styles.form}>
            <Input type="text" text="Seu nome" placeholder="Seu nome" />
            <Input
              type="email"
              text="Email"
              placeholder="seuemail@exemplo.com"
            />
            <TextArea text="Mensagem" placeholder="Sua mensagem" rows="8" />
            <Submit text="Enviar Mensagem" />
          </form>
          <section className={styles["contato-info"]}>
            <div>
                <h2>Informações de Contato</h2>
                <p>
                <strong>Endereço:</strong> Rua Exemplo, 123
                </p>
                <p>
                <strong>Telefone:</strong> (XX) XXXX-XXXX / (XX) XXXX-XXXX
                </p>
                <p>
                <strong>Email:</strong> costs@gmail.com
                </p>
                <p>
                <strong>Horário:</strong> Seg - Sex, 9h às 18h
                </p>
            </div>
          </section>
        </div>
      </section>
    );
}

export default Contact;