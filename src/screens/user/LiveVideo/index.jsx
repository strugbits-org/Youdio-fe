import React, { useEffect, useMemo, useState } from "react";
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
  FilterComponent,
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
import { useDispatch, useSelector } from "react-redux";
import { clearFilters } from "src/features/filterSlice";
import { LiveClassesCards } from "src/components/CardsSection";
// import Modal from "./Modal";

function LiveVideo() {
  const { postData, res, loading } = useFetch();
  const dispatch = useDispatch();
  const { filterTags, filters } = useSelector((state) => state.filter);
  const [isFilters, setIsFilters] = useState(true);
  useEffect(() => {
    !isFilters && postData("liveSession/get", filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterTags, isFilters]);

  useEffect(() => {
    if (filterTags.length > 0) {
      dispatch(clearFilters());
    }
    setIsFilters(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const sortedVideos = useMemo(() => {
    if (res?.liveSessions && res.liveSessions.length > 0) {
      return res.liveSessions;
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res?.liveSessions]);

  return (
    <React.Fragment>
      <Section backgroundColor="white" paddingBlock="5vw 0px">
        <LiveBookingBox>
          <MediaBox>
            <img
              src={icons.InstructorElizebeth}
              alt="Instructor"
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
            <H2>LIVE BACK PRESS YOGA</H2>
            <P1 className="cardP">
              From Ocean Breath by <span className="bold">Jackie Stewart</span>
            </P1>
            <div className="sessionDetail">
              <div className="totalRunTme detail">
                <H6>TOTAL RUN TIME</H6>
                <ClockTime time="5 min" align={"left"} />
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
                  <P3>5 / Jan / 2023</P3>
                </div>
              </div>
              <div className="intensity detail">
                <H6>INTENSITY</H6>
                <IntensityLevel level={3} align={"left"} />
              </div>
            </div>
            <InstructorLink
              imageSrc={icons.InstructorElizebeth}
              title="Eliza Beth"
            />
            <P2 className="cardP lastP">
              Lorem ipsum dolor sit amet consectetur. Odio id cursus arcu tempus
              pellentesque varius volutpat enim eget. Velit sed commodo nec
              vestibulum tellus tincidunt mollis. Nascetur et tellus nteger to
              integer. Viverra integer imperdiet neque.
            </P2>
            <CustomPrimaryButton onClick={() => {}}>
              Book Now
            </CustomPrimaryButton>
          </ContentBox>
        </LiveBookingBox>
      </Section>
      <Section backgroundColor="white" paddingBlock="0px 30px">
        <LiveLessonBox>
          <H2>Other Live Lesson</H2>
          <FilterComponent />

          <LiveClassesCards classes={sortedVideos} loading={loading} />
        </LiveLessonBox>
      </Section>
    </React.Fragment>
  );
}

export default LiveVideo;
