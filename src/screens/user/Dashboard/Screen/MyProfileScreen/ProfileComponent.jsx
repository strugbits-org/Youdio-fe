import { Input, Label, PrimaryButton } from "src/components";
import { HorizontalLine } from "src/components/Footer/footerComponents";
import { Box } from "src/screens/user/Dashboard/Screen/MembershipScreen/MembershipScreenComponent";
import Camera from "src/assets/icons/camera.png";
import styled from "styled-components";
import { Container } from "../../Components/Container";
// import { layout } from "src/helpers";

// const { mobile, tablet, desktop ,laptop} = layout

export const ProfileInput = styled(Input)`
  max-width: 541px;
  min-width: 80px;
  border-radius: 0px;
`;
export const ProfileLabel = styled(Label)`
  min-width: 100px;
  max-width: 541px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const Box3 = styled.div`
  .btn_gap {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const Box4 = styled(Box)`
  align-items: center;
  gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  padding-block: 0px 50px;
  .image-container {
    position: relative;

    img{
      width: clamp(140px, 18vw, 240px);
      height: clamp(140px, 18vw, 240px);
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
      bottom: 1vw;
      right: 1vw;
      width: 50px;
      height: 50px;
      cursor: pointer;
      background-image: url(${Camera});
      background-size: cover;
    }
    /* .userImage */
  }
`;
export const FormRow2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-block: 50px;
  justify-content: space-between;
`;

export const CancelButton = styled(PrimaryButton)`
  color: black;
  max-width: 200px;
  min-width: 100px;
  border: 1px solid #e6e7e9;
  background-color: #ffff;
  border-radius: 0px;
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
