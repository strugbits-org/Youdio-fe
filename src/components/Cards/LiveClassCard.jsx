import React, { useMemo } from "react";
import styled from "styled-components";
import { H3, H4, ClockTime, P3 } from "src/components";
import { icons, path } from "src/helpers";
import IntensityLevel from "../IntensityLevel";
import { useNavigate } from "react-router-dom";
import { InstructorLink } from "src/components";
import moment from "moment";

export const Card = styled.div``;

export const CardMedia = styled.div`
  margin-bottom: 18px;
  position: relative;
  img {
    width: 100%;
    aspect-ratio: 0.83/1;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
  }

  &:hover {
    .hoverBox {
      display: flex;
      transition: var(--transition1s);
      
    }
  }
`;
export const CardContent = styled.div`
  .timeRow {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px;
  }
  h3 {
    text-align: left;
    margin-block: 6px 12px;
  }
  .profileRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .detail {
    color: var(--backgroundGrey);
    max-width: 482px;
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

const HoverBox = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
  /* height: 100%; */
  aspect-ratio: 0.83/1;
  top: 0px;
  left: 0px;
  transition: var(--transition1s);
`;

function LiveClassCard({ data, hoverChildren }) {
  const navigate = useNavigate();
  const intensityLevel = useMemo(() => {
    return data.intensity.slice(-1);
  }, [data]);

  const handleNavigate = () => {
    navigate(`${path.liveClass}/${data._id}`, { state: { _id: data._id } });
  };

  return (
    <Card>
      <CardMedia isHoverBox={hoverChildren ? true : false}>
        <img
          onClick={!hoverChildren ? handleNavigate : () => {}}
          src={data.thumbnail}
          alt={data.title}
          width="100%"
          height="auto"
        />
        <Tag>
          <H4>{data.category.name}</H4>
        </Tag>
        {/* <H4>{new Date(data.date).toDateString()}</H4> */}
        {hoverChildren && (
          <HoverBox className="hoverBox">{hoverChildren}</HoverBox>
        )}
      </CardMedia>
      <CardContent>
        <div className="timeRow">
          <H4>{data.date && moment(data.date).format("MM-DD-YYYY")}</H4>
          <H4>{data.time}</H4>
          <ClockTime time={`${data.totalTime} min`} />
        </div>
        <H3>{data.title}</H3>
        <div className="profileRow">
          <InstructorLink
            imageSrc={data.trainer.image}
            title={`${data.trainer.firstName} ${data.trainer.lastName}`}
          />

          <div className="intensityBox">
            <IntensityLevel level={intensityLevel} />
          </div>
        </div>
        <P3 className="detail">{data.description}</P3>
      </CardContent>
    </Card>
  );
}

export default LiveClassCard;
