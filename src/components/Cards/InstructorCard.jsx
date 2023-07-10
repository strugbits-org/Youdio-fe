import React from "react";
import { useNavigate } from "react-router-dom";
import { H3, P2, P3 } from "src/components";
import styled from "styled-components";

export const Card = styled.div``;

export const CardMedia = styled.div`
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
    margin-bottom: 16px;
  }
`;
export const CardContent = styled.div`
 h3{
  margin-bottom: 2px;
 }
`;


function InstructorCard({
  instructor: { _id, firstName, lastName, image, jobTitle },
}) {

  const navigate = useNavigate()
  return (
    <Card>
      <CardMedia onClick={() => navigate(`/singleinstructor/${_id}`)}>
        <img src={image} alt={firstName} width="100%" height="auto" />
      </CardMedia>

      <CardContent>
        <div className="timeRow">
          <H3>{`${firstName} ${lastName}`}</H3>
        </div>
        <P2>{jobTitle}</P2>
      </CardContent>
    </Card>
  );
}

export default InstructorCard;
