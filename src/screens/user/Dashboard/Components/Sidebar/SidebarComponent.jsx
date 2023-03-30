import { PrimaryButton } from "src/components";
import styled from "styled-components";

export const SidebarBtn = styled(PrimaryButton)`
  padding: 10px;
  max-width: 137px;
  min-width: 90px;
  color: #3c3f46;
  border-radius: 0px;
  background-color: #ffffff;
  text-align: left;
  list-style-type: none;
  &:hover {
    transition: var(--transition03s);
    background: var(--backgroundGreenHover);
    color: #ffffff;
  }
  span {
    font-size: clamp(0.625rem, 0.5rem + 0.7143vw, 1.125rem);
    text-align: left;
  }
`;

export const SideBarWrapper =styled.section`
padding-top:40px;
display:flex;
flex-direction:column;
gap:1rem;
`