import React from "react";
import { H3, P3 } from "src/components";
import { icons } from "src/helpers";
import styled from "styled-components";

const Card = styled.div``;

const CardMedia = styled.div`
  margin-bottom: 18px;
  img {
    width: 100%;
    aspect-ratio: 0.83/1;
    object-fit: cover;
    object-position: center;
  }
`;
const CardContent = styled.div`
  .timeRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    p {
      font-weight: 600;
    }

    h3 {
      margin-bottom: 14px;
    }
  }
`;

export const VideoClassCard = () => {
  return (
    <Card>
      <CardMedia>
        <img src={icons.cardInstructor} alt={"Instructor"} width="" height="" />
      </CardMedia>

      <CardContent>
        <div className="timeRow">
          <P3>2022/12/08 (THU)</P3>
          <P3>06:30-07:30</P3>
        </div>
        <H3>LOREUM ISPUM DUMMY</H3>
        <P3>
          Lorem ipsum dolor sit amet consectetur. Eget vulputate sed posuere
          sit. Integer in ac sem adipiscing nulla arcu Enim placerat nunc
          tincidunt gravida vitae tincidunt
        </P3>
      </CardContent>
    </Card>
  );
};
