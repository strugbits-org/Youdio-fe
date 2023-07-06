import React from "react";
import { icons } from "src/helpers";
import styled from "styled-components";
import { P2 } from ".";

const Time = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: right;
  min-height: 2px;
`;

export const ClockTime = ({ time }) => {
  return (
    <Time>
      <img src={icons.timeClock} alt="Time Clock" width="" height="" />
      {time && <P2>{time}</P2>}
    </Time>
  );
};
