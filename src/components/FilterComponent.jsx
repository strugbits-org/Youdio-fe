import React, { useState} from "react";
import useInnerWidth from "src/features/hooks/useInnerWidth";
import { PrimaryWhiteButton, Filters, MobileFilters } from "src/components";
import styled from "styled-components";
import { HorizontalLine } from "./BreakLines";

const Box = styled.div`
  margin-block: 22px;
`


function FilterComponent({ sort, setSort, videoCount, videoType }) {
  const windowSize = useInnerWidth();
  const [open, setOpen] = useState(false);

  return (
    <Box>
      {windowSize.width < 768 ? (
        <React.Fragment>
          <PrimaryWhiteButton onClick={() => setOpen(true)}>
            Filters
          </PrimaryWhiteButton>
          <MobileFilters open={open} setOpen={setOpen} />
        </React.Fragment>
      ) : (
        <React.Fragment>
            {/* <div className="seperatorLine"></div> */}
          <Filters
            videoCount={videoCount}
            videoSort={sort}
            setVideoSort={setSort}
            videoType={videoType}
          />
        </React.Fragment>
      )}
    </Box>
  );
}

export default FilterComponent;
