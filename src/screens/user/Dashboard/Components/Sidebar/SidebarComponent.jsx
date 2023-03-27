import { PrimaryButton } from "src/components";
import styled from "styled-components";

export const SidebarBtn =styled(PrimaryButton)`

max-width: 137px;
min-width:90px;
color: #3C3F46;
border-radius:0px;
background-color: #FFFFFF;
&:hover{
        transition: var(--transition03s); 
        background:var(--backgroundGreenHover);
        color:#ffffff
    }
    span{
        font-size: clamp(0.625rem, 0.5rem + 0.7143vw, 1.125rem);
        text-align: left;
    }

`
