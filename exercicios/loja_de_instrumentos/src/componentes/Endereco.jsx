import styles from "./css/Endereco.module.css";
import Local from "../assets/imagens/Endereco.png";

function Endereco() {
  return (
    <section className={styles.endereco}>
        <div className={styles.mapa}>
        <img src={Local} alt="local da loja" />
    </div>
    <div className={styles.textoEndereco}>
      <h2>Nossa Loja - Instrumentos Musicais</h2>
      <p>
        Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, 
        numa área de 500m2, com uma variada gama de instrumentos, em um ambiente agradável para toda a família!
      </p>
    </div>
  </section>
  )
}

export default Endereco;