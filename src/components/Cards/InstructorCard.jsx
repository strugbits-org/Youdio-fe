import React from "react";
import { useNavigate } from "react-router-dom";
import { H3, P2 } from "src/components";
import { icons } from "src/helpers";
import styled from "styled-components";

const Card = styled.div``;

const CardMedia = styled.div`
  margin-bottom: 18px;
  position: relative;
  & > img{
    cursor: pointer;
  }
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
    margin-bottom: 16px;
  }

  &:hover {
    .hoverBox {
      display: flex;
      transition: var(--transition1s);
    }
  }
`;
const CardContent = styled.div`
  h3 {
    margin-bottom: 2px;
    cursor: pointer;
  }
`;

const HoverBox = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
  aspect-ratio: 1/1;
  top: 0px;
  left: 0px;
  transition: var(--transition1s);
  gap: 8px;

  img {
    width: clamp(16px, 2vw, 30px);
    aspect-ratio: 1/1;
    cursor: pointer;
    object-fit: contain;
  }
`;

function InstructorCard({
  instructor: { _id, firstName, lastName, image, jobTitle },
  handleDelete,
  handleEdit,
  handleView,
}) {
  const navigate = useNavigate();
  const handleNavgate = () => {
    navigate(`/singleinstructor/${_id}`);
  };
  return (
    <Card>
      <CardMedia
        onClick={!handleDelete && !handleEdit ? handleNavgate : () => {}}
      >
        <img src={image} alt={firstName} width="100%" height="auto" />
        {handleDelete && handleEdit && (
          <HoverBox className="hoverBox">
            <img
              src={icons.bin}
              alt="Bin_Delete"
              onClick={() => handleDelete(_id)}
              width=""
              height=""
            />
            <img
              src={icons.pen}
              alt="Edit_Pen"
              onClick={() => handleEdit(_id)}
              width=""
              height=""
            />
            <img
              src={icons.eye}
              alt="View_Eye"
              onClick={() => handleView(_id)}
              width=""
              height=""
            />
          </HoverBox>
        )}
      </CardMedia>

      <CardContent>
        <div className="timeRow">
          <H3 onClick={handleNavgate}>{`${firstName} ${lastName}`}</H3>
        </div>
        <P2>{jobTitle}</P2>
      </CardContent>
    </Card>
  );
}

export default InstructorCard;
