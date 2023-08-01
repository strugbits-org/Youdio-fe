import styled from "styled-components";
import { fonts } from "src/helpers";

const { hindiRegular, poppinsRegular } = fonts;

export const Input = styled.input`
  width: 100%;
  min-height: 45px;
  color: var(--backgroundGrey);
  border-radius: 7px;
  outline: none;
  font-size: 0.8em;
  padding-inline: 16px;
  padding-block: 16px;
  font-family: ${hindiRegular};
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
    color: var(--textParaBlack25);
  }
`;
export const InputIcon = styled.input`
  width: 100%;
  max-width: 384px;
  background: url(${({ isIcon }) => (isIcon ? isIcon : "")});
  background-repeat: no-repeat;
  background-size: 16px;
  background-position-x: 95%;
  background-position-y: center;
  color: var(--backgroundGrey);
  border-radius: 0px;
  outline: none;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 48px;
  font-family: ${hindiRegular};
  border: 1px solid var(--backgroundGrey);
  &:hover,
  &:focus {
    border-color: #1f1f1f;
  }
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
  font-size: clamp(17px, 1vw, 19px) ;
  font-family: ${poppinsRegular};
`;
