import React, { useEffect, useMemo} from "react";
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
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// import Modal from "./Modal";

function LiveVideo() {
  const { fetchIdAndVideos, res, loading } = useFetch();
  const { resetFilters } = useSelector((state) => state.filter);
  const location = useLocation();
  useEffect(() => {
    liveSessionId &&
      fetchIdAndVideos(
        [
          { endpoint: `liveSession/get`, method: "post" },
          { endpoint: `liveSession/get/${liveSessionId}`, method: "get" },
        ],
        [undefined, undefined],
        [resetFilters]
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const liveSession = useMemo(() => {
    if (res && res.length > 0) {
      return res.map((data, ind) => {
        if (ind === 0) return data.liveSessions;
        if (ind === 1) return data.liveSession;
        return {}
      });
    }
    return [{}, {}];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res]);

  const liveSessionId = useMemo(() => {
    let path = location.pathname;
    path = path.slice(path.lastIndexOf("/") + 1);
    return path;
  }, [location]);

  return (
    <React.Fragment>
      <Section backgroundColor="white" paddingBlock="5vw 0px">
        {!loading ? (
          <LiveBookingBox>
            <MediaBox>
              <img
                src={liveSession[1].trainer?.image}
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
              <CustomPrimaryButton onClick={() => {}}>
                Book Now
              </CustomPrimaryButton>
            </ContentBox>
          </LiveBookingBox>
        ) : <Loader />}
      </Section>
      <Section backgroundColor="white" paddingBlock="0px 30px">
        <LiveLessonBox>
          <H2>Other Live Lesson</H2>
          {/* <FilterComponent /> */}

          <LiveClassesCards classes={liveSession[0]} loading={loading} />
        </LiveLessonBox>
      </Section>
    </React.Fragment>
  );
}

export default LiveVideo;
