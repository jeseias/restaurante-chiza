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
      <Header />
      <Menu />
      <Clientes />
      <Planos />
      <Testemunhos />
      <Sobre /> 
      <Footer /> 
    </>
  )
}