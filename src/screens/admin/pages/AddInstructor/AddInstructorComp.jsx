import styled from "styled-components";
import { Field, ErrorMessage } from "formik";
import { PrimaryButton, PrimaryWhiteButton } from "src/components";

export const MainContainer = styled.div``;
export const Container = styled.div`
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  height: 100vh;

  form {
    width: 90vw;
    max-width: 474px;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 18px;
`;
export const Heading = styled.div`
  margin-bottom: 4rem;
  /* display: flex; */
  /* padding: 2rem 0 0 36.9rem; */
`;

export const BrowseFile = styled.div`
  /* margin: 50px; */
  margin: 10px;
  position: relative;
  left: 300px;
`;
export const ImageBrowse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dotted #000;
  padding: 50px;
  img {
    width: 100px;
    height: auto;
  }
`;
export const BrowseBtn = styled(PrimaryButton)`
  /* min-width: 100px; */
  height: 30px;
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
