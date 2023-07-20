import React from "react";
import styled from "styled-components";
import { layout } from "src/helpers";
import { Loader, NoFoundBox, H3 } from "src/components";
import { VideoClassCard } from "../Cards";

const { mobile, mobileMedium, tablet, laptop } = layout;
const Container = styled.div`
  min-height: 30vh;
  margin-top: 30px;
`;
const Box = styled.div`
  display: grid;
  gap: 6vw 1.8vw;
  position: relative;

  @media only screen and (min-width: ${mobile}) {
    grid-template-columns: 1fr;
    margin-block: 6vw;
  }
  @media only screen and (min-width: ${mobileMedium}) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: ${laptop}) {
    margin-block: 40px;
  }
`;

function VideoClassesCards({ videos, loading, handleDelete, handleEdit }) {
  return (
    <Container>
      {loading && <Loader width="35px" height="35px" />}

      {!loading && videos?.length > 0 ? (
        <Box>
          {videos.map((val) => (
            <VideoClassCard
              key={`card-${val._id}`}
              data={val}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </Box>
      ) : (
        !loading && (
          <NoFoundBox>
            <H3>No Data Found</H3>
          </NoFoundBox>
        )
      )}
    </Container>
  );
}

export default VideoClassesCards;
