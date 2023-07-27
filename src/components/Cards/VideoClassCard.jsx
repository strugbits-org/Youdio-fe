import React, { useMemo } from "react";
import styled from "styled-components";
import { H3, H4, InstructorLink, ClockTime, P3 } from "src/components";
import IntensityLevel from "../IntensityLevel";
import { useNavigate } from "react-router-dom";
import { icons, path } from "src/helpers";

const Card = styled.div``;

const CardMedia = styled.div`
  margin-bottom: 18px;
  position: relative;
  img {
    width: 100%;
    aspect-ratio: 1.64/1;
    object-fit: cover;
    object-position: center;
  }

  &:hover {
    .hoverBox {
      display: flex;
      transition: var(--transition1s);
    }
  }
`;
const CardContent = styled.div`
  .timeRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }
  h3 {
    text-align: initial;
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
    span{
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
const Tag = styled.span`
  background: var(--backgroundGreen);
  color: var(--textHeadingWhite);
  padding: 4px 1.5vw;
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
  aspect-ratio: 1.64/1;
  top: 0px;
  left: 0px;
  transition: var(--transition1s);
  gap: 8px;

  img {
    width: clamp(16px, 2vw, 36px);
    aspect-ratio: 1/1;
    cursor: pointer;
    object-fit: contain;
  }
`;

function VideoClassCard({
  data,
  handleDelete,
  handleEdit,
  handleView,
  isSameInstructor,
}) {
  const navigate = useNavigate();
  const intensityLevel = useMemo(() => {
    return data.intensity.slice(-1);
  }, [data]);

  const handleNavigate = () => {
    navigate(`${path.videoClass}/${data?._id}`);
  };

  const paraLimit = useMemo(() => {
    if (data?.description) {
      return {
        text: data.description.slice(0, 100).concat("..."),
        length: data.description.length,
      };
    }
    return "";
  }, [data]);
  return (
    <Card>
      <CardMedia isHoverBox={handleDelete && handleEdit ? true : false}>
        <img
          src={data.thumbnail}
          alt={data.title}
          onClick={!handleDelete && !handleEdit ? handleNavigate : () => {}}
          width="100%"
          height="auto"
        />
        <Tag>
          <H4>{data.category}</H4>
        </Tag>
        {/* <H4>{new Date(data.date).toDateString()}</H4> */}
        {handleDelete && handleEdit && (
          <HoverBox className="hoverBox">
            <img
              src={icons.bin}
              alt="Bin_Delete"
              onClick={() => handleDelete(data._id)}
              width=""
              height=""
            />
            <img
              src={icons.pen}
              alt="Edit_Pen"
              onClick={() => handleEdit(data._id)}
              width=""
              height=""
            />
            <img
              src={icons.eye}
              alt="View_Eye"
              onClick={() => handleView(data._id)}
              width=""
              height=""
            />
          </HoverBox>
        )}
      </CardMedia>
      <CardContent>
        <div className="timeRow">
          <H3>{data.title}</H3>
          <ClockTime time={`${data.totalTime} min`} />
        </div>
        <div className="profileRow">
          {!isSameInstructor && (
            <InstructorLink
              imageSrc={data.instructor.image}
              title={`${data.instructor.firstName} ${data.instructor.lastName}`}
            />
          )}
          <IntensityLevel level={intensityLevel} />
        </div>
        <P3 className="detail">
          {paraLimit.text}{" "}
          {paraLimit.length >= 100 ? (
            <span onClick={handleNavigate}>See More</span>
          ) : (
            ""
          )}
        </P3>
      </CardContent>
    </Card>
  );
}

export default VideoClassCard;
