import styled from "styled-components";
import {  layout } from "src/helpers";
const { mobile, tablet } = layout;

export const ContentBox = styled.div`
  max-width: 632px;
  & > p{
    text-transform: capitalize;
  }
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





