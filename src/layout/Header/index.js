import React from 'react';
import { Link } from 'react-router-dom';

import bg from './../../assets/images/bg/bg.jpg';
 
import { FaBars   } from 'react-icons/fa';

import { Container, Navagation, HeaderContent } from './styles';

export default () => 
  <Container BG={bg}> 
    <Navagation>
      <div>
        <h1>Restaurante Chiza</h1>
      </div>
      <ul>
        <Link to='/#Menu'>Menu</Link>
        <Link to='/#Clientes'>Clientes</Link>
        <Link to='/#Planos'>Planos</Link>
        <Link to='/#Testemunhos'>Testemunhos</Link>
        <Link to='/#Sobre'>Sobre</Link>
        <Link to='/#Contacto'>Contacto</Link>

        <FaBars size={22} className="nav-bar" />
      </ul> 
    </Navagation>
  
    <HeaderContent>
      <div>
        <h1>Recebe-se, e servi-se com amor</h1>
        <div>
          <p>
            Um certamente não pode pensar, <br />
            amar bem, agir bem, <br />
            senão comer bem.
          </p>
          <button>Seje o nosso cliente</button>
        </div>
      </div>
    </HeaderContent>
  </Container>