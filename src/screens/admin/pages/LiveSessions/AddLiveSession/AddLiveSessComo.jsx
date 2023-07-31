import styled from "styled-components";
import { layout } from "src/helpers";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 380px 1fr;
`;
export const Container = styled.div`
  h2 {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;
  max-width: 1375px;

  .form {
    width: 100%;
    max-width: 730px;
  }
`;
export const FormRow = styled.div`
  margin-bottom: 18px;
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr 1fr;

  &[data-type="textarea"] {
    grid-template-columns: 1fr;
  }
  .customUploadMedia {
    position: relative;
    padding-inline: 0px;
    color: transparent;
    font-size: 0px;
    width: 100%;
    &::file-selector-button {
      font-size: 0px;
      border: none;
      border-radius: 0px;
      outline: none;
    }
    &::before {
      content: attr(data-before);
      position: absolute;
      width: 90%;
      color: #797979;
      top: 50%;
      transform: translateY(-50%);
      padding-inline: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      /* transform: translate(-50%, -50%); */
    }
  }

  .forTime{
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* align-items: center; */
    gap: 16px;
  }

  @media only screen and (min-width: ${layout.mobile}) {
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: ${layout.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ButtonGroup = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 18px;
`;

export const BrowseFile = styled.div`
  width: clamp(200px, 16.5vw, 320px);
  height: clamp(250px, 20vw, 400px);
  position: relative;
  text-align: center;
  aspect-ratio: 0.83/1;
  .imageBox {
    border: 1px dashed #e6e6e6;
    border-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    img {
      width: 50%;
      margin-bottom: 60px;
    }
  }

  input {
    border: none;
    outline: none;
    color: transparent;
    width: 0px;
    height: 0px;

    &::after {
      content: "BROWSE FILE";
      color: #fff;
      background-color: var(--backgroundGreen);
      position: absolute;
      width: 100%;
      padding-block: 24px;
      font-size: 12px;
      left: 0px;
      text-align: center;
      bottom: 0px;
      cursor: pointer;
    }
  }

  span {
    margin-block: 16px;
    font-size: small;
  }
`;
