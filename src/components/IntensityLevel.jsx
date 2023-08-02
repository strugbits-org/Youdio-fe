import styled from "styled-components";
import { P3 } from "src/components";
import { useMemo, useState } from "react";

const IntensityBox = styled.div`
  align-items: center;
  justify-content: ${({ align }) => (align ? align : "right")};
  display: flex;
  gap: 10px;
  min-height: 2px;
  svg {
    width: ${({ fontSize }) => (fontSize ? fontSize : "initial")};
    height: ${({ fontSize }) => (fontSize ? fontSize : "initial")};
  }
  p {
    color: ${({ fontColor }) => (fontColor ? fontColor : "initial")};
    text-wrap: nowrap;
  }
`;

const IntensityLevel = ({ level, text, fontSize, fontColor, align }) => {
  const [color] = useState({
    dark: "#413735",
    light: "#D5D5D5",
  });

  const setLevel = useMemo(() => { 
    if (typeof(level) === 'number') return level
    if (typeof(level) === 'string') {
      const value = level.toLowerCase().replace("level", "").trim();
      return Number(value)
    }
  }, [level])

  return (
    <IntensityBox fontSize={fontSize} fontColor={fontColor} align={align}>
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
          stroke={setLevel >= 4 ? color.dark : color.light}
          strokeWidth="1.52306"
        />
        <line
          x1="9.45879"
          y1="2.8252"
          x2="9.45879"
          y2="13.1286"
          stroke={setLevel >= 3 ? color.dark : color.light}
          strokeWidth="1.52306"
        />
        <line
          x1="5.33331"
          y1="4.88574"
          x2="5.33331"
          y2="13.1284"
          stroke={setLevel >= 2 ? color.dark : color.light}
          strokeWidth="1.52306"
        />
        <line
          x1="1.20391"
          y1="7.97754"
          x2="1.20391"
          y2="13.1292"
          stroke={setLevel >= 1 ? color.dark : color.light}
          strokeWidth="1.52306"
        />
      </svg>

      <P3 fontSize={fontSize}>
        {text ? text : "Level"} {setLevel}
      </P3>
    </IntensityBox>
  );
};

export default IntensityLevel;
