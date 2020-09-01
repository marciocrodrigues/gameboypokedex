import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #bdae58;
  margin-left: 40px;
  margin-right: 40px;
  top: 50px;
  width: 300px;
  height: 250px;

  .ContainerInfo {
    margin-top: 10px;
    display: flex;
  }

  .InfoPokemon {
    color: #fff;
    font-family: 'Press Start 2P', monospace;
    font-size: 10px;
  }
`;

export const NamePokemon = styled.div`
  margin-top: 10px;
`

export const TypePokemon = styled.div`
  margin-top: 10px;
`