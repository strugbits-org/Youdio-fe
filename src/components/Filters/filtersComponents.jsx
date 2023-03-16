import React, { useState } from 'react'
import styled from "styled-components";

import { IconButton, WhiteIconButton } from "src/components";
import { icons, layout } from "src/helpers";

const { mobile, tablet } = layout

export const Instructor = styled.li`
    h4{
        font-weight:${({ selected }) => selected ? 700 : 400};
    }
    cursor:pointer;
`

const IconButtonM = styled(IconButton)`
    padding:5px 5px 5px 0px;
`
export const FilterButton = ({ name, clickEvent, selected }) => {
    // const [selected, setSelected] = useState(false)
    return <IconButtonM onClick={() => {
        // setSelected(!selected)
        clickEvent()
    }}>
        <span>{name}</span>
        <img src={selected?.toUpperCase() === name ? icons.arrowUp : icons.arrowDown} alt="" width={"12px"} />

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
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap: 1.3vw;
        
    div{
        flex:1;
    }
    @media only screen and (min-width: ${mobile}) {
        display:none;
    }
    @media only screen and (min-width: ${tablet}) {
        display:flex;
    }
`

export const FilterBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    gap: 1vw;
    background: white;
    padding: ${({ open }) => open !== null ? '15px' : '0px'};
    /* margin-bottom:40px; */
    /* height:auto;
    transition: 1s all ease-in-out; */

    .filters{
        background: var(--backgroundLightGrey)
    }

    @media only screen and (min-width: ${mobile}) {
        display:none;
    }
    @media only screen and (min-width: ${tablet}) {
        display:flex;
    }
    
`

export const FilterOptions = styled.div`
    width:100%;
    min-height:0px;
    /* padding-inline:20px; */
    /* place-content:center;  */
    padding-block:30px;
    transition:var(--transition03s);
    position:relative;
    
    .videoCount{
        position:absolute;
        top:0px;      
        left:0px;
        color:#D6CCC3;        
    }
    
    .filters{
        display:grid;
        padding-block:30px;
        padding-inline:15px;
        background: var(--backgroundLightGrey)
    }

    .sortOption{
        position:absolute;
        top: 0px;      
        right: 0px;
        color:#D6CCC3;
        display: flex;
        select{
            background:transparent;
            border:none;
            outline:none;
            color:#D6CCC3;
            padding-inline: 4px;
            cursor:pointer;
            font-size: 12px;
        }
        select option{
            background: var(--backgroundLightGrey);
            color: var(--textHeadingBlack);

        }
        select:hover{
            color: var(--textHeadingBlack);
        }
    }

    
`
