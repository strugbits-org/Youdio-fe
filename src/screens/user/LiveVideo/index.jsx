import React, { useEffect, useMemo } from "react";
import {
  H2,
  P1,
  P2,
  P3,
  Section,
  H6,
  ClockTime,
  IntensityLevel,
  InstructorLink,
  // FilterComponent,
  Loader,
} from "src/components";
import {
  LiveBookingBox,
  ContentBox,
  MediaBox,
  CustomPrimaryButton,
  LiveLessonBox,
} from "./liveVideoComponent";
import { icons } from "src/helpers";
import useFetch from "src/features/hooks/useFetch";
import { LiveClassesCards } from "src/components/CardsSection";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import BookingModal from "./BookingModal";
import usePostAPI from "src/features/hooks/usePostAPI";
import { setUser } from "src/features/userSlice";

// import Modal from "./Modal";

function LiveVideo() {
  const { fetchIdAndVideos, res, loading } = useFetch();
  const { postData } = usePostAPI()
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const { resetFilters } = useSelector((state) => state.filter);
  const { user, token } = useSelector((state) => state.user);
  const navigate= useNavigate()

  const location = useLocation();
  useEffect(() => {
    liveSessionId &&
      fetchIdAndVideos(
        [
          { endpoint: `liveSession/get`, method: "post" },
          { endpoint: liveSessionId.link, method: "get" },
        ],
        [undefined, undefined],
        [resetFilters]
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const liveSession = useMemo(() => {
    if (res && res.length > 0) {
      return res.map((data, ind) => {
        if (ind === 0) return data.liveSessions;
        if (ind === 1) return data.liveSession;
        return {};
      });
    }
    return [{}, {}];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res]);

  const liveSessionId = useMemo(() => {
    let path = location.pathname;
    path = path.slice(path.lastIndexOf("/") + 1);
    const link = token
      ? `liveSession/get/${path}`
      : `liveSession/get-unauth/${path}`;
    return {_id: path, link};
  }, [location, token]);

  const handleBookNow = () => {
    if (token) {
      if (user.subscription.isActive) { 
        // Hit Book Session API
        const payload = {
          liveSession: liveSessionId._id,
        };
        postData(
          "booking/bookSession",
          payload,
          setUser,
          undefined,
          undefined,
          () => navigate("/user/live-booking")
        );
      }
      else {
        window.open("https://www.google.com", "_self");
      }
    } else {
      window.open("https://www.google.com", "_self");
    }
    
  }

  return (
    <React.Fragment>
      <Section backgroundColor="white" paddingBlock="5vw 0px">
        {!loading && liveSession[1] ? (
          <LiveBookingBox>
            <MediaBox>
              <img
                src={liveSession[1].thumbnail}
                alt="Trainer"
                width=""
                height=""
              />
              <div className="overlay"></div>
              <img
                className="videoCamera"
                src={icons.videoCamera}
                alt="Camera"
                width=""
                height=""
              />
            </MediaBox>
            <ContentBox>
              <H2>{liveSession[1].title}</H2>
              <P1 className="cardP">
                by{" "}
                <span className="bold">{`${liveSession[1].trainer?.firstName} ${liveSession[1].trainer?.lastName}`}</span>
              </P1>
              <div className="sessionDetail">
                <div className="totalRunTme detail">
                  <H6>TOTAL RUN TIME</H6>
                  <ClockTime
                    time={`${liveSession[1].totalTime} min`}
                    align={"left"}
                  />
                </div>
                <div className="date detail">
                  <H6>DATE</H6>
                  <div>
                    <img
                      src={icons.calendarImg}
                      alt="Calendar"
                      width="16"
                      height=""
                    />
                    <P3>{liveSession[1].date}</P3>
                  </div>
                </div>
                <div className="intensity detail">
                  <H6>INTENSITY</H6>
                  <IntensityLevel
                    level={liveSession[1].intensity}
                    align={"left"}
                  />
                </div>
              </div>
              <InstructorLink
                imageSrc={liveSession[1].trainer?.image}
                title={`${liveSession[1].trainer?.firstName} ${liveSession[1].trainer?.lastName}`}
              />
              <P2 className="cardP lastP">{liveSession[1].description}</P2>
              <CustomPrimaryButton
                onClick={handleBookNow}
                disabled={liveSession[1].bookedByMe}
              >
                {liveSession[1]?.bookedByMe ?  "Booked" : "Book Now"}
              </CustomPrimaryButton>
            </ContentBox>
          </LiveBookingBox>
        ) : (
          <Loader />
        )}
      </Section>
      <Section backgroundColor="white" paddingBlock="0px 30px">
        <LiveLessonBox>
          <H2>Other Live Lesson</H2>
          {/* <FilterComponent /> */}

          <LiveClassesCards
            classes={liveSession[0]}
            loading={loading}
            currentLiveSessionId={liveSessionId._id}
          />
        </LiveLessonBox>
      </Section>
      {/* <BookingModal
        open={open}
        handleClose={handleClose}
        data={liveSession[1]}
      /> */}
    </React.Fragment>
  );
}

export default LiveVideo;
