import React from 'react';
import { BemVindo, Container, Head, Titulo } from './styles';

function App() {
  return (
    <Container>
      <Head>
        <Titulo> Projeto Styled </Titulo>
      </Head>


      <BemVindo cor="FF0000">Bem vindo ao sistema!</BemVindo>

    </Container>
  );
}

export default App;

/*
<div className="container">
      <header className='header'>
        <a className='titulo'>Projeto Styled</a>
      </header>

      <h1>Bem vindo ao sistema!</h1>
      
    </div>
 */