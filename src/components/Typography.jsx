import styled from "styled-components";

import { fonts } from "src/helpers";

const { poppinsSemiBold, poppinsRegular } = fonts

const H1 = styled.h1`
    font-family: ${poppinsSemiBold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(36px, 2.5vw, 54px)"};
`;

const H2 = styled.h2`
    font-family: ${poppinsSemiBold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(32px, 2.2vw, 46px)"};
`;

const H3 = styled.h3`
    font-family: ${({fontFamily}) => fontFamily ? fontFamily : poppinsRegular};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(18px, 1.2vw, 24px)"};
`;

const H4 = styled.h4`
    font-family: ${({fontFamily}) => fontFamily ? fontFamily : poppinsRegular};;
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(14px, 1vw, 18px)"};
`;

const H5 = styled.h5`
    font-family: ${poppinsSemiBold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(18px, 1.2vw, 24px)"};
`;

const H6 = styled.h6`
    font-family: ${({fontFamily}) => fontFamily ? fontFamily : poppinsSemiBold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(14px, 1vw, 18px)"};
`;

const P1 = styled.p`
    font-family: ${poppinsRegular};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(18px, 1.1vw, 22px)"};
`

const P2 = styled.p`
    font-family: ${poppinsRegular};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(14px, 1vw, 18px)"};
`

const P3 = styled.p`
    font-family: ${({fontFamily}) => fontFamily ? fontFamily : poppinsRegular};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "clamp(12px, .7vw, 14px)"};
`

export {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P1,
    P2,
    P3
}