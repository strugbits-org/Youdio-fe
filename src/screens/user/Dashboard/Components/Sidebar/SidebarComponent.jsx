import { PrimaryButton } from "src/components";
import styled from "styled-components";

export const SidebarBtn =styled(PrimaryButton)`

width: 137px;
color: #3C3F46;
border-radius:0px;
background-color: #FFFFFF;
&:hover{
        transition: var(--transition03s); 
        background:var(--backgroundGreenHover);
        color:#ffffff
    }

`
