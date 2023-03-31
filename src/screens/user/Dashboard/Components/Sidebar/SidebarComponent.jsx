import { PrimaryButton } from "src/components";
import styled from "styled-components";

export const SidebarBtn = styled(PrimaryButton)`
  max-width: 137px;
  min-width: 90px;
  color: #3c3f46;
  border-radius: 0px;
  background-color: #ffffff;
  text-align: left;
  list-style-type: none;
  
  span {
    font-size: clamp(0.625rem, 0.5rem + 0.7143vw, 1.125rem);
    text-align: left;
padding: 10px;
&:hover {
    color: #ffffff;
    max-width: 137px;
  min-width: 90px;
  }
  }
  .active {
    border:none;
    outline:none;
    width: 100%;
    min-height: 45px;
    max-width: 137px;
  min-width: 90px;
    border-radius:0px;
    color: #ffffff;
   
    background: var(--backgroundGreenHover);
    
    cursor:pointer;
    transition: var(--transition03s);
    font-size:18px;
     
    padding-block: 10px;
    &:hover{
        transition: var(--transition03s); 
        background:var(--backgroundGreenHover);
        color: #ffffff;
    max-width: 137px;
  min-width: 90px;
    }
   


    span {
      font-size: clamp(0.625rem, 0.5rem + 0.7143vw, 1.125rem);
      text-align: left;
padding: 10px;

    }
    &:hover {
    transition: var(--transition03s);


  }
  }
`;

export const SideBarWrapper = styled.nav`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
