import { FaGithub } from 'react-icons/fa';
import AddRemoveFunctions from './clase10/AddRemoveFunctions';
import DudasPrimeraClase from './clase1/DudasPrimeraClase';

function App() {
  return (
    <div>
      <h1>Material adicional para curso de React Js Coderhouse</h1>
      <p>Tutor: Diego Grassino</p>
      <p>
        <FaGithub />
        <a
          href="https://github.com/diegograssino/material-adicional-rj"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/diegograssino/material-adicional-rj
        </a>
      </p>
      <hr />
      <h2>Clase 1 (Repaso)</h2>
      <DudasPrimeraClase />
      <hr />
      <h2>Clase 10 (Context)</h2>
      <AddRemoveFunctions />
    </div>
  );
}

export default App;
