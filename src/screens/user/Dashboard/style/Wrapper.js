import styled from "styled-components";
import { layout } from "src/helpers";

const { mobile, tablet, laptop, desktop } = layout

export const Wrapper = styled.section`
    padding-block: 1vw;
    min-height:40px;


 @media only screen and (min-width: ${mobile}) {
        padding-inline: 3vw;
    }
    @media only screen and (min-width: ${tablet}) {
        padding-inline: 6vw;
    }
    @media only screen and (min-width: ${laptop}) {
        padding-inline: 8vw; 
    }

    @media only screen and (min-width: ${desktop}) {
    }
   

`