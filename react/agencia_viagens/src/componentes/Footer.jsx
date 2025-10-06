import Styles from './css/Footer.module.css'
import Face from '../assets/imagens/face.jfif'
import Insta from '../assets/imagens/insta.jfif'
import Tiktok from '../assets/imagens/tiktok.png'
import Whtas from '../assets/imagens/whtas.png'

function Footer() {
    return (
        <footer className={Styles.footer}>
            <h3 className={Styles.titulo}>Siga-nos em nossas redes sociais</h3>

            <div className={Styles.icones}>
                <a href="#"><img src={Insta} alt="Instagram" className={Styles.imgRede}/></a>
                <a href="#"><img src={Face} alt="Facebook" className={Styles.imgRede}/></a>
                <a href="#"><img src={Tiktok} alt="TikTok" className={Styles.imgRede}/></a>
                <a href="#"><img src={Whtas} alt="WhatsApp" className={Styles.imgRede}/></a>
            </div>

            <p className={Styles.contato}>
                Telefone de contato: (11) 9555 - 3355
            </p>
        </footer>
    )
}

export default Footer