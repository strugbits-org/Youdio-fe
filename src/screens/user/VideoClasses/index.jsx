import React from "react";
import {
  ContentBox,
  CardsBox,
} from "./liveClassesComponents";
import { H1, P1, Section, Filters } from "src/components";
// import { IconButton, PrimaryWhiteButton } from "src/components";
import { LiveClassCard } from "src/components/Cards/";
// import { monthNames, getDaysArray } from "./constant";

function VideoClasses() {
  // const date = new Date();
  // const initialYear = date.getFullYear();
  // const initialMonth = date.getMonth();

  // const daysInWeek = () => {
  //   const windowWidth = window.innerWidth;
  //   return windowWidth < 540 ? 3 : windowWidth < 768 ? 5 : 7;
  // };

  // const language = useSelector((state) => state.language.lang);
  // const [content, setContent] = useState(liveClassStaticContent);
  // const [month, setMonth] = useState(initialMonth);
  // const [weekDays, setWeekDays] = useState(
  //   getDaysArray(initialYear, initialMonth)
  // );
  // const [weekStart, setWeekStart] = useState(0);
  // const [isDateSelected, setDateSelected] = useState();
  // const [weekEnd, setWeekEnd] = useState(daysInWeek());
  // const weekDaysRef = useRef();

  // const previousMonth = () => {
  //   month !== 0 && setMonth(month - 1);
  //   setWeekDays(getDaysArray(initialYear, month - 1));
  //   setWeekStart(0);
  //   setWeekEnd(daysInWeek());
  //   setDateSelected("");
  // };

  // const nextMonth = () => {
  //   month !== monthNames.length - 1 && setMonth(month + 1);
  //   setWeekDays(getDaysArray(initialYear, month + 1));
  //   setWeekStart(0);
  //   setWeekEnd(daysInWeek());
  //   setDateSelected("");
  // };

  // const previousWeek = () => {
  //   if (weekStart > 0) {
  //     setWeekStart(weekStart - 1);
  //     setWeekEnd(weekEnd - 1);
  //   } else {
  //     setWeekStart(weekStart);
  //     setWeekEnd(weekEnd);
  //   }
  //   setDateSelected("");
  // };

  // const nextWeek = () => {
  //   if (weekEnd < weekDays.length) {
  //     setWeekStart(weekStart + 1);
  //     setWeekEnd(weekEnd + 1);
  //   } else {
  //     setWeekStart(weekStart);
  //     setWeekEnd(weekEnd);
  //   }
  //   setDateSelected("");
  // };

  // useEffect(() => {    
  //   contentTranslator({
  //     staticContent: liveClassStaticContent,
  //     contentToTranslate: content,
  //     setContent,
  //     language,
  //   });
  //   !isDateSelected &&
  //     setDateSelected(weekDays.slice(weekStart, weekEnd)[0].dateString);
  // }, [content, weekDays, language, month, weekStart, weekEnd, isDateSelected]);

  return (
    <React.Fragment>
      {/* Hero Section */}
      <Section paddingBlock="7.5vw">
        <ContentBox>
          <H1>Our Video Class</H1>
          <P1>Start Your Yoga, Meditation And Fitness Routines By Availing Our Live Or Recorded Videos</P1>
        </ContentBox>
      </Section>

      {/* Filter, Tags and Search Section */}
      <Section backgroundColor="#fff" paddingBlock="3vw">
        {/* <DayBox>
          <div className="blank"></div>
          <div>
            <H4>{isDateSelected}</H4>
          </div>
          <div className="searchBox">
            <InputIcon
              isIcon={icons.searchIcon}
              placeholder={content.searchPlaceholder}
            />
          </div>
        </DayBox> */}

        {/* <div className="seperatorLine"></div> */}

        <Filters />
      </Section>

      {/* Cards Section */}
      <Section backgroundColor="white">
        <CardsBox>
          {[...Array(6).keys()].map((val) => (
            <LiveClassCard key={`card-${val}`} />
          ))}
          {/* <DateTag>
            <H4>31</H4>
            <hr />
            <H6M fontFamily={fonts.poppinsMedium}>Fri</H6M>
          </DateTag> */}
        </CardsBox>
        <div className="seperatorLine"></div>
        <CardsBox>
          {[...Array(6).keys()].map((val) => (
            <LiveClassCard key={`card-${val}`} />
          ))}
          {/* <DateTag>
            <H4>30</H4>
            <hr />
            <H6M fontFamily={fonts.poppinsMedium}>Mon</H6M>
          </DateTag> */}
        </CardsBox>
      </Section>
    </React.Fragment>
  );
}

export default VideoClasses;
