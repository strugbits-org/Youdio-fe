import styled from "styled-components";
import { fonts } from "src/helpers";
const { poppinsRegular } = fonts;

export const StyleInput = styled.input`
  /* width: 350px; */
  height: 45px;
  color: #797979;
  background: #f7f7f7;
  outline: none;
  font-size: 0.8em;
  padding-inline: 16px;
  font-family: ${poppinsRegular};
  border: ${(props) =>
    props.err ? "1px solid red" : "1px solid var(--textParaBlack25)"};

  &:hover {
    border-color: ${(props) => (props.err ? "red" : "var(--backgroundGreen)")};
  }

  &:focus {
    border-color: ${(props) => (props.err ? "red" : "var(--backgroundGreen)")};
    border-width: 2px;
  }

  &::placeholder {
    color: #797979;
  }
`;

export const DropInput = styled.select`
  /* display: flex;
flex-wrap: wrap; */
  /* width: 350px; */
  width: 100%;
  height: 45px;
  color: #797979;
  background: #f7f7f7;
  outline: none;
  font-size: 0.8em;
  padding-inline: 16px;
  font-family: ${poppinsRegular};
  border: ${(props) =>
    props.err ? "1px solid red" : "1px solid var(--textParaBlack25)"};

  &:hover {
    border-color: ${(props) => (props.err ? "red" : "var(--backgroundGreen)")};
  }

  &:focus {
    border-color: ${(props) => (props.err ? "red" : "var(--backgroundGreen)")};
    border-width: 2px;
  }

  &::placeholder {
    color: #797979;
  }
  option {
    background: rgb(247, 247, 247);
    color: rgb(121, 121, 121);
    font-size: 11px;
   
  }

`;
export const BOX4 = styled.input`
  height: 50px;
  border-radius: 0px;
  /* max-width: 341px; */
  align-items: center;
  display: flex;
  justify-content: center;

  border: none;
  outline: none;
  width: 100%;
  min-height: 45px;
  color: var(--textHeadingWhite);
  background: var(--backgroundGreen);
  cursor: pointer;
  transition: var(--transition03s);
  font-size: 18px;

  &:hover {
    transition: var(--transition03s);
    background: var(--backgroundGreenHover);
  }
`;
export const Icon = styled.div`
  position: absolute;
  padding: 10px;
  min-width: 40px;
  margin-bottom: 10px;
`;
export const Error = styled.div`
  width: inherit;
  color: red;
  font-size: 0.8em;
  text-align: left;
  padding-right: 2px;
  font-family: ${poppinsRegular};
`;

export const Label = styled.label`
  font-family: ${poppinsRegular};
  color: #777f82;
`;
