import React, { useEffect } from "react";
import {
  ModalWrapper,
  ModalOverlay,
  ModalContent,
  Image,
  ModalSec,
} from "./liveVideoComponent";
import { icons } from "src/helpers";
import { H3, P3, H4 } from "src/components";
import { PrimaryWhiteButton } from "src/components";


function Modal({ closeModal }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  });
  return (
    <>
      {/* <div onClick={closeModal}></div> */}
      <ModalWrapper>
        <ModalOverlay onClick={closeModal}> </ModalOverlay>
        <ModalContent>
          <Image>
            <img src={icons.InstructorElizebeth} alt="" />
          </Image>
          <ModalSec>
            <div className="btnBox">
              <button className="btnBook">BOOK NOW</button>
            </div>
          </ModalSec>
          <ModalSec>
            <div className="heading">
              <H3>2022/12/08(THU) 06:30-07:30 </H3>
              <H3>LIVE BACK PRESS YOGA</H3>
            </div>
            <div className="intensityBox">
              <svg
                width="15"
                height="14"
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
            <PrimaryWhiteButton className="btn">
              START MY TRIAL
            </PrimaryWhiteButton>
            <div className="para">
              <P3 className="bottomGap">
                Lorem ipsum dolor sit amet consectetur. Eget vulputate sed
                posuere sit. Integer in ac sem adipiscing nulla arcu Enim
                placerat nunc tincidunt gravida vitae tincidunt Lorem ipsum
                dolor sit amet consectetur. Eget vulputate ed posuere sit.
                Integer in ac sem adipiscing nullat gravida vitae tincidunt
              </P3>
              <P3>
                Lorem ipsum dolor sit amet consectetur. Eget vulputate sed
                posuere sit. Integer in ac sem adipiscing nulla arcu Enim
                placerat nunc tincidunt gravida vitae tincidunt Lorem ipsum
                dolor sit amet consectetur. Eget vulputate ed posuere sit.
                Integer in ac sem adipiscing nullat gravida vitae tincidunt
              </P3>
            </div>

            <div className="profile">
              <img src={icons.profile} alt="" width="" height={""} />
              <div className="text-right">
                <H4>Elizebeth Lisa Bio</H4>
                <P3>
                  Lorem ipsum dolor sit amet consectetur. Odio id cursus arcu
                  tempus pellentesque varius volutpat enim eget. Velit sed sed
                  commodo nec vestibulum tellus tincidunt mollis.{" "}
                </P3>
              </div>
            </div>
          </ModalSec>
          <div className="close-modal" onClick={closeModal}>
            <img src={icons.cross} alt="" width="25" />
          </div>
        </ModalContent>
      </ModalWrapper>
    </>
  );
}

export default Modal;
