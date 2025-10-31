import './App.css'
import Header from './componentes/Header'
import Sobre from './componentes/Sobre'
import Produtos from './componentes/Produtos'
import Endereco from './componentes/Endereco'
import Contato from './componentes/Contato'

function App() {
  return (
    <>
      <main>
        <Header />
        <Sobre />
        <Produtos />
        <Endereco />
        <Contato />
      </main>
    </>
  )
}

export default App