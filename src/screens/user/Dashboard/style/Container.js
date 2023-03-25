import styled from "styled-components";
import { layout } from "src/helpers";

const { mobile, tablet, laptop, desktop } = layout

export const Container = styled.section`
    padding-block: ${({ paddingBlock }) => paddingBlock ? paddingBlock : '40px'};


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