import styled from "styled-components";
import {  layout } from "src/helpers";
const { mobile, mobileMedium, tablet, laptop, desktop } = layout;

export const ContentBox = styled.div`
  max-width: 632px;
`;

export const DayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  /* padding-block: 3vw; */
  div {
    flex: 1;
    text-align: center;
  }

  @media only screen and (min-width: ${mobile}) {
    flex-direction: column;
    .searchBox {
      input {
        min-height: 30px;
        margin-block: 10px;
      }
    }
  }
  @media only screen and (min-width: ${tablet}) {
    flex-direction: row;
    .searchBox {
      text-align: right;
      input {
        min-height: 45px;
        margin-block: 0px;
      }
    }
  }

  /* .blank {
    background-color: red;
    padding-block: 5vw;
  } */
`;


export const CardsBox = styled.div`
    display:grid;
    gap:6vw 1.8vw;
    position:relative;
    
    @media only screen and (min-width: ${mobile}) {
        grid-template-columns:1fr;
        margin-block:70px;
    }
    @media only screen and (min-width: ${mobileMedium}) {
        grid-template-columns:1fr 1fr;
    }
    @media only screen and (min-width: ${tablet}) {
        grid-template-columns:1fr 1fr 1fr;
        margin-block:90px;
    }
    @media only screen and (min-width: ${laptop}) {
        grid-template-columns:1fr 1fr 1fr 1fr;
        margin-block:60px;
    }
    @media only screen and (min-width: ${desktop}) {
    }
`
