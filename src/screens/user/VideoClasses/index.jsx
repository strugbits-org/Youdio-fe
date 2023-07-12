import React, { useEffect, useMemo, useState } from "react";
import {
  ContentBox,
} from "./liveClassesComponents";
import useFetch from "src/features/hooks/useFetch";
import { H1, H2, P1, P2, Section, FilterComponent } from "src/components";
import { Box } from "src/components/Banners";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters } from "src/features/filterSlice";
import { VideoClassesCards } from "src/components/CardsSection";

function VideoClasses() {
  const { postData, res, loading } = useFetch();
  const { filters, filterTags } = useSelector((state) => state.filter);
  const [isFilters, setIsFilters] = useState(true);
  const [sort, setSort] = useState("newest");
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
      <Section backgroundColor="#fff" paddingBlock="40px 0px">
        <Box gap="16px" direction="column" maxWidth="771px" textAlign="center">
          <H2>Our Videos</H2>
          <P2>
            Imagining professional yoga lessons without the hassle of travelling
            has now become easier. Start your Yoga, Meditation
          </P2>
        </Box>

        <FilterComponent
          sort={sort}
          setSort={setSort}
          videoCount={sortedVideos.length}
          videoType="VIDEOS"
        />
      </Section>

      {/* Cards Section */}
      <Section backgroundColor="white" paddingBlock="0px 30px">
        <VideoClassesCards videos={sortedVideos} loading={loading}/>
      </Section>
    </React.Fragment>
  );
}

export default VideoClasses;
