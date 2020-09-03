import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  SearchPokemonRequest
} from '../../actions/SearchPokemon';

import Input from '../Input';

import {
  Container
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
      <div data-testid="info-pokemon">
      {
        info.name !== '' && (
          <div className="ContainerInfo">
            <div className="ImgPokemon">
              <img src={info.front_default} alt=""/>
            </div>
            <div className="InfoPokemon">
              <div className="NamePokemon">Name: {info.name}</div>
              {
                info.types.map(item => {
                  return (
                    <div className="TypePokemon" key={item.type.name}>
                     Type: { item.type.name }
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }
      </div>
    </Container>
  )
}

export default Screen;