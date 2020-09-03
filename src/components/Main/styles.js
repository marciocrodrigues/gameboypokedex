import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 600px;
  max-height: 700px;
  width: 100%;
  height: 100vh;
  background: #4169E1;
  border-radius: 10px 10px 60px 10px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.1);

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 31px;
    border-bottom: 4px solid #6495ED;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 31px;
    border-left: 4px solid #6495ED;
    margin-left: 50px;
    margin-right: 40px;
  }
`;