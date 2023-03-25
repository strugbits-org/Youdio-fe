import styled from "styled-components";

import { layout, fonts } from "src/helpers";

const { mobile, tablet, laptop } = layout

const Section = styled.section`
    background: var(--textHeadingBlack);
    box-shadow: 0px 10px 10px rgba(0,0,0,0.08);
`

const FooterContent = styled.div`
    color:white;
    
`

const UpperBox = styled.div`
    padding-block: 5vw;
    display: grid;
    min-height: 400px;
    gap: 2.5vw;


    
    .logoBox{
        img{
            width:clamp(130px, 11vw, 228px);
            margin-bottom:30px;
        }
        p{
            max-width:372px;
        }
    }

    .quickLinks{
        h4{
            margin-bottom:16px;
            font-size:20px;
        }
        ul{
            li{
                margin-bottom:6px;
                a{
                    font-size:16px;
                }
            }
        }
        
    }
    
    .subscribeBox{
        h4{
            margin-bottom:16px;
            font-size:20px;
        }   
        input{
            border-radius:0px;
            padding:12px 1.5vw;
            margin-bottom:16px;
        }
        button{
            width:100%;
            display:flex;
            justify-content:space-between;
            background:var(--backgroundBrown);
            padding:12px 1.5vw;
        }
    }

    @media only screen and (min-width: ${mobile}) {
        grid-template-columns: 1fr;
        gap:30px;
        div:nth-of-type(2){
            order:3
        }
        div:nth-of-type(3){
            order:4
        }
        div:nth-of-type(4){
            order:4
        }
        
    }
    @media only screen and (min-width: ${tablet}) {
        grid-template-columns: 1fr 1fr;
        div:nth-of-type(2){
            order:3
        }
        div:nth-of-type(3){
            order:4
        }
        div:nth-of-type(4){
            order:2
        }
        
        
    }
    @media only screen and (min-width: ${laptop}) {
        grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
        div:nth-of-type(2){
            order:2
        }
        div:nth-of-type(3){
            order:3
        }
        div:nth-of-type(4){
            order:4
        }
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
