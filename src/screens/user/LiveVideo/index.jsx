import React, { useState } from "react";
import { H2, H4, H3, P1, P2, P3, Section, H6, ClockTime, IntensityLevel, InstructorLink, PrimaryButton } from "src/components";
import { NavLink } from "react-router-dom";
import { LiveBookingBox, ContentBox, MediaBox } from "./liveVideoComponent";
import { icons } from "src/helpers";
// import Modal from "./Modal";

function LiveVideo() {
  return (
    <Section backgroundColor="white">
      <LiveBookingBox>
        <MediaBox>
          <img
            src={icons.InstructorElizebeth}
            alt="Instructor"
            width=""
            height=""
          />
          <img src={icons.leftArrow} alt="Camera" width="" height="" />
        </MediaBox>
        <ContentBox>
          <H2>LIVE BACK PRESS YOGA</H2>
          <P1>
            From Ocean Breath by <span className="bold">Jackie Stewart</span>
          </P1>
          <div className="sessionDetail">
            <div className="totalRunTme">
              <H6>TOTAL RUN TIME</H6>
              <ClockTime time="5 min" />
            </div>
            <div className="date">
              <H6>Date</H6>
              <div>
                <img
                  src={icons.calendarImg}
                  alt="Calendar"
                  width=""
                  height=""
                />
                <P3>5 / Jan / 2023</P3>
              </div>
            </div>
            <div className="intensity">
              <H6>Date</H6>
              <IntensityLevel level={3} />
            </div>
          </div>
          <InstructorLink imageSrc={icons.InstructorElizebeth} title="Eliza Beth" />
          <P2>
            Lorem ipsum dolor sit amet consectetur. Odio id cursus arcu tempus
            pellentesque varius volutpat enim eget. Velit sed commodo nec
            vestibulum tellus tincidunt mollis. Nascetur et tellus nteger to
            integer. Viverra integer imperdiet neque.
          </P2>
          <PrimaryButton onClick={() => { }}>Book Now</PrimaryButton>
        </ContentBox>
      </LiveBookingBox>
    </Section>
  );
}

export default LiveVideo;
