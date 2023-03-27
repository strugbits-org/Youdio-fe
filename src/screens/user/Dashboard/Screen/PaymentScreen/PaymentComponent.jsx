import { Input, PrimaryButton ,Label} from "src/components";
import styled from "styled-components";
import { Container } from "../../style/Container";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 541px;
  min-width: 100px;
  gap: 1rem;
  
`;
export const PaymentInput = styled(Input)`
  max-width: 100%;
  min-width: 50%;
  border-radius: 0px;

`;

export const Input3 = styled(Input)`
  width: 50%;
  border-radius: 0px;
`;

export const Container2 = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  width:100%;
  justify-content:space-between;
  gap:1rem;
`;

export const PaymentBtn = styled(PrimaryButton)`
 background-color: #FFE7DA;
 border-radius:0px;
 color: #1F1F1F;
font-size:16px;
`;
export const PaymentLabel = styled(Label)`
color:#676767;
font-weight: 500;
font-size: 16px;
 
`;
