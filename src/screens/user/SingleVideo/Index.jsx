import React from "react";
import {
  CustomSection,
  VideoContainer,
  VideoBox,
  VideoDetail,
  InstructorClasses,
  InstructorVideos,
  InstructorSessions,
} from "./SingleVideoComp";
import { icons } from "src/helpers";
import { ClockTime, H2, H5, P1, IntensityLevel } from "src/components";
import { HorizontalLine } from "src/components/BreakLines";
import { SingleInstructorCard } from "src/components/Cards";
import { VideoClassCard } from "src/components/Cards/VideoClassCard";

const SingleVideo = () => {
  const videoURL =
    "https://yodio-videos-bucket.s3.amazonaws.com/Instructor+Videos/1679323525856-high.mp4";

  return (
    <CustomSection backgroundColor="#fff">
      <VideoContainer>
        <VideoBox>
          <video src={videoURL} width="100%" height="100%"></video>
          <div className="unLockOverlay">
            <img src={icons.timeClock} alt="Lock" width="" height="" />
            <div className="content">
              <H2 fontSize="clamp(20px, 2.3vw, 46px)">UNLOCK THIS CLASS</H2>
              <H5 fontSize="clamp(14px, 1.2vw, 18px)">
                Start your trial today
              </H5>
            </div>
          </div>
        </VideoBox>
        <VideoDetail>
          <div className="singleClass">
            <H5>SINGLE CLASS</H5>
            <H2>OCEAN BREATH</H2>
            <P1>
              From Ocean Breath by <span className="bold">Jackie Stewart</span>
            </P1>
            <P1 className="description">
              Lorem ipsum dolor sit amet consectetur. Odio id cursus arcu tempus
              pellentesque varius volutpat enim eget. Velit sed sed commodo nec
              vestibulum tellus tincidunt mollis. Nascetur et tellus integer
              integer. Viverra integer imperdiet phasellus ridiculus neque.
            </P1>
          </div>

          <div className="totalRunTime">
            <H5>TOTAL RUN TIME</H5>
            <ClockTime time="5 min 47 sec" />
            <div className="intensity">
              <IntensityLevel text="Intensitiy" level={1} />
            </div>
          </div>
        </VideoDetail>
      </VideoContainer>
      <HorizontalLine />
      <InstructorClasses>
        <H2>Jackie Stewart Classes</H2>
        <InstructorVideos>
          {[...Array(3).keys()].map(() => {
            return <SingleInstructorCard />;
          })}
        </InstructorVideos>
      </InstructorClasses>
      <HorizontalLine />
      <InstructorClasses>
        <H2>Jackie Stewart Live Sessions</H2>
        <InstructorSessions>
          {[...Array(8).keys()].map(() => {
            return <VideoClassCard />;
          })}
        </InstructorSessions>
      </InstructorClasses>
    </CustomSection>
  );
};

export default SingleVideo;
