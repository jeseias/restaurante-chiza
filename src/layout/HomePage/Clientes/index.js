import React from 'react';

import Taxi from './../../../assets/images/clientes/taxi.jpg';
import Company from './../../../assets/images/clientes/company.jpg';
import Person from './../../../assets/images/clientes/me3.jpg';

import { Container, ClientCard } from './styles';

export default () => 
  <Container>
    <h1 className="MainTitle"> Seje o nosso cliente </h1>
    <div>
      <ClientCard BG={Taxi}>
        <div className="img" /> 
        <h1>Morista</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed ipsa suscipit?
        </p>
        <button> Quero Ser </button>
      </ClientCard>
      <ClientCard BG={Company}>
        <div className="img img2" /> 
        <h1>Empresas</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed ipsa suscipit?
        </p>
        <button> Quero Ser </button>
      </ClientCard>
      <ClientCard BG={Person}>
        <div className="img img3" /> 
        <h1>Individual</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed ipsa suscipit?
        </p>
        <button> Quero Ser </button>
      </ClientCard>
    </div>
  </Container>