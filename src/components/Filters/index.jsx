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
  SortingOption,
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
import { HorizontalLine } from "../BreakLines";
import { useTranslation } from "react-i18next";
const filter = [
  {
    label: "filters.duration.title",
    value: "duration",
  },
  {
    label: "filters.instructors",
    value: "instructors",
  },
  {
    label: "filters.styles",
    value: "styles",
  },
  {
    label: "filters.difficulty",
    value: "difficulty",
  },
  {
    label: "filters.intensity",
    value: "intensity",
  },
];

export function Filters({ videoCount, videoSort, setVideoSort, videoType }) {
  const [filterTab, setFilterTab] = useState(null);
  const { filterTags, difficulties, intensities } = useSelector(
    (state) => state.filter
  );
  const { fetchMultipleData } = useFetch();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {}, [filterTab, filterTags]);

  useEffect(() => {
    fetchMultipleData(
      ["category/get-sub-category", "instructor/get-instructor"],
      [setStyles, setInstructors],
      [{}, {}]
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
      <HorizontalLine marginBlock="24px" />
      <FilterBox>
        {filter.map(({ label, value }, ind) => {
          return (
            <div key={`filter-button-${ind}`}>
              <FilterButton
                name={t(label)}
                selected={filterTab}
                clickEvent={() => filterHandler(value)}
              />
            </div>
          );
        })}
      </FilterBox>
      <SortingOption>
        <P3 className="videoCount">
          {videoCount
            ? `${t("filters.sortOptions.newest")} ${videoCount} ${videoType}`
            : ""}
        </P3>

        {videoSort && (
          <div className="sortOption">
            <P3>{t("filters.sortBy")}</P3>
            <select
              value={videoSort}
              onChange={(e) => setVideoSort(e.target.value)}
            >
              <option value="newest">{t("filters.sortOptions.newest")}</option>
              <option value="oldest">{t("filters.sortOptions.oldest")}</option>
            </select>
          </div>
        )}
      </SortingOption>

      {filterTab !== null && (
        <FilterOptions>
          <div className="filters">
            {filterTab === "duration" && <Duration addDuration={addDuration} />}
            {filterTab === "instructors" && (
              <Instructors removeTag={removeTag} addTag={addTag} />
            )}
            {filterTab === "styles" && (
              <Styles removeTag={removeTag} addTag={addTag} />
            )}
            {filterTab === "difficulty" && (
              <Difficulty
                removeTag={removeTag}
                addTag={addTag}
                options={difficulties}
              />
            )}
            {filterTab === "intensity" && (
              <Intensity
                removeTag={removeTag}
                addTag={addTag}
                options={intensities}
              />
            )}
          </div>
        </FilterOptions>
      )}

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
