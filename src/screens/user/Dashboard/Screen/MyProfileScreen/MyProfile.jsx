import React from "react";
import { Container } from "src/screens/user/Dashboard/style/Container";
import { Heading, Heading2 } from "src/screens/user/Dashboard/style/Heading";
import { Wrapper } from "src/screens/user/Dashboard/style/Wrapper";
import Women from "src/assets/sample/women.png";

import { H5 } from "src/components";
import {
  Box2,
  CancelButton,
  SaveButton,
  Box3,
  HorizontalLine2,
  Box4,
  ProfileInput,
  ProfileLabel,
} from "./ProfileComponent";

import Sidebar from "src/screens/user/Dashboard/Components/Sidebar/Sidebar"

const MyProfile = () => {
  return (
    <Wrapper>
      <Heading>Profile</Heading>
      <HorizontalLine2 />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar/>
        <Container>
          <Box4>
            <div className="image-container">
            <img className="profile-img" src={Women} alt="profile-pic" />
            {/* <img className="profile-icon" src={Camera}  alt="camera-icon" style={{width:"28px",height:"28px"}} /> */}

            </div>

            <div>
              <Heading2>Profile</Heading2>
              <H5 style={{ color: "#999999" }}>Your Nickname here</H5>
            </div>
          </Box4>
          <HorizontalLine2 />

          <Box2>
            <ProfileLabel>Full Name</ProfileLabel>
            <ProfileInput placeholder="Alexa Morgan" />
          </Box2>
          <HorizontalLine2 />

          <Box2>
            <ProfileLabel>Nick Name</ProfileLabel>
            <ProfileInput placeholder="Alexa" />
          </Box2>
          <HorizontalLine2 />

          <Box2>
            <ProfileLabel>Email</ProfileLabel>
            <ProfileInput placeholder="AlexaMorgan@gmail.com" />
          </Box2>
          <HorizontalLine2 />

          <Box2>
            <ProfileLabel>Password</ProfileLabel>
            <ProfileInput placeholder="*************" />
          </Box2>

          <Box3>
            <div className="btn_gap">
              <CancelButton>CANCEL</CancelButton>
              <SaveButton>SAVE</SaveButton>
            </div>
          </Box3>
        </Container>
      </div>
    </Wrapper>
  );
};

export default MyProfile;