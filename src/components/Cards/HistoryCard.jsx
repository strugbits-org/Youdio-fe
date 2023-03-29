import React from "react";
import { H3,P3 } from "src/components";
import { Card, CardMedia, CardContent } from "./cardsComponent";
import { icons } from "src/helpers";
export function HistoryCard({ img }) {
  return (
    <Card style={{ display: "flex", gap:"2rem" }}>
      <CardMedia>
        <img src={img} alt={""} width="334px" height="203.1px" />
      </CardMedia>

      <CardContent style={{ maxwidth: "600px", minWidth: "30%" }}>
        <div className="timeRow">
          <H3>UPPER BODY POWER</H3>
          <div>
            <img src={icons.timeClock} alt="" width="15px" height="auto" />
            <P3>5 min 47 sec</P3>
          </div>
        </div>
        <div className="intensityInstructor" style={{ paddingBottom: "20px" }}>
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

        <div className="p1">
          <P3  style={{width:"482px"}}>
            Lorem ipsum dolor sit amet consectetur. Eget vulputate sed posuere
            sit. Integer in ac sem adipiscing nulla arcu Enim placerat nunc
            tincidunt gravida vitae tincidunt
          </P3>
        </div>
      </CardContent>
    </Card>
  );
}
