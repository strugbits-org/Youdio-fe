import React from 'react'
import { H1, H3, P1 } from '../../../components/Typography'
import { Section } from '../../../components/Banners'
import { ContentBox, MonthBox } from './liveClassesComponents'
import { IconButton } from '../../../components/Button'


function LiveClasses() {
  return <React.Fragment>
    <Section paddingBlock="140px" >
      <ContentBox>
        <H1>Find Perfect Live Class</H1>
        <P1 style={{ fontSize: '24px' }}>
          Start your Yoga, Meditation and Fitness routines by availing our live or recorded VIDEOSs
        </P1>
      </ContentBox>
    </Section>
    <Section backgroundColor="white">
      <MonthBox className='month'>
        <IconButton>
          <svg width="62" height="23" viewBox="0 0 62 23" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0.43934 10.4393C-0.146447 11.0251 -0.146447 11.9749 0.43934 12.5607L9.98528 22.1066C10.5711 22.6924 11.5208 22.6924 12.1066 22.1066C12.6924 21.5208 12.6924 20.5711 12.1066 19.9853L3.62132 11.5L12.1066 3.01472C12.6924 2.42893 12.6924 1.47918 12.1066 0.893398C11.5208 0.307612 10.5711 0.307612 9.98528 0.893398L0.43934 10.4393ZM61.5 10H1.5V13H61.5V10Z" fill="#1F1F1F" />
          </svg>
        </IconButton>
        <H3>December</H3>
        <IconButton disabled>
          <svg width="62" height="24" viewBox="0 0 62 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M61.0607 10.9393C61.6464 11.5251 61.6464 12.4749 61.0607 13.0607L51.5147 22.6066C50.9289 23.1924 49.9792 23.1924 49.3934 22.6066C48.8076 22.0208 48.8076 21.0711 49.3934 20.4853L57.8787 12L49.3934 3.51472C48.8076 2.92893 48.8076 1.97918 49.3934 1.3934C49.9792 0.807612 50.9289 0.807612 51.5147 1.3934L61.0607 10.9393ZM0 10.5H60V13.5H0V10.5Z" fill="#1F1F1F" />
          </svg>
        </IconButton>
      </MonthBox>
    </Section>
  </React.Fragment>
}

export default LiveClasses