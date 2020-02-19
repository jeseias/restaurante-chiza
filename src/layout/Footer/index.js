import React from 'react';

import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaPlaneDeparture, 
  FaAddressBook, FaTwitterSquare  } from 'react-icons/fa';
  import { MdEmail, MdPhone, MdLocationOn, MdLocationSearching } from 'react-icons/md';

import { Container, Top, Bottom } from './styles';

export default () => 
  <Container>
    <Top>
      <div>
        <FaPlaneDeparture size={30} className="mainIcon"/>
        <h2> Siga nos </h2>
        <div className="icons">
          <FaFacebookSquare size={16} className="icon" />
          <FaInstagram size={16} className="icon"/>
          <FaLinkedinIn size={16} className="icon" />
          <FaTwitterSquare size={16} className="icon"/>
        </div>
      </div>
      <div>
        <FaAddressBook size={30} className="mainIcon"/>
        <h2> Contacto </h2>
        <p>
          <MdEmail size={17} className='icon' />
          <span>restaurantechiza@outlook.com</span>
        </p>
        <p>
          <MdPhone size={17} className='icon' />
          <span>912516269 / 923516269</span>
        </p>
      </div>
      <div>
        <MdLocationOn size={30} className="mainIcon"/>
        <h2> Localização </h2>
        <p>
          <MdLocationSearching size={17} />
          Entrada Do Sequele, Ao lado da ponte.
        </p>
      </div>
    </Top>
    <Bottom>
      <p>Feito com Amor por <a href="https://jeseiasdomingos.netlify.com" target="_blank">Jeseías Domingos</a> </p>
      <br/>
      <p> Copyright &copy; 2020, Restaurante Chiza, Todos Direito Reservados </p>
    </Bottom>
  </Container>