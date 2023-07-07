import React from "react";
import { ClockTime, H3, IntensityLevel, P3 } from "src/components";
import { icons } from "src/helpers";
import styled from "styled-components";


const Card = styled.div``;

const CardMedia = styled.div`
  img {
    width: 100%;
    aspect-ratio: 1.65/1;
    object-fit: cover;
    object-position: center;
    margin-bottom: 18px;
  }
`;
const CardContent = styled.div`
  .timeRow {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 16px;

    .timeIntensity {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
  .desctiption {
    color: var(--backgroundGrey);
  }
`;

export const SingleInstructorCard = () => {
  return (
    <Card>
      <CardMedia>
        <img src={icons.cardInstructor} alt={"Instructor"} width="" height="" />
      </CardMedia>

      <CardContent>
        <div className="timeRow">
          <H3>LOREUM ISPUM DUMMY</H3>
          <div className="timeIntensity">
            <ClockTime
              time="5 min 47 sec"
              fontColor={"var(--backgroundGrey)"}
            />
            <IntensityLevel
              level={2}
              text="Intensity"
              fontColor={"var(--backgroundGrey)"}
            />
          </div>
        </div>
        <P3 className="desctiption">
          Lorem ipsum dolor sit amet consectetur. Eget vulputate sed posuere
          sit. Integer in ac sem adipiscing nulla arcu Enim placerat nunc
          tincidunt gravida vitae tincidunt
        </P3>
      </CardContent>
    </Card>
  );
}

function TwoCardInstructor() {
  return (
    <Card>
      <CardMedia>
        <img
          src={icons.InstructorElizebeth}
          alt={""}
          width="100%"
          height="auto"
        />
      </CardMedia>
      <CardContent>
        <div>
          <H3>LOREUM ISPUM DUMMY</H3>
          <P3 className="p3">
            Lorem ipsum dolor sit amet consectetur. Eget vulputate sed posuere
            sit. Integer in ac sem adipiscing nulla arcu Enim placerat nunc
            tincidunt gravida vitae tincidunt Lorem ipsum dolor sit amet
            consectetur. Eget vulputate sed posuere sit. Integer in ac sem
            adipiscing nulla arcu Enim tincidunt gravida vitae tincidunt
          </P3>
          <P3 className="p3">
            Lorem ipsum dolor sit amet consectetur. Eget vulputate sed posuere
            sit. Integer nulla arcu Enim placerat nunc tincidunt gravida vitae
            tincidunt Lorem ipsum dolor sit amet consectetur. Eget vulputate sed
            posuere sit. Integer in ac sem adipiscing nulla arcu Enim tincidunt
            gravida vitae tincidunt
          </P3>
        </div>
      </CardContent>
    </Card>
  );
}

export { TwoCardInstructor };
