import Titulo from './components/Titulo.jsx'
import Formulario from './components/Formulario.jsx'
import Contenido from './components/Contenido.jsx'
import Boton from './components/Boton.jsx'
import './App.css';
import Informacion from './components/Informacion.jsx';

function App() {
  return (
    <div className="App">
      <Formulario/>
      <Titulo/>
      <Contenido/>
      <Informacion/>
      <Boton/>
    </div>
  );
}

export default App;
