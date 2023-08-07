import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  CustomSection,
  VideoContainer,
  VideoBox,
  VideoDetail,
  ClassesContainer,
  InstructorBio,
  Reviews,
} from "./SingleVideoComp";
import { icons } from "src/helpers";
import {
  ClockTime,
  H2,
  H5,
  P1,
  IntensityLevel,
  IconButton,
  Loader,
} from "src/components";
import { HorizontalLine } from "src/components/BreakLines";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import useFetch from "src/features/hooks/useFetch";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  LiveClassesCards,
  ReviewCards,
  VideoClassesCards,
} from "src/components/CardsSection";
import usePostAPI from "src/features/hooks/usePostAPI";
import { externalLinks, path } from "src/helpers/constant";

const VideoClass = () => {
  const [isPlay, setIsPlay] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.user);
  const { fetchIdAndVideos, res, loading } = useFetch();
  const { postData } = usePostAPI();
  const videoPlay = useRef();
  useEffect(() => {
    if (params?.id && params?.instructor) {
      setIsPlay(false);
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

  const handlePlayButton = () => {
    if (token && token !== null && isPlanActive && !isPlay) {
      setIsPlay(true);
      videoPlay.current.play();
      params?.id && postData("/watchHistory/create", { video: params.id });
    }
  };

  const video = useMemo(() => {
    if (res && res?.length > 0 && res[0]?.video) {
      const getVideo = res[0].video;
      const {
        instructor: { firstName, lastName },
      } = getVideo;
      if (firstName || lastName) {
        getVideo.instructor.fullName = `${firstName} ${lastName}`;
      }
      return getVideo;
    }
    return false;
  }, [res]);

  const instructor = useMemo(() => {
    if (res && res?.length > 0 && res[1]?.instructor) {
      const getInstructor = res[1].instructor;
      const {
        instructor: { firstName, lastName },
      } = getInstructor;
      if (firstName || lastName) {
        getInstructor.instructor.fullName = `${firstName} ${lastName}`;
      }
      return getInstructor;
    }
    return false;
  }, [res]);

  const isPlanActive = useMemo(() => {
    if (user?.subscription?.isActive) {
      return true;
    }
    return false;
  }, [user]);

  return (
    <CustomSection backgroundColor="#fff" paddingBlock="10px 20px">
      {video && instructor ? (
        <React.Fragment>
          <VideoContainer>
            <VideoBox videoRender={isPlay}>
              <video
                ref={videoPlay}
                src={video?.videoURL ? video.videoURL : ""}
                width="100%"
                height="100%"
                controls={isPlay}
              ></video>
              {/* Render isPaly state false or user didn't do any interaction with video box */}
              {!isPlay && (
                <div className="thumbnailImage">
                  <img src={video.thumbnail} alt="" height="" width="" />
                  <IconButton
                    aria-label="play"
                    size="large"
                    color="green"
                    onClick={handlePlayButton}
                  >
                    <PlayArrowRoundedIcon fontSize="large" />
                  </IconButton>
                </div>
              )}
              {(!token || !isPlanActive) && (
                <div className="unLockOverlay">
                  <img src={icons.videoLock} alt="Lock" width="" height="" />
                  <div className="content">
                    <H2 fontSize="clamp(20px, 2.3vw, 46px)">
                      UNLOCK THIS CLASS
                    </H2>
                    <H5 fontSize="clamp(14px, 1.2vw, 18px)">
                      <Link to={externalLinks.subscriptionPlan.url}>
                        Start your trial today
                      </Link>
                    </H5>
                  </div>
                </div>
              )}
            </VideoBox>
            <VideoDetail>
              <div className="singleClass">
                <H5>SINGLE CLASS</H5>
                <H2 fontSize="clamp(28px, 2.6vw, 44px)">{video?.title}</H2>
                <P1>
                  {"From "} {video?.title}{" by "}
                  <span className="bold">{video.instructor?.fullName}</span>
                </P1>
                <P1 className="description">{video?.description}</P1>
              </div>

              <div className="totalRunTime">
                <H5 fontSize="clamp(16px, 1.6vw, 24px)">TOTAL RUN TIME</H5>
                <ClockTime
                  time={`${video?.totalTime} min`}
                  fontSize={"clamp(14px, 1.2vw, 18px)"}
                  fontColor={"var(--backgroundGrey)"}
                />
                <div className="intensity">
                  <IntensityLevel
                    text="Intensitiy"
                    level={video?.intensity}
                    fontSize={"clamp(14px, 1.2vw, 18px)"}
                    fontColor={"var(--backgroundGrey)"}
                  />
                </div>
              </div>
            </VideoDetail>
          </VideoContainer>
          <HorizontalLine />

          <InstructorBio>
            <img src={instructor?.instructor?.image} alt="Instructor" width="" height="" />
            <div className="instructorBio">
              <H2>{`${instructor?.instructor?.fullName} Bio`}</H2>
              <P1 className="bio">{instructor?.instructor?.description}</P1>
            </div>
          </InstructorBio>
          <HorizontalLine />

          <ClassesContainer>
            <H2>{`${instructor?.instructor?.fullName} Classes`}</H2>
            <VideoClassesCards
              isSameInstructor={true}
              videos={instructor?.videos?.length > 0 ? instructor?.videos : []}
              limit={3}
              loading={loading}
              currentVideoClassId={params?.id}
              minLimit={1}
            />
          </ClassesContainer>
          <HorizontalLine />

          <ClassesContainer>
            <H2>{`Live Lessons`}</H2>
            <LiveClassesCards
              classes={
                instructor?.sessions?.length > 0 ? instructor?.sessions : []
              }
              isSameInstructor={true}
              limit={4}
              loading={loading}
              handleAll={() => navigate(path.videos)}
            />
          </ClassesContainer>
          <HorizontalLine />

          <Reviews>
            <H2>Instructor Reviews</H2>
            <ReviewCards
              limit={0}
              loading={loading}
              reviews={
                instructor?.reviews?.length > 0 ? instructor?.reviews : []
              }
            />
          </Reviews>
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </CustomSection>
  );
};

export default VideoClass;
