import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: relative;
  margin-top: 90px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnControl = styled.div`
  position: relative;
  margin-left: 40px;
  top: 60px;

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 30px;
    left: 0px;
    width: 30px;
    height: 30px;
    background-color: #353535;
    border-radius: 100%;
  }

  .BtnVertical,
  .BtnHorizontal{
    position: absolute;
    left: 0px;
    width: 30px;
    height: 90px;
    background: #444;
    border-radius: 5px;
  }

  .BtnHorizontal {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .ButtonAB {
    position: relative;
    margin-left: 250px;
    margin-top: 10px;
    width: 20px;
    height: 25px;
    background: #4169E1;
    border-radius: 30px;
    -webkit-trasnform: rotate(-25deg);
  }

  .ButtonAB:after {
    content: "";
    position: absolute;
    top: 8px;
    right: 9px;
    width: 44px;
    height: 44px;
    background: #a93671;
    box-shadow: 68px 0 #a93671;
    border-radius: 100%;
    -webkit-transform: rotate(180deg);
  }
`;
