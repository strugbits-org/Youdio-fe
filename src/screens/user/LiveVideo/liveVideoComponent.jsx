import styled from "styled-components";
import { SimplePrimaryButton } from "src/components";
import { layout } from "src/helpers";
const { mobile, mobileMedium, tablet, laptop, desktop } = layout;

export const LiveBookingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8.2vw;
  max-width: 435px;
  margin-inline: auto;
  @media only screen and (min-width: ${tablet}) {
    margin-inline: initial;
    max-width: 1517px;
    flex-direction: row;
    align-items: ${({alignment}) => alignment ? "center" : "flex-start" };
  }

  @media only screen and (min-width: ${desktop}) {
    gap: 148px;
  }
`;
export const MediaBox = styled.div`
  position: relative;
  img {
    width: 100%;
    max-width: 335px;
    min-width: 185px;
    aspect-ratio: 0.75/1;
    object-fit: cover;
    border-radius: 3px;
  }
  .overlay {
    aspect-ratio: 0.75/1;
    width: 100%;
    min-width: 185px;
    max-width: 335px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    left: 0;
    position: absolute;
    top: 0;
  }

  .videoCamera {
    width: clamp(35px, 3.25vw, 65px);
    aspect-ratio: 1/1;
    border: 3px solid #fff;
    min-width: initial;
    border-radius: 100%;
    background: #fff;
    position: absolute;
    object-position: center;
    top: 1.5vw;
    left: 1.5vw;
  }

  @media only screen and (min-width: ${tablet}) {
    img,
    .overlay {
      max-width: 435px;
    }
    .videoCamera {
      width: clamp(45px, 3.25vw, 65px);
      border: 4px solid #fff;
    }
  }
`;

export const ContentBox = styled.div`
  h2 {
    &:first-child {
      margin-bottom: 6px;
    }
  }
  .cardP {
    color: var(--backgroundGrey);
    margin-bottom: 24px;
    .bold {
      font-weight: 700;
    }
  }
  .lastP {
    margin-top: 12px;
    max-width: 824px;
    span{
      text-decoration: underline;
      cursor: pointer;
      &:hover{
        color:var(--textParaBlackLight)
      }
    }
  }

  .sessionDetail {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    max-width: 474px;
    margin-bottom: 24px;

    .detail {
      h6 {
        &:first-child {
          margin-bottom: 6px;
        }
      }
    }
    .date {
      div {
        display: flex;
        align-items: center;
        gap: 12px;
        p {
          color: var(--backgroundGrey);
        }
      }
    }
  }

  @media only screen and (min-width: ${tablet}) {
    .sessionDetail {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      max-width: 474px;
      margin-bottom: 1.6vw;

      .detail {
        h6 {
          &:first-child {
            margin-bottom: 6px;
          }
        }
      }
      .date {
        div {
          display: flex;
          align-items: center;
          gap: 12px;
        }
      }
    }
  }
  @media only screen and (min-width: ${laptop}) {
    h2 {
      &:first-child {
        margin-bottom: 10px;
      }
    }
    .cardP {
      margin-bottom: 32px;
    }
    .lastP {
      margin-top: 16px;
    }
  }
`;

export const CustomPrimaryButton = styled(SimplePrimaryButton)`
  border-radius: 0px;
  max-width: 196px;
  text-transform: uppercase;
  @media only screen and (min-width: ${tablet}) {
    max-width: 296px;
  }
`;

export const LiveLessonBox = styled.div`
  min-height: 35dvh;
  h2 {
    text-align: center;
    margin-block: 44px 28px;
  }
`;

export const CardsBox = styled.div`
  display: grid;
  gap: 6vw 1.8vw;
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
    margin-block: 60px;
  }
  @media only screen and (min-width: ${desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
