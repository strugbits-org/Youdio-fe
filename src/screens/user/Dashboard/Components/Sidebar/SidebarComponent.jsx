import { PrimaryButton } from "src/components";
import styled from "styled-components";
import { layout } from "src/helpers";

const { mobile, tablet } = layout


export const WholeSidebar = styled.section`
.body_container {
  flex: 1;
}
.sidebar_container {
  height: 100vh;
  position: sticky;
  top: 0;
  left:0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.sidebar{
  display: flex;
  width: 14rem;
  height: 80%;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  padding: 15px;
  margin: 10px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(100, 165, 125, 0.37);
  backdrop-filter: blur(5.5px);
  border-radius:10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.lines_icon{
  display: flex;
  align-self: flex-end;
  border-radius: 5px;
}

/* .profile{
display: flex;
align-items: center;
border-radius: 50%;
margin-bottom: 1rem;
} */

.profile>img{
  width: 100%;
border-radius: 50%;
}

.groups{
  display: flex;
  flex-direction: column;
  width: 100%
}
.group{
  display: flex;
  flex-direction: column;
  width: 100%
}
h3{
  font-size: 1rem;
  margin: 10px 0px 10px 0px
}

`


export const SidebarBtn = styled(PrimaryButton)`

  max-width: 137px;
  min-width: 90px;
  color: #3c3f46;
  border-radius: 0px;
  background-color: transparent;
  text-align: left;
  list-style-type: none;

  &:hover{
    color:#ffffff
  }
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
  

    
    
  
`;

export const SideBarWrapper = styled.nav`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .active {
    color: #ffffff;
    background: var(--backgroundGreenHover);
    cursor: pointer;
    transition: var(--transition03s);
    font-size: 18px;

    span{
      color: #ffffff
    }
  }

  @media only screen and (max-width: ${mobile}) {
      display:none
    }
    @media only screen and (max-width: ${tablet}) {
       display:none

    }


    /* &:hover {
      transition: var(--transition03s);
      background: var(--backgroundGreenHover);
      color: #ffffff;
    } */
`;
