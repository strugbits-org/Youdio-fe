import styled from "styled-components"

export const PrimaryButton = styled.button`
    border:none;
    outline:none;
    width: 100%;
    height: 45px;
    border-radius:7px;
    color: var(--textHeadingWhite);
    background:var(--backgroundGreen);
    cursor:pointer;
    transition: var(--transition03s);
    font-size:20px;
     
    
    &:hover{
        transition: var(--transition03s); 
        background:var(--backgroundGreenHover);
    }
`

export const PrimaryWhiteButton = styled.button`
    border:1px solid var(--textHeadingBlack);
    outline:none;
    width:100%;
    min-height:45px;
    color: var(--textHeadingBlack);
    background: var(--backgroundLightGrey);
    cursor:pointer;
    transition: var(--transition03s);
    font-size:20px;
    
    &:hover{
        transition: var(--transition03s); 
        color: var(--textHeadingWhite);
        background:var(--backgroundGreen);
        border:1px solid transparent;
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
    font-size:18px;
    padding:5px;

    &:disabled{
        svg path{
            fill:#b6b6b6;
        }
        transform:scale(100%);
    }

    &:hover{
        transform:scale(102%);
        /* transition:var(--transition03s); */
    }
`


