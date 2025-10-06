import Style from './css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira_aruba from '../assets/imagens/bandeira_aruba.jpeg'

function Aruba(){
    return(

        <section className={Style.fundo_Aruba}>
            <h1>Venha conhecer Aruba!</h1>
            <ComponenteProps 
                lugar="Aruba"
                texto="Aruba encanta com suas praias de areia branca e mar azul-turquesa cristalino, banhada por um sol que brilha o ano todo. A ilha combina beleza natural com um clima acolhedor e vibrante cultura caribenha. Suas formações rochosas, cavernas e parques naturais revelam paisagens únicas. As águas calmas são perfeitas para mergulho e esportes aquáticos. É um verdadeiro paraíso tropical, ideal para relaxar e se encanta"
                bandeira={bandeira_aruba}/>

        </section>

    )
}

export default Aruba