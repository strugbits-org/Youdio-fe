import React from "react";
import { Heading, Heading2 } from "src/screens/user/Dashboard/Components/Heading";
import { Wrapper } from "src/screens/user/Dashboard/Components/Wrapper";
import Women from "src/assets/sample/women.png";
import {H5 } from "src/components";
import {
  CancelButton,
  SaveButton,
  Box3,
  HorizontalLine2,
  Box4,
  ProfileInput,
  ProfileLabel,
  ProfileContainer,
  FormRow2,
} from "./ProfileComponent";

import Sidebar from "src/screens/user/Dashboard/Components/Sidebar/Index";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { profileScreenStaticContent as content } from "./Constant";

const MyProfile = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Wrapper >
      <div className="section">
       <div className="membership_top_div">
      <Heading>{content.profileH1}</Heading>
      <HorizontalLine2 />
      </div>
      <div className="whole_box">
        <Sidebar />
        <ProfileContainer>
          <Box4>
            <div className="image-container">
              <img
                className="profile-img"
                src={Women}
                alt="profile-pic"
                style={{ width: "100%", maxWidth: "350px", minWidth: "150px" }}
              />
            </div>
            <div>
              <Heading2>{content.profileH2}</Heading2>
              <H5 style={{ color: "#999999" }}>{content.profileH5}</H5>
            </div>
          </Box4>
          <HorizontalLine2 />
  <form>

          <FormRow2>
            <ProfileLabel>{content.name}</ProfileLabel>
            <ProfileInput placeholder="Alexa Morgan" required />
          </FormRow2>
          <HorizontalLine2 />

          <FormRow2>
            <ProfileLabel>{content.nickName}</ProfileLabel>
            <ProfileInput placeholder="Alexa" required/>
          </FormRow2>
          <HorizontalLine2 />

          <FormRow2>
            <ProfileLabel>{content.email}</ProfileLabel>
            <ProfileInput placeholder="AlexaMorgan@gmail.com" required/>
          </FormRow2>
          <HorizontalLine2 />
          
          <FormRow2>
            <ProfileLabel>{content.password}</ProfileLabel>
            <FormControl
              sx={{ width: "100%", minWidth: "10ch", maxWidth: "63ch" }}
            > 
               <OutlinedInput
                sx={{
                  height: "5ch",
                  border: "1px solid ##5b5b5b",
                  borderRadius: "0px",
                }}
                id="outlined-basic"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </FormRow2>

          <Box3>
            <div className="btn_gap">
              <CancelButton>{content.cancelBtn}</CancelButton>
              <SaveButton>{content.saveBTn}</SaveButton>
            </div>
          </Box3>
          </form>

        </ProfileContainer>

      </div>
      </div>

    </Wrapper>
  );
};

export default MyProfile;
