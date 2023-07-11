import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import { FilterBox, ResetButton } from "./filtersComponents";
import {
  setStyles,
  setInstructors,
  pushToFilters,
  removeFromFilter,
  filterDuration,
  clearFilters,
} from "src/features/filterSlice";
import { IconButton } from "../Button";
import { icons } from "src/helpers";
import { HorizontalLine } from "../BreakLines";
import Instructors from "./Instructors";
import useFetch from "src/features/hooks/useFetch";
import Duration from "./Duration";
import Difficulty from "./Difficulty";
import Intensity from "./Intensity";
import Styles from "./Styles";
import { useDispatch, useSelector } from "react-redux";

const CustomDrawe = styled(Drawer)({
  marginTop: "16px",
  color: "var(--textHeadingWhite)",
  "& .MuiDrawer-paper": {
    background: "transparent",
  },
});

export default function MobileFilters({ open, setOpen, onClose }) {
  const { fetchMultipleData } = useFetch();
  const { filterTags } = useSelector(state => state.filter)
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMultipleData(
      ["category/get-sub-category", "instructor/get-instructor"],
      [setStyles, setInstructors],
      [{}, {}]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeTag = (tag) => {
    if (tag?.subKey) {
      dispatch(removeFromFilter(tag));
    } else {
      dispatch(removeFromFilter(tag));
    }
  };

  const addTag = (tag) => {
    if (tag?.subKey) {
      dispatch(pushToFilters(tag));
    } else {
      dispatch(pushToFilters(tag));
    }
  };

  const addDuration = (duration) => {
    dispatch(filterDuration(duration));
  };

  const list = () => (
    <FilterBox>
      <IconButton className="btnClose" onClick={() => setOpen(false)}>
        <img src={icons.cross} alt="" width="16" />
      </IconButton>
      <HorizontalLine />
      <Instructors removeTag={removeTag} addTag={addTag} />
      <HorizontalLine />
      <Duration addDuration={addDuration} />
      <HorizontalLine />
      <Difficulty removeTag={removeTag} addTag={addTag} />
      <HorizontalLine />
      <Intensity removeTag={removeTag} addTag={addTag} />
      <HorizontalLine />
      <Styles removeTag={removeTag} addTag={addTag} />
      <HorizontalLine />
      <ResetButton
        onClick={() => filterTags.length > 0 && dispatch(clearFilters())}
      >
        Reset Filters
      </ResetButton>
    </FilterBox>
  );

  return (
    <React.Fragment>
      <CustomDrawe
        anchor="top"
        open={open}
        onClose={() => console.log("closed")}
      >
        {list()}
      </CustomDrawe>
    </React.Fragment>
  );
}
