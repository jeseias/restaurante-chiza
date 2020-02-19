import React from 'react';

import { Container, SobreBox, Gallery,
  One, Two, Three, Four, Five, Six, Seven, Eight
} from './styles';

import sq1 from './../../assets/images/sobre/sq.jpg';
import sq2 from './../../assets/images/sobre/sq1.jpg';
import sq3 from './../../assets/images/sobre/sq2.jpg';
import sq4 from './../../assets/images/sobre/sq3.jpg';
import sq5 from './../../assets/images/sobre/sq4.jpg';
import sq6 from './../../assets/images/sobre/sq5.jpg';
import sqb from './../../assets/images/sobre/sqb.jpg';
import lg from './../../assets/images/sobre/lg.jpg';

export default () => {
  return (
    <Container>
      <SobreBox>
        <h1 className="MainTitle">Restaurante Chiza</h1>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, perspiciatis totam quod eum vero nulla velit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <br/>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non tempore, qui provident ducimus eaque nulla.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum nostrum aspernatur laudantium iste, illo quos!
        </p>
        <br/>
        <br/>
        <p>
          <b>Principios:</b>
          <br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit vitae illo id!
          Lorem, ipsum dolor sit.
        </p>
        <br/>
        <p>
          <b>Valores:</b>
          <br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit vitae illo id!
          Lorem, ipsum dolor sit amet.
        </p>
        <br/>
        <p>
          <b>Eticas:</b>
          <br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit vitae illo id!
          Lorem, ipsum dolor sit amet.
        </p>
      </SobreBox>
      <Gallery>
        <One bg={sq1} alt="food" className="one" />
        <Two bg={sq2} alt="food" className="two" />
        <Three bg={sq3} alt="food" className="three" />
        <Four bg={sq4} alt="food" className="four" />
        <Five bg={sq5} alt="food" className="eight" />
        <Six bg={sq6} alt="food" className="five" />
        <Seven bg={lg} alt="food" className="six" />
        <Eight bg={sqb} alt="food" className="seven" />
      </Gallery>
    </Container>
  )
}