import styled from "styled-components";

export const Card = styled.div`
    /* flex:1; */
    flex-basis:clamp(280px, 20vw, 392px);
`

export const CardMedia = styled.div`
    position:relative;
    margin-bottom:19px;
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
min-width:78px;
    background:var(--backgroundGreen);
    border-radius:10px;
    padding: .5vw .9vw;
    color:white;
    display:grid;
    gap:5px;
    min-height:78px;
    text-align:center;
    position:absolute;
    transform:translate(-100px, 0px );
    
    hr{
        width:100%;
        height:2px;
        border:none;
        background-color:var(--textHeadingWhite);
    }
`