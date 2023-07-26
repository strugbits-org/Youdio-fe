import styled from "styled-components";
// import { H2, P1 } from "src/components";
import { layout } from "src/helpers";
import { Section } from "src/components";

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
  background-repeat:no-repeat;
`;

export const TextSec = styled(Section)`
  h2 {
    text-align: center;
    margin-bottom: 1.5em;
  }
  p {
    /* width: clamp(100%, 50%, 11.27%); */
    /* padding-inline: clamp(10px,50%,320px); */
    /* width: max-content(1127px); */
    padding-inline: clamp(10%, 17vw, 95%);
    margin-bottom: 1.5em;
    text-align: center;
    /* font-size: min(90%,30px); */
    font-size: clamp(13px, 1.1vw, 22px);
  }
  @media only screen and (max-width: ${laptop}) {
    p {
      padding-inline: 10%;
      width: 100%;
    }
  }
  @media only screen and (max-width: ${tablet}) {
    p {
      padding-inline: 0;
      width: 100%;
    }
  }
  @media only screen and (max-width: ${mobileMedium}) {
    p {
      padding-inline: 0;
      width: 100%;
    }
  }
  @media only screen and (max-width: ${mobile}) {
    p {
      padding-inline: 0;
      width: 100%;
    }
  }
`;

export const SingleImage = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(-35%);
  img {
    width: clamp(140px, 14vw, 280px);
    border-radius: 100%;
    background: #fafafa;
    padding: 5px;
    aspect-ratio: 1/1;
    object-fit: cover;
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



export const StyledDiv = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.07);
  /* margin-block: 8px; */
  min-height: 2px;
  margin-inline: 5%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
`;
