import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { liveClassStaticContent} from './constant'
import { contentTranslator } from 'src/helpers/translator'
import { H1, H3, H4, P1 } from 'src/components'
import { Section } from 'src/components'
import { ContentBox, MonthBox, WeekBox, DayBox, CardsBox, H6M } from './liveClassesComponents'
import { IconButton, PrimaryWhiteButton } from 'src/components'
import { InputIcon } from 'src/components'
import searchIcon from 'src/assets/icons/search.svg'
import LiveClassCard from 'src/components/Cards/LiveClassCard'
import { DateTag } from 'src/components/Cards/cardsComponent'
import { fonts } from 'src/helpers/constant'
import { monthNames, getDaysArray } from './constant'
import { Filters } from 'src/components'
import { weekdays } from 'moment'
import { useRef } from 'react'
import { icons } from 'src/helpers'




function LiveClasses() {
  const date = new Date()

  const daysInWeek = () => {
    const windowWidth = window.innerWidth
    return windowWidth < 540 ? 3 : windowWidth < 768 ? 5 : 7;
  }

  const initialYear = date.getFullYear()
  const initialMonth = date.getMonth()

  const language = useSelector(state => state.language.lang)
  const [content, setContent] = useState(liveClassStaticContent)
  const [month, setMonth] = useState(initialMonth);
  const [weekDays, setWeekDays] = useState(getDaysArray(initialYear, initialMonth))
  const [weekStart, setWeekStart] = useState(0)
  const [isDateSelected, setDateSelected] = useState()
  const [weekEnd, setWeekEnd] = useState(daysInWeek())
  const weekDaysRef = useRef()

  const previousMonth = () => {
    month !== 0 && setMonth(month - 1)
    setWeekDays(getDaysArray(initialYear, month - 1))
    setWeekStart(0)
    setWeekEnd(daysInWeek())
    setDateSelected("")

  }

  const nextMonth = () => {
    month !== monthNames.length - 1 && setMonth(month + 1)
    setWeekDays(getDaysArray(initialYear, month + 1))
    setWeekStart(0)
    setWeekEnd(daysInWeek())
    setDateSelected("")

  }

  const previousWeek = () => {
    if (weekStart > 0) {
      setWeekStart(weekStart - 1)
      setWeekEnd(weekEnd - 1)
    } else {
      setWeekStart(weekStart)
      setWeekEnd(weekEnd)
    }
    setDateSelected("")
  }

  const nextWeek = () => {
    if (weekEnd < weekDays.length) {
      setWeekStart(weekStart + 1)
      setWeekEnd(weekEnd + 1)
    } else {
      setWeekStart(weekStart)
      setWeekEnd(weekEnd)
    }
    setDateSelected("")
  }


  useEffect(() => {
    contentTranslator({ staticContent: liveClassStaticContent, contentToTranslate: content, setContent, language })
    !isDateSelected && setDateSelected(weekDays.slice(weekStart, weekEnd)[0].dateString);

  }, [content, weekDays, language, month, weekStart, weekEnd, isDateSelected])

  return <React.Fragment>
    {/* Hero Section */}
    <Section paddingBlock="7.5vw" >
      <ContentBox>
        <H1>{content.heroSectionh1}</H1>
        <P1>{content.heroSectionp1}</P1>
      </ContentBox>
    </Section>

    {/* Month Section */}
    <Section backgroundColor="white" paddingBlock="5vw 3vw">
      <MonthBox className='month'>
        <IconButton
          position="left"
          onClick={() => previousMonth()}
          disabled={month === 0 ? true : false}
        >
          <img src={icons.leftLongArrow} alt="Left Long Arrow" width={""} height={""} />
        </IconButton>

        <H3>{monthNames[month].name}</H3>

        <IconButton
          position="right"
          onClick={() => nextMonth()}
          disabled={month === monthNames.length - 1 ? true : false}
        >
          <img src={icons.rightLongArrow} alt="Right Long Arrow" width={""} height={""} />
        </IconButton>
      </MonthBox>
    </Section>

    {/* Week Section */}
    <Section backgroundColor="var(--backgroundLightGrey)" paddingBlock="2vw 1vw">
      <WeekBox>
        <ul ref={weekDaysRef}>
          {
            weekdays.length > 0 && weekDays.slice(weekStart, weekEnd).map(({ dateString }, ind) => {
              return <li key={ind}>
                <PrimaryWhiteButton
                  className={(!isDateSelected && ind === 3) ? "selectedDate"
                    : isDateSelected === dateString ? "selectedDate" : ""}
                  onClick={e => setDateSelected(e.currentTarget.innerText)}
                >
                  {dateString}
                </PrimaryWhiteButton>
              </li>
            })
          }
        </ul>
        <div className='buttons'>
          <IconButton
            onClick={() => previousWeek()}
            disabled={weekStart === 0 ? true : false}
          >
            <img src={icons.leftArrow} alt="Left Arrow" width={""} height={""} />
            <span>{content.weekSectionPrev}</span>

          </IconButton>
          <IconButton
            onClick={() => nextWeek()}
            disabled={weekEnd === weekDays.length ? true : false}
          >
            <span>{content.weekSectionNext}</span>
            <img src={icons.rightArrow} alt="Right Arrow" width={""} height={""} />

          </IconButton>
        </div>
      </WeekBox>
    </Section>

    {/* Filter, Tags and Search Section */}
    <Section backgroundColor="#fff" paddingBlock="3vw">
      <DayBox>
        <div className='blank'></div>
        <div>
          <H4>{isDateSelected}</H4>
        </div>
        <div className='searchBox'>
          <InputIcon isIcon={searchIcon} placeholder={content.searchPlaceholder} />
        </div>
      </DayBox>
      
      <div className='seperatorLine'></div>
 
      <Filters />
      {/* {window.innerWidth > 768 && <Filters />} */}

    </Section>

    {/* Cards Section */}
    <Section backgroundColor="white">
      <CardsBox>
        <LiveClassCard />
        <LiveClassCard />
        <LiveClassCard />
        <LiveClassCard />
        <LiveClassCard />
        <LiveClassCard />
        <DateTag>
          <H4>31</H4>
          <hr />
          <H6M fontFamily={fonts.poppinsMedium}>Fri</H6M>
        </DateTag>
      </CardsBox>
      <div className='seperatorLine'></div>
      <CardsBox>
        <LiveClassCard />
        <LiveClassCard />
        <LiveClassCard />
        <LiveClassCard />
        <LiveClassCard />
        <LiveClassCard />
        <DateTag>
          <H4>30</H4>
          <hr />
          <H6M fontFamily={fonts.poppinsMedium}>Mon</H6M>
        </DateTag>
      </CardsBox>
    </Section>

  </React.Fragment>
}

export default LiveClasses