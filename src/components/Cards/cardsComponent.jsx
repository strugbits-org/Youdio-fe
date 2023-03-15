import styled from "styled-components";

import { layout } from "src/helpers";

const { mobile, tablet, laptop } = layout

export const Card = styled.div`
    /* flex:1; */
    flex-basis:clamp(280px, 20vw, 392px);
`

export const CardMedia = styled.div`
    position:relative;
    margin-bottom:19px;
    @media only screen and (min-width: ${mobile}) {
        img{
            max-height: 300px;
            object-fit:cover;
            object-position:center;
        }
    }
    @media only screen and (min-width: ${tablet}) {
        img{
            max-height: initial;
            object-fit:initial;
            object-position:initial;
        }
    }
    
`

export const Tag = styled.span`
    background: var(--backgroundGreen);
    color:var(--textHeadingWhite);
    padding:.5vw 1.5vw;
    top:0px;
    left:0px;
    position:absolute;
`

export const CardContent = styled.div`
    .timeRow{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:10px;
        div{
            min-width:66px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:10px;
        }

    }

    h5{
        width:95%;
        margin-bottom:14px;
    }

    .profileRow{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-wrap:wrap;
        gap:1vw;
        
        .profileBox{
            display:flex;
            align-items:center;
            gap:13px;
        }
        .intensityBox{
            flex:1;
            align-items:center;
            justify-content:right;
            display:flex;
            gap:10px;
        }
    }

`

export const DateTag = styled.div`
    background:var(--backgroundGreen);
    color:white;
    display:grid;
    gap:5px;
    text-align:center;
    position:absolute;
    
    hr{
        width:100%;
        height:2px;
        border:none;
        background-color:var(--textHeadingWhite);
    }

    @media only screen and (min-width: ${mobile}) {
        min-width:20px;
        border-radius:0px 6px 6px 0px;
        padding: 1.5vw 3vw;
        grid-template-columns:1fr 10px 1fr;
        min-height:20px;
        transform:translate(-4vw, -125% );

        h4, h6{
            font-size:105%;
        }
        hr{
            width:2px;
            height:100%;
            margin-inline:auto;
        }
    }
    @media only screen and (min-width: ${tablet}) {
        grid-template-columns:1fr 10px 1fr;
        transform:translate(-7vw, -125% );
        h4, h6{
            font-size:115%;
        }
    }
    @media only screen and (min-width: ${laptop}) {
        min-width:78px;
        border-radius:10px;
        padding: .5vw .9vw;
        grid-template-columns:initial;
        min-height:78px;
        transform:translate(-100px, 0px );
        h4, h6{
            font-size:initial;
        }
        hr{
            width:100%;
            height:2px;
            margin-inline:initial;
        }
    }
`
    