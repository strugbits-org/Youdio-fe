import { Input, Label, PrimaryButton } from "src/components";
import { HorizontalLine } from "src/components/Footer/footerComponents";
import { Box } from "src/screens/user/Dashboard/Screen/MembershipScreen/MembershipScreenComponent";
import Camera from "src/assets/icons/camera.png";
import styled from "styled-components";
import { Container } from "../../Components/Container";

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
`;

export const Box2 = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
  .image-container {
    position: relative;
  }

  .image-container::after {
    content: "";
    position: absolute;
    bottom: 10px;
    right: 50px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-image: url(${Camera});
  }
  .image-container::after {
    background-size: cover;
  }
`;

export const CancelButton = styled(PrimaryButton)`
  color: black;
  max-width: 200px;
  min-width: 100px;
  border: 1px solid #E6E7E9;
  background-color: #ffff;
  border-radius: 0px;
`;

export const SaveButton = styled(PrimaryButton)`
  color: black;
  max-width: 200px;
  min-width: 100px;
  border: 1px solid #FFE7DA;
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
