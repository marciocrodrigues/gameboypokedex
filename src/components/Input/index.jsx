import React from 'react';

import {
  InputSearch,
  Label
} from './styles';

const Input = ({
  Search,
  ChangeValue
}) => {
  return (
    <>
      <Label htmlFor="searchpokemon" >Pokémon</Label>
      <InputSearch data-testid="search-pokemon" name="searchpokemon" onBlur={Search} onChange={ChangeValue}/>
    </>
  )
}

export default Input;