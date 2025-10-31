import styles from "./css/Produtos.module.css";
import guitarrinha from "../assets/imagens/GuitarraVenda.png";

function Produtos() {
  return (
      <section className={styles.produtos}>
        <div className={styles.produto}>
          <img src={guitarrinha} alt="Violao a venda" />
          <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
          <span>R$ 989,50</span>
        </div>
        <div className={styles.produto}>
          <img src={guitarrinha} alt="Violao a venda" />
          <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
          <span>R$ 989,50</span>
        </div>
        <div className={styles.produto}>
          <img src={guitarrinha} alt="Violao a venda" />
          <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
          <span>R$ 989,50</span>
        </div>
        <div className={styles.produto}>
          <img src={guitarrinha} alt="Violao a venda" />
          <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
          <span>R$ 989,50</span>
          </div>
        </section>
  )
}



export default Produtos;