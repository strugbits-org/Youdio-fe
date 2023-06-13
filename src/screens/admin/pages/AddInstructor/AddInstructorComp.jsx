import styled from "styled-components";
import { Field, ErrorMessage } from 'formik';
import { PrimaryButton, PrimaryWhiteButton } from "src/components";

export const MainContainer = styled.div`
  
`;
export const Container = styled.div`
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  height: 100vh;
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
   
`

export const BrowseFile = styled.div`

`
export const ImageBrowse = styled.div`
position: relative;
left: 12rem;
img{
  display: flex;
  max-width: 18vw;
}

`
export const BrowseBtn = styled(PrimaryButton)`
    min-width: 100px;
    height: 92px;
    border: none;
    border-radius: unset;
    max-width: 341px;
    align-items: center;
    display: flex;
    justify-content: center;

  
`
export const ButtonOne = styled(PrimaryWhiteButton)`
max-width: 200px;
min-width: 100px;
border: 1px solid #E6E7E9;`

export const ButtonTwo = styled(PrimaryButton)`
  color: black;
  max-width: 200px;
  min-width: 100px;
  border: 1px solid #ffe7da;
  background-color: #ffe7da;
  border-radius: 0px;
`

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