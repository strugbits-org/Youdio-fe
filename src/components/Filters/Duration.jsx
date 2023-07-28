import { useEffect, useState } from "react";
import styled from "styled-components";
import { Slider, Box } from "@mui/material";

import { P3 } from "src/components";
import { fonts } from "src/helpers";
import { useSelector } from "react-redux";
import { filterKeys } from "src/helpers/constant";

function valuetext(value) {
  return `${value}min`;
}

const DurationSlider = styled(Slider)({
  color: "var(--textHeadingBlack)",

  "& .MuiSlider-track": {
    border: "none",
    color: "var(--textHeadingBlack)",
  },
  "& .MuiSlider-rail": {
    border: "none",
    color: "var(--textHeadingBlack)",
  },
  "& .MuiSlider-thumb": {
    height: 22,
    width: 22,
    backgroundColor: "#fff",
    border: "7px solid black",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    background: "var(--textHeadingBlack)",
    color: "#fff",
    "&:before": {},
  },
});

function RangeSlider({ addDuration }) {
  const [value, setValue] = useState([0, 90]);
  const { filters } = useSelector((state) => state.filter);
  const handleChange = (event, newValue) => {
    const startTime = newValue[0] % 10 === 0;
    const endTime = newValue[1] % 10 === 0;
    if (startTime && endTime) {
      setValue(newValue);
      addDuration({
        duration: {
          startTime: newValue[0],
          endTime: newValue[1],
        },
        key: filterKeys.duration,
      }); 
    }
  };

  useEffect(() => {
    if (Object.keys(filters.duration).length > 0) {
      const duration = [filters.duration.startTime, filters.duration.endTime];
      setValue(duration);
    }else{
      const duration = [0, 90];
      setValue(duration);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.duration]);
  return (
    <Box sx={{ width: 400 }}>
      <DurationSlider
        max={90}
        value={value}
        step={1}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div className="sliderContent">
        <P3 className="points" fontFamily={fonts.poppinsMedium}>
          {value[0]} MINS
        </P3>
        <P3 fontFamily={fonts.poppinsSemiBold}>All Duration</P3>
        <P3 className="points" fontFamily={fonts.poppinsMedium}>
          {value[1] === 90 ? `${value[1]}+` : value[1]} MINS
        </P3>
      </div>
    </Box>
  );
}

const SliderBox = styled.div`
  margin-inline: auto;
  .sliderContent {
    width: 120%;
    display: flex;
    justify-content: space-between;
    margin-inline: -8% -12%;

    .points {
      color: var(--backgroundGrey);
    }
  }
`;

export default function Duration({addDuration}) {
  return (
    <SliderBox>
      <RangeSlider addDuration={addDuration} />
    </SliderBox>
  );
}
