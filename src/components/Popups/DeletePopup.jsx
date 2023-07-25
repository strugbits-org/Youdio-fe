import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styled from "styled-components";
import { icons } from "src/helpers";
import { layout } from "src/helpers";
import { H3, IconButton, P2, PrimaryButton } from "src/components";
const { desktop } = layout;

const Box = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(270px, 85.5vw, 643px);
  height: clamp(100px, 20dvh, auto);
  background: #fff;
  /* overflow-y: auto; */
  /* overflow-x: hidden; */
  border-radius: 5px;
`;

const ContentBox = styled.div`
  padding-inline: 24px;
  padding-block: 36px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: max-content;
    margin-inline: auto;
    gap: 30px;
    img {
      width: clamp(48px, 4.8vw, 95px);
    }
    p {
      color: var(--textParaGrey);
    }
    .buttons {
      width: 100%;
      display: flex;
      gap: 16px;
      .btnNo {
        background: var(--backgroundButonGrey);
        color: var(--textHeadingBlack);
        &:hover {
          background: var(--borderLightGrey);
        }
      }
      button {
        border-radius: 0px;
        min-height: 38px;
      }
    }
  }

  @media only screen and (min-width: ${desktop}) {
  }
`;

const CloseIcon = styled(IconButton)`
  width: 30px;
  height: 30px;
`;

export default function DeletePopup({ open, handleClose, data, handleAction, loading }) {
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
              <H3 fontSize={"clamp(14px, 1.4vw, 20px)"}>
                Do you wish to Delete?
              </H3>
              <CloseIcon onClick={handleClose}>
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
              <img src={icons.binGreen} alt="Close" width="" height="" />
              <P2>{data?.text ? data.text : "Are you sure you want to delete?"}</P2>
              <div className="buttons">
                <PrimaryButton disabled={loading} onClick={handleAction}>
                  Yes
                </PrimaryButton>
                <PrimaryButton className="btnNo" onClick={handleClose}>
                  No
                </PrimaryButton>
              </div>
            </div>
          </ContentBox>
        </Box>
      </Fade>
    </Modal>
  );
}
