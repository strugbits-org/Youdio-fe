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
    min-height:45px;
    color: var(--textHeadingBlack);
    background: var(--backgroundLightGrey);
    cursor:pointer;
    transition: var(--transition03s);
    font-size:18px;
    
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
    font-size:16px;
    padding:5px;
    
    &:disabled{
        svg path{
            fill:#b6b6b6;
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
    min-width: clamp(150px, 10vw, 200px);
    min-height: 45px;
    gap: 20px;
    transition:var(--transition03s);
    background: ${({selected}) => selected ? `var(--textHeadingBlack)` : 'transparent' };
    color: ${({selected}) => selected ? `var(--textHeadingWhite)` : `var(--textHeadingBlack)` };
    

    svg path{
        transition:var(--transition03s);
        stroke: ${({selected}) => selected ? `var(--textHeadingWhite)` : `var(--textHeadingBlack)` };
    }

    &:hover{
        background: var(--textHeadingBlack);
        color: var(--textHeadingWhite);
        transition:var(--transition03s);
        svg path{
            stroke: var(--textHeadingWhite);
            transition:var(--transition03s);
        }
    }
    
`

