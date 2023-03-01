import styled from "styled-components";
import { fonts } from "../../helpers/constant";

const Section = styled.section`
    background: var(--textHeadingBlack);
    min-height: 97px;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.08);
    padding-inline: 0px;
`

const FooterContent = styled.div`
    padding-inline: 122px;
    min-height: 300px;
    color:white;
`

const UpperBox = styled.div`
    padding-block: 104px;
    display: grid;
    min-height: 400px;
    grid-template-columns: 1.3fr 1fr 1fr 1.3fr;
    gap: 10px;
    div{
        min-height: 100%;
        background:cyan;
    }
    `

const BottomBox= styled.div`
   .copyright{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    padding-block: 20px;
    .regular{
        font-family: ${fonts.poppinsRegular};
    }
    .medium{
        font-family: ${fonts.poppinsMedium};
    }
   }
    
`

const HorizontalLine = styled.div`
 min-height: 2px;
 background: white;
`



export {
    Section,
    FooterContent,
    UpperBox,
    BottomBox,
    HorizontalLine
}
