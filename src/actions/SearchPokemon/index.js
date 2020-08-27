export function SeachPokemonRequest(params){
  return {
    type: "SEACH_POKEMON_REQUEST",
    params
  }
}

export function SeachPokemonSuccess(data){
  return {
    type: 'SEACH_POKEMON_SUCCESS',
    pokemon: data
  }
}