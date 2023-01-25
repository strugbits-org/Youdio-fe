import React from 'react'
import { H1, H3, H4, P1 } from '../../../components/Typography'
import { Section } from '../../../components/Banners'
import { ContentBox, MonthBox, WeekBox, DayBox, SelectionBox, SelectionButton, FilterBox, FilterButton } from './liveClassesComponents'
import { IconButton, PrimaryWhiteButton } from '../../../components/Button'
import { InputIcon } from '../../../components/Inputs'
import searchIcon from '../../../assets/icons/search.svg'

function LiveClasses() {
  return <React.Fragment>
    <Section paddingBlock="140px" >
      <ContentBox>
        <H1>Find Perfect Live Class</H1>
        <P1 style={{ fontSize: '24px' }}>
          Start your Yoga, Meditation and Fitness routines by availing our live or recorded VIDEOS
        </P1>
      </ContentBox>
    </Section>
    <Section backgroundColor="white" paddingBlock="5vw 3vw">
      <MonthBox className='month'>
        <IconButton position="left">
          <svg width="62" height="23" viewBox="0 0 62 23" fill="#000"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0.43934 10.4393C-0.146447 11.0251 -0.146447 11.9749 0.43934 12.5607L9.98528 22.1066C10.5711 22.6924 11.5208 22.6924 12.1066 22.1066C12.6924 21.5208 12.6924 20.5711 12.1066 19.9853L3.62132 11.5L12.1066 3.01472C12.6924 2.42893 12.6924 1.47918 12.1066 0.893398C11.5208 0.307612 10.5711 0.307612 9.98528 0.893398L0.43934 10.4393ZM61.5 10H1.5V13H61.5V10Z" fill="#1F1F1F" />
          </svg>
        </IconButton>
        <H3>December</H3>
        <IconButton position="right" disabled>
          <svg width="62" height="24" viewBox="0 0 62 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M61.0607 10.9393C61.6464 11.5251 61.6464 12.4749 61.0607 13.0607L51.5147 22.6066C50.9289 23.1924 49.9792 23.1924 49.3934 22.6066C48.8076 22.0208 48.8076 21.0711 49.3934 20.4853L57.8787 12L49.3934 3.51472C48.8076 2.92893 48.8076 1.97918 49.3934 1.3934C49.9792 0.807612 50.9289 0.807612 51.5147 1.3934L61.0607 10.9393ZM0 10.5H60V13.5H0V10.5Z" fill="#1F1F1F" />
          </svg>
        </IconButton>
      </MonthBox>
    </Section>

    <Section backgroundColor="var(--backgroundLightGrey)" paddingBlock="2vw 1vw">
      <WeekBox>
        <ul>
          <li>
            <PrimaryWhiteButton>12/7  (Wed)</PrimaryWhiteButton>
          </li>
          <li>
            <PrimaryWhiteButton>12/8  (Thu)</PrimaryWhiteButton>
          </li>
          <li>
            <PrimaryWhiteButton>12/9  (Fri)</PrimaryWhiteButton>
          </li>
          <li>
            <PrimaryWhiteButton>12/10  (Sat)</PrimaryWhiteButton>
          </li>
          <li>
            <PrimaryWhiteButton>12/11 (Sun)</PrimaryWhiteButton>
          </li>
          <li>
            <PrimaryWhiteButton>12/12  (Mon)</PrimaryWhiteButton>
          </li>
          <li>
            <PrimaryWhiteButton>12/13  (Tue)</PrimaryWhiteButton>
          </li>
        </ul>
        <div className='buttons'>
          <IconButton>
            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0.575736 4.57574C0.341421 4.81005 0.341421 5.18995 0.575736 5.42426L4.39411 9.24264C4.62843 9.47696 5.00833 9.47696 5.24264 9.24264C5.47696 9.00833 5.47696 8.62843 5.24264 8.39411L1.84853 5L5.24264 1.60589C5.47696 1.37157 5.47696 0.991674 5.24264 0.757359C5.00833 0.523045 4.62843 0.523045 4.39411 0.757359L0.575736 4.57574ZM15 4.4H1V5.6H15V4.4Z" fill="#1F1F1F" />
            </svg>
            <span>previous</span>

          </IconButton>
          <IconButton>
            <span>next</span>
            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4243 4.57574C14.6586 4.81005 14.6586 5.18995 14.4243 5.42426L10.6059 9.24264C10.3716 9.47696 9.99167 9.47696 9.75736 9.24264C9.52304 9.00833 9.52304 8.62843 9.75736 8.39411L13.1515 5L9.75736 1.60589C9.52304 1.37157 9.52304 0.991674 9.75736 0.757359C9.99167 0.523045 10.3716 0.523045 10.6059 0.757359L14.4243 4.57574ZM0 4.4H14V5.6H0V4.4Z" fill="#1F1F1F" />
            </svg>
          </IconButton>
        </div>
      </WeekBox>
    </Section>

    <Section backgroundColor="#fff" paddingBlock="3vw">
      <DayBox>
        <div></div>
        <div>
          <H4>12/7  (Wed)</H4>
        </div>
        <div className='searchBox'>
          <InputIcon isIcon={searchIcon} placeholder='Search' />
        </div>
      </DayBox>
      <SelectionBox>
        <SelectionButton name={"YOGA"}/>
        <SelectionButton name={"YOGA"}/>
        <SelectionButton name={"YOGA"}/>
        <SelectionButton name={"YOGA"}/>
        <SelectionButton name={"YOGA"}/>
        <SelectionButton name={"YOGA"}/>
        <SelectionButton name={"YOGA"}/>
        <SelectionButton name={"YOGA"}/>
        <SelectionButton name={"YOGA"}/>
        <SelectionButton name={"YOGA"}/>

      </SelectionBox>
      <div className='seperatorLine '></div>
      <FilterBox>
        <div>
          <FilterButton name={"DURATION"}/> 
        </div>
        <div>
          <FilterButton name={"INSTRUCTORS"}/>
        </div>
        <div>
          <FilterButton name={"STYLES"}/>
        </div>
        <div>
          <FilterButton name={"DIFFICULTY"}/>
        </div>
        <div>
          <FilterButton name={"INTENSITY"}/>
        </div>

      </FilterBox>

    </Section>
  </React.Fragment>
}

export default LiveClasses