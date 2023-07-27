import React, { useEffect, useMemo, useState } from "react";
import {
  CustomSection,
  VideoContainer,
  VideoBox,
  VideoDetail,
  InstructorClasses,
  InstructorVideos,
  InstructorSessions,
  InstructorBio,
  ReviewsList,
  Reviews,
} from "./SingleVideoComp";
import { icons } from "src/helpers";
import {
  ClockTime,
  H2,
  H5,
  P1,
  IntensityLevel,
  PrimaryWhiteButton,
  IconButton,
  Loader,
} from "src/components";
import { HorizontalLine } from "src/components/BreakLines";
import { ReviewCard, SingleInstructorCard } from "src/components/Cards";
import { LiveLessonCard } from "src/components/Cards";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import useFetch from "src/features/hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";

const VideoClass = () => {
  const [videosLength, setVideosLength] = useState(6);
  const params = useParams();
  const navigate = useNavigate();
  const { fetchIdAndVideos, res } = useFetch();

  useEffect(() => {
    if (params?.id && params?.instructor) {
      fetchIdAndVideos([
        { endpoint: `/video/get-single/${params.id}`, method: "get" },
        {
          endpoint: `/instructor/get-instructor/${params.instructor}`,
          method: "get",
        },
      ]);
    } else {
      navigate("/page-not-found");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    if (res && (!res[0] || !res[1])) {
      navigate("/page-not-found");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res]);

  const handleSeeMore = () => {
    setVideosLength(8);
  };

  const video = useMemo(() => {
    if (res && res?.length > 0 && res[0]?.video) {
      const getVideo = res[0];
      return getVideo;
    }
    return false;
  }, [res]);

  const instructor = useMemo(() => {
    if (res && res?.length > 0 && res[1]?.instructor) {
      const getInstructor = res[1];
      return getInstructor;
    }
    return false;
  }, [res]);

  return (
    <CustomSection backgroundColor="#fff">
      {video && instructor ? (
        <React.Fragment>
          <VideoContainer>
            <VideoBox>
              {/* <video src={videoURL} width="100%" height="100%"></video> */}
              <div className="thumbnailImage">
                <img src={icons.videoThumbnail} alt="" height="" width="" />
                <IconButton aria-label="play" size="large" color="green">
                  <PlayArrowRoundedIcon fontSize="large" />
                </IconButton>
              </div>
              <div className="unLockOverlay">
                <img src={icons.videoLock} alt="Lock" width="" height="" />
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
                  From Ocean Breath by{" "}
                  <span className="bold">Jackie Stewart</span>
                </P1>
                <P1 className="description">
                  Lorem ipsum dolor sit amet consectetur. Odio id cursus arcu
                  tempus pellentesque varius volutpat enim eget. Velit sed sed
                  commodo nec vestibulum tellus tincidunt mollis. Nascetur et
                  tellus integer integer. Viverra integer imperdiet phasellus
                  ridiculus neque.
                </P1>
              </div>

              <div className="totalRunTime">
                <H5>TOTAL RUN TIME</H5>
                <ClockTime time="5 min 47 sec" fontSize={"18px"} />
                <div className="intensity">
                  <IntensityLevel
                    text="Intensitiy"
                    level={1}
                    fontSize={"18px"}
                    fontColor={"var(--backgroundGrey)"}
                  />
                </div>
              </div>
            </VideoDetail>
          </VideoContainer>
          <HorizontalLine />
          <InstructorBio>
            <img src={icons.profile} alt="Instructor" width="" height="" />
            <div className="instructorBio">
              <H2>Jackie Stewart Bio</H2>
              <P1 className="bio">
                Lorem ipsum dolor sit amet consectetur. Odio id cursus arcu
                tempus pellentesque varius volutpat enim eget. Velit sed sed
                commodo nec vestibulum tellus tincidunt mollis. Nascetur et
                tellus integer integer. Viverra integer imperdiet phasellus
                ridiculus neque.
              </P1>
              <P1>
                Lorem ipsum dolor sit amet consectetur. Odio id cursus arcu
                tempus pellentesque varius volutpat enim eget. Velit sed sed
                commodo nec vestibulum tellus tincidunt mollis. Nascetur et
                tellus integer integer. Viverra integer imperdiet phasellus
                ridiculus neque.
              </P1>
            </div>
          </InstructorBio>
          <HorizontalLine />
          <InstructorClasses>
            <H2>Jackie Stewart Classes</H2>
            <InstructorVideos>
              {[...Array(3).keys()].map((_, ind) => {
                return <SingleInstructorCard key={`instructor-card-${ind}`} />;
              })}
            </InstructorVideos>
          </InstructorClasses>
          <HorizontalLine />
          <InstructorClasses>
            <H2>Jackie Stewart Live Lessons</H2>
            <InstructorSessions>
              {[...Array(4).keys()].map((_, ind) => {
                return <LiveLessonCard key={`live-lesson-card-${ind}`} />;
              })}
            </InstructorSessions>
          </InstructorClasses>
          <HorizontalLine />
          <Reviews>
            <H2>Instructor Review</H2>
            <ReviewsList>
              {[...Array(videosLength).keys()].map((_, ind) => {
                return <ReviewCard key={`review-card-${ind}`} />;
              })}
            </ReviewsList>
            {videosLength < 8 && (
              <PrimaryWhiteButton onClick={handleSeeMore}>
                See More
              </PrimaryWhiteButton>
            )}
          </Reviews>
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </CustomSection>
  );
};

export default VideoClass;
