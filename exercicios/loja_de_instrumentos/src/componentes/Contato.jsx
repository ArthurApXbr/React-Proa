import styles from "./css/Contato.module.css";
import Whats from "../assets/imagens/Whats.png";
import Insta from "../assets/imagens/Insta.png";
import Face from "../assets/imagens/Face.png";

function Contato() {
  return (
    <section className={styles.contato}>
    <div className={styles.sessoes}>
      <label>Entre com o seu nome:</label>
      <p>Digite seu nome aqui...</p>

      <label>Entre com o seu e-mail:</label>
      <p>Digite seu email aqui...</p>

      <a>Faça seu pedido aqui...</a>

      <button>Enviar</button>
    </div>

    <div className={styles.redes}>
      <h3>Acesse também nossas redes sociais:</h3>
      <div className={styles.icons}>
        <img src={Whats} alt="WhatsApp" />
        <img src={Insta} alt="Instagram" />
        <img src={Face} alt="Facebook" />
      </div>
    </div>
  </section>
  
    )
}

export default Contato;