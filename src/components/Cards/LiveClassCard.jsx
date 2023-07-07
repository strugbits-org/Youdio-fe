import React, { useMemo } from "react";
import styled from "styled-components";
import { H3, H4, ClockTime } from "src/components";
import { path } from "src/helpers";
import IntensityLevel from "../IntensityLevel";
import { useNavigate } from "react-router-dom";
import { InstructorLink } from "src/components";

export const Card = styled.div``;

export const CardMedia = styled.div`
  margin-bottom: 18px;
  position: relative;
  img {
    width: 100%;
    aspect-ratio: 0.83/1;
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
  }
  h3{
    text-align: left;
    margin-block: 6px 12px;
  }
  .profileRow{
    display: flex;
    justify-content: space-between;
    align-items: center;
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

function LiveClassCard({ data }) {
  const navigate = useNavigate();
  const intensityLevel = useMemo(() => {
    return data.intensity.slice(-1);
  }, [data]);

  const handleNavigate = () => {
    navigate(path.liveClass);
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
          <H4>06:30-07:30</H4>
          <ClockTime time={"44 min"} />
        </div>
        <H3>{data.title}</H3>
        <div className="profileRow">
            <InstructorLink
              imageSrc={data.instructor.image}
              title={data.instructor.name}
            />
          
          <div className="intensityBox">
            <IntensityLevel level={intensityLevel} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default LiveClassCard;
