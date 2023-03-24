import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  ContentInside,
  BoxCard,
} from "./cardsComponent";
import { icons } from "src/helpers";
import { P2, P3, H5 } from "src/components";
function ReviewCard() {
  return (
    <Card>
      {/* <CardMedia>
       
      </CardMedia> */}
      <BoxCard>
      <div className="imgReview">
          <img src={icons.reviewImg} alt={""} width="25" height="20" />
        </div>
        <CardContent>
          <ContentInside>
            {/* <div className="space"></div> */}
            <div className="reviewSec">
              <P2 className="star">★★★☆☆</P2>
              <P2>22/12/2022</P2>
            </div>
            <div className="reviewP2">
              <P2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                lectus iaculis netus sem fringilla adipiscing.
              </P2>
            </div>

            <div className="reviewProfile">
              <img src={icons.customerReview} alt="" width="30px" height={""} />
              <H5>Customer</H5>
            </div>
            <P3 className="chef">Chef Leader</P3>
          </ContentInside>
        </CardContent>
      </BoxCard>
    </Card>
  );
}

export default ReviewCard;
