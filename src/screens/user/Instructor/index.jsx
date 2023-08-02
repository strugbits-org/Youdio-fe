import React, { useEffect, useMemo } from "react";
import { SingleImage, Sec, TextSec } from "./singleInstructorStyle";
import { H1, P1, H2, Section } from "src/components";
import { useNavigate, useParams } from "react-router-dom";
import useGetAPI from "src/features/hooks/useGetAPI";
import { HorizontalLine } from "src/components/BreakLines";
import {
  LiveClassesCards,
  ReviewCards,
  VideoClassesCards,
} from "src/components/CardsSection";
import { icons, path } from "src/helpers";

function Instructor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getData, getRes, getLoading } = useGetAPI();

  useEffect(() => {
    id
      ? getData(`instructor/get-instructor/${id}`)
      : navigate("/page-not-found");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const instructorDetail = useMemo(() => {
    if (getRes && getRes?.instructor && getRes.instructor.instructor) {
      const detail = getRes.instructor.instructor;
      Object.keys(detail).forEach((key) => {
        if (detail[key] === null || detail[key] === undefined) {
          detail[key] = "";
        }
      });
      detail.fullName = `${detail?.firstName} ${detail?.lastName}`;
      return detail;
    }
    return false;
  }, [getRes]);

  const instrutorClasses = useMemo(() => {
    if (getRes && getRes?.instructor) {
      return {
        liveClasses: getRes.instructor.sessions,
        videoClasses: getRes.instructor.videos,
        reviews: getRes.instructor.reviews,
      };
    }
    return false;
  }, [getRes]);

  return (
    <React.Fragment>
      <Sec
        backgroundColorImage={`linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${instructorDetail?.bannerImage})`}
        paddingBlock="15.2vw"
      >
        {instructorDetail && (
          <>
            <H1>{instructorDetail?.fullName}</H1>
            <P1>{instructorDetail?.jobTitle}</P1>
          </>
        )}
      </Sec>
      <SingleImage>
        <img
          src={instructorDetail?.image ? instructorDetail.image : icons.profile}
          alt={"User Profile"}
        />
      </SingleImage>

      <TextSec backgroundColor="#fff">
        {instructorDetail && (
          <>
            <H2 className="h2">{`${instructorDetail?.fullName} Bio`}</H2>
            <P1 className="p1">{instructorDetail?.description}</P1>
          </>
        )}
        <HorizontalLine marginBlock="30px" />
      </TextSec>

      {/* <StyledDiv /> */}

      {/* Instructor Classes */}
      <Section backgroundColor="#fff">
        {instructorDetail && (
          <H2 style={{ textAlign: "center" }}>
            {`${instructorDetail?.fullName} Classes`}
          </H2>
        )}
        <VideoClassesCards
          isSameInstructor={true}
          videos={instrutorClasses?.videoClasses}
          loading={getLoading}
          limit={3}
          handleAll={() => navigate(path.videos)}
        />
        <HorizontalLine marginBlock="30px" />
      </Section>

      {/* Live Classes */}
      <Section backgroundColor="#fff">
        {instructorDetail && (
          <H2 style={{ textAlign: "center" }}>
            {`${instructorDetail?.fullName} Series`}
          </H2>
        )}
        <LiveClassesCards
          classes={instrutorClasses?.liveClasses}
          loading={getLoading}
          instructorInfo={instructorDetail}
          limit={4}
          handleAll={() => navigate(path.liveClasses)}
          isSameInstructor={true}
        />

        <HorizontalLine marginBlock="30px" />
      </Section>

      {/* Review-Card */}
      <Section backgroundColor="#fff">
        <H2 style={{ textAlign: "center" }}>Instructor Reviews</H2>
        <ReviewCards
          reviews={instrutorClasses.reviews}
          loading={getLoading}
          limit={6}
        />
      </Section>
    </React.Fragment>
  );
}

export default Instructor;
