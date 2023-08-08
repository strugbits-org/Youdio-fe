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

function RangeSlider({ setSelection, selection, addDuration, mins, allDuration }) {
  const timeDuration = useMemo(() => {
    return selection[0] !== 0 || selection[1] !== 90
      ? `${selection[0]} - ${selection[1]}+ ${mins}`
      : "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection]);
  const handleChange = (event, newValue) => {
    const startTime = newValue[0] % 10 === 0;
    const endTime = newValue[1] % 10 === 0;
    if (startTime && endTime) {
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
        value={selection}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div className="sliderContent">
        <P3 className="points" fontFamily={fonts.poppinsMedium}>
          {`0+ ${mins}`}
        </P3>
        <H3 fontFamily={fonts.poppinsSemiBold}>
          {timeDuration ? timeDuration : allDuration}
        </H3>
        <P3 className="points" fontFamily={fonts.poppinsMedium}>
          {`90+ ${mins}`}
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

export default function Duration({ addDuration, title, mins, allDuration }) {
  const { filters } = useSelector((state) => state.filter);
  const [isVisible, setIsVisible] = useState(false);
  const [selection, setSelection] = useState({ label: "", value: [0, 90] });
  useEffect(() => {
    if (Object.keys(filters.duration).length > 0) {
      const duration = [filters.duration.startTime, filters.duration.endTime];
      setSelection({
        label: duration.join("-").concat(`+ ${mins}`),
        value: duration,
      });
    } else {
      const duration = [0, 90];
      console.log('reset');
      setSelection({
        label: "",
        value: duration,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <SliderBox>
      <MobileFilterHeader>
        <MobileFilterButton onClick={() => setIsVisible(!isVisible)}>
          {title}
        </MobileFilterButton>
        <P3>{selection.label}</P3>
      </MobileFilterHeader>
      {isVisible && (
        <RangeSlider
          setSelection={setSelection}
          selection={selection.value}
          addDuration={addDuration}
          mins={mins}
          allDuration={allDuration}
        />
      )}
    </SliderBox>
  );
}
