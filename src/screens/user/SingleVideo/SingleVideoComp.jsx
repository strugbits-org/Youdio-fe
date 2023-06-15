import styled from "styled-components";
import { layout } from "src/helpers";
import { Laptop } from "@mui/icons-material";
const { mobile, mobileMedium, tablet } = layout;

export const Video = styled.video`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  padding-block: 2rem;
  gap: 2rem;
  /* gap: 8rem; */
  /* justify-content: space-between; */
  /* @media only screen and (max-width: ${mobile}) {
    .h2 {
      background-color: lightcoral;
      font-size: 20px;
    }
  } */
  @media only screen and (max-width: ${mobileMedium}) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .h2 {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: ${tablet}) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media only screen and (min-width: ${Laptop}) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;
export const LeftContent = styled.div`
  flex-basis: 50%;
  span {
    color: #5b5b5b;
    font-weight: 700;
  }
  .subContent {
    padding-block: 0.5rem;
  }
  .totaltxt {
    display: flex;
    max-width: 500px;
    gap: 10px;

    padding-bottom: 0.8rem;
    .h4 {
      flex: 1;
    }
  }
  .totalImg {
    display: flex;
    max-width: 500px;
    gap: 10px;

    .div1 {
      display: flex;
      flex: 1;
      gap: 10px;
    }
    .subDiv {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
    }
  }

  @media only screen and (min-width: ${mobile}) {
    /* flex-basis: 100%; */
  }
  @media only screen and (m-width: ${tablet}) {
    /* flex-basis: 100%; */
  }
`;
export const RightContent = styled.div`
  flex-basis: 50%;

  @media only screen and (min-width: ${mobile}) {
  }
  @media only screen and (max-width: ${tablet}) {
    .para {
      text-align: justify;
    }
  }
`;

export const BioSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  .bioImage {
    flex-basis: 40%;

    .txtContent {
      flex-basis: 40%;
    }
  }

  .txtContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: ${tablet}) {
    display: flex;
    flex-direction: column;
    img {
      display: flex;
      /* background: red;
        justify-content: center; */
      align-items: center;
      margin: 0 auto;
      min-width: 180px;
      max-width: 100px;
    }
    .H2 {
      font-size: 22px;
      font-weight: 800;
    }
    .paraBio {
      text-align: justify;
    }
  }
  @media only screen and (max-width: ${Laptop}) {
    img {
      /* width: min(140%, 300px); */
      min-width: 200px;
      max-width: 400px;
    }
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  font-size: 32px;
  padding: 8px;
  /* background-color: rgba(0, 0, 0, 0.6);
  color: #fff; */
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
