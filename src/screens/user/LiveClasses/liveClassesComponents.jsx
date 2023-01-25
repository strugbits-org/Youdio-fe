import styled from "styled-components";
import { IconButton, WhiteIconButton } from "../../../components/Button";
import { useState } from "react";

export const ContentBox = styled.div`
    max-width:632px;
`

export const MonthBox = styled.div`
    display:flex;
    justify-content:space-between;
`

export const WeekBox = styled.div`
    ul{
        display:flex;
        justify-content:space-between;
        gap: 1vw;
        margin-bottom:20px;
        
        li{
            flex:1;
        }
    }
    
    .buttons{
        display:flex;
        justify-content:space-between;
            
    }


`

export const DayBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 1vw;
    margin-bottom:60px;
        
    div{
        flex:1;
        text-align:center;
    }
    .searchBox{
        text-align:right;

    }
`

export const SelectionBox = styled.div`
    display:flex;
    justify-content:left;
    align-items:center;
    flex-wrap:wrap;
    gap: 1vw;
        
    div{
        flex:1;
    }
`

export const SelectionButton = ({name}) => {
    const [selected, setSelected] = useState(false)
    
    return <WhiteIconButton selected={selected} onClick={() => setSelected(!selected)}>
        <span>{name}</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.18945L7.66667 8.18945L15 1.18945" stroke="#1F1F1F" strokeWidth="1.2" />
        </svg>
    </WhiteIconButton>
}

export const FilterBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    gap: 1vw;
        
    div{
        flex:1;
    }
`

export const FilterButton = ({name}) => {
    // const [selected, setSelected] = useState(false)
    
    return <IconButton>
        <span>{name}</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.18945L7.66667 8.18945L15 1.18945" stroke="#1F1F1F" strokeWidth="1.2" />
        </svg>
    </IconButton>
}
