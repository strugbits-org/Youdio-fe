import React, { useMemo } from "react";
import styled from "styled-components";
import { H3, H4, InstructorLink, ClockTime, P3 } from "src/components";
import IntensityLevel from "../IntensityLevel";
import { useNavigate } from "react-router-dom";
import { icons, layout, path } from "src/helpers";

const Card = styled.div`
  margin-inline: auto;
  max-width: 350px;
  @media only screen and (min-width: ${layout.mobileLarge}) {
    max-width: initial;
  }
`;

const CardMedia = styled.div`
  margin-bottom: 18px;
  position: relative;
  & > img {
    cursor: pointer;
  }
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
    .titleBox {
      display: grid;
      h3 {
        text-align: initial;
        cursor: pointer;
        text-overflow: ellipsis;
        overflow: hidden;
        text-wrap:nowrap;
      }
    }
  }
  .profileRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    gap: 8px;
  }
  .detail {
    color: var(--backgroundGrey);
    max-width: 482px;
    span {
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
    if (data?.instructor?._id && data?._id) {
      navigate(`${path.videoClass}/${data._id}/${data.instructor._id}`);
    } else {
      navigate(`${path.videoClass}/${data._id}/${data.instructor}`);
    }
  };

  const paraLimit = useMemo(() => {
    const descLength = data.description.length;

    if (data?.description) {
      return {
        text:
          descLength >= 100
            ? data.description.slice(0, 100).concat("...")
            : data.description,
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
              onClick={() => handleView(data._id, data?.instructor?._id)}
              width=""
              height=""
            />
          </HoverBox>
        )}
      </CardMedia>
      <CardContent>
        <div className="timeRow">
          <div className="titleBox">
            <H3 onClick={handleNavigate} title={data.title}>
              {data.title}
            </H3>
          </div>
          {/* <H3 onClick={handleNavigate}>{data.title}</H3> */}
          <ClockTime
            time={`${data.totalTime} min`}
            fontSize={"14px"}
            fontColor={"var(--backgroundGrey)"}
          />
        </div>
        <div className="profileRow">
          {!isSameInstructor && (
            <InstructorLink
              imageSrc={data.instructor?.image}
              title={`${data?.instructor?.firstName} ${data.instructor?.lastName}`}
              handleNavigate={() =>
                navigate(`/${path.singleInstructor}/${data?.instructor?._id}`)
              }
            />
          )}
          <IntensityLevel level={intensityLevel} text={"Intensity"} />
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
