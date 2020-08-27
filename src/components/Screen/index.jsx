import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  SeachPokemonRequest
} from '../../actions/SearchPokemon';

import Input from '../Input';

import {
  Container
} from './styles';

const Screen = () => {
  const pokemon = useSelector(state => state.SeachPokemonReducer)
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [info, setInfo] = useState({name: '', front_default: '' })

  useEffect(() => {
    UpdateInfo(pokemon)
  }, [pokemon])

  function UpdateInfo(data) {
    if(data.pokemon !== null) {
      const { front_default, name } = data.pokemon
      setInfo({
        name,
        front_default
      })
    }
  }

  function SearchPokemon() {
    dispatch(SeachPokemonRequest(name));
  }
  
  return (
    <Container>
      <Input Search={SearchPokemon} ChangeValue={(e) => setName(e.target.value)} />
      {
        info.name !== '' && (
          <>
            <div>
              {info.name}
            </div>
            <div>
              <img src={info.front_default} alt=""/>
            </div>
          </>
        )
      }
    </Container>
  )
}

export default Screen;