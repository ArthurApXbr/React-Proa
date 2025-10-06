
import Styles from './css/Header.module.css'
import Viagens from '../assets/imagens/viagens.jpg'
import Lupa from '../assets/imagens/lupa.png'

function Header(){
    return(

        <header>
            <img src={Viagens} alt="Logo da empresa" className={Styles.img_Viagens}/>
            <nav className={Styles.menu_Header}>
                <a href="#">HOME</a>
                <a href="#">Escócia</a>
                <a href="#">Grand Canion</a>
                <a href="#">Muralhas da China</a>
                <a href="#">Aruba</a>
            </nav>

            <div className={Styles.busca}>
                <input type="search" />
            </div>

            <img src={Lupa} alt="Lupa" className={Styles.Lupa}/>
        </header>

    )
}

export default Header