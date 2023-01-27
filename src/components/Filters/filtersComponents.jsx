import React from 'react'
import { Slider, Box } from '@mui/material';
import styled from "styled-components";
import { IconButton } from "../Button";
import { P3 } from '../Typography';
import { fonts } from '../../helpers/constant';

function valuetext(value) {
    return `${value}min`;
}

function RangeSlider() {
    const [value, setValue] = React.useState([0, 90]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 400 }}>
            <Slider
                max="90"
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>

    );
}

const SliderBox = styled.div`
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
export const Duration = () => {
    return <SliderBox>
        <RangeSlider />
        <div className='sliderContent'>
            <P3 className='points' fontFamily={fonts.poppinsMedium}>0 MINS</P3>
            <P3 fontFamily={fonts.poppinsSemiBold} >All Duration</P3>
            <P3 className='points' fontFamily={fonts.poppinsMedium}>90+ MINS</P3>
        </div>

    </SliderBox>
}


export const FilterButton = ({ name, clickEvent }) => {
    // const [selected, setSelected] = useState(false)
    return <IconButton onClick={clickEvent}>
        <span>{name}</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.18945L7.66667 8.18945L15 1.18945" stroke="#1F1F1F" strokeWidth="1.2" />
        </svg>
    </IconButton>
}

export const FilterBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    gap: 1vw;
`

export const FilterOptions = styled.div`
    width:100%;
    min-height:0px;
    display:grid;
    padding-inline:20px;
    padding-block:30px;
    place-content:center;
    background: var(--backgroundLightGrey);
    transition:var(--transition03s);
    
`





