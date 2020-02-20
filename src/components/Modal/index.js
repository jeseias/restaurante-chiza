import React from 'react'; 

import { Container } from './styles';

export default ({ visible, children }) => {
  return (
    <Container visible={visible}> 
      <div className="ContentDisplayed">
        {children} 
      </div>
    </Container>
  );
}
