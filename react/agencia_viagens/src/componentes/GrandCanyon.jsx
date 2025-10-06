import Style from './css/GrandCanyon.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira_estadosunidos from '../assets/imagens/bandeira_estadosunidos.jpeg'

function GrandCanyon(){
    return(

        <section className={Style.fundo_GrandCanyon}>
            <h1>Venha conhecer o Grand Canyon!</h1>
            <ComponenteProps 
                lugar="grand canyon"
                texto="O Grand Canyon impressiona com sua grandiosidade e cores que mudam ao longo do dia, esculpido pelo rio Colorado que revela milhões de anos da história da Terra em suas camadas rochosas. Suas falésias imensas e vistas panorâmicas deixam qualquer visitante sem fôlego, enquanto o pôr do sol pinta o desfiladeiro com tons dourados e avermelhados inesquecíveis. É um dos maiores espetáculos naturais do mundo, símbolo da força e beleza da natureza."
                bandeira={bandeira_estadosunidos}/>

        </section>

    )
}

export default GrandCanyon