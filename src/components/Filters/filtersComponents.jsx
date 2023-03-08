import React, { useState } from 'react'
import styled from "styled-components";
import { IconButton } from "../Button";
import { WhiteIconButton } from "../../components/Button";
import icons from "../../assets/icons";
import { layout } from "../../helpers/constant";

const { mobile, laptop } = layout


export const FilterButton = ({ name, clickEvent, selected }) => {
    // const [selected, setSelected] = useState(false)
    const IconButtonM = styled(IconButton)`
        padding:5px 5px 5px 0px;
    `
    return <IconButtonM onClick={() => {
        // setSelected(!selected)
        clickEvent()
    }}>
        <span>{name}</span>
        <img src={selected?.toUpperCase() === name ? icons.arrowUp : icons.arrowDown} alt="" width={"12px"} />
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

export const SelectionButton = ({ name }) => {
    const [selected, setSelected] = useState(false)

    return <WhiteIconButton selected={selected} onClick={() => setSelected(!selected)}>
        <span>{name}</span>
        <img src={icons.arrowDown} alt="" width={"14"} height={""} />
    </WhiteIconButton>
}

export const SelectionBox = styled.div`
    display:flex;
    justify-content:left;
    align-items:center;
    flex-wrap:wrap;
    gap: 1.3vw;
        
    div{
        flex:1;
    }
    @media only screen and (min-width: ${mobile}) {
        display:none;
    }
    @media only screen and (min-width: ${laptop}) {
        display:flex;
    }
`

export const FilterBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    gap: 1vw;
    background:${({open}) => open !== null ? 'var(--backgroundLightGrey)'  : '#fff' };
    padding: ${({ open }) => open !== null ? '15px' : '0px' };
    margin-bottom:40px;
    /* height:auto;
    transition: 1s all ease-in-out; */

    @media only screen and (min-width: ${mobile}) {
        display:none;
    }
    @media only screen and (min-width: ${laptop}) {
        display:flex;
    }
    
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
