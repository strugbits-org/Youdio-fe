import styled from "styled-components"

import { layout } from "src/helpers";

const { mobile, tablet, laptop } = layout

export const PrimaryButton = styled.button`
    border:none;
    outline:none;
    width: 100%;
    min-height: 45px;
    border-radius:7px;
    color: var(--textHeadingWhite);
    background:var(--backgroundGreen);
    cursor:pointer;
    transition: var(--transition03s);
    font-size:18px;
     
    
    &:hover{
        transition: var(--transition03s); 
        background:var(--backgroundGreenHover);
    }

  
`

export const PrimaryWhiteButton = styled.button`
    border:1px solid var(--textHeadingBlack);
    outline:none;
    width:100%;
    color: var(--textHeadingBlack);
    background: var(--backgroundLightGrey);
    cursor:pointer;
    transition: var(--transition03s);
    
    &:hover{
        transition: var(--transition03s); 
        color: var(--textHeadingWhite);
        background:var(--backgroundGreen);
        border:1px solid transparent;
    }

    @media only screen and (min-width: ${mobile}) {
        min-height: 30px;
        font-size: 12px;
        padding: 4px 5px;
        
    }
    @media only screen and (min-width: ${tablet}) {
        min-height: 30px;
        font-size: 13px;
        padding: 5px 8px;
        
    }
    @media only screen and (min-width: ${laptop}) {
        min-height: 45px;
        font-size: clamp(15px, 0.9vw, 18px);
        padding: 0px;
    }

`

export const IconButton = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 10px;
    outline:none;
    border:none;
    background: transparent;
    cursor:pointer;
    /* transition:var(--transition03s); */
    font-size:16px;
    padding:5px;
    /* filter:invert(); */
    
    &:disabled{
        img{
            filter:invert(0.9);
        }
        cursor:initial; 
        /* transform:scale(100%); */
    }

    &:hover{
        /* transform:scale(102%); */
        /* transition:var(--transition03s); */
    }
    `

export const WhiteIconButton = styled(IconButton)`
    border:1px solid var(--textHeadingBlack);
    border-radius:100px;
    gap: 1vw;
    transition:var(--transition03s);
    background: ${({selected}) => selected ? `var(--textHeadingBlack)` : 'transparent' };
    color: ${({selected}) => selected ? `var(--textHeadingWhite)` : `var(--textHeadingBlack)` };
    
    
    img{
        transition:var(--transition03s);
        filter:${({ selected }) => selected ? 'invert()' : 'initial'};
    }

    &:hover{
        background: var(--textHeadingBlack);
        color: var(--textHeadingWhite);
        transition:var(--transition03s);
        img{
            filter:invert();
            transition:var(--transition03s);
        }
    }

    @media only screen and (min-width: ${mobile}) {
        min-width: 50px;
        min-height: 30px;
        font-size: 12px;
        padding: 5px 10px;
        img{
            width:12px;
        }
    }

    @media only screen and (min-width: ${tablet}) {
        min-width: 80px;
        min-height: 30px;
        font-size: 13px;
        padding: 5px 8px;
        img{
            width:15px;
        }
    }

    @media only screen and (min-width: ${laptop}) {
        min-width: clamp(100px, 10vw, 200px);
        min-height: 35px;
        font-size: clamp(13px, 0.9vw, 18px);
        padding: 0px;
        img{
            width: clamp(12px, 0.9vw, 16px);
        }
    }
    
`
