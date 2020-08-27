import { all, call, put,takeLatest } from 'redux-saga/effects';
import api from '../../services/api';

import {
  SeachPokemonSuccess
} from '../../actions/SearchPokemon';

function* SeachPokemon(data){
  const result = yield call(api.get, `/pokemon/${data.params}`)
  const { name, sprites, types } = result.data;
  const { front_default } = sprites;

  const pokemon = {
    name,
    front_default
  };

  yield put(SeachPokemonSuccess(pokemon));
}

export default all([
  takeLatest('SEACH_POKEMON_REQUEST', SeachPokemon)
])