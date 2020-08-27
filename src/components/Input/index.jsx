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
      <InputSearch name="searchpokemon" onBlur={Search} onChange={ChangeValue}/>
    </>
  )
}

export default Input;