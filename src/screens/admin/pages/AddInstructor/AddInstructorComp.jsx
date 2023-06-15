import styled from "styled-components";
import { Field, ErrorMessage } from "formik";
import { PrimaryButton, PrimaryWhiteButton } from "src/components";

export const Container = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  height: 100vh;
  justify-content: space-around;
  padding-block: 4rem;
  form {
    /* width: 90vw;
    max-width: 474px; */
    flex-basis: 50%;
  }
`;

export const SIDEBAR = styled.div`
  flex-basis: 15%;
`;
export const FormRow = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 18px;
`;
export const Heading = styled.div`
  margin-bottom: 4rem;
`;

export const BrowseFile = styled.div`
  flex-basis: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ImageBrowse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dotted #797979;
  padding: 70px;

  img {
    width: 100px;
  }
`;
export const BrowseBtn = styled(PrimaryButton)`
  /* min-width: 100px; */
  height: 50px;
  border: none;
  border-radius: 0px;
  /* max-width: 341px; */
  align-items: center;
  display: flex;
  justify-content: center;

  input::file-selector-button {
    font-weight: bold;
    padding: 0.5em;
    border: thin solid grey;
    border-radius: 3px;
    margin: 15px;
  }
`;
export const ButtonOne = styled(PrimaryWhiteButton)`
  max-width: 200px;
  min-width: 100px;
  border: 1px solid #e6e7e9;
`;

export const ButtonTwo = styled(PrimaryButton)`
  color: black;
  max-width: 200px;
  min-width: 100px;
  border: 1px solid #ffe7da;
  background-color: #ffe7da;
  border-radius: 0px;
`;

export const Label = styled.label`
  margin-right: 0.5rem;
`;
export const Input = styled(Field)`
  padding: 0.5rem;
  border: 1px solid #ccc;
`;

export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 0.8rem;
`;
