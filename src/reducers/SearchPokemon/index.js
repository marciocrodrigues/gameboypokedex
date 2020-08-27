import { produce } from 'immer';

const INITIAL_STATE = {
  pokemon: null,
}

export default function SeachPokemonReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case 'SEARCH_POKEMON_SUCCESS':
      return produce(state, draft => {
        draft.pokemon = action.pokemon;
      })
    case 'SEARCH_POKEMON_FAILURE':
      return produce(state, draft => {
        draft.pokemon = action.pokemon;
      })
    default:
      return state;
  }
}