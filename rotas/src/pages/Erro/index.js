import { Link } from 'react-router-dom';

function Erro() {
    return (
      <div>
        <header>
          <h1>Página não existe</h1>

          <span>Você pode está procurando...</span><br/><br/>

          <Link to="/" >Home</Link> <br/>
          <Link to="/contato" >Contatos</Link> <br/>
          <Link to="/sobre" >Sobre</Link> <br/>
        </header>
      </div>
    );
  }
  
  export default Erro;
  