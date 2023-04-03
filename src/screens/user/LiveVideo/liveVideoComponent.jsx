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
  min-height: 35px;
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

//Modal Styling

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow: auto;
`;

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
  background: #f1f1f1;
  /* padding: 14px 28px; */

  border-radius: 1px;
  max-width: 900px;
  min-width: 350px;
  /* width: clamp(350px, 8vw, 900px); */

  .close-modal {
    position: absolute;
    top: -20px;
    right: -20px;
    border-radius: 50%;
    border: 1px solid #111;
    background-color: #111;
    cursor: pointer;
    padding: 10px;
  }
`;

export const Image = styled.div`
  img {
    width: 100%;
  }
`;

export const ModalSec = styled.div`
  background-color: #fff;
  padding-block: 20px;

  /* line-height: 1.4; */

  .heading {
    padding-bottom: 1rem;
  }
  .intensityBox {
    display: flex;
    gap: 10px;
    padding-bottom: 1rem;
  }
  .bottomGap {
    padding-bottom: 1rem;
  }
  .btn {
    margin-bottom: 1rem;
    min-height: 35px;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 13px;
    img {
      width: clamp(100px, 8vw, 170px);
    }
  }
  .btnBox {
    position: relative;
    .btnBook {
      position: absolute;
      bottom: 40px;
      max-width: 200px;
      min-width: 100px;
      border: none;
      outline: none;
      width: 100%;
      min-height: 35px;
      color: var(--textHeadingWhite);
      background: var(--backgroundGreen);
      cursor: pointer;
      transition: var(--transition03s);
      font-size: 18px;

      &:hover {
        transition: var(--transition03s);
        background: var(--backgroundGreenHover);
      }
    }
  }

  @media only screen and (min-width: ${mobile}) {
    padding-inline: 3vw;
  }
  @media only screen and (min-width: ${tablet}) {
    padding-inline: 6vw;
  }
  @media only screen and (min-width: ${laptop}) {
    padding-inline: 50px;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;
