import React, { useMemo } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Slider, Box } from "@mui/material";

import { H3, P3 } from "src/components";
import { fonts } from "src/helpers";
import { MobileFilterButton } from "./filtersComponents";

function valuetext(value) {
  return `${value}min`;
}

const DurationSlider = styled(Slider)({
  marginTop: "16px",
  color: "var(--textHeadingWhite)",

  "& .MuiSlider-track": {
    border: "none",
    color: "var(--textHeadingWhite)",
  },
  "& .MuiSlider-rail": {
    border: "none",
    color: "var(--textHeadingWhite)",
  },
  "& .MuiSlider-thumb": {
    height: 22,
    width: 22,
    backgroundColor: "var(--textParaBlack)",
    border: "7px solid var(--textHeadingWhite)",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    background: "var(--textHeadingWhite)",
    color: "#000",
    "&:before": {},
  },
});

function RangeSlider() {
  const [value, setValue] = useState([0, 90]);
  const timeDuration = useMemo(() => {
    return value[0] !== 0 || value[0] !== 90
      ? `${value[0]} - ${value[1]} +`
      : "All Durations";
  }, [value]);
  const handleChange = (event, newValue) => {
    const startTime = newValue[0] % 10 === 0;
    const endTime = newValue[1] % 10 === 0;
    if (startTime && endTime) {
      setValue(newValue);
      //   addDuration({
      //     duration: {
      //       startTime: newValue[0],
      //       endTime: newValue[1],
      //     },
      //     key: filterKeys.duration,
      //   });
    }
  };

  return (
    <Box sx={{ width: "98%", marginInline: "auto" }}>
      <DurationSlider
        max={90}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div className="sliderContent">
        <P3 className="points" fontFamily={fonts.poppinsMedium}>
          0 MINS
        </P3>
        <H3 fontFamily={fonts.poppinsSemiBold}>{timeDuration}</H3>
        <P3 className="points" fontFamily={fonts.poppinsMedium}>
          90+ MINS
        </P3>
      </div>
    </Box>
  );
}

const SliderBox = styled.div`
  padding-inline: 16px;
  .sliderContent {
    display: flex;
    justify-content: space-between;
    p,
    h3 {
      color: var(--textHeadingWhite);
      text-align: center;
    }
    .points {
      width: 40px;
      margin-inline: -3%;
    }
  }
`;

export default function Duration() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <SliderBox>
      <MobileFilterButton onClick={() => setIsVisible(!isVisible)}>
        Duration
      </MobileFilterButton>
      {isVisible && <RangeSlider />}
    </SliderBox>
  );
}
