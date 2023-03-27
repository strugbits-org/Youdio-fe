import React from "react";
import Rating from "@mui/material/Rating";
import { CardContent, ContentInside, BoxCard } from "./cardsComponent";
import { icons } from "src/helpers";
import { P2, P3, H5 } from "src/components";
function ReviewCard({ id, date, text, custName, custRole, custImg }) {
  const [value, setValue] = React.useState(2);

  return (
    <BoxCard>
      <div className="imgReview">
        <img src={icons.reviewImg} alt={""} width="35" height="20" style={{}} />
      </div>
      <CardContent>
        <ContentInside>
          <div className="reviewSec">
            <Rating
              className="star"
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

            <P2>{date}</P2>
          </div>
          <div className="reviewP2">
            <P2>{text}</P2>
          </div>

          <div className="reviewProfile">
            <img src={custImg} alt="" width="30px" height={""} />
            <H5>{custName}</H5>
          </div>
          <P3 className="chef">{custRole}</P3>
        </ContentInside>
      </CardContent>
    </BoxCard>
  );
}

export default ReviewCard;
