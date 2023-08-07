import React from "react";
import {
  ClockTime,
  H3,
  InstructorLink,
  P3,
  PrimaryButton,
} from "src/components";
import { layout } from "src/helpers";
import styled from "styled-components";
import IntensityLevel from "../IntensityLevel";
import { HorizontalLine } from "../BreakLines";
import { Link, useNavigate } from "react-router-dom";

const { mobile, desktop, tablet, mobileLarge } = layout;

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
    max-width: initial;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 16px;
  .left {
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
  }
  .action {
    margin-block: auto 20px;
    button {
      display: block;
      border-radius: 0px;
      padding: 8px 16px;
      min-height: initial;
      font-size: 14px;
      background: #db0000;
      max-width: max-content;
      margin-inline: auto 0px;
      &:hover {
        background: #fb2b2b;
      }
    }
  }

  @media only screen and (min-width: ${tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default function FeatureVideoCard({ featureVideo, handleDelete }) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Card>
        <ImageBox>
          <Link
            to={`/video-class/${featureVideo?._id}/${featureVideo?.instructor?._id}`}
          >
            <img
              src={featureVideo?.thumbnail}
              alt="Thumbnail"
              width=""
              height=""
            />
          </Link>
          <span className="label">{featureVideo.category}</span>
        </ImageBox>
        <CardContent>
          <div className="left">
            <div className="timeRow">
              <H3>
                <Link
                  to={`/video-class/${featureVideo?._id}/${featureVideo?.instructor?._id}`}
                >
                  {featureVideo.title}
                </Link>
              </H3>
              <ClockTime
                time={`${featureVideo.totalTime} min`}
                fontSize={"12px"}
              />
            </div>

            <div className="intensityRow">
              <InstructorLink
                title={`${featureVideo?.instructor?.firstName} ${featureVideo?.instructor?.lastName}`}
                imageSrc={featureVideo?.instructor?.image}
                handleNavigate={() =>
                  navigate(`/singleinstructor/${featureVideo?.instructor?._id}`)
                }
              />
              <IntensityLevel level={3} />
            </div>

            <P3 className="detail">{featureVideo.description}</P3>
          </div>
          <div className="action">
            <PrimaryButton onClick={() => handleDelete(featureVideo._id)}>
              Delete
            </PrimaryButton>
          </div>
        </CardContent>
      </Card>
      <HorizontalLine />
    </React.Fragment>
  );
}
