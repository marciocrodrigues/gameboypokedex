import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  SearchPokemonRequest
} from '../../actions/SearchPokemon';

import Input from '../Input';

import {
  Container,
  NamePokemon,
  TypePokemon
} from './styles';

const Screen = () => {
  const pokemon = useSelector(state => state.SeachPokemonReducer)
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [info, setInfo] = useState({name: '', front_default: '', types: [] })

  useEffect(() => {
    UpdateInfo(pokemon)
  }, [pokemon])

  function UpdateInfo(data) {
    if(data.pokemon !== null) {
      const { front_default, name, types } = data.pokemon
      setInfo({
        name,
        front_default,
        types
      })
    }
  }

  function SearchPokemon() {
    dispatch(SearchPokemonRequest(name));
  }
  
  return (
    <Container>
      <Input Search={SearchPokemon} ChangeValue={(e) => setName(e.target.value.toLowerCase())} />
      {
        info.name !== '' && (
          <div className="ContainerInfo">
            <div className="ImgPokemon">
              <img src={info.front_default} alt=""/>
            </div>
            <div className="InfoPokemon">
              <NamePokemon className="NamePokemon">Name: {info.name}</NamePokemon>
              {
                info.types.map(item => {
                  return (
                    <TypePokemon className="TypePokemon" key={item.type.name}>
                     Type: { item.type.name }
                    </TypePokemon>
                  )
                })
              }
            </div>
          </div>
        )
      }
    </Container>
  )
}

export default Screen;