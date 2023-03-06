import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { liveClassStaticContent, dates } from './constant'
import { contentTranslator } from '../../../helpers/translator'
import { H1, H3, H4, H6, P1 } from '../../../components/Typography'
import { Section } from '../../../components/Banners'
import { ContentBox, MonthBox, WeekBox, DayBox, SelectionBox, SelectionButton, FilterBox, FilterButton, CardsBox, H6M } from './liveClassesComponents'
import { IconButton, PrimaryWhiteButton } from '../../../components/Button'
import { InputIcon } from '../../../components/Inputs'
import searchIcon from '../../../assets/icons/search.svg'
import LiveClassCard from '../../../components/Cards/Cards'
import { DateTag } from '../../../components/Cards/cardsComponent'
import { fonts, layout } from '../../../helpers/constant'
import { monthNames, getDaysArray } from './constant'
import Filters from '../../../components/Filters'
import moment, { weekdays } from 'moment'
import { useRef } from 'react'
import icons from '../../../assets/icons'



function LiveClasses() {
  const date = new Date()
  const daysInWeek = useMemo(() => { 
    const windowWidth = window.innerWidth
    return windowWidth < 540 ? 3 : windowWidth < 768 ? 5 : 7;
  })
  const initialYear = date.getFullYear()
  const initialMonth = date.getMonth()

  const language = useSelector(state => state.language.lang)
  const [content, setContent] = useState(liveClassStaticContent)
  const [month, setMonth] = useState(initialMonth);
  const [weekDays, setWeekDays] = useState(getDaysArray(initialYear, initialMonth))
  const [weekStart, setWeekStart] = useState(0)
  const [isDateSelected, setDateSelected] = useState()
  const [weekEnd, setWeekEnd] = useState(daysInWeek)
  const weekDaysRef = useRef()

  const previousMonth = () => { 
    month !== 0 && setMonth(month - 1)
    setWeekDays(getDaysArray(initialYear, month-1))
    setWeekStart(0)
    setWeekEnd(daysInWeek)
    setDateSelected("")
    
  }
  
  const nextMonth = () => { 
    month !== monthNames.length - 1 && setMonth(month + 1)
    setWeekDays(getDaysArray(initialYear, month + 1))
    setWeekStart(0)
    setWeekEnd(daysInWeek)
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
  
  }, [language, month, weekStart, weekEnd])

  return <React.Fragment>
    {/* Hero Section */}
    <Section paddingBlock="7.5vw" >
      <ContentBox>
        <H1>{content.heroSectionh1}</H1>
        <P1>{ content.heroSectionp1 }</P1>
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
            weekdays.length > 0 && weekDays.slice(weekStart, weekEnd).map(({dateString}, ind) => { 
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
          <InputIcon isIcon={searchIcon} placeholder={content.searchPlaceholder } />
        </div>
      </DayBox>
      <SelectionBox>
        <SelectionButton name={"YOGA"} />
        <SelectionButton name={"YOGA"} />
        <SelectionButton name={"YOGA"} />
        <SelectionButton name={"YOGA"} />
        <SelectionButton name={"YOGA"} />
        <SelectionButton name={"YOGA"} />
        <SelectionButton name={"YOGA"} />
        <SelectionButton name={"YOGA"} />
        <SelectionButton name={"YOGA"} />
        <SelectionButton name={"YOGA"} />

      </SelectionBox>
      <div className='seperatorLine '></div>
      {window.innerWidth > 768 && <Filters />}

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
        {
          window.innerWidth > 1001 && <DateTag>
            <H4>30</H4>
            <hr />
            <H6M fontFamily={fonts.poppinsMedium}>Mon</H6M>
          </DateTag>
        }
      </CardsBox>
      <div className='seperatorLine '></div>
      <CardsBox>
        <LiveClassCard />
        <LiveClassCard />
        <LiveClassCard />
        <LiveClassCard />
        <LiveClassCard />
        <LiveClassCard />
        {
          window.innerWidth > 1001 && <DateTag>
            <H4>30</H4>
            <hr />
            <H6M fontFamily={fonts.poppinsMedium}>Mon</H6M>
          </DateTag>
        }
      </CardsBox>
    </Section>
    
  </React.Fragment>
}

export default LiveClasses