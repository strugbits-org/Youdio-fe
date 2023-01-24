import styled from "styled-components";
import { fonts } from "../helpers/constant";


const { poppinsRegular } = fonts

const Input = styled.input`
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
const Error = styled.div`
    width: inherit;
    color: red;
    font-size: .8em;
    text-align:left;
    padding-right: 2px;
    font-family: ${poppinsRegular};
    `

const Label = styled.label`
    font-family: ${poppinsRegular};

`



export {
    Input,
    Error,
    Label
}