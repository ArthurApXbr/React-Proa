import Style from './css/Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira_escocia from '../assets/imagens/bandeira_escocia.webp'

function Escocia(){
    return(

        <section className={Style.fundo_escocia}>
            <h1>Venha conhecer a Escócia!</h1>
            <ComponenteProps 
                lugar="Escocia"
                texto="A Escócia é um país de beleza única, marcada por montanhas imponentes, lagos misteriosos e castelos históricos. Suas paisagens naturais se misturam à rica cultura celta e à hospitalidade de seu povo, tornando cada região uma descoberta fascinante."
                bandeira={bandeira_escocia}
            />
            
        </section>

    )
}

export default Escocia