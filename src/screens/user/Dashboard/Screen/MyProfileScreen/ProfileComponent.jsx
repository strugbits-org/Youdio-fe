import { PrimaryButton } from "src/components";
import { HorizontalLine } from "src/components/Footer/footerComponents";
import { Box } from "src/screens/user/Dashboard/Screen/MembershipScreen/MembershipScreenComponent";
import Camera from "src/assets/icons/camera.png";
import styled from "styled-components";
import { Container } from "../../Components/Container";
import { layout } from "src/helpers";

const { mobile, tablet} = layout


export const FormRow = styled.div`
  max-width: 959px;
  padding-block: 32px;
  display: grid;
  align-items: center;
  input {
    border-radius: 2px;
    border-color: var(--borderLightGrey);
  }
  
  @media only screen and (min-width: ${mobile}){
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: ${tablet}){
    grid-template-columns: 0.8fr 1fr;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const ProfileFormHeader = styled(Box)`
  align-items: center;
  gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  padding-block: 0px 50px;
  .image-container {
    position: relative;

    img {
      width: clamp(140px, 19vw, 350px);
      height: clamp(140px, 19vw, 350px);
      object-fit: cover;
      border-radius: 100%;
    }
  }
  .userImage {
    border: none;
    outline: none;
    color: transparent;
    width: 0px;
    height: 0px;

    &::file-selector-button {
      color: transparent;
      padding: 0;
      font-size: 0px;
      border: none;
      border-radius: 0px;
      outline: none;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 1.3vw;
      right: 1.3vw;
      width: 30px;
      height: 30px;
      cursor: pointer;
      background-image: url(${Camera});
      background-size: cover;
    }
    /* .userImage */
  }
`;

export const SaveButton = styled(PrimaryButton)`
  color: black;
  max-width: 200px;
  min-width: 100px;
  border: 1px solid #ffe7da;
  background-color: #ffe7da;
  border-radius: 0px;
`;

export const HorizontalLine2 = styled(HorizontalLine)`
  background-color: #e6e6e6;
  min-height: 1px;
`;

export const ProfileContainer = styled(Container)`
  width: 100%;
`;
