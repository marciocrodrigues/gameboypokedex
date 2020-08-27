import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: relative;
  margin-top: 90px;
  height: 50px;
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
    left: 30px;
    width: 30px;
    height: 30px;
    background-color: #353535;
    border-radius: 100%;
  }

  .BtnVertical,
  .BtnHorizontal{
    position: absolute;
    left: 30px;
    width: 30px;
    height: 90px;
    background: #444;
    border-radius: 5px;
  }

  .BtnVertical:before,
  .BtnHorizontal:before {
    content: "";
    position: relative;
    top: 99px;
    left: 8px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #dedede;
  }

  .BtnVertical:after,
  .BtnHorizontal:after {
    content: "";
    position: relative;
    top: -27px;
    left: -5.6px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #dedede;
  }

  .BtnHorizontal {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;
