import React from "react";
import { icons } from "src/helpers";
import styled from "styled-components";
import { P3 } from ".";

const Time = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: ${({ align }) => (align ? align : "right")};
  min-height: 2px;
  img {
    width: ${({ fontSize }) => (fontSize ? fontSize : "auto")};
  }
  p {
    color: ${({ fontColor }) => (fontColor ? fontColor : "initial")};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "initial")};
    text-wrap: nowrap;
}
`;

export const ClockTime = ({ time, fontColor, fontSize, align, icon }) => {
  return (
    <Time fontColor={fontColor} fontSize={fontSize} align={align}>
      <img
        src={icon ? icon : icons.timeClock}
        alt="Time Clock"
        width=""
        height=""
      />
      {time && <P3 fontSize={fontSize}>{time}</P3>}
    </Time>
  );
};
