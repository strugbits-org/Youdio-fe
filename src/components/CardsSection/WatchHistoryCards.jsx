import React from "react";
import { H3, Loader, NoFoundBox } from "..";
import styled from "styled-components";
import { layout } from "src/helpers";
import { HistoryCard } from "../Cards/HistoryCard";

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

  /* padding-block: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: ${layout.mobileLarge}) {
    align-items: initial;
  } */
`;

function WatchHistoryCards({ loading, historyVideos }) {
  return (
    <Container>
      {loading && <Loader width="35px" height="35px" />}

      {!loading && historyVideos && historyVideos?.length > 0 ? (
        <Box>
          {historyVideos.map((historyVideo) => {
            return (
              <HistoryCard
                key={`history-video-card-${historyVideo?._id}`}
                historyVideoId={historyVideo?._id}
                historyVideo={historyVideo?.video}
              />
            );
          })}
        </Box>
      ) : (
        !loading && (
          <NoFoundBox>
            <H3>Watch History not found</H3>
          </NoFoundBox>
        )
      )}
    </Container>
  );
}

export default WatchHistoryCards;
