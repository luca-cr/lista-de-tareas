import './App.css';
import loguito from './imagenes/logo1.png'
import ListaDeTareas from './componentes/ListaDeTareas.js';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={loguito}
          className='frecc-logo'
          alt='imagen'
        />
      </div>
      
      <div className='tareas-lista-principal'>
        <h1>Mis Lesiones</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
