import styled from "styled-components";

const Section = styled.section`
    background: #ffffff;
    min-height: 97px;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.08);
    padding-inline: 6vw;
`

const Content = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: 1fr auto 1fr ;
    place-items:center;
    border:1px solid red;
    gap:10px;

    .logo img{
        width:clamp(100px, 10vw, 189px);
    }
    `

const UL = styled.ul`
    width:auto;
    display:flex;
    align-items:center;
    justify-content:space-around;
    gap:30px;
    border:1px solid red;

`

export {
    Section,
    Content,
    UL
}
