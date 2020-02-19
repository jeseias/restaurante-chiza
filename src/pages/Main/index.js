import React from 'react';

import Header from './../../layout/Header';
import Menu from './../../layout/Menu';
import Clientes from './../../layout/Clientes';
import Planos from './../../layout/Planos';
import Testemunhos from './../../layout/Testemunhos';
import Sobre from './../../layout/Sobre'; 
import Footer from './../../layout/Footer'; 

export default () => {
  return (
    <>
      <Header id="header"/>
      <Menu id="menu"/>
      <Clientes id="clientes" />
      <Planos id="planos" />
      <Testemunhos id="testemunhos" />
      <Sobre id="sobre" /> 
      <Footer id="footer" /> 
    </>
  )
}