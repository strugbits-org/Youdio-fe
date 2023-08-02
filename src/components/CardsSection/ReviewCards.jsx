import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { layout } from "src/helpers";
import { H3, Loader, NoFoundBox, PrimaryWhiteButton } from "..";
import { ReviewCard } from "../Cards";
const { mobile, mobileMedium, tablet, laptop, desktop } = layout;

const Container = styled.div`
  min-height: 30vh;
  margin-top: 30px;
  max-width: 1000px;
  margin-inline: auto;
  .btnBox {
    text-align: center;
    button {
      text-transform: uppercase;
    }
  }
`;
const Box = styled.div`
  /* padding-inline: 11.5vw; */
  display: grid;
  gap: 7vw 5.8vw;
  position: relative;

  @media only screen and (min-width: ${mobile}) {
    grid-template-columns: 1fr;
    margin-block: 70px;
  }
  @media only screen and (max-width: ${mobileMedium}) {
    gap: 11vw 5.8vw;
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr;
    margin-block: 90px;
  }
  @media only screen and (min-width: ${laptop}) {
    grid-template-columns: 1fr 1fr;
    margin-block: 60px;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;

export const CenterButton = styled(PrimaryWhiteButton)`
  max-width: 200px;
  min-width: 100px;
  background-color: #ffff;
`;

function ReviewCards({ reviews, loading, limit }) {
  const [count, setCount] = useState(6);
  const handleSeeMore = () => {
    setCount(reviews.length);
  };

  useEffect(() => {
    if (limit && typeof limit === "number") {
      setCount(limit);
    }
  }, [limit]);

  return (
    <Container>
      {loading && <Loader width="35px" height="35px" />}
      {!loading && reviews?.length > 0 ? (
        <React.Fragment>
          <Box>
            {reviews.slice(0, count).map((review) => (
              <ReviewCard key={`review-card-${review._id}`} review={review} />
            ))}
          </Box>
          {reviews.length > count && (
            <div className="btnBox">
              <CenterButton onClick={handleSeeMore}>See More</CenterButton>
            </div>
          )}
        </React.Fragment>
      ) : (
        !loading && (
          <NoFoundBox>
            <H3>No reviews yet</H3>
          </NoFoundBox>
        )
      )}
    </Container>
  );
}

export default ReviewCards;
