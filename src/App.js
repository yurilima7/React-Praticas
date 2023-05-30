import { useState } from 'react';
import Nome from './components/Nome';

function App() {
  const [aluno, setAluno] = useState('Yuri Lima')

  function handleChangeName(nome) {
    setAluno(nome)
  }

  return (
    <div>
      <h1>Componente App</h1><br />
      <h2>Olá: {aluno}</h2>
      <button onClick={ () => handleChangeName('Yuri da Silva Lima') }>
        Mudar Nome
      </button>
    </div>
  );
}

export default App;
