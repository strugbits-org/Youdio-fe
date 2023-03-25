import styled from "styled-components";
import { layout } from "src/helpers";
import { Input } from "src/components";

const { mobile, tablet, laptop, desktop } = layout;


export const Description = styled.div`
  padding-block: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 9rem;
  flex-wrap: wrap;

  img {
    width: 20px;
    height: 20px;
  }

  @media only screen and (max-width: ${mobile}) {
    gap: 2rem;

  }
  @media only screen and (max-width: ${tablet}) {
    gap: 2rem;
  }
  @media only screen and (min-width: ${laptop}) {

  }
  @media only screen and (min-width: ${desktop}) {

  }
`;

export const Input2 = styled(Input)`
    max-width:438px;


`
export const Box = styled.div`

  padding-block: 50px;
  display:flex;
  flex-direction: rows;
  gap :1rem


`
