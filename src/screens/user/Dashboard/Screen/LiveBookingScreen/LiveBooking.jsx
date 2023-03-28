import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Container } from '../../style/Container'
import { Heading,Heading2 } from '../../style/Heading'
import { Wrapper } from '../../style/Wrapper'
import { HorizontalLine2 } from '../MyProfileScreen/ProfileComponent'
import { bookingScreenStaticContent as content } from "./Constant";

const LiveBooking = () => {
  return (
    <Wrapper>
    <Heading>{content.bookingH1}</Heading>
    <HorizontalLine2 />
    <div className="whole_box">
      <Sidebar />
      <Container >
      <Heading2>{content.bookingH2}</Heading2>
      </Container>
    </div>
  </Wrapper>
  )
}

export default LiveBooking
