import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styled from "styled-components";
import { icons } from "src/helpers";
import { layout } from "src/helpers";
import {
  ClockTime,
  H2,
  H3,
  IconButton,
  InstructorDetail,
  IntensityLevel,
  P1,
  PrimaryWhiteButton,
} from "src/components";
const { desktop, tablet } = layout;

const Box = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(270px, 85.5vw, 1043px);
  height: 90dvh;
  overflow-y: auto;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 5px;
  /* width */
  ::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

const ImageBox = styled.div`
  position: relative;
  img {
    aspect-ratio: 2.2/1;
    width: calc(100% + 3px);
    object-fit: cover;
    border-radius: 5px;
  }
  .btnBookNow {
    border-radius: 0;
    position: absolute;
    bottom: 7vw;
    left: 7vw;
    min-height: 35px;
    width: auto;
    padding-inline: 5vw;
    @media only screen and (min-width: ${tablet}) {
      padding-inline: 80px;
      min-height: 45px;
      bottom: 45px;
      left: 45px;
    }
  }
`;

const ContentBox = styled.div`
  padding-inline: 7vw;
  padding-block: 10vw;
  .titleBox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    align-items: center;
    margin-bottom: 16px;
    h2 {
      grid-column: 1/3;
    }
  }
  .intensity {
    margin-bottom: 24px;
  }
  .bookingDetail {
    color: var(--backgroundGrey);
    margin-block: 40px;
    max-width: 1185px;
  }

  @media only screen and (min-width: ${tablet}) {
    padding-inline: 45px;
    padding-block: 66px;
    .titleBox {
      width: max-content;
    }
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;

const CloseIcon = styled(IconButton)`
  width: 30px;
  height: 30px;
  padding: 8px;
  border-radius: 100%;
  position: fixed;
  top: 8px;
  right: 8px;
  background: var(--textHeadingBlack);
`;

export default function BookingModal({ open, handleClose, data, handleBookNow }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box>
          {data && (
            <React.Fragment>
              <ImageBox>
                <img
                  src={data?.thumbnail}
                  alt={data?.title}
                  width=""
                  height=""
                />
                {/* <PrimaryButton className="btnBookNow">Book Now</PrimaryButton> */}
              </ImageBox>

              <ContentBox>
                <div className="titleBox">
                  <H3 fontSize={"clamp(14px, 1.4vw, 20px)"}>{data?.date}</H3>
                  <ClockTime
                    time={data?.time}
                    fontSize={"clamp(14px, 1.4vw, 20px)"}
                  />
                  <H2>{data?.title}</H2>
                </div>
                <div className="intensity">
                  <IntensityLevel
                    level={data?.intensity}
                    text={"Intensity"}
                    fontSize={"16px"}
                    align="left"
                  />
                </div>
                <PrimaryWhiteButton onClick={handleBookNow}>START MY TRIAL</PrimaryWhiteButton>
                <P1 className="bookingDetail">{data?.description}</P1>
                <InstructorDetail
                  imageSrc={data?.trainer?.image}
                  title={`${data?.trainer?.firstName} ${data?.trainer?.lastName} Bio`}
                  description={
                    "Lorem ipsum dolor sit amet consectetur. Odio id cursus arcu tempus pellentesque varius volutpat enim eget. Velit sed sed commodo nec vestibulum tellus tincidunt mollis. "
                  }
                />
              </ContentBox>
            </React.Fragment>
          )}
          <CloseIcon onClick={handleClose}>
            <img
              // className="close"
              src={icons.cross}
              alt="Close"
              width="100%"
              height=""
            />
          </CloseIcon>
        </Box>
      </Fade>
    </Modal>
  );
}
