export function SearchPokemonRequest(params){
  return {
    type: 'SEARCH_POKEMON_REQUEST',
    params
  }
}

export function SearchPokemonSuccess(data){
  return {
    type: 'SEARCH_POKEMON_SUCCESS',
    pokemon: data
  }
}

export function SearchPokemonFailure(data){
  return {
    type: 'SEARCH_POKEMON_FAILURE',
    pokemon: data
  }
}