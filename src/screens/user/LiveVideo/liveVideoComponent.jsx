import styled from "styled-components";
import { layout } from "src/helpers";
import { PrimaryWhiteButton } from "src/components";

const { mobile, mobileMedium, tablet, laptop, desktop } = layout;

export const CardMedia = styled.div`
  position: relative;
  img {
    width: clamp(150px, 29vw, 535px);
    max-height: 700px;
  }
  /* justify-content: center; */
  /* @media only screen and (min-width: ${mobile}) {
    img {
      max-height: 300px;
      object-fit: cover;
      object-position: center;
    }
  }
  @media only screen and (min-width: ${tablet}) {
    img {
      max-height: 500px;
      object-fit: cover;
      object-position: center;
    }
  } */
`;
export const LiveCard = styled.div`
  background-color: whitesmoke;
  display: grid;
  gap: 4vw 5.8vw;
  position: relative;
  padding-top: 2rem;
  @media only screen and (min-width: ${mobile}) {
    grid-template-columns: 1fr ;
  }
  @media only screen and (min-width: ${mobileMedium}) {
    grid-template-columns: 1fr ;
  }
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr;
    /* margin-block: 90px; */
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
  /* padding-top: 3rem; */
  margin-block: 100px;
`;
export const Content = styled.div`
  /* background-color: #423f3f; */
  .h2 {
    color: #1f1f1f;
    padding-bottom: 1rem;
  }
  .p1 {
    color: #5b5b5b;
    padding-bottom: 2rem;
  }
  /* padding-top: 6rem; */

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
    div {
      display: flex;
      flex: 1;
      gap: 8px;
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
    max-width: 820px;
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
