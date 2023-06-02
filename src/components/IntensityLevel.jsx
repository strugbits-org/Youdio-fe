import styled from "styled-components";
import { P3 } from "src/components";
import { useState } from "react";

const IntensityBox = styled.div`
  align-items: center;
  justify-content: right;
  display: flex;
  gap: 10px;
`;

const IntensityLevel = ({ level }) => {
  const [color] = useState({
    dark: "#413735",
    light: "#D5D5D5",
  });
  return (
    <IntensityBox>
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
          stroke={level >= 4 ? color.dark : color.light}
          strokeWidth="1.52306"
        />
        <line
          x1="9.45879"
          y1="2.8252"
          x2="9.45879"
          y2="13.1286"
          stroke={level >= 3 ? color.dark : color.light}
          strokeWidth="1.52306"
        />
        <line
          x1="5.33331"
          y1="4.88574"
          x2="5.33331"
          y2="13.1284"
          stroke={level >= 2 ? color.dark : color.light}
          strokeWidth="1.52306"
        />
        <line
          x1="1.20391"
          y1="7.97754"
          x2="1.20391"
          y2="13.1292"
          stroke={level >= 1 ? color.dark : color.light}
          strokeWidth="1.52306"
        />
      </svg>

      <P3>Level {level}</P3>
    </IntensityBox>
  );
};

export default IntensityLevel;
