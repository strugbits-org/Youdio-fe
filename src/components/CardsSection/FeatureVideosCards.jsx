import React from "react";
import { FeatureVideoCard, InstructorCard } from "../Cards";
import { H3, Loader, NoFoundBox } from "..";
import styled from "styled-components";
import { layout } from "src/helpers";

const { mobile, mobileMedium, tablet, laptop } = layout;

const Container = styled.div`
  margin-top: 30px;
  min-height: 30vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;

  @media only screen and (min-width: ${mobile}) {
    margin-bottom: 70px;
  }
  @media only screen and (min-width: ${mobileMedium}) {
    /* grid-template-columns: 1fr 1fr; */
  }
  @media only screen and (min-width: ${tablet}) {
    /* grid-template-columns: 1fr 1fr 1fr; */
    align-items: initial;
    margin-bottom: 90px;
  }
  @media only screen and (min-width: ${laptop}) {
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    margin-bottom: 60px;
  }
`;

function FeatureVideosCards({ loading, featureVideos, search, handleDelete }) {
  return (
    <Container>
      {loading && <Loader width="35px" height="35px" />}

      {!loading && featureVideos && featureVideos?.length > 0 ? (
        <Box>
                  {featureVideos.map((featureVideo) => {
  console.log(featureVideo);
              
            return (
              <FeatureVideoCard
                key={`feature-video-card-${featureVideo?._id}`}
                featureVideo={featureVideo}
                handleDelete={handleDelete}
              />
            );
          })}
        </Box>
      ) : (
        !loading && (
          <NoFoundBox>
            {search ? (
              <H3>No Feature Videos Found with the title of {search}</H3>
            ) : (
              <H3>No Feature Videos Found</H3>
            )}
          </NoFoundBox>
        )
      )}
    </Container>
  );
}

export default FeatureVideosCards;
