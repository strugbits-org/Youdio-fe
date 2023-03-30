import styled from "styled-components";
import {  layout } from "src/helpers";
const { mobile, mobileMedium, tablet, laptop } = layout;

export const ContentBox = styled.div`
  max-width: 632px;
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* padding-block: 3vw; */

  @media only screen and (min-width: ${mobile}) {
    input {
      min-height: 30px;
    }
  }
  @media only screen and (min-width: ${tablet}) {
    input {
      min-height: 45px;
    }
  }
`;


export const CardsBox = styled.div`
    display:grid;
    gap:6vw 1.8vw;
    
    @media only screen and (min-width: ${mobile}) {
        grid-template-columns:1fr;
        margin-bottom:70px;
    }
    @media only screen and (min-width: ${mobileMedium}) {
        grid-template-columns:1fr 1fr;
    }
    @media only screen and (min-width: ${tablet}) {
        grid-template-columns:1fr 1fr 1fr;
        margin-bottom:90px;
    }
    @media only screen and (min-width: ${laptop}) {
        grid-template-columns:1fr 1fr 1fr 1fr;
        margin-bottom:60px;
    }
    
`
