import React from "react";
import styled from "styled-components";
import { layout } from "src/helpers";
import { LiveClassCard, Loader, NoFoundBox, H3 } from "src/components";

const { mobile, mobileMedium, tablet, laptop, desktop } = layout;
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
  @media only screen and (min-width: ${desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
function LiveClassesCards({
  classes,
  loading,
  currentLiveSessionId,
  hoverChildren,
}) {
  return (
    <Container>
      {loading && <Loader width="35px" height="35px" />}
      {!loading && classes.length > 0 ? (
        <Box>
          {classes.map((val) =>
            val._id !== currentLiveSessionId ? (
              <LiveClassCard
                key={`card-${val._id}`}
                data={val}
                hoverChildren={hoverChildren}
              />
            ) : (
              ""
            )
          )}
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

export default LiveClassesCards;
