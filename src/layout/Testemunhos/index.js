import React from 'react';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Container, TestimonalSlider, SlideItem } from './styles';

export default () => {   

  return (
    <Container id="testemunhos">
      <h1>O que nossos clientes dizem</h1>
      <TestimonalSlider>
        <div className="left"><MdKeyboardArrowLeft size={30} /></div>
        <div className="right"><MdKeyboardArrowRight size={30} /></div>
        <div className="main">
          <div>
            <SlideItem>
              <div>
                <img src="" alt=""/>
                <div>
                  <p className="name">Zacarias Chitunda</p>
                  <p className="saying">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus repellat amet.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem illo voluptates quasi?
                  </p>
                </div>
              </div>
            </SlideItem>
            <SlideItem>
              <div>
                <img src="" alt=""/>
                <div>
                  <p className="name">Zacarias Chitunda</p>
                  <p className="saying">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus repellat amet.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem illo voluptates quasi?
                  </p>
                </div>
              </div>
            </SlideItem>
            <SlideItem>
              <div>
                <img src="" alt=""/>
                <div>
                  <p className="name">Zacarias Chitunda</p>
                  <p className="saying">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus repellat amet.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem illo voluptates quasi?
                  </p>
                </div>
              </div>
            </SlideItem>
          </div>
        </div>
      </TestimonalSlider>
    </Container>
  )
}