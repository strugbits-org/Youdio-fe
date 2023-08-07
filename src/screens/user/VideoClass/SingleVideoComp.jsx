import styled from "styled-components";
import { Section } from "src/components";
import { fonts } from "src/helpers";
import { layout } from "src/helpers";

const { tablet, desktop } = layout;
export const CustomSection = styled(Section)`
  min-height: 50dvh;
`;

export const VideoContainer = styled.div`
  max-width: 1589px;
  margin-inline: auto;
  margin-bottom: 4vw;
  @media only screen and (min-width: ${desktop}) {
    margin-top: 67px;
  }
`;

export const VideoBox = styled.div`
  position: relative;
  margin-block: 40px;
  .thumbnailImage {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      max-height: 664px;
      max-width: 1589px;
      aspect-ratio: 2.39/1;
      object-fit: cover;
    }
    button {
      width: clamp(40px, 6vw, 120px);
      height: clamp(40px, 6vw, 120px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      border-radius: 100%;
      box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0.4);
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
      svg {
        width: 100%;
        height: 100%;
        fill: var(--backgroundGreen);
      }
      &:hover {
        transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
        box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0.6);
      }
    }
  }
  video {
    display: ${({ videoRender }) => (videoRender ? "initial" : "none")};
    max-height: 664px;
    max-width: 1589px;
    background: black;
    aspect-ratio: 2.39/1;
  }

  .unLockOverlay {
    position: absolute;
    width: 100%;
    height: calc(100% - 3px);
    top: calc(50% - 3px);
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    img {
      width: clamp(40px, 4.2vw, 86px);
    }
    .content {
      h2,
      h5 {
        font-family: ${fonts.poppinsRegular};
        font-weight: 500;
      }
      h5 {
        text-decoration: underline;
        text-underline-offset: 8px;
      }
    }
  }
`;
export const VideoDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
  text-transform: capitalize;

  .singleClass {
    display: grid;
    gap: 7px;

    h5,
    p {
      color: var(--backgroundGrey);
    }

    .description {
      max-width: 1087px;
      font-size: clamp(16px, 1.6vw, 22px);
      text-transform: initial;
      ::first-letter{
        text-transform: capitalize;
      }
    }
    .bold {
      font-weight: 700;
    }
  }

  .totalRunTime {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
    gap: 8px 16px;
    h5 {
      flex-basis: 100%;
    }
  }
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 200px;
    .totalRunTime {
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
      h5 {
        flex-basis: initial;
        margin-block: 32px 12px;
      }
      .intensity {
        margin-block: auto 0px;
      }
    }
  }
`;

export const InstructorBio = styled.div`
  margin-block: 5vw;
  max-width: 1516px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 3.5vw;
  img {
    width: clamp(220px, 18.6vw, 359px);
    aspect-ratio: 1/1;
    object-fit: cover;
    
    border-radius: 100%;
  }
  .instructorBio {
    flex: 1;
    text-transform: capitalize;
    p {
      color: var(--backgroundGrey);
    }
    h2 {
      margin-bottom: 20px;
    }
    .bio {
      margin-bottom: 30px;
    }
  }

  @media only screen and (min-width: ${tablet}) {
    flex-direction: row;
    align-items: flex-start;
    margin-block: 90px;
    gap: 70px;
    text-align: initial;
  }
  @media only screen and (min-width: ${desktop}) {
    align-items: center;
    margin-block: 90px;
    gap: 70px;
  }
`;

export const ClassesContainer = styled.div`
  margin-block: 4vw;
  max-width: 400px;
  margin-inline: auto;
  h2 {
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: ${tablet}) {
    max-width: 1680px;
  }
  @media only screen and (min-width: ${desktop}) {
    margin-block: 80px;
  }
`;

export const Reviews = styled.div`
  margin-block: 4vw;
  max-width: 1221px;
  margin-inline: auto;
  h2 {
    text-align: center;
    margin-bottom: 70px;
  }
  @media only screen and (min-width: ${desktop}) {
    margin-block: 80px;
  }
  button {
    max-width: 180px;
    margin-inline: auto;
    display: block;
  }
`;
