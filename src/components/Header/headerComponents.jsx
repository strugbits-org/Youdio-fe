import styled from "styled-components";
import { layout } from "src/helpers";

const { mobile, tablet, laptop, desktop } = layout

const Section = styled.section`
    min-height:40px;
    background: #ffffff;
    padding-block: 1vw;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.08);
    display:grid;
    align-items:center;
    position:relative;
    z-index:1;

    @media only screen and (min-width: ${mobile}) {
        padding-inline: 3vw;
        .mobileMenu{
            display:initial;
        }
        .open{
            width:100%;
            ul{
                opacity:1;
                transition: 0.3s all ease-in-out;


            }

        }
        
    }
    
    @media only screen and (min-width: ${tablet}) {
        padding-inline: 6vw;
        .mobileMenu{
            display:initial;
        }
        .open{
            width:100%;
            ul{
                opacity:1;
                transition: 0.3s all ease-in-out;


            }

        }
        
    }
    
    @media only screen and (min-width: ${laptop}) {
        padding-inline: 42px;
        .mobileMenu{
            display:none;
        }
    }
    
    @media only screen and (min-width: ${desktop}) {
        padding-inline: 122px;
        padding-block: 18px;
        
    }
`

const Nav = styled.nav`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    /* grid-template-columns: 1fr auto 1fr ;
    place-items:center;
    place-content: center; */
    /* align-items:center; */
    /* border:1px solid red; */
    gap:10px;

    .logo img{
        width:clamp(100px, 10vw, 189px);
    }

    .hamburger{
        padding:0px;
    }

    @media only screen and (min-width: ${mobile}) {
       .hamburger{
        display:flex;
       }
    }
    
    @media only screen and (min-width: ${tablet}) {
        .hamburger{
         display:flex;
        }
    }
    
    @media only screen and (min-width: ${laptop}) {
        .hamburger{
            display:none;
        }
        
    }
`

const UL = styled.ul`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:${({align}) => align ? align : 'center' };
    /* border:1px solid red; */

    .langChange{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:5px;
        select{
            border:none;
            outline:none;
            cursor:pointer;
        }
    }
    @media only screen and (min-width: ${mobile}) {
        display: none;
        
    }
    
    @media only screen and (min-width: ${tablet}) {
        display: none;
        
    }
    
    @media only screen and (min-width: ${laptop}) {
        display: flex;
        gap:15px;
        font-size: 15px;
        
    }
    @media only screen and (min-width: ${desktop}) {
        gap:30px;
        font-size: 16px;
        
    }

`

const SideMenu = styled.div`
	height: 100vh;
	width: 0%;
	position: fixed;
	z-index: -1;
	top: 0px;
	right: 0;
	background-color: white;
	transition: 0.5s all ease-in-out;
	padding-top: 80px;
	text-align: center;
    display:flex;
    overflow:hidden;
    
    .links{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:15px;
        font-size:20px;
    }
    ul{
        opacity:0;
        transition: 0.3s all ease-in-out;
    }

`;

const MobileUL = styled.ul`
    display:flex;
    align-items:center;
    justify-content: center;
    gap:3vw;
    font-size:18px;
    margin-bottom:30px;


    .langChange{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:5px;
        select{
            border:none;
            outline:none;
            cursor:pointer;
        }
    }
`
export {
    Section,
    Nav,
    UL,
    SideMenu,
    MobileUL
}
