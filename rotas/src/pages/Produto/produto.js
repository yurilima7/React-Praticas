import { useParams } from 'react-router-dom'
function Produto() {
    const { id } = useParams();

    return (
      <div>
        <header>
          <h1>Grade de produtos</h1> <br/>

          <span>Produto selecionado: {id}</span>
          
        </header>
      </div>
    );
  }
  
  export default Produto;
  