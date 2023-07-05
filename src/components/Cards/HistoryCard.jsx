import React from "react";
import { H3, P3, H4 } from "src/components";
import { icons } from "src/helpers";
import { layout } from "src/helpers";
import styled from "styled-components";
import { HorizontalLine2 } from "src/screens/user/Dashboard/Screen/MyProfileScreen/ProfileComponent";
import IntensityLevel from "../IntensityLevel";

const { mobile, tablet } = layout;
const Card = styled.div`
  max-width: 982px;
  display: flex;
  align-items: center;
  gap: 104px;
`;
const ImageBox = styled.div`
  position: relative;
  img {
    /* max-width: 334px; */
    aspect-ratio: 1.65/1;
    object-fit: cover;
  }
  .label {
    background: var(--backgroundGreen);
    padding: 4px 16px;
    color: #fff;
    position: absolute;
    left: 0px;
  }
`;

const CardContent = styled.div`
  flex: 1;
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

  .detail{
    max-width: 482px;
  }
`;

export function HistoryCard({ img }) {
  return (
    <>
      {/* <Card style={{ display: "flex", justifyContent:"space-between",flexWrap:"wrap"}}>
      <CardImg>
        <img src={img} alt="workout" />
      </CardImg>
      <CardText >
        <div className="timeRow">
          <H3>UPPER BODY POWER</H3>
          <div>
            <img src={icons.timeClock} alt="" width="15px" height="auto" />
            <P3>5 min 47 sec</P3>
          </div>
        </div>
        <div className="intensityInstructor" >
          <div className="f">

          <div>
            <img src={icons.shortpicWomen} alt="img" />
          
          </div>
          <p4>Elizebeth Lisa

</p4>
          </div>

         <div className="flex">

          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fll="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="13.5882"
              y1="0.764648"
              x2="13.5882"
              y2="13.1287"
              stroke="#D5D5D5"
              strokeWidth="1.52306"
            />
            <line
              x1="9.45879"
              y1="2.8252"
              x2="9.45879"
              y2="13.1286"
              stroke="#D5D5D5"
              strokeWidth="1.52306"
            />
            <line
              x1="5.33331"
              y1="4.88574"
              x2="5.33331"
              y2="13.1284"
              stroke="#D5D5D5"
              strokeWidth="1.52306"
            />
            <line
              x1="1.20391"
              y1="7.97754"
              x2="1.20391"
              y2="13.1292"
              stroke="#413735"
              strokeWidth="1.52306"
            />
          </svg>

          <P3>Intensity 1</P3>
        
          </div>
        </div>

        <div className="p1">
          <P3  >
            Lorem ipsum dolor sit amet consectetur. Eget vulputate sed posuere
            sit. Integer in ac sem adipiscing nulla arcu Enim placerat nunc
            tincidunt gravida vitae tincidunt
          </P3>
        </div>
      </CardText>
    </Card> */}
      <Card>
        <ImageBox>
          <img src={img} alt="Card Image" width="" height="" />
          <span className="label">Yoga</span>
        </ImageBox>
        <CardContent>
          <div className="timeRow">
            <H3>UPPER BODY POWER</H3>
            <div className="time">
              <img src={icons.timeClock} alt="" width="15px" height="auto" />
              <P3>5 min 47 sec</P3>
            </div>
          </div>

          <div className="intensityRow">
            <div className="instrutor">
              <img src={icons.shortpicWomen} alt="img" />
              <p4>Elizebeth Lisa</p4>
            </div>
            <IntensityLevel level={3} />
          </div>

          <P3 className="detail">
            Lorem ipsum dolor sit amet consectetur. Eget vulputate sed posuere
            sit. Integer in ac sem adipiscing nulla arcu Enim placerat nunc
            tincidunt gravida vitae tincidunt
          </P3>
        </CardContent>
      </Card>
      <HorizontalLine2 style={{ marginBlock: "20px" }} />
    </>
  );
}
