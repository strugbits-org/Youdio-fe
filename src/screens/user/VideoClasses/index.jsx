import React, { useEffect, useMemo, useState } from "react";
import {
  ContentBox,
  CardsBox,
  NoFoundBox,
  CustomVideoSection,
} from "./liveClassesComponents";
import useInnerWidth from "src/features/hooks/useInnerWidth";
import useFetch from "src/features/hooks/useFetch";
import {
  H1,
  H2,
  H3,
  P1,
  P2,
  Section,
  Filters,
  PrimaryWhiteButton,
} from "src/components";
import { VideoClassCard } from "src/components/Cards/";
import { Box } from "src/components/Banners";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters } from "src/features/filterSlice";
import Loader from "src/components/Loader";
import MobileFilters from "src/components/MobileFilters";

function VideoClasses() {
  const { postData, res, loading } = useFetch();
  const { filters, filterTags } = useSelector((state) => state.filter);
  const [isFilters, setIsFilters] = useState(true);
  const [sort, setSort] = useState("newest");
  const windowSize = useInnerWidth();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterTags.length > 0) {
      dispatch(clearFilters());
    }
    setIsFilters(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    !isFilters && postData("video/filter", filters);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterTags, isFilters]);

  const sortedVideos = useMemo(() => {
    if (res?.videos && res.videos.length > 0) {
      const videos = res.videos.sort((a, b) => {
        const titleA = new Date(a.date);
        const titleB = new Date(b.date);
        if (sort === "newest") return titleB - titleA;
        return titleA - titleB;
      });
      return videos;
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, res?.videos]);

  return (
    <React.Fragment>
      {/* Hero Section */}
      <Section paddingBlock="7.5vw">
        <ContentBox>
          <H1>Our Video Class</H1>
          <P1>
            Start Your Yoga, Meditation And Fitness Routines By Availing Our
            Live Or Recorded Videos
          </P1>
        </ContentBox>
      </Section>

      {/* Filter, Tags and Search Section */}
      <Section backgroundColor="#fff" paddingBlock="3vw">
        <Box gap="16px" direction="column" maxWidth="771px" textAlign="center">
          <H2>Our Videos</H2>
          <P2>
            Imagining professional yoga lessons without the hassle of travelling
            has now become easier. Start your Yoga, Meditation
          </P2>
        </Box>

        {windowSize.width < 768 ? (
          <React.Fragment>
            <PrimaryWhiteButton onClick={() => setOpen(true)}>
              Filters
            </PrimaryWhiteButton>
            <MobileFilters open={open} setOpen={setOpen} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="seperatorLine"></div>
            <Filters
              videoSort={sort}
              setVideoSort={setSort}
              videoCount={res?.videos ? res.videos.length : 0}
              videoType="VIDEOS"
            />
          </React.Fragment>
        )}
      </Section>

      {/* Cards Section */}
      <CustomVideoSection backgroundColor="white">
        {loading && <Loader width="35px" height="35px" />}

        {!loading && res?.videos.length > 0 ? (
          <CardsBox>
            {sortedVideos.map((val) => (
              <VideoClassCard key={`card-${val._id}`} data={val} />
            ))}
          </CardsBox>
        ) : (
          !loading && (
            <NoFoundBox>
              <H3>No Data Found</H3>
            </NoFoundBox>
          )
        )}
      </CustomVideoSection>
    </React.Fragment>
  );
}

export default VideoClasses;
