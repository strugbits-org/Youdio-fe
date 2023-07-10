import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "src/features/hooks/useFetch";

import { getDate, liveClassStaticContent } from "./constant";
import {
  ContentBox,
  MonthBox,
  WeekBox,
  DayBox,
  CardsBox,
  // H6M,
  NoFoundBox,
  CustomVideoSection,
} from "./liveClassesComponents";
import {
  // fonts,
  icons,
} from "src/helpers";
import { H1, H3, H4, P1, Section, InputIcon, Filters } from "src/components";
import { IconButton, PrimaryWhiteButton } from "src/components";
import {
  LiveClassCard,
  // DateTag
} from "src/components/Cards/";
import Loader from "src/components/Loader";
import useInnerWidth from "src/features/hooks/useInnerWidth";
import MobileFilters from "src/components/MobileFilters";
import { clearFilters, filterDate } from "src/features/filterSlice";
import { filterKeys } from "src/helpers/constant";
import moment from "moment";

function LiveClasses() {
  const { postData, res, loading } = useFetch();
  const windowSize = useInnerWidth();
  const [open, setOpen] = useState(false);
  console.log(windowSize);
  const dispatch = useDispatch();

  const daysInWeek = () => {
    const windowWidth = window.innerWidth;
    return windowWidth < 540 ? 3 : windowWidth < 768 ? 5 : 7;
  };

  const { filterTags, filters } = useSelector((state) => state.filter);
  const [content] = useState(liveClassStaticContent);
  const [month, setMonth] = useState({});
  const [isDateSelected, setDateSelected] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sort, setSort] = useState("newest");
  const [isFilters, setIsFilters] = useState(true);
  const [nextPrevDays, setNextPrevDays] = useState();

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
    const formatDate = moment(currentDate.date).format("YYYY-MM-DD");
    dispatch(filterDate({ key: filterKeys.date, data: formatDate }));
  };

  const setInitialDate = () => {
    const days = setWeekDays(selectedIndex);
    const initialDate = getDate(undefined, undefined, days);
    setMonth(initialDate);
  };

  useEffect(() => {
    // !isDateSelected && weekDays && setDateSelected(weekDays[3]);
  }, [open, month, selectedIndex]);

  useEffect(() => {
    if (filterTags.length > 0) {
      dispatch(clearFilters());
    }
    setIsFilters(false);
    setInitialDate();
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
                      {val.dateString}
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
      <Section backgroundColor="#fff" paddingBlock="3vw">
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
              videoCount={res?.videos ? res.videos.length : 0}
              videoSort={sort}
              setVideoSort={setSort}
              videoType="CLASSES"
            />
          </React.Fragment>
        )}
      </Section>

      {/* Cards Section */}
      <CustomVideoSection backgroundColor="white">
        {loading && <Loader width="35px" height="35px" />}
        {/* <CardsBox> */}
        {!loading && res?.videos.length > 0 ? (
          <CardsBox>
            {sortedVideos.map((val) => (
              <LiveClassCard key={`card-${val._id}`} data={val} />
            ))}
            {/* <DateTag>
              <H4>31</H4>
              <hr />
              <H6M fontFamily={fonts.poppinsMedium}>Fri</H6M>
            </DateTag> */}
          </CardsBox>
        ) : (
          !loading && (
            <NoFoundBox>
              <H3>No Data Found</H3>
            </NoFoundBox>
          )
        )}
        {/* </CardsBox> */}
      </CustomVideoSection>
    </React.Fragment>
  );
}

export default LiveClasses;
