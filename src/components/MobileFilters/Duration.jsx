import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Slider, Box } from "@mui/material";

import { H3, P3 } from "src/components";
import { fonts } from "src/helpers";
import { MobileFilterButton, MobileFilterHeader } from "./filtersComponents";
import { filterKeys } from "src/helpers/constant";
import { useSelector } from "react-redux";

function valuetext(value) {
  return `${value}min`;
}

const DurationSlider = styled(Slider)({
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

function RangeSlider({ setSelection, selection, addDuration }) {
  const [value, setValue] = useState(selection.value);
  const timeDuration = useMemo(() => {
    return value[0] !== 0 || value[1] !== 90
      ? `${value[0]} - ${value[1]}+ Mins`
      : "";
  }, [value]);
  const handleChange = (event, newValue) => {
    const startTime = newValue[0] % 10 === 0;
    const endTime = newValue[1] % 10 === 0;
    if (startTime && endTime) {
      setValue(newValue);
      setSelection({ label: timeDuration, value: newValue });
      addDuration({
        duration: {
          startTime: newValue[0],
          endTime: newValue[1],
        },
        key: filterKeys.duration,
      });
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
        <H3 fontFamily={fonts.poppinsSemiBold}>
          {timeDuration ? timeDuration : "All Duration"}
        </H3>
        <P3 className="points" fontFamily={fonts.poppinsMedium}>
          90+ MINS
        </P3>
      </div>
    </Box>
  );
}

const SliderBox = styled.div`
  padding-inline: 8px;
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

export default function Duration({ addDuration }) {
  const { filters } = useSelector((state) => state.filter);
  const [isVisible, setIsVisible] = useState(false);
  const [selection, setSelection] = useState({ label: "", value: [0, 90] });
  useEffect(() => {
    if (Object.keys(filters.duration).length > 0) {
      const duration = [filters.duration.startTime, filters.duration.endTime];
      setSelection({
        label: duration.join("-").concat("+ Mins"),
        value: duration,
      });
    } else {
      const duration = [0, 90];
      setSelection({
        label: "",
        value: duration,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.duration]);

  return (
    <SliderBox>
      <MobileFilterHeader>
        <MobileFilterButton onClick={() => setIsVisible(!isVisible)}>
          Duration
        </MobileFilterButton>
        <P3>{selection.label}</P3>
      </MobileFilterHeader>
      {isVisible && (
        <RangeSlider
          setSelection={setSelection}
          selection={selection}
          addDuration={addDuration}
        />
      )}
    </SliderBox>
  );
}
