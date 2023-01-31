import React from 'react'
import styled from "styled-components";
import { IconButton } from "../Button";

export const FilterButton = ({ name, clickEvent, open }) => {
    // const [selected, setSelected] = useState(false)
    const IconButtonM = styled(IconButton)`
        padding:5px 5px 5px 0px;
    `
    return <IconButtonM onClick={clickEvent}>
        <span>{name}</span>
        <svg width="12" height="7" viewBox="0 0 16 10" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.18945L7.66667 8.18945L15 1.18945" stroke="#1F1F1F" strokeWidth="1.2" />
        </svg>
        {/* {
            open !== null
                ? <svg width="12" height="7" viewBox="0 0 12 7" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7034 5.84375L6.08275 1L1 5.84375" stroke="black" stroke-width="0.96875" />
                </svg>
                : 
        } */}



    </IconButtonM>
}

export const FilterBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    gap: 1vw;
    background:${({open}) => open !== null ? 'var(--backgroundLightGrey)'  : '#fff' };
    padding: ${({open}) => open !== null ? '15px'  : '0px' };

`

export const FilterOptions = styled.div`
    width:100%;
    min-height:0px;
    display:grid;
    /* padding-inline:20px; */
    padding-block:30px;
    /* place-content:center;  */
    background: var(--backgroundLightGrey);
    transition:var(--transition03s);
    position:relative;

    .videoCount{
        position:absolute;
        top:0px;      
        left:0px;
        color:#D6CCC3;        
    }
`
