import Style from './css/Muralha.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira_china from '../assets/imagens/bandeira_china.png'

function Muralha(){
    return(

        <section className={Style.fundo_Muralha}>
            <h1>Venha conhecer a Muralha da china!</h1>
            <ComponenteProps 
                lugar="china"
                texto="A Muralha da China é uma das maiores obras de engenharia já feitas pelo homem, com mais de 21 mil quilômetros de extensão. Ela foi construída para proteger o território chinês de invasões e se estende por montanhas, desertos e planícies. Feita de pedra, tijolos e terra compactada, reflete séculos de história e esforço humano. Além de sua função militar, tornou-se símbolo da grandeza e perseverança da China. Hoje, é uma das principais atrações turísticas do mundo e Patrimônio Mundial da UNESCO."
                bandeira={bandeira_china}/>

        </section>

    )
}

export default Muralha