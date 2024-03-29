import React, { useMemo } from "react";
import styled from "styled-components";
import { layout } from "src/helpers";
import { Loader, NoFoundBox, H3, PrimaryWhiteButton } from "src/components";
import { VideoClassCard } from "../Cards";

const { mobile, mobileLarge, tablet, laptop } = layout;
const Container = styled.div`
  min-height: 30vh;
  margin-top: 30px;
  .btnShowAll{
    max-width: 320px;
  }
`;
const Box = styled.div`
  display: grid;
  gap: 6vw 1.8vw;
  position: relative;

  @media only screen and (min-width: ${mobile}) {
    grid-template-columns: 1fr;
    margin-block: 6vw;
  }
  @media only screen and (min-width: ${mobileLarge}) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: ${laptop}) {
    margin-block: 40px;
  }
`;

function VideoClassesCards({
  videos,
  loading,
  handleDelete,
  handleEdit,
  handleView,
  isSameInstructor,
  currentVideoClassId,
  limit,
  minLimit,
  handleAll
}) {
  const videoLimit = useMemo(() => {
    if (limit && typeof limit === "number") return limit;
    return videos.length;
  }, [limit, videos]);

  const isDynamic = useMemo(() => {
    if (minLimit && typeof minLimit === "number") return minLimit;
    return 0;
  }, [minLimit]);

  return (
    <Container>
      {loading && <Loader width="35px" height="35px" />}

      {!loading && videos?.length > isDynamic && videoLimit ? (
        <React.Fragment>
          <Box>
            {videos
              .slice(0, videoLimit)
              .map((val) =>
                val._id !== currentVideoClassId ? (
                  <VideoClassCard
                    key={`card-${val._id}`}
                    data={val}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleView={handleView}
                    isSameInstructor={isSameInstructor}
                  />
                ) : (
                  ""
                )
              )}
          </Box>
          {handleAll && (
            <NoFoundBox>
              <PrimaryWhiteButton className="btnShowAll" onClick={handleAll}>
                All Video Classes
              </PrimaryWhiteButton>
            </NoFoundBox>
          )}
        </React.Fragment>
      ) : (
        !loading && (
          <NoFoundBox>
            <H3>Video Classes are not found</H3>
          </NoFoundBox>
        )
      )}
    </Container>
  );
}

export default VideoClassesCards;
