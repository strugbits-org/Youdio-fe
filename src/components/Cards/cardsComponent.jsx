import styled from "styled-components";

import { layout } from "src/helpers";

const { mobile, tablet, laptop } = layout;

export const Card = styled.div`
  /* flex:1; */
  flex-basis: clamp(280px, 20vw, 392px);
`;
export const BoxCard = styled.div`
  flex-basis: clamp(280px, 20vw, 392px);
  background-color: #f9f9f9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
    transform: translate(1em, -1.5em);
    opacity: 0.9;
  }

  &:hover {
    background-color: #3ac4b2;
    color: #fff;

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
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

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
  position: relative;
  margin-bottom: 19px;
  @media only screen and (min-width: ${mobile}) {
    img {
      max-height: 300px;
      object-fit: cover;
      object-position: center;
    }
  }
  @media only screen and (min-width: ${tablet}) {
    img {
      max-height: initial;
      object-fit: initial;
      object-position: initial;
    }
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

export const CardContent = styled.div`
  .timeRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    div {
      min-width: 66px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
  }

  h5 {
    width: 95%;
    margin-bottom: 14px;
  }

  .profileRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1vw;

    .profileBox {
      display: flex;
      align-items: center;
      gap: 13px;
    }
    .intensityBox {
      flex: 1;
      align-items: center;
      justify-content: right;
      display: flex;
      gap: 10px;
    }
  }
  .trainerP3 {
    margin-top: -2em;
  }
  .intensityInstructor {
    flex: 1;
    align-items: center;
    justify-content: right;
    display: flex;
    gap: 5px;
  }
  .p3 {
    margin-bottom: 1em;
  }
  h3 {
    margin-bottom: 1em;
  }

  .reviewSec {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    .star {
      color: #3ac4b2;
    }
  }
  .reviewProfile {
    display: flex;
    gap: 8px;

    img {
      width: 40px;
      height: 40px;
    }
  }
  .chef {
    padding-left: 4em;
    transform: translateY(-1.3em);
  }
  .reviewP2 {
    align-items: center;
    margin-bottom: 1em;
    p {
      color: #848484;
    }
  }
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
