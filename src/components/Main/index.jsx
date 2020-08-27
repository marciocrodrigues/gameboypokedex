import React from 'react';

import Screen from '../Screen';
import Control from '../Control';

import { 
  Container
 } from './styles';

const Main = () => {
  return (
    <Container>
      <Screen></Screen>
      <Control></Control>
    </Container>
  )
}

export default Main;