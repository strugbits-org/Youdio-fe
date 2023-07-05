import React from "react";
import { H3, P3 } from "src/components";
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

export function HistoryCard({ img }) {
  return (
    <Card>
      <ImageBox>
        <img src={img} alt="Thumbnail" width="" height="" />
        <span className="label">Yoga</span>
      </ImageBox>
      <CardContent>
        <div className="timeRow">
          <H3>UPPER BODY POWER</H3>
          <div className="time">
            <img src={icons.timeClock} alt="" width="15px" height="auto" />
            <P3>5 min 47 sec</P3>
          </div>
        </div>

        <div className="intensityRow">
          <div className="instrutor">
            <img src={icons.shortpicWomen} alt="Instructor" />
            <p4>Elizebeth Lisa</p4>
          </div>
          <IntensityLevel level={3} />
        </div>

        <P3 className="detail">
          Lorem ipsum dolor sit amet consectetur. Eget vulputate sed posuere
          sit. Integer in ac sem adipiscing nulla arcu Enim placerat nunc
          tincidunt gravida vitae tincidunt
        </P3>
      </CardContent>
    </Card>
  );
}
