import React, { useEffect } from "react";
import { ContentBox, CardsBox } from "./liveClassesComponents";
import useFetch from "src/features/hooks/useFetch";
import { H1, H2, P1, P2, Section, Filters } from "src/components";
import { LiveClassCard } from "src/components/Cards/";
import { Box } from "src/components/Banners";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters } from "src/features/filterSlice";

function VideoClasses() {
  const { postData, res, loading } = useFetch();
  const { filters, filterTags } = useSelector(state => state.filter);
  const dispatch = useDispatch()

   useEffect(() => {
     if (filterTags.length > 0) {
       dispatch(clearFilters());
     }
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   useEffect(() => {
     postData("video/filter", filters);
     // filterTags.length > 0
     //   ?
     //   : fetchData("video");
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [filterTags]);

  useEffect(() => {}, [res, loading]);

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
        <Box gap="16px" direction="column">
          <H2>Our Videos</H2>
          <P2>
            Imagining professional yoga lessons without the hassle of travelling
            has now become easier. Start your Yoga, Meditation
          </P2>
        </Box>
        <Filters />
      </Section>

      {/* Cards Section */}
      <Section backgroundColor="white">
        <CardsBox>
          {!loading &&
            res?.videos.length > 0 &&
            res.videos.map((val) => (
              <LiveClassCard key={`card-${val._id}`} data={val} />
            ))}
        </CardsBox>
      </Section>
    </React.Fragment>
  );
}

export default VideoClasses;
