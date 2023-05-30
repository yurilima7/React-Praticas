import { useState, useEffect } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const [user, setUser] = useState({});

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]);

  function register(e) {
    e.preventDefault();

    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })

    setTarefas([...tarefas, input])
    setInput('')
  }

  return (
    <div>
      <h1>Cadastrando usuário</h1>

      <form onSubmit={register}>
        <label>Nome:</label><br />
        <input
          placeholder='Digite seu nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        /><br />

        <label>Email:</label><br />
        <input
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <label>Idade:</label><br />
        <input
          placeholder='Digite sua idade'
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        /><br />

        <label>Nome da tarefa:</label><br />
        <input
          placeholder='Digite uma tarefa'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br />

        <button type='submit'>Registrar</button>
      </form>

      <br /><br />

      <div>
        <span>Bem vindo: {user.nome}</span><br />
        <span>Idade: {user.idade}</span><br />
        <span>Email: {user.email}</span><br />
        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
