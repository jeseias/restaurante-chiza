import React from 'react';
import { Link } from 'react-router-dom';

import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaBars  } from 'react-icons/fa';

import { Container, TopHeader, Navagation, HeaderContent } from './styles';

export default () => 
  <Container>
    <TopHeader>
      <div>
        <span>
          <MdEmail size={20} className='icon' />
          <span>restaurantechiza@outlook.com</span>
        </span>
        <span>
          <MdPhone size={20} className='icon' />
          <span>912516269/923516269</span>
        </span>
        <span>
          <MdLocationOn size={20} className='icon' />
          <span>Entrada do Sequele</span>
        </span>
      </div>
      <div>
        <FaFacebookSquare size={20} />
        <FaInstagram size={20} />
        <FaLinkedinIn size={20} />
      </div>
    </TopHeader>
 
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