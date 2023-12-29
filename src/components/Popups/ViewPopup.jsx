import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styled from "styled-components";
import { icons } from "src/helpers";
import { H3, IconButton, P2 } from "src/components";

const Box = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(270px, 85.5vw, 643px);
  height: clamp(100px, 20dvh, auto);
  background: #fff;
  border-radius: 5px;
`;

const ContentBox = styled.div`
  text-align: center;
  padding-bottom: 36px;
  .top {
    background: var(--backgroundLightGreen);
    margin-bottom: 40px;
    padding: 40px 16px;
    position: relative;
    border-radius: 5px 5px 0px 0px;
    h3 {
      color: var(--backgroundGreen);
    }
    .closeIcon {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }
  .content {
    width: 80%;
    margin-inline: auto;
    max-height: 240px;
    overflow-y: auto;
    padding: 16px 24px;
    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--backgroundGreen);
      border-radius: 10px;
    }

    p {
      color: var(--textParaGrey);
    }
  }
`;

const CloseIcon = styled(IconButton)`
  width: 30px;
  height: 30px;
`;

export default function ViewPopup({ open, handleClose, data }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      disableAutoFocus
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box>
          <ContentBox>
            <div className="top">
              <H3 fontSize={"clamp(18px, 2.4vw,32px)"} fontC>
                Review
              </H3>
              <CloseIcon className="closeIcon" onClick={handleClose}>
                <img
                  // className="close"
                  src={icons.crossDark}
                  alt="Close"
                  width="100%"
                  height=""
                />
              </CloseIcon>
            </div>
            <div className="content">
              <P2>{data?.review}</P2>
            </div>
          </ContentBox>
        </Box>
      </Fade>
    </Modal>
  );
}
