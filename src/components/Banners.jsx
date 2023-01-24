import styled from "styled-components";

export const Section = styled.section`
    background: ${({ backgroundImage, backgroundColor }) => {
        return backgroundImage ? backgroundImage :
            backgroundColor ? backgroundColor :
                `radial-gradient(circle, rgba(240,162,204,1) 0%, rgba(255,231,218,1) 70%)`
    }};
    padding-inline: 6vw;
    padding-block: ${({ paddingBlock }) => paddingBlock ? paddingBlock : '20px'};
    
`



