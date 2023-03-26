import { Input,Label,PrimaryButton } from "src/components";
import { HorizontalLine } from "src/components/Footer/footerComponents";
import { Box } from "src/screens/user/Dashboard/Screen/MembershipScreen/MembershipScreenComponent";
import Camera from 'src/assets/icons/camera.png';

import styled from "styled-components";

export const ProfileInput = styled(Input)`
  max-width: 438px;
`;
export const ProfileLabel = styled(Label)`
  min-width: 100px;
  display:flex;
  align-items: center;
`;

export const Box2 = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

`;
export const Box3 = styled.div`
.btn_gap{
    display: flex;
    flex-direction: row;
    gap:1rem;
}
`;

export const Box4 = styled(Box)`
  align-items: center;
  gap: 2rem;
  display: flex;
  flex-wrap: wrap;
.image-container{
  position: relative;
}
.image-container img {
  width: 100%;
}
.image-container::after {
  content: "";
  position: absolute;
  bottom: 10px;
  right: 50px;
  width: 50px;
  height: 50px;
   cursor: pointer;
  background-image: url(${Camera})
}
.image-container::after {
  background-size: cover;
}
  /* .profile-img {
    max-width: 350px;
    min-width: 120px;
    max-height: 350px;
    min-height: 120px;
    position:relative;
  } */
  .profile-icon{
  }
`;

export const CancelButton = styled(PrimaryButton)`
  color: black;
  width: 200px;
  border: 1px solid;
  background-color: #ffff;
`;

export const SaveButton = styled(PrimaryButton)`
  color: black;
  width: 200px;
  background-color: #ffe7da;
`;

export const HorizontalLine2 = styled(HorizontalLine)`
  background-color: #e6e6e6;
`;
