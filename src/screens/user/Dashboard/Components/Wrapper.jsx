import styled from "styled-components";
import { layout } from "src/helpers";

const { mobile, tablet, laptop, desktop } = layout

export const Wrapper = styled.section`
    padding-block: 1vw;
.whole_box{
display: flex;
flex-direction: row;
}

 @media only screen and (min-width: ${mobile}) {
        padding-inline: 3vw;
    }
    @media only screen and (min-width: ${tablet}) {
        padding-inline: 6vw;

    }
    @media only screen and (min-width: ${laptop}) {
        padding-inline: 42px;

    }

    @media only screen and (min-width: ${desktop}) {
        padding-inline: 122px;

    }
   

`