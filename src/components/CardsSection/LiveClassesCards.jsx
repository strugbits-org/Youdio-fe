import React, { useMemo } from "react";
import styled from "styled-components";
import { layout } from "src/helpers";
import {
  LiveClassCard,
  Loader,
  NoFoundBox,
  H3,
  PrimaryWhiteButton,
} from "src/components";

const { mobile, mobileLarge, tablet, laptop, desktop } = layout;
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
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: ${laptop}) {
    margin-block: 40px;
  }
  @media only screen and (min-width: ${desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
function LiveClassesCards({
  classes,
  loading,
  currentLiveSessionId,
  handleDelete,
  handleEdit,
  handleView,
  instructorInfo,
  limit,
  minLimit,
  handleAll,
  isSameInstructor,
}) {
  const videoLimit = useMemo(() => {
    if (limit && typeof limit === "number") return limit;
    return classes?.length;
  }, [limit, classes]);
  const isDynamic = useMemo(() => {
    if (minLimit && typeof minLimit === "number") return minLimit;
    return 0;
  }, [minLimit]);

  return (
    <Container>
      {loading && <Loader width="35px" height="35px" />}
      {!loading && classes?.length > isDynamic && videoLimit ? (
        <React.Fragment>
          <Box>
            {classes
              .slice(0, videoLimit)
              .map((val) =>
                val._id !== currentLiveSessionId ? (
                  <LiveClassCard
                    key={`card-${val._id}`}
                    data={val}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleView={handleView}
                    instructorInfo={instructorInfo}
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
                All Live Sessions
              </PrimaryWhiteButton>
            </NoFoundBox>
          )}
        </React.Fragment>
      ) : (
        !loading && (
          <NoFoundBox>
            <H3>Live Sessions are not found</H3>
          </NoFoundBox>
        )
      )}
    </Container>
  );
}

export default LiveClassesCards;
