import React, { useMemo } from "react";

import { H3, P3, H4 } from "src/components";
import { Card, CardMedia, Tag, CardContent } from "./cardsComponent";
import { icons } from "src/helpers";
import IntensityLevel from "../IntensityLevel";

function LiveClassCard({ data }) {
  const intensityLevel = useMemo(() => {
    return data.intensity.slice(-1)
  }, [data])
  return (
    <Card>
      <CardMedia>
        <img src={data.thumbnail} alt={data.title} width="100%" height="auto" />
        <Tag>
          <H4>{data.category}</H4>
        </Tag>
      </CardMedia>
      <CardContent>
        <div className="timeRow">
          <H4>06:30-07:30</H4>
          <div>
            <img src={icons.timeClock} alt="" width="15px" height="auto" />
            <P3>{data.totalTime} min</P3>
          </div>
        </div>
        <H3>{data.title}</H3>
        <div className="profileRow">
          <div className="profileBox">
            <img src={data.instructor.image} alt="" width="30px" height="30px" />
            <H4>{data.instructor.name}</H4>
          </div>
          <div className="intensityBox">
            <IntensityLevel level={intensityLevel} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default LiveClassCard;
