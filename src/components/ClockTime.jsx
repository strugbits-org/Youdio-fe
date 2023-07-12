import React from "react";
import { icons } from "src/helpers";
import styled from "styled-components";
import { P3 } from ".";

const Time = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: ${({ align }) => (align ? align : "right")};
  min-height: 2px;
  p {
    color: ${({ fontColor }) => (fontColor ? fontColor : "initial")};
  }
  svg {
    width: ${({ fontSize }) => (fontSize ? fontSize : "initial")};
    height: ${({ fontSize }) => (fontSize ? fontSize : "initial")};
  }
`;

export const ClockTime = ({ time, fontColor, fontSize, align }) => {
  return (
    <Time fontColor={fontColor} fontSize={fontSize} align={align}>
      <img src={icons.timeClock} alt="Time Clock" width="" height="" />
      {time && <P3 fontSize={fontSize}>{time}</P3>}
    </Time>
  );
};
