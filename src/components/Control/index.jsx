import React from 'react';

import {
  Container,
  BtnControl
} from './styles';

const Control = () => {
  return (
    <Container>
      <BtnControl>
        <div className="BtnVertical"></div>
        <div className="BtnHorizontal"></div>
        <div className="BtnStartSelect"></div>
        <div className="ButtonAB"></div>
      </BtnControl>
    </Container>
  );
}

export default Control;