import styled from "styled-components";
import { Input } from "src/components";



export const Description = styled.div`
  padding-block: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  img {
    width: 20px;
    height: 20px;
  }
  .sub_heading{
    display: flex;
    flex-direction: row;
    gap:1rem;
    align-items:center;

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
