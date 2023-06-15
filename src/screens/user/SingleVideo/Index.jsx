import React, { useRef } from "react";
import { H2, H4, P1, P2, P3, Section } from "src/components";
import { icons } from "src/helpers";
import { SingleinstClassStaticContent } from "../SingleInstructor/constant";
import { SingleInstructorCard, TwoCardInstructor } from "src/components/Cards";

import {
  TwoCardsBox,
  CardsBox,
} from "../SingleInstructor/singleInstructorStyle";
import {
  Video,
  Container,
  LeftContent,
  RightContent,
  BioSection,
  //   PlayButton,
} from "./SingleVideoComp";

const SingleVideo = () => {
  const videoURL =
    "https://yodio-videos-bucket.s3.amazonaws.com/Instructor+Videos/1679323525856-high.mp4";

  const videoRef = useRef(null);
  //   const [isPlaying, setPlaying] = useState(false);
  //   const togglePlay = () => {
  //     if (isPlaying) {
  //       videoRef.current.pause();
  //     } else {
  //       videoRef.current.play();
  //     }
  //     setPlaying(!isPlaying);
  //   };
  return (
    <Section backgroundColor="#fff">
      <div>
        <Video ref={videoRef} controls>
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>

        {/* 
        {!isPlaying && (
          <PlayButton onClick={togglePlay}>
            <img src={icons.videoPlay} alt="Play" />
          </PlayButton>
        )} */}
      </div>
      <Container>
        <LeftContent>
          <H2 className="h2">LIVE BACK PRESS YOGA</H2>
          <P1>
            From Ocean Breath by <span>Elizebeth</span>
          </P1>
          <div className="subContent">
            <div className="totaltxt">
              <H4 className="h4">TOTAL RUN TIME</H4>
              <H4 className="h4">Date</H4>
              <H4 className="h4">INTENSITY</H4>
            </div>

            <div className="totalImg">
              <div className="div1">
                <div className="subDiv">
                  <img
                    src={icons.timeClock}
                    alt=""
                    width="15px"
                    height="15px"
                  />
                  <P3>5 min</P3>
                </div>
              </div>
              {/* style={{ display: "flex", gap: "3px", flexWrap: "wrap" }} */}
              <div className="div1">
                <div className="subDiv">
                  <img
                    src={icons.calendarImg}
                    alt=""
                    width="15px"
                    height="15px"
                  />
                  <P3>5 / Jan / 2022</P3>
                </div>
              </div>

              <div className="div1">
                <div className="subDiv">
                  <svg
                    width="15"
                    height="15px"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="13.5882"
                      y1="0.764648"
                      x2="13.5882"
                      y2="13.1287"
                      stroke="#D5D5D5"
                      strokeWidth="1.52306"
                    />
                    <line
                      x1="9.45879"
                      y1="2.8252"
                      x2="9.45879"
                      y2="13.1286"
                      stroke="#D5D5D5"
                      strokeWidth="1.52306"
                    />
                    <line
                      x1="5.33331"
                      y1="4.88574"
                      x2="5.33331"
                      y2="13.1284"
                      stroke="#D5D5D5"
                      strokeWidth="1.52306"
                    />
                    <line
                      x1="1.20391"
                      y1="7.97754"
                      x2="1.20391"
                      y2="13.1292"
                      stroke="#413735"
                      strokeWidth="1.52306"
                    />
                  </svg>
                  <P3>Intensity 1</P3>
                </div>
              </div>
            </div>
          </div>
        </LeftContent>

        <RightContent>
          <P2 className="para">
            Lorem ipsum dolor sit amet consectetur. Odio id cursus arcu tempus
            pellentesque varius volutpat enim eget. Velit sed commodo nec
            vestibulum tellus tincidunt mollis. Nascetur et tellus nteger to
            integer. Viverra integer imperdiet neque.
          </P2>
        </RightContent>
      </Container>

      <BioSection>
        <div className="bioImage">
          <img src={icons.singleInstructorImg} alt="" />
        </div>
        <div className="txtContent">
          <H2 className="H2">Elizebeth Lisa Bio</H2>
          <P2 className="paraBio">
            Lorem ipsum dolor sit amet consectetur. Odio id cursus arcu tempus
            pellentesque varius volutpat enim eget. Velit sed sed commodo nec
            vestibulum tellus tincidunt mollis. Nascetur et tellus integer
            integer. Viverra integer imperdiet phasellus ridiculus neque.
          </P2>
        </div>
      </BioSection>

      {/* Single-Instructor Cards Section */}
      <H2 style={{ textAlign: "center" }}>
        {SingleinstClassStaticContent.singleInstructorCardH2}
      </H2>
      <CardsBox>
        {[...Array(6).keys()].map((val) => (
          <SingleInstructorCard key={`card-${val}`} />
        ))}
      </CardsBox>
      <div className="seperatorLine"></div>

      {/* Horizontal Line */}
      {/* <StyledDiv /> */}

      {/* Two Card Section */}
      <H2 style={{ textAlign: "center" }}>
        {SingleinstClassStaticContent.TwoInstructorCardH2}
      </H2>
      <TwoCardsBox>
        {[...Array(2).keys()].map((val) => (
          <TwoCardInstructor key={`card-${val}`} />
        ))}
      </TwoCardsBox>
      <div className="seperatorLine"></div>
    </Section>
  );
};

export default SingleVideo;
