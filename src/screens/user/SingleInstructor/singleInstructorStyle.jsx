import styled from "styled-components";
// import { H2, P1 } from "src/components";
import { layout } from "src/helpers";
import { Section } from "src/components";
import { PrimaryWhiteButton } from "src/components";

const { mobile, mobileMedium, tablet, laptop, desktop } = layout;

export const Sec = styled(Section)`
  h1 {
    color: #fff;
  }
  p {
    color: #fff;
  }
  background-size: cover;
  background-position: center;
`;

export const TextSec = styled(Section)`
  h2 {
    text-align: center;
    margin-bottom: 1.5em;
  }
  p {
    padding-inline: 15.2vw;
    text-align: left;
    margin-bottom: 1.5em;
  }
  /* issue =>  when media query is set it apply on desktop also */
  @media only screen and (min-width: ${mobile}) {
    p {
      padding-inline: 1vw;
      text-align: justify;
    }
  }
  @media only screen and (min-width: ${mobileMedium}) {
    p {
      padding-inline: 1vw;
      text-align: justify;
    }
  }
`;

export const SingleImage = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(-30%);
  img {
    /* max-width: 290px; */
    /* max-width: 200px; */
  }

  @media only screen and (min-width: ${mobile}) {
    img {
      max-width: 150px;
    }
  }
  @media only screen and (min-width: ${mobileMedium}) {
    img {
      /* width: 200px; */
    }
  }
`;

export const CardsBox = styled.div`
  display: grid;
  gap: 5vw 1.8vw;
  position: relative;
  

  @media only screen and (min-width: ${mobile}) {
    grid-template-columns: 1fr;
    margin-block: 70px;
  }
  @media only screen and (min-width: ${mobileMedium}) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-block: 90px;
  }
  @media only screen and (min-width: ${laptop}) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-block: 60px;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;
export const TwoCardsBox = styled.div`
  display: grid;
  gap: 6vw 1.8vw;
  position: relative;

  @media only screen and (min-width: ${mobile}) {
    grid-template-columns: 1fr;
    margin-block: 70px;
  }
  @media only screen and (min-width: ${mobileMedium}) {
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr;
    margin-block: 90px;
  }
  @media only screen and (min-width: ${laptop}) {
    grid-template-columns: 1fr 1fr;
    margin-block: 60px;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;

export const ReviewCards = styled.div`
  padding-inline: 6.5vw;
  display: grid;
  gap: 8vw 5.8vw;
  position: relative;

  @media only screen and (min-width: ${mobile}) {
    grid-template-columns: 1fr;
    margin-block: 70px;
  }
  @media only screen and (max-width: ${mobileMedium}) {
    gap: 13vw 5.8vw;
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: ${tablet}) {
    
    grid-template-columns: 1fr 1fr;
    margin-block: 90px;
  }
  @media only screen and (min-width: ${laptop}) {
    grid-template-columns: 1fr 1fr;
    margin-block: 60px;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;

export const CenterButton = styled(PrimaryWhiteButton)`
  margin: 0 auto;
  /* margin-left: 43%; */
  margin-bottom: 13.2vh;
  min-width: 180px;
`;

export const StyledDiv = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.07);
  margin-block: 47px;
  margin-inline: 5%;
`;