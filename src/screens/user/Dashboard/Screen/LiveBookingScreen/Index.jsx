import React, { useEffect } from "react";
import styled from "styled-components";
import useFetch from "src/features/hooks/useFetch";
import { H2, LiveBookingCard, Loader, NoFoundBox, P1 } from "src/components";

const LiveSessionCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BookedLiveSessions = styled.div`
  h2 {
    margin-bottom: 32px;
  }
`;

const LiveBooking = () => {
  const { fetchData, res, loading } = useFetch();
  useEffect(() => {
    getBookedSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getBookedSession = () => {
    fetchData("booking/getBookedSessions");
  };
  useEffect(() => {}, [res, loading]);

  return (
    <BookedLiveSessions>
      <H2>Booked Live Sessions</H2>
      <LiveSessionCards>
        {loading && <Loader />}

        {!loading && res && res.data.length > 0
          ? res.data.map((session, ind) => {
              return (
                <LiveBookingCard
                  key={`booked-session-card-${session._id}`}
                  bookedSession={session.liveSession}
                  disabled={ind === 0}
                  getBookedSession={getBookedSession}
                  _id={session._id}
                />
              );
            })
          : !loading && (
              <NoFoundBox>
                <P1>You dont have any booked sessions</P1>
              </NoFoundBox>
            )}
      </LiveSessionCards>
    </BookedLiveSessions>
  );
};

export default LiveBooking;
