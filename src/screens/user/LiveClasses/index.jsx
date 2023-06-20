import React, { useEffect, useState, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weekdays } from "moment";
import useFetch from "src/features/hooks/useFetch";

import { liveClassStaticContent } from "./constant";
import {
  ContentBox,
  MonthBox,
  WeekBox,
  DayBox,
  CardsBox,
  // H6M,
  NoFoundBox,
} from "./liveClassesComponents";
import { contentTranslator } from "src/helpers/translator";
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
import { monthNames, getDaysArray } from "./constant";
import Loader from "src/components/Loader";
import useInnerWidth from "src/features/hooks/useInnerWidth";
import MobileFilters from "src/components/MobileFilters";
import { clearFilters } from "src/features/filterSlice";

function LiveClasses() {
  const date = new Date();

  const { postData, res, loading } = useFetch();
  const { innerWidth } = useInnerWidth();
  const [open, setOpen] = useState(false);

  const initialYear = date.getFullYear();
  const initialMonth = date.getMonth();

  const dispatch = useDispatch();

  const daysInWeek = () => {
    const windowWidth = window.innerWidth;
    return windowWidth < 540 ? 3 : windowWidth < 768 ? 5 : 7;
  };

  const language = useSelector((state) => state.language.lang);
  const { filterTags, filters } = useSelector((state) => state.filter);
  const [content, setContent] = useState(liveClassStaticContent);
  const [month, setMonth] = useState(initialMonth);
  const [weekDays, setWeekDays] = useState(
    getDaysArray(initialYear, initialMonth)
  );
  const [weekStart, setWeekStart] = useState(0);
  const [isDateSelected, setDateSelected] = useState();
  const [weekEnd, setWeekEnd] = useState(daysInWeek());
  const [sort, setSort] = useState("newest");
  const [isFilters, setIsFilters] = useState(true);

  const weekDaysRef = useRef();

  const previousMonth = () => {
    month !== 0 && setMonth(month - 1);
    setWeekDays(getDaysArray(initialYear, month - 1));
    setWeekStart(0);
    setWeekEnd(daysInWeek());
    setDateSelected("");
  };

  const nextMonth = () => {
    month !== monthNames.length - 1 && setMonth(month + 1);
    setWeekDays(getDaysArray(initialYear, month + 1));
    setWeekStart(0);
    setWeekEnd(daysInWeek());
    setDateSelected("");
  };

  const previousWeek = () => {
    if (weekStart > 0) {
      setWeekStart(weekStart - 1);
      setWeekEnd(weekEnd - 1);
    } else {
      setWeekStart(weekStart);
      setWeekEnd(weekEnd);
    }
    setDateSelected("");
  };

  const nextWeek = () => {
    if (weekEnd < weekDays.length) {
      setWeekStart(weekStart + 1);
      setWeekEnd(weekEnd + 1);
    } else {
      setWeekStart(weekStart);
      setWeekEnd(weekEnd);
    }
    setDateSelected("");
  };

  useEffect(() => {
    contentTranslator({
      staticContent: liveClassStaticContent,
      contentToTranslate: content,
      setContent,
      language,
    });
    !isDateSelected &&
      setDateSelected(weekDays.slice(weekStart, weekEnd)[0].dateString);
  }, [
    content,
    open,
    weekDays,
    language,
    month,
    weekStart,
    weekEnd,
    isDateSelected,
  ]);

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
      console.log(new Date(res.videos[1].date));
      const videos = res.videos.sort((a, b) => {
        const titleA = new Date(a.date);
        const titleB = new Date(b.date);

        if (sort === "newest") return titleB - titleA;
        else return titleA - titleB;
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
            onClick={() => previousMonth()}
            disabled={month === 0 ? true : false}
          >
            <img
              src={icons.leftLongArrow}
              alt="Left Long Arrow"
              width={""}
              height={""}
            />
          </IconButton>

          <H3>{monthNames[month].name}</H3>

          <IconButton
            position="right"
            onClick={() => nextMonth()}
            disabled={month === monthNames.length - 1 ? true : false}
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
          <ul ref={weekDaysRef}>
            {weekdays.length > 0 &&
              weekDays.slice(weekStart, weekEnd).map(({ dateString }, ind) => {
                return (
                  <li key={ind}>
                    <PrimaryWhiteButton
                      className={
                        !isDateSelected && ind === 3
                          ? "selectedDate"
                          : isDateSelected === dateString
                          ? "selectedDate"
                          : ""
                      }
                      key={`weekday-${ind}`}
                      onClick={(e) =>
                        setDateSelected(e.currentTarget.innerText)
                      }
                    >
                      {dateString}
                    </PrimaryWhiteButton>
                  </li>
                );
              })}
          </ul>
          <div className="buttons">
            <IconButton
              onClick={() => previousWeek()}
              disabled={weekStart === 0 ? true : false}
            >
              <img
                src={icons.leftArrow}
                alt="Left Arrow"
                width={""}
                height={""}
              />
              <span>{content.weekSectionPrev}</span>
            </IconButton>
            <IconButton
              onClick={() => nextWeek()}
              disabled={weekEnd === weekDays.length ? true : false}
            >
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
            <H4>{isDateSelected}</H4>
          </div>
          <div className="searchBox">
            <InputIcon
              isIcon={icons.searchIcon}
              placeholder={content.searchPlaceholder}
              style={{ visibility: "hidden" }}
            />
          </div>
        </DayBox>

        {innerWidth === "mobileFilters" ? (
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
      <Section backgroundColor="white">
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
      </Section>
    </React.Fragment>
  );
}

export default LiveClasses;
