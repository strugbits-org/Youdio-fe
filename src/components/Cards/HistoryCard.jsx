import React from "react";
import { H3,P3 } from "src/components";
import { Card, CardContent } from "./cardsComponent";
import { icons } from "src/helpers";
import { layout } from "src/helpers";
import styled from "styled-components"
import { HorizontalLine2 } from "src/screens/user/Dashboard/Screen/MyProfileScreen/ProfileComponent";

const { mobile, tablet} = layout;
export function HistoryCard({ img }) {
  return (
    <>
    <Card style={{ display: "flex", justifyContent:"space-between",flexWrap:"wrap"}}>
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
    </Card>
    <HorizontalLine2 style={{marginBottom:"20px"}}/>
    </>

  );
}
export const CardImg = styled.div`
  position: relative;
  margin-bottom: 19px;


  @media only screen and (min-width: ${mobile}) {
    img {
      max-height: 100px;
      object-fit: cover;
      object-position: center;
    }
  }
  @media only screen and (min-width: ${tablet}) {
    img {
      max-height: initial;
      object-fit: initial;
      object-position: initial;
      
    }
  }
  `

export const CardText = styled(CardContent)`
max-width:505px;
min-width:100px;
padding:20px 0px 20px 0px;
gap:2rem
.x {
      transform: translateY(0.5rem);
    }


 .flex{
  display:flex;
  gap :5px;
}
.intensityInstructor{
  padding-Bottom:20px;
  gap:0px;
  justify-content:space-between;
  flex-wrap:wrap;
}
.f{
  display:flex;
  justify-content:space-between;
align-items:center;
gap :10px;
}
.timeRow{
  display:flex;
  flex-wrap:wrap;
  padding-bottom:20px
  min-width:100px
  justify-content:center;
}
`;

