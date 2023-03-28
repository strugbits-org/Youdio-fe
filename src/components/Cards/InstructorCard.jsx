import React from "react";
import { H3, P3 } from "src/components";
import { CardContent, Card, CardMedia } from "./cardsComponent";

function InstructorCard({ id, img, name, trainer }) {
  return (
    <Card>
      <CardMedia>
        <img src={img} alt={""} width="100%" height="auto" />
      </CardMedia>

      <CardContent>
        <div className="timeRow">
          <H3>{name}</H3>
        </div>
        <P3 className="trainerP3">{trainer}</P3>
      </CardContent>
    </Card>
  );
}

export default InstructorCard;
