import { Link } from 'react-router-dom';

function Contato() {
    return (
      <div>
        <header>
          <h1>Contatos</h1> <br/>
          <span>Email: teste@teste.com</span><br/>
          <Link to="/sobre" >Sobre</Link> <br/>
          <Link to="/" >Home</Link> <br/>
        </header>
      </div>
    );
  }
  
  export default Contato;
  