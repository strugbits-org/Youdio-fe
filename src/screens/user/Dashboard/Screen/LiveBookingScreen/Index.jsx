import React from 'react'
import Sidebar from '../../Components/Sidebar/Index'
import { Container } from '../../Components/Container'
import { Heading,Heading2 } from '../../Components/Heading'
import { Wrapper } from '../../Components/Wrapper'
import { HorizontalLine2 } from '../MyProfileScreen/ProfileComponent'
import { bookingScreenStaticContent as content } from "./Constant";

const LiveBooking = () => {
  return (
    <Wrapper>
       <div className="membership_top_div">

    <Heading>{content.bookingH1}</Heading>
    <HorizontalLine2 />
    </div>
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
