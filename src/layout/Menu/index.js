import React from 'react';

import f from './../../assets/images/food/f.jpg';
import bg from './../../assets/images/bg/bg.jpg'; 
import f1 from './../../assets/images/food/f1.jpg';
import f2 from './../../assets/images/food/f2.jpg';
import f3 from './../../assets/images/food/f3.jpg';
import f4 from './../../assets/images/food/f4.jpg';
import f5 from './../../assets/images/food/f5.jpg';

import { Container, Platebox } from './styles';

export default () => 
  <Container>
    <h1>As Delicias de Hoje</h1>
    <div>
      <Platebox>
        <div className="img" BG={bg}></div>
        <div className="title">Arroz com Feijao</div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae architecto similique.
        </p>
        <p className="price">1200 AKZ</p>
        <button className="btn">Encomdar</button>
      </Platebox>
      <Platebox>
        <div className="img" BG={f1}></div>
        <div className="title">Arroz com Feijao</div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae architecto similique.
        </p>
        <p className="price">1200 AKZ</p>
        <button className="btn">Encomdar</button>
      </Platebox>
      <Platebox>
        <div className="img" BG={f2}></div>
        <div className="title">Arroz com Feijao</div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae architecto similique.
        </p>
        <p className="price">1200 AKZ</p>
        <button className="btn">Encomdar</button>
      </Platebox>
      <Platebox>
        <div className="img" BG={f3}></div>
        <div className="title">Arroz com Feijao</div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae architecto similique.
        </p>
        <p className="price">1200 AKZ</p>
        <button className="btn">Encomdar</button>
      </Platebox>
      <Platebox>
        <div className="img" BG={f4}></div>
        <div className="title">Arroz com Feijao</div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae architecto similique.
        </p>
        <p className="price">1200 AKZ</p>
        <button className="btn">Encomdar</button>
      </Platebox>
      <Platebox>
        <div className="img" BG={f5}></div>
        <div className="title">Arroz com Feijao</div>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae architecto similique.
        </p>
        <p className="price">1200 AKZ</p>
        <button className="btn">Encomdar</button>
      </Platebox>
    </div>
  </Container>