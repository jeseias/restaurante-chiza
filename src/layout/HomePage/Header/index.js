import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import bg from './../../../assets/images/bg/bg1.jpg';
 
import { FaBars   } from 'react-icons/fa';

import { Container, Navagation, HeaderContent } from './styles';

export default ({ criarCliente }) => {
  const [nav, setNav] = useState(false); 

  const hideNav = () => {
    console.log('James Bond')
    setNav(false);
  }

  useEffect(() => { 
    nav ? 
      document.querySelector('#header ul').classList.add('active') : 
      document.querySelector('#header ul').classList.remove('active') 

    nav ? 
      document.querySelector('#header .nav-bar').classList.add('active') : 
      document.querySelector('#header .nav-bar').classList.remove('active') 
  }, [nav]);

  function navLinks(e) {
    e.target !== <a href="#header">df</a> ? setNav(false) : setNav(true)
  }

  return (
    <Container 
      onClick={() => nav ? hideNav() : ''} 
      onScroll={() => nav ? hideNav() : ''} 
      visible={nav} 
      id="header" 
      BG={bg} 
    > 
      <Navagation>
        <div>
          <h1>Restaurante Chiza</h1>
          <FaBars size={30} className="nav-bar" onClick={() => setNav(!nav)} />
        </div>
        <ul onClick={e => navLinks(e)}>
          <Link to='/#Menu'>Menu</Link>
          <Link to='/#Clientes'>Clientes</Link>
          <Link to='/#Planos'>Planos</Link>
          <Link to='/#Testemunhos'>Testemunhos</Link>
          <Link to='/#Sobre'>Sobre</Link>
          <Link to='/#Contacto'>Contacto</Link>
        </ul> 
      </Navagation>
    
      <HeaderContent>
        <div>
          <h1>Recebe-se, e servi-se com amor</h1>
          <div>
            <p>
              Sem medo de errar. <br/> 
              Um certamente, <br/> não pode pensar bem, <br />
              amar bem, agir bem, <br />
              senão comer bem.
            </p>
            <button onClick={() => criarCliente()}>Seje o nosso cliente</button>
          </div>
        </div>
      </HeaderContent>
    </Container>
  )
}