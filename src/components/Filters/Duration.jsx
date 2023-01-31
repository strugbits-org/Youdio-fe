import { useState } from 'react'
import { Slider, Box } from '@mui/material';
import styled from "styled-components";
import { P3 } from '../Typography'
import { fonts } from '../../helpers/constant'

function valuetext(value) {
    return `${value}min`;
}

function RangeSlider() {
    const [value, setValue] = useState([0, 90]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <Box sx={{ width: 400 }}>
        <Slider
            max={90}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
        />
    </Box>
}
export default function Duration() {
    const SliderBox = styled.div`
        margin-inline:auto;
        .sliderContent{
            width:120%;
            display:flex;
            justify-content:space-between;
            margin-inline:-8% -12%;

            .points{
                color:var(--backgroundGrey);
            }
        }
    `
    return <SliderBox>
        <RangeSlider />
        <div className='sliderContent'>
            <P3 className='points' fontFamily={fonts.poppinsMedium}>0 MINS</P3>
            <P3 fontFamily={fonts.poppinsSemiBold} >All Duration</P3>
            <P3 className='points' fontFamily={fonts.poppinsMedium}>90+ MINS</P3>
        </div>
    </SliderBox>
}