import { Link } from 'react-router-dom';

function Sobre() {
    return (
      <div>
        <header>
          <h1>Sobre a página</h1>
          <Link to="/contato" >Contatos</Link> <br/>
          <Link to="/" >Home</Link> <br/>
        </header>
      </div>
    );
  }
  
  export default Sobre;
  