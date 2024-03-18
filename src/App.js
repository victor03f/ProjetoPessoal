
import './App.css';
import HelloWorld from './componentes/HelloWorld'
import SayMyName from './componentes/SayMyName';
import Pessoa from './componentes/Pessoa';
function App() {
  const nome = 'Maria'

  return (
    <div className="App">
       < HelloWorld />
       <SayMyName nome = "Victor"/>
       <SayMyName nome = {nome}/>
       <Pessoa 
       nome= "Victor" 
       idade= "28" 
       profissao = "Programador" 
       foto = "https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
