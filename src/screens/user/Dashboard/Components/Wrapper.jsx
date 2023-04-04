import styled from "styled-components";
import { layout } from "src/helpers";

const { mobile, tablet, laptop, desktop } = layout

export const Wrapper = styled.section`


    padding-block: 1vw;
    .section{
        width:100%;
        max-width:1175px;
        min-width:200px;
    }
.whole_box{
display: flex;
flex-direction: row;
}

.membership_top_div{
    @media only screen and (max-width: ${mobile}) {
      display:none
    }
    @media only screen and (max-width: ${tablet}) {
       display:none

    }

}

 @media only screen and (min-width: ${mobile}) {
        padding-inline: 3vw;
margin-left:4rem

    }
    @media only screen and (min-width: ${tablet}) {
        padding-inline: 6vw;
        margin-left:4rem

    }
    @media only screen and (min-width: ${laptop}) {
        padding-inline: 42px;

    }

    @media only screen and (min-width: ${desktop}) {
        padding-inline: 122px;
       

    }
   

`