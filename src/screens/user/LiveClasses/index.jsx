import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "src/features/hooks/useFetch";

import { getDate, liveClassStaticContent } from "./constant";
import { ContentBox, MonthBox, WeekBox, DayBox } from "./liveClassesComponents";
import {
  // fonts,
  icons,
} from "src/helpers";
import {
  H1,
  H3,
  H4,
  P1,
  Section,
  InputIcon,
  FilterComponent,
} from "src/components";
import { IconButton, PrimaryWhiteButton } from "src/components";
import { clearFilters, filterDate } from "src/features/filterSlice";
import { filterKeys } from "src/helpers/constant";
import moment from "moment";
import { LiveClassesCards } from "src/components/CardsSection";

function LiveClasses() {
  const { postData, res, loading } = useFetch();
  const dispatch = useDispatch();
  const { filterTags, filters } = useSelector((state) => state.filter);
  const [content] = useState(liveClassStaticContent);
  const [month, setMonth] = useState({});
  const [isDateSelected, setDateSelected] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sort, setSort] = useState("newest");
  const [isFilters, setIsFilters] = useState(true);
  const [nextPrevDays, setNextPrevDays] = useState();

  useEffect(() => {
    // !isDateSelected && weekDays && setDateSelected(weekDays[3]);
  }, [month, selectedIndex]);

  useEffect(() => {
    if (filterTags.length > 0) {
      dispatch(clearFilters());
    }
    setIsFilters(false);
    setInitialDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    !isFilters && postData("liveSession/get", filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterTags, isFilters]);

  const daysInWeek = () => {
    const windowWidth = window.innerWidth;
    return windowWidth < 540 ? 3 : windowWidth < 768 ? 5 : 7;
  };

  const setWeekDays = (ind) => {
    const weekCountDay = daysInWeek();
    const prevDays = ind;
    const nextDays = ind >= 0 ? weekCountDay - 1 - ind : 6;
    setNextPrevDays({ prevDays, nextDays });
    setSelectedIndex(ind);
    return { prevDays, nextDays };
  };

  const changeDate = (action, isMonth) => {
    const currentMonth = getDate(
      action,
      month,
      nextPrevDays,
      undefined,
      isMonth
    );
    setMonth(currentMonth);
  };

  const selectDate = (e, { d, m }, ind) => {
    const days = setWeekDays(ind);
    const currentDate = getDate("select", month, days, { d, m });
    setDateSelected(e.currentTarget.innerText);
    setMonth(currentDate);
    const momentDate= moment(currentDate.date).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    const formatDate = moment(currentDate.date).format("DD/MM/YYYY");
    dispatch(filterDate({ key: filterKeys.date, data: {momentDate, formatDate} }));
  };

  const setInitialDate = () => {
    const days = setWeekDays(selectedIndex);
    const initialDate = getDate(undefined, undefined, days);
    setMonth(initialDate);
  };

  const sortedVideos = useMemo(() => {
    if (res?.liveSessions && res.liveSessions.length > 0) {
      const videos = res.liveSessions.sort((a, b) => {
        const titleA = new Date(a.date);
        const titleB = new Date(b.date);
        if (sort === "newest") return titleB - titleA;
        return titleA - titleB;
      });
      return videos;
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, res?.liveSessions]);

  return (
    <React.Fragment>
      {/* Hero Section */}
      <Section paddingBlock="7.5vw">
        <ContentBox>
          <H1>{content.heroSectionh1}</H1>
          <P1>{content.heroSectionp1}</P1>
        </ContentBox>
      </Section>

      {/* Month Section */}
      <Section backgroundColor="white" paddingBlock="5vw 3vw">
        <MonthBox className="month">
          <IconButton
            position="left"
            onClick={() => changeDate("prev", true)}
            // disabled={month === 0 ? true : false}
          >
            <img
              src={icons.leftLongArrow}
              alt="Left Long Arrow"
              width={""}
              height={""}
            />
          </IconButton>

          <H3>{`${month?.monthName} ${month?.year}`}</H3>

          <IconButton
            position="right"
            onClick={() => changeDate("next", true)}
            // disabled={month === monthNames.length - 1 ? true : false}
          >
            <img
              src={icons.rightLongArrow}
              alt="Right Long Arrow"
              width={""}
              height={""}
            />
          </IconButton>
        </MonthBox>
      </Section>

      {/* Week Section */}
      <Section
        backgroundColor="var(--backgroundLightGrey)"
        paddingBlock="2vw 1vw"
      >
        <WeekBox>
          <ul>
            {month?.daysInWeek &&
              month?.daysInWeek.map((val, ind) => {
                return (
                  <li key={ind}>
                    <PrimaryWhiteButton
                      className={
                        isDateSelected === val.dateString && filters.date
                          ? "selectedDate"
                          : ""
                      }
                      key={`weekday-${ind}`}
                      onClick={(e) => selectDate(e, val, ind)}
                    >
                      {val.dateString.date} <small>{val.dateString.weekDay}</small>
                    </PrimaryWhiteButton>
                  </li>
                );
              })}
          </ul>
          <div className="buttons">
            <IconButton onClick={() => changeDate("prev")}>
              <img
                src={icons.leftArrow}
                alt="Left Arrow"
                width={""}
                height={""}
              />
              <span>{content.weekSectionPrev}</span>
            </IconButton>
            <IconButton onClick={() => changeDate("next")}>
              <span>{content.weekSectionNext}</span>
              <img
                src={icons.rightArrow}
                alt="Right Arrow"
                width={""}
                height={""}
              />
            </IconButton>
          </div>
        </WeekBox>
      </Section>

      {/* Filter, Tags and Search Section */}
      <Section backgroundColor="#fff" paddingBlock="40px 0px">
        {filters.date && (
          <DayBox>
            <div className="blank"></div>
            <div>
              <H4>{filters.date && isDateSelected}</H4>
            </div>
            <div className="searchBox">
              <InputIcon
                isIcon={icons.searchIcon}
                placeholder={content.searchPlaceholder}
                style={{ visibility: "hidden" }}
              />
            </div>
          </DayBox>
        )}
        <FilterComponent
          sort={sort}
          setSort={setSort}
          videoCount={sortedVideos.length}
          videoType="CLASSES"
        />
      </Section>

      {/* Cards Section */}
      <Section backgroundColor="white" paddingBlock="0px 30px">
        <LiveClassesCards classes={sortedVideos} loading={loading} />
      </Section>
    </React.Fragment>
  );
}

export default LiveClasses;
