import './App.css';
import { Testimonios } from './components/Testimonios';

function App() {
  return (
    <div className="app">
      <div className="main-container">
        <h1>Esto es lo que dicen nuestros alumnos de freeCodeCamp sobre nosotros:</h1>
        <Testimonios />
      </div>
    </div>
  );
}

export default App;
