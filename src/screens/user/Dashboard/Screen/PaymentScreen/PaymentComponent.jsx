import { PrimaryButton} from "src/components";
import styled from "styled-components";
import { layout } from "src/helpers";

const { tablet } = layout;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .form h2{
    margin-bottom: 40px;
  }

  .payment-left-top-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: ${tablet}) {
    max-width: 541px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
`;

export const FormRow = styled.div`
  margin-bottom: 24px;
  input[type="text"] {
    border-radius: 0px;
    border-color: var(--borderLightGrey);
  }
  label{
    margin-bottom: 2px;
  }
`;

export const CardInfoRow = styled(FormRow)`
  .expiryCVC {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px;
  }
`;
export const RadioFormRow = styled(FormRow)`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  input[type="radio"] {
    margin-top: 4px;
  }
`;

export const SaveButton = styled(PrimaryButton)`
  padding-block: 16px;
  color: black;
  border: 1px solid #ffe7da;
  background-color: #ffe7da;
  border-radius: 0px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 16px;
`;
