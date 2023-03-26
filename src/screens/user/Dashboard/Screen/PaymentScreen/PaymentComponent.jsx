import { Input } from "src/components";
import styled from "styled-components";
import { Container } from "../../style/Container";


export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 1rem;
`;
export const PaymentInput = styled(Input)`
 
`;

export const Input3 = styled(Input)`
  min-width: 50px;
  max-width: 219px;
  border-radius: 0px;
`;

export const Container2 = styled(Container)`
 display: flex;
 flex-direction:row;
 gap:5rem;
 flex-wrap:wrap-reverse;
`;