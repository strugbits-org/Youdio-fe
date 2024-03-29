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
import { useTranslation } from "react-i18next";

const CustomDrawer = styled(Drawer)({
  marginTop: "16px",
  color: "var(--textHeadingWhite)",
  "& .MuiDrawer-paper": {
    background: "transparent",
  },
});

export default function MobileFilters({ open, setOpen, onClose }) {
  const { fetchMultipleData } = useFetch();
  const { filterTags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
      <Instructors
        removeTag={removeTag}
        addTag={addTag}
        title={t("filters.instructors")}
      />
      <HorizontalLine />
      <Duration
        addDuration={addDuration}
        title={t("filters.duration.title")}
        mins={t("filters.duration.mins")}
        allDuration={t("filters.duration.allDuration")}
      />
      <HorizontalLine />
      <Difficulty
        removeTag={removeTag}
        addTag={addTag}
        title={t("filters.difficulty")}
      />
      <HorizontalLine />
      <Intensity
        removeTag={removeTag}
        addTag={addTag}
        title={t("filters.intensity")}
      />
      <HorizontalLine />
      <Styles
        removeTag={removeTag}
        addTag={addTag}
        title={t("filters.styles")}
      />
      <HorizontalLine />
      <ResetButton
        onClick={() => filterTags.length > 0 && dispatch(clearFilters())}
      >
        {t("filters.resetFilterText")}
      </ResetButton>
    </FilterBox>
  );

  return (
    <React.Fragment>
      <CustomDrawer
        anchor="top"
        open={open}
        onClose={() => console.log("closed")}
      >
        {list()}
      </CustomDrawer>
    </React.Fragment>
  );
}
