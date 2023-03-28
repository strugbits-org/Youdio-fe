import styled from "styled-components";
import { fonts } from "src/helpers";

const { poppinsSemiBold } = fonts

export const Heading = styled.h1`
    font-family: ${poppinsSemiBold};
    font-size: clamp(1.125rem, 0.6875rem + 2.5vw, 2.875rem); //font size 46
    padding-block: ${({ paddingBlock }) => paddingBlock ? paddingBlock : '20px'};
    color: #1F1F1F;

`

export const Heading2 = styled.h2`
    font-family: ${poppinsSemiBold};
    font-size: clamp(1.125rem, 0.7813rem + 1.9643vw, 2.5rem); //font size 40
    color: #1F1F1F;
    
`


export const Heading3 = styled.h3`
    font-family: ${poppinsSemiBold};
    font-size: clamp(0.875rem, 0.7188rem + 0.8929vw, 1.5rem); //font size 24
    color: #1F1F1F;
    
   
`

