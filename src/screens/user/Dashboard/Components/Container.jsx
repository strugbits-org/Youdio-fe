import styled from "styled-components";
import { layout } from "src/helpers";

const { mobile, tablet, laptop, desktop } = layout

export const Container = styled.section`
    padding-block: ${({ paddingBlock }) => paddingBlock ? paddingBlock : '40px'};

@media only screen and (min-width: ${mobile}) {
        padding-left: 3vw;
    }
    @media only screen and (min-width: ${tablet}) {
        padding-left: 6vw;
    }
    @media only screen and (min-width: ${laptop}) {
        padding-left: 122px;
    }
    @media only screen and (min-width: ${desktop}) {
    }


`