import { all } from 'redux-saga/effects';

import seachPokemon from './SeachPokemon';

export default function* rootSaga(){
  return yield all([
    seachPokemon
  ]);
}