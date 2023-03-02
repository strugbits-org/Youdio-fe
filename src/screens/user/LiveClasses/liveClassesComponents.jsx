import styled from "styled-components";
import {WhiteIconButton } from "../../../components/Button";
import { useState } from "react";
import { H4 } from "../../../components/Typography";
import { fonts } from "../../../helpers/constant";
import { layout } from "../../../helpers/constant";
import icons from "../../../assets/icons";
const { mobile, mobileMedium, tablet, laptop, desktop } = layout

export const ContentBox = styled.div`
    max-width:632px;
`

export const MonthBox = styled.div`
    display:flex;
    justify-content:space-between;

    button img{
        width:clamp(40px, 3.1vw, 62px);
    }
`

export const WeekBox = styled.div`
    ul{
        display:flex;
        justify-content:space-between;
        gap: 1vw;
        margin-bottom:20px;
        
        li{
            flex:1;
            .selectedDate{
                transition: var(--transition03s); 
                color: var(--textHeadingWhite);
                background:var(--backgroundGreen);
                border:1px solid transparent;
            }
        }
    }
    
    .buttons{
        display:flex;
        justify-content:space-between;

        img{
            width:16px;
        }
            
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
     
    @media only screen and (min-width: ${mobile}) {
        flex-direction:column;    
        .searchBox{
            input{
                min-height:30px;
                margin-block:10px;
            }
        }
    }
    @media only screen and (min-width: ${tablet}) {
        flex-direction:row;    
        .searchBox{
            text-align:right;
            input{
                min-height:45px;
                margin-block:0px;
            }
        }
    }
   
`

export const SelectionBox = styled.div`
    display:flex;
    justify-content:left;
    align-items:center;
    flex-wrap:wrap;
    gap: 1.3vw;
        
    div{
        flex:1;
    }
`

export const SelectionButton = ({name}) => {
    const [selected, setSelected] = useState(false)
    
    return <WhiteIconButton selected={selected} onClick={() => setSelected(!selected)}>
        <span>{name}</span>
        <img src={icons.arrowDown} alt="" width={"14"} height={""}/>
    </WhiteIconButton>
}

export const CardsBox = styled.div`
    display:grid;
    gap:6vw 1.8vw;
    position:relative;
    @media only screen and (min-width: ${mobile}) {
        grid-template-columns:1fr;
    }
    @media only screen and (min-width: ${mobileMedium}) {
        grid-template-columns:1fr 1fr;
    }
    @media only screen and (min-width: ${tablet}) {
        grid-template-columns:1fr 1fr 1fr;
    }
    @media only screen and (min-width: ${laptop}) {
        grid-template-columns:1fr 1fr 1fr 1fr;
    }
    @media only screen and (min-width: ${desktop}) {
    }
`

export const H6M = styled(H4)`
    font-family:${fonts.poppinsMedium};
    font-weight:500;

`
