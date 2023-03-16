import { useState } from 'react'
import styled from "styled-components";
import { Slider, Box } from '@mui/material';

import { P3 } from 'src/components'
import { fonts } from 'src/helpers'

function valuetext(value) {
    return `${value}min`;
}

const DurationSlider = styled(Slider)({
    color: 'var(--textHeadingBlack)',

    '& .MuiSlider-track': {
        border: 'none',
        color: 'var(--textHeadingBlack)',
    },
    '& .MuiSlider-rail': {
        border: 'none',
        color: 'var(--textHeadingBlack)',
    },
    '& .MuiSlider-thumb': {
        height: 22,
        width: 22,
        backgroundColor: '#fff',
        border: '7px solid black',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        background: 'var(--textHeadingBlack)',
        color: '#fff',
        '&:before': {
            
        }

    }
});

function RangeSlider() {
    const [value, setValue] = useState([0, 90]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <Box sx={{ width: 400 }}>
        <DurationSlider
            max={90}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
        />
    </Box>
}

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

export default function Duration() {
    
    return <SliderBox>
        <RangeSlider />
        <div className='sliderContent'>
            <P3 className='points' fontFamily={fonts.poppinsMedium}>0 MINS</P3>
            <P3 fontFamily={fonts.poppinsSemiBold} >All Duration</P3>
            <P3 className='points' fontFamily={fonts.poppinsMedium}>90+ MINS</P3>
        </div>
    </SliderBox>
}
