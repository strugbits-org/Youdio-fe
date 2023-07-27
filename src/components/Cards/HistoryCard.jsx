import React from "react";
import { ClockTime, H3, P3 } from "src/components";
import { icons } from "src/helpers";
import { layout } from "src/helpers";
import styled from "styled-components";
import IntensityLevel from "../IntensityLevel";

const { mobile, desktop, mobileLarge } = layout;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 5vw;
  @media only screen and (min-width: ${mobile}) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 334px;
  }
  @media only screen and (min-width: ${mobileLarge}) {
    flex-direction: row;
    align-items: center;
    max-width: 982px;
  }
  @media only screen and (min-width: ${desktop}) {
    gap: 104px;
  }
`;
const ImageBox = styled.div`
  position: relative;
  img {
    /* max-width: 334px; */

    object-fit: cover;
  }
  .label {
    background: var(--backgroundGreen);
    padding: 4px 16px;
    color: #fff;
    position: absolute;
    left: 0px;
  }

  @media only screen and (min-width: ${mobile}) {
    img {
      width: 100%;
    }
  }
  @media only screen and (min-width: ${mobileLarge}) {
    img {
      aspect-ratio: 1.65/1;
      width: clamp(260px, 17.3vw, 334px);
    }
  }
`;

const CardContent = styled.div`
  flex: 1;
  .timeRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .time {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .intensityRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 20px;
    .instrutor {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
    }
  }

  .detail {
    max-width: 482px;
  }
`;

export function HistoryCard({ historyVideo, historyVideoId }) {
  return (
    <Card>
      <ImageBox>
        <img
          src={historyVideo?.thumbnail}
          alt={"Thumbnail"}
          width=""
          height=""
        />
        <span className="label">{historyVideo?.category}</span>
      </ImageBox>
      <CardContent>
        <div className="timeRow">
          <H3>{historyVideo?.title}</H3>
          <ClockTime
            time={`${historyVideo?.totalTime} min`}
            fontSize={"13px"}
          />
        </div>

        <div className="intensityRow">
          <div className="instrutor">
            <img src={icons.shortpicWomen} alt="Instructor" />
            <P3>Elizebeth Lisa</P3>
          </div>
          <IntensityLevel level={historyVideo?.intensity} />
        </div>

        <P3 className="detail">{historyVideo?.description}</P3>
      </CardContent>
    </Card>
  );
}
