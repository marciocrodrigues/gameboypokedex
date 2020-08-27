import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Main from './components/Main';

import {
  GlobalStyle
} from './global';

function App() {
  return (
    <>
      <Provider store={store}>
        <Main></Main>
        <GlobalStyle />        
      </Provider>
    </>
  );
}

export default App;
