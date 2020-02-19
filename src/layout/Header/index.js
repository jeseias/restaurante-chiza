import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import bg from './../../assets/images/bg/bg1.jpg';
 
import { FaBars   } from 'react-icons/fa';

import { Container, Navagation, HeaderContent } from './styles';

export default () => {
  const [nav, setNav] = useState(false);

  function showMenu() {
    setNav(!true);
  }

  useEffect(() => {
    console.log(document.querySelector('#header'))
    nav ? 
      document.querySelector('#header').classList.add('active') : 
      document.querySelector('#header').classList.remove('active') 
  }, [nav]);

  return (
    <Container BG={bg} visible={nav} id="header"> 
      <Navagation>
        <div>
          <h1>Restaurante Chiza</h1>
          <FaBars size={30} className="nav-bar" onClick={() => setNav(!nav)} />
        </div>
        <ul>
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
            <button>Seje o nosso cliente</button>
          </div>
        </div>
      </HeaderContent>
    </Container>
  )
}