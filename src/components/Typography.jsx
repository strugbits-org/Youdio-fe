import styled from "styled-components";
import { fonts } from "../helpers/constant";

const { poppinsSemiBold, poppinsRegular } = fonts

const H1 = styled.h1`
    font-family: ${poppinsSemiBold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "54px"};
`;

const H2 = styled.h2`
    font-family: ${poppinsSemiBold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "46px"};
`;

const H3 = styled.h3`
    font-family: ${({fontFamily}) => fontFamily ? fontFamily : poppinsRegular};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "24px"};
`;

const H4 = styled.h4`
    font-family: ${({fontFamily}) => fontFamily ? fontFamily : poppinsRegular};;
    font-size: ${({ fontSize }) => fontSize ? fontSize : "18px"};
`;

const H5 = styled.h5`
    font-family: ${poppinsSemiBold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "24px"};
`;

const H6 = styled.h6`
    font-family: ${({fontFamily}) => fontFamily ? fontFamily : poppinsSemiBold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "18px"};
`;

const P1 = styled.p`
    font-family: ${poppinsRegular};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "22px"};
`

const P2 = styled.p`
    font-family: ${poppinsRegular};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "18px"};
`

const P3 = styled.p`
    font-family: ${({fontFamily}) => fontFamily ? fontFamily : poppinsRegular};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "14px"};
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