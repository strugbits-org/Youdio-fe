import styled from "styled-components";

import { layout } from "src/helpers";

const { mobile, tablet, laptop, desktop } = layout
export const Section = styled.section`
    background: ${({ backgroundImage, backgroundColor }) => {
        return backgroundImage ? backgroundImage :
            backgroundColor ? backgroundColor :
                `radial-gradient(circle, rgba(240,162,204,1) 0%, rgba(255,231,218,1) 70%)`
    }};
    
    padding-block: ${({ paddingBlock }) => paddingBlock ? paddingBlock : '20px'};
    
    @media only screen and (min-width: ${mobile}) {
        padding-inline: 3vw;
    }
    @media only screen and (min-width: ${tablet}) {
        padding-inline: 6vw;
    }
    @media only screen and (min-width: ${laptop}) {
        padding-inline: 122px;
    }
    @media only screen and (min-width: ${desktop}) {
    }
`
