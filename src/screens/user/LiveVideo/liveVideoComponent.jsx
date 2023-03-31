import styled from "styled-components";
import { layout } from "src/helpers";
import { PrimaryWhiteButton } from "src/components";
import zoomImg from "src/assets/icons/zoomImg.svg";
const { mobile, mobileMedium, tablet, laptop, desktop } = layout;

export const CardMedia = styled.div`
  .imgContainer::after {
    position: relative;

    content: "";
    position: absolute;
    top: 40px;
    left: 50px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    background-size: cover;
    background-color: #fff;
    border-radius: 50%;
    border: 5px solid #fff;
    background-image: url(${zoomImg});
  }
  .img {
    /* width: clamp(150px, 29vw, 535px); */
    /* width: 50% */
    /* max-width: 150%; */
    object-fit: contain;
    /* height: 100vh; */
  }
  @media only screen and (max-width: ${mobile}) {
    .img {
      /* width: 100%; */
    }
  }
  @media only screen and (min-width: ${mobileMedium}) {
    .img {
      /* width: 100%; */
    }
  }
  @media only screen and (max-width: ${tablet}) {
    .img {
      /* width: 700%; */
    }
  }
  @media only screen and (max-width: ${laptop}) {
    .img {
      /* width: 100%; */
    }
  }
  @media only screen and (max-width: ${desktop}) {
    .img {
      width: 100%;
   
    }
  }
`;
export const LiveCard = styled.div`
  /* background-color: whitesmoke; */
  display: grid;
  gap: 4vw 5.8vw;
  position: relative;
  padding-top: 2rem;
  @media only screen and (min-width: ${mobile}) {
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: ${mobileMedium}) {
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: ${laptop}) {
    grid-template-columns: 1fr 2fr;
    /* margin-block: 60px; */
  }
  @media only screen and (min-width: ${desktop}) {
    grid-template-columns: 1fr 2fr;
    
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Content = styled.div`
  /* background-color: #423f3f; */
  .h2 {
    color: #1f1f1f;
    padding-bottom: 1rem;
    font-style: normal;
    font-weight: 600;
  }
  .p1 {
    color: #5b5b5b;
    padding-bottom: 2rem;
    font-style: normal;
    font-weight: 400;
  }

  .totaltxt {
    display: flex;
    max-width: 500px;
    padding-bottom: 0.6rem;
    .h4 {
      flex: 1;
    }
  }
  .totalImg {
    display: flex;
    max-width: 500px;
    padding-bottom: 2rem;
    .div1 {
      display: flex;
      flex: 1;
      gap: 3px;
    }
  }
  .profileBox {
    display: flex;
    align-items: center;
    gap: 13px;
    padding-bottom: 1.5rem;
  }
  .para {
    padding-bottom: 2.5rem;
    max-width: 610px;
    font-style: normal;
    font-weight: 400;
    color: #5b5b5b;
  }
`;

export const Box = styled.div`
  margin-bottom: 5rem;
`;

export const CenterButton = styled(PrimaryWhiteButton)`
  background-color: #3ac4b2;
  max-width: 200px;
  min-width: 100px;
  color: #fff;
  border: none;
`;

export const Zoom = styled.div`
  img {
    /* background-color: #3ac4b2; */
    border: 2px solid #a12b2b;

    /* transform: translate(1rem,7rem) */
  }
`;
