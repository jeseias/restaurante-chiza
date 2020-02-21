import React from 'react';

import f from './../../../assets/images/food/f.jpg'; 
import f1 from './../../../assets/images/food/f1.jpg';
import f2 from './../../../assets/images/food/f2.jpg';
import f3 from './../../../assets/images/food/f3.jpg';
import f4 from './../../../assets/images/food/f4.jpg';
import f5 from './../../../assets/images/food/f5.jpg';

import { Container, Platebox } from './styles';

export default ({ encomendar }) => 
  <Container>
    <h1 className="MainTitle">As Delicias de Hoje</h1>
    <div>
      <Platebox BG={f}>
        <div className="img" ></div>
        <div className="title SecondaryTitle">Arroz com Feijao</div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae architecto similique.
        </p>
        <p className="price">1200 AKZ</p>
        <button className="btn" onClick={() => encomendar()} >Encomdar</button> 
      </Platebox>
      <Platebox BG={f1}>
        <div className="img" ></div>
        <div className="title SecondaryTitle">Arroz com Feijao</div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae architecto similique.
        </p>
        <p className="price">1200 AKZ</p>
        <button className="btn" onClick={() => encomendar()} >Encomdar</button>
      </Platebox>
      <Platebox BG={f2}>
        <div className="img" ></div>
        <div className="title SecondaryTitle">Arroz com Feijao</div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae architecto similique.
        </p>
        <p className="price">1200 AKZ</p>
        <button className="btn" onClick={() => encomendar()} >Encomdar</button>
      </Platebox>
      <Platebox BG={f3}>
        <div className="img" ></div>
        <div className="title SecondaryTitle">Arroz com Feijao</div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae architecto similique.
        </p>
        <p className="price">1200 AKZ</p>
        <button className="btn" onClick={() => encomendar()} >Encomdar</button>
      </Platebox>
      <Platebox BG={f4}>
        <div className="img" ></div>
        <div className="title SecondaryTitle">Arroz com Feijao</div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae architecto similique.
        </p>
        <p className="price">1200 AKZ</p>
        <button className="btn" onClick={() => encomendar()} >Encomdar</button>
      </Platebox>
      <Platebox BG={f5}>
        <div className="img" ></div>
        <div className="title SecondaryTitle">Arroz com Feijao</div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae architecto similique.
        </p>
        <p className="price">1200 AKZ</p>
        <button className="btn" onClick={() => encomendar()} >Encomdar</button>
      </Platebox>
    </div>
  </Container>