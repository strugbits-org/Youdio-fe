import React, { useState } from "react";
import { H2, H4, P1, P2, P3, Section } from "src/components";
import {
  LiveCard,
  CardMedia,
  Container,
  Content,
  Box,
  CenterButton,
} from "./liveVideoComponent";
import { icons } from "src/helpers";
import { liveVideoContent } from "./constant";
import Modal from "./Modal";

function LiveVideo() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <Section backgroundColor="white">
        <LiveCard>
          <CardMedia>
            {/* <NavLink>
              <img
                src={icons.zoomImg}
                alt=""
                width="65"
                height="65"
                className="zoom"
              />
            </NavLink> */}
            <div className="imgContainer">
              <img src={icons.liveVideoImg} alt="" className="img" />
            </div>
          </CardMedia>
          <Container>
            <Content>
              <H2 className="h2">{liveVideoContent.liveVideoH2}</H2>
              <P1 className="p1">{liveVideoContent.liveVideoH3}</P1>

              <div className="totaltxt">
                <H4 className="h4">TOTAL RUN TIME</H4>
                <H4 className="h4">Date</H4>
                <H4 className="h4">INTENSITY</H4>
              </div>

              <div className="totalImg">
                <div className="div1">
                  <img
                    src={icons.timeClock}
                    alt=""
                    width="15px"
                    height="auto"
                  />
                  <P3>5 min</P3>
                </div>

                <div className="div1">
                  <img
                    src={icons.calendarImg}
                    alt=""
                    width="15px"
                    height="auto"
                  />
                  <P3>5/Jan/2022</P3>
                </div>

                <div className="div1">
                  <svg
                    width="15"
                    // height="14"
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
              <div className="profileBox">
                <img src={icons.profileImage} alt="" width="30px" height={""} />
                <H4>Elizebeth Lisa</H4>
              </div>
              <P2 className="para">{liveVideoContent.liveVideoP2}</P2>
              <Box>
                <CenterButton onClick={() => setShowModal(true)}>
                  {liveVideoContent.liveVideoBtn}
                </CenterButton>
                {showModal && <Modal closeModal={closeModal} />}
              </Box>
            </Content>
          </Container>
        </LiveCard>
      </Section>

      <Section backgroundColor="white">
        <H2 style={{ textAlign: "center" }}>
          {liveVideoContent.otherSessionH2}
        </H2>
      </Section>
    </>
  );
}

export default LiveVideo;
