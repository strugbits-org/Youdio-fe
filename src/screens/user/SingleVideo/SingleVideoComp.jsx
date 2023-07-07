import styled from "styled-components";
import { Section } from "src/components";
import { fonts } from "src/helpers";
import { layout } from "src/helpers";

const { tablet, laptop, desktop, mobileLarge} = layout
export const CustomSection = styled(Section)`
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

  video {
    max-height: 664px;
    max-width: 1589px;
    background: black;
    aspect-ratio: 2.39/1;
  }

  .unLockOverlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    img{
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

  .singleClass {
    display: grid;
    gap: 7px;

    .description {
      max-width: 1087px;
    }
  }

  .totalRunTime {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    flex-wrap:wrap;
    gap: 16px;
    h5{
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
        margin-block: auto 24px;
      }
    }
  }
`;

export const InstructorBio = styled.div`
  margin-block: 5vw;
  max-width: 1516px;
  margin-inline: auto;
  display: flex;
  flex-direction: row;
  gap: 3.5vw;
  img {
    width: clamp(220px, 18.6vw, 359px);
    aspect-ratio: 1/1;
    object-fit: contain;
    border-radius: 100%;
  }
  .instructorBio {
    flex: 1;
    h2 {
      margin-bottom: 20px;
    }
    .bio {
      margin-bottom: 30px;
    }
  }
  @media only screen and (min-width: ${desktop}) {
    margin-block: 90px;
    gap: 70px;
  }
`;

export const InstructorClasses = styled.div`
  margin-block: 4vw;
  max-width: 1680px;
  margin-inline: auto;
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: ${desktop}) {
    margin-block: 80px;
  }
`;

export const InstructorVideos = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: ${laptop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const InstructorSessions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media only screen and (min-width: ${mobileLarge}) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: ${laptop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
