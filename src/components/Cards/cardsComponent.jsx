import styled from "styled-components";

import { layout } from "src/helpers";

const { mobile, tablet, laptop } = layout;

export const Card = styled.div``;

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


