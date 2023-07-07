import React, { useMemo } from "react";
import styled from "styled-components";
import { H3, H4, InstructorLink, ClockTime, P3 } from "src/components";
import IntensityLevel from "../IntensityLevel";
import { useNavigate } from "react-router-dom";
import { path } from "src/helpers";

export const Card = styled.div``;

export const CardMedia = styled.div`
  margin-bottom: 18px;
  position: relative;
  img {
    width: 100%;
    aspect-ratio: 1.64/1;
    object-fit: cover;
    object-position: center;
  }
`;
export const CardContent = styled.div`
  .timeRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  h3 {
    text-align: initial;
    margin-block: 6px 12px;
  }
  .profileRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
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

function VideoClassCard({ data }) {
  const navigate = useNavigate();
  const intensityLevel = useMemo(() => {
    return data.intensity.slice(-1);
  }, [data]);

  const handleNavigate = () => {
    navigate(path.videoClass);
  };

  return (
    <Card>
      <CardMedia onClick={handleNavigate}>
        <img src={data.thumbnail} alt={data.title} width="100%" height="auto" />
        <Tag>
          <H4>{data.category}</H4>
          {/* <H4>{new Date(data.date).toDateString()}</H4> */}
        </Tag>
      </CardMedia>
      <CardContent>
        <div className="timeRow">
          <H3>{data.title}</H3>
          <ClockTime time={`${data.totalTime} min`} />
        </div>
        <div className="profileRow">
          <InstructorLink
            imageSrc={data.instructor.image}
            title={data.instructor.name}
          />
          <IntensityLevel level={intensityLevel} />
        </div>
        <P3>
          Lorem ipsum dolor sit amet consectetur. Eget vulputate sed posuere
          sit. Integer in ac sem adipiscing nulla arcu Enim placerat nunc
          tincidunt gravida vitae tincidunt.
        </P3>
      </CardContent>
    </Card>
  );
}

export default VideoClassCard;
