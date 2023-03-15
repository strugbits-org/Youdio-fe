import styled from "styled-components";
import { fonts } from "src/helpers";

const { poppinsRegular } = fonts

export const Input = styled.input`
    width: 100%;
    /* max-width:438px; */
    height:45px;
    /* background:url(${({ isIcon }) => isIcon});
    background-repeat:no-repeat;
    background-size:1em;
    background-position-x: 410px;
    background-position-y: center; */
    color: var(--backgroundGrey);
    border-radius: 7px;
    outline: none;
    font-size: .8em;
    padding-left: 16px;
    padding-right: 48px;
    font-family: ${poppinsRegular};
    border: ${props => props.err ? '1px solid red' : '1px solid var(--backgroundGrey)'};
    &:hover{
        border-color:${props => props.err ? 'red' : 'blue'};
    }
    
`
export const InputIcon = styled.input`
    width: 100%;
    max-width:384px;
    min-height:45px;
    background:url(${({ isIcon }) => isIcon ? isIcon : ""});
    background-repeat:no-repeat;
    background-size:16px;
    background-position-x: 95%;
    background-position-y: center;
    color: var(--backgroundGrey);
    border-radius: 0px;
    outline: none;
    font-size: 16px;
    padding-left: ${({lefIcon }) => lefIcon ? "48px" : "16px"};
    padding-right: ${({ rightIcon }) => rightIcon ? "48px" : "16px"};
    font-family: ${poppinsRegular};
    border: 1px solid var(--backgroundGrey);
    &:hover,&:focus{
        border-color: #1f1f1f;
    }
    
`

export const Error = styled.div`
    width: inherit;
    color: red;
    font-size: .8em;
    text-align:left;
    padding-right: 2px;
    font-family: ${poppinsRegular};
    `

export const Label = styled.label`
    font-family: ${poppinsRegular};

`
