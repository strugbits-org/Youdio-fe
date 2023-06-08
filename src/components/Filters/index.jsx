import React, { useEffect, useState } from "react";
import Duration from "./Duration";
import Difficulty from "./Difficulty";
import Intensity from "./Intensity";
import Instructors from "./Instructors";
import Styles from "./Styles";
import {
  FilterBox,
  FilterButton,
  FilterOptions,
  SelectionBox,
  SelectionButton,
} from "./filtersComponents";
import { P3 } from "src/components";
import useFetch from "src/features/hooks/useFetch";
import {
  setStyles,
  setInstructors,
  pushToFilters,
  removeFromFilter,
  filterDuration,
} from "src/features/filterSlice";
import { useDispatch, useSelector } from "react-redux";
const filter = [
  {
    label: "DURATION",
    value: "duration",
  },
  {
    label: "INSTRUCTORS",
    value: "instructors",
  },
  {
    label: "STYLES",
    value: "styles",
  },
  {
    label: "DIFFICULTY",
    value: "difficulty",
  },
  {
    label: "INTENSITY",
    value: "intensity",
  },
];

export function Filters() {
  const [filterTab, setFilterTab] = useState(null);
  const filterTags = useSelector((state) => state.filter.filterTags);
  const [sort, setSort] = useState("newest");
  const { fetchMultipleData } = useFetch();
  const dispatch = useDispatch();

  useEffect(() => {}, [filterTab, filterTags]);

  useEffect(() => {
    fetchMultipleData(
      ["category/get-sub-category", "instructor/get-instructor"],
      [setStyles, setInstructors]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterHandler = (filter) => {
    filter === filterTab ? setFilterTab(null) : setFilterTab(filter);
  };

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

  return (
    <React.Fragment>
      <FilterBox>
        {filter.map(({ label, value }, ind) => {
          return (
            <div key={`filter-button-${ind}`}>
              <FilterButton
                name={label}
                selected={filterTab}
                clickEvent={() => filterHandler(value)}
              />
            </div>
          );
        })}

        {filterTab !== null && (
          <FilterOptions>
            <P3 className="videoCount">SHOWING 316 VIDEOS</P3>
            <div className="filters">
              {filterTab === "duration" && (
                <Duration addDuration={addDuration} />
              )}
              {filterTab === "instructors" && (
                <Instructors removeTag={removeTag} addTag={addTag} />
              )}
              {filterTab === "styles" && (
                <Styles removeTag={removeTag} addTag={addTag} />
              )}
              {filterTab === "difficulty" && (
                <Difficulty removeTag={removeTag} addTag={addTag} />
              )}
              {filterTab === "intensity" && (
                <Intensity removeTag={removeTag} addTag={addTag} />
              )}
            </div>
            <div className="sortOption">
              <P3>SORT BY:</P3>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="newest">NEWEST</option>
                <option value="oldest">OLDEST</option>
              </select>
            </div>
          </FilterOptions>
        )}
      </FilterBox>
      <SelectionBox>
        {filterTags?.length > 0 &&
          filterTags.map((value, index) => (
            <SelectionButton
              key={`selected-${value.data}`}
              tag={value}
              removeTag={removeTag}
            />
          ))}
      </SelectionBox>
    </React.Fragment>
  );
}
