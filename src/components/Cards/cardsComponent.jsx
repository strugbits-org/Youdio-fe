import styled from "styled-components";

import { layout } from "src/helpers";

const { mobile, tablet, laptop } = layout;

export const Card = styled.div``;

export const BoxCard = styled.div`
  /* flex-basis: clamp(280px, 20vw, 392px); */
  background-color: #f9f9f9;
  transition: var(--transition03s);
  border: 1px solid transparent;
  border-radius: 5px;
  .imgReview {
    max-width: 55px; /* adjust to desired max width */
    max-height: 60px;
    line-height: 30px;
    /* color: #ffff; */
    background-color: #3ac4b2;
    padding: 0.6em;
    text-align: center;
    border-radius: 4px;
    transform: translate(1.5em, -1.5em);
    opacity: 0.9;
  }

  &:hover {
    background-color: #3ac4b2;
    color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    .reviewP2 {
      p {
        color: #fff;
      }
    }
    .reviewSec {
      .star {
        color: #fff;
      }
    }
    .imgReview {
      background-color: whitesmoke;
     

      img {
        /* filter: hue-rotate(30deg); */
        /* filter : contrast(110%);
        filter: grayscale(110%); */
        color: #3ac4b2;
      }
    }
  }
`;
export const Spacediv = styled.div`
  margin-bottom: 1em;
`;
export const CardMedia = styled.div`
  img {
    width: 100%;
    aspect-ratio: 1.65/1;
    object-fit: cover;
    object-position: center;
  }
`;
export const CardContent = styled.div`
  .timeRow {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    .timeIntensity {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
  h5 {
    margin-bottom: 14px;
  }
`;

export const Tag = styled.span`
  background: var(--backgroundGreen);
  color: var(--textHeadingWhite);
  padding: 0.5vw 1.5vw;
  top: 0px;
  left: 0px;
  position: absolute;
`;

export const ContentInside = styled.div`
  padding-inline: 1em;
  padding-block: 1em;
`;

export const DateTag = styled.div`
  background: var(--backgroundGreen);
  color: white;
  display: grid;
  gap: 5px;
  text-align: center;
  position: absolute;

  hr {
    width: 100%;
    height: 2px;
    border: none;
    background-color: var(--textHeadingWhite);
  }

  @media only screen and (min-width: ${mobile}) {
    min-width: 20px;
    border-radius: 0px 6px 6px 0px;
    padding: 1.5vw 3vw;
    grid-template-columns: 1fr 10px 1fr;
    min-height: 20px;
    transform: translate(-4vw, -125%);

    h4,
    h6 {
      font-size: 105%;
    }
    hr {
      width: 2px;
      height: 100%;
      margin-inline: auto;
    }
  }
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 10px 1fr;
    transform: translate(-7vw, -125%);
    h4,
    h6 {
      font-size: 115%;
    }
  }
  @media only screen and (min-width: ${laptop}) {
    min-width: 78px;
    border-radius: 10px;
    padding: 0.5vw 0.9vw;
    grid-template-columns: initial;
    min-height: 78px;
    transform: translate(-100px, 0px);
    h4,
    h6 {
      font-size: initial;
    }
    hr {
      width: 100%;
      height: 2px;
      margin-inline: initial;
    }
  }
`;


