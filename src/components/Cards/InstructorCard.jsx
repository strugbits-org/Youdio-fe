import React from "react";
import { icons } from "src/helpers";
import { H3, P3 } from "src/components";
import { CardContent, Card } from "./cardsComponent";

function InstructorCard() {
  return (
    <Card>
      {/* <ImgCard> */}
      <img src={icons.cardInstruct2} alt={""} width="100%" height="auto" />
      {/* </ImgCard> */}
      <CardContent>
        <div className="timeRow">
          <H3>Max Arthur</H3>
        </div>
        <P3>yoga Trainer</P3>
      </CardContent>
    </Card>
  );
}

export default InstructorCard;
