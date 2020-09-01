import { all, call, put,takeLatest, delay } from 'redux-saga/effects';
import api from '../../services/api';

import {
  SearchPokemonSuccess,
  SearchPokemonFailure
} from '../../actions/SearchPokemon';

function* SearchPokemon(data){
  
  let pokemon = {
    name: '',
    front_default: ''
  }

  try {
    const result = yield call(api.get, `/pokemon/${data.params}`)
    
    const { status } = result.request
  
    if(status === 200) {
      
      const { name, sprites, types } = result.data;
      const { front_default } = sprites;
      
      pokemon = {
        name,
        front_default,
        types
      };
     
      yield put(SearchPokemonSuccess(pokemon));
    }
  } catch(error) {
    yield put(SearchPokemonFailure(pokemon));
  }
}

export default all([
  takeLatest('SEARCH_POKEMON_REQUEST', SearchPokemon)
])