import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useFetch from "src/features/hooks/useFetch";
import { H2, LiveBookingCard, Loader, NoFoundBox, P1 } from "src/components";
import moment from "moment";
import { DeletePopup } from "src/components/Popups";
import { icons } from "src/helpers";

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
  const api = useFetch();
  
  const [open, setOpen] = useState(false)
  const [bookedSessionId, setBookedSessionId] = useState("");
  useEffect(() => {
    getBookedSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBookedSession = () => {
    fetchData("booking/getBookedSessions");
  };

  const handleClose = () => { 
    setOpen(!open)
  }

  const handleCancel = (bookedSessionId) => {
    setBookedSessionId(bookedSessionId)
    setOpen(true)
  };
  
  const handleAction = () => { 
    api.deleteData(`booking/cancel/${bookedSessionId}`, () => {
      getBookedSession();
      setBookedSessionId("");
    });
    setOpen(false);

  }

  const bookedSessions = useMemo(() => {
    if (res && res?.data?.length > 0) {
      return res.data.map((bookedSession) => {
        const date = new Date(moment(bookedSession?.liveSession?.date).format());
        const nowDate = new Date();
        if (date < nowDate) {
          bookedSession.isDateBefore = true;
        } else {
          bookedSession.isDateBefore = false;
        }
        return bookedSession;
      });
    }
    return [];
  }, [res]);

  return (
    <BookedLiveSessions>
      <H2>Booked Live Sessions</H2>
      <LiveSessionCards>
        {loading && <Loader />}
        {!loading && bookedSessions.length > 0
          ? bookedSessions.map((session, ind) => {
              return (
                <LiveBookingCard
                  key={`booked-session-card-${session._id}`}
                  bookedSession={session.liveSession}
                  disabled={session.isDateBefore}
                  handleCancel={handleCancel}
                  sessionId={session._id}
                />
              );
            })
          : // open, handleClose, data, handleAction, loading
            !loading && (
              <NoFoundBox>
                <P1>You dont have any booked sessions</P1>
              </NoFoundBox>
            )}
      </LiveSessionCards>
      <DeletePopup
        open={open}
        handleClose={handleClose}
        data={{
          heading: "Do you wish to cancel?",
          text: "Do you wish to cancel your live booking?",
          icon: icons.warningGreen,
        }}
        handleAction={handleAction}
        loading={api.loading}
      />
    </BookedLiveSessions>
  );
};

export default LiveBooking;
