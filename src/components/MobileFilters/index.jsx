import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import { FilterBox } from "./filtersComponents";
import { IconButton } from "../Button";
import { icons } from "src/helpers";
import { HorizontalLine } from "../BreakLines";
import Instructors from "./Instructors";
import { setInstructors, setStyles } from "src/features/filterSlice";
import useFetch from "src/features/hooks/useFetch";
import Duration from "./Duration";
import Difficulty from "./Difficulty";
import Intensity from "./Intensity";
import Styles from "./Styles";

const CustomDrawe = styled(Drawer)({
  marginTop: "16px",
  color: "var(--textHeadingWhite)",
  "& .MuiDrawer-paper": {
    background: "transparent"
  },
});

export default function MobileFilters({ open, setOpen, onClose }) {
  const [filterTab, setFilterTab] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const { fetchMultipleData } = useFetch();
  useEffect(() => {
    fetchMultipleData(
      ["category/get-sub-category", "instructor/get-instructor"],
      [setStyles, setInstructors],
      [{}, {}]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = (tab) => {
    if (!isVisible) { 
      if (tab !== filterTab) {
        setFilterTab(tab)
        setIsVisible(true)
      } else { 
        setIsVisible(!isVisible);
        setFilterTab("")
      }
    }
    else {
      setFilterTab(tab);
      setIsVisible(!isVisible);
    }
  };
  const list = () => (
    <FilterBox>
      <IconButton className="btnClose" onClick={() => setOpen(false)}>
        <img src={icons.cross} alt="" width="16" />
      </IconButton>
      <HorizontalLine />
      <Instructors tab={filterTab} setTab={handleToggle} />
      <HorizontalLine />
      <Duration tab={filterTab} setTab={handleToggle} />
      <HorizontalLine />
      <Difficulty tab={filterTab} setTab={handleToggle} />
      <HorizontalLine />
      <Intensity tab={filterTab} setTab={handleToggle} />
      <HorizontalLine />
      <Styles tab={filterTab} setTab={handleToggle} />
    </FilterBox>
  );

  return (
    <React.Fragment>
      <CustomDrawe anchor="top" open={open} onClose={() => console.log("closed")}>
        {list()}
      </CustomDrawe>
    </React.Fragment>
  );
}
