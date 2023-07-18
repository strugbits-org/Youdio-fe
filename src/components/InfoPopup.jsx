import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styled from "styled-components";
import { icons } from "src/helpers";
import { layout } from "src/helpers";
import { H3, IconButton, P1, PrimaryButton } from "src/components";
const { desktop } = layout;

const Box = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(270px, 85.5vw, 643px);
  height: clamp(100px, 20dvh, 100dvh);
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

const ContentBox = styled.div`
  padding-inline: 24px;
  padding-block: 36px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    max-width: 260px;
    margin-inline: auto 0px;
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

export default function InfoPupup({ open, handleClose, data, handleLink }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose ? handleClose : () => {}}
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
            <H3 fontSize={"clamp(14px, 1.4vw, 20px)"}>Something Wrong</H3>
            <P1 className="bookingDetail">{data}</P1>
            {handleLink && (
              <PrimaryButton onClick={handleLink}>
                Go to Membership Profile
              </PrimaryButton>
            )}
          </ContentBox>
          {handleClose && (
            <CloseIcon onClick={handleClose}>
              <img
                // className="close"
                src={icons.cross}
                alt="Close"
                width="100%"
                height=""
              />
            </CloseIcon>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}
