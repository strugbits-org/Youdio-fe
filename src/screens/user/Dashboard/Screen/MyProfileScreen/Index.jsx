import React, { useEffect } from "react";
import {
  Heading,
  Heading2,
} from "src/screens/user/Dashboard/Components/Heading";
import { Wrapper } from "src/screens/user/Dashboard/Components/Wrapper";
import Women from "src/assets/sample/women.png";
import { H5 } from "src/components";
import {
  HorizontalLine2,
  Box4,
  ProfileContainer,
} from "./ProfileComponent";

import Sidebar from "src/screens/user/Dashboard/Components/Sidebar/Index";
import { profileScreenStaticContent as content } from "./Constant";
import { useSelector } from "react-redux";
import ProfileForm from "./ProfileForm";
import useFetch from "src/features/hooks/useFetch";
import { setUser } from "src/features/userSlice";


const MyProfile = () => {
  const { fetchData } = useFetch();

  const { user } = useSelector((state) => state.user);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchData("user/user-profile", setUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
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
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                    minWidth: "150px",
                  }}
                />
              </div>
              <div>
                <Heading2>{content.profileH2}</Heading2>
                <H5 style={{ color: "#999999" }}>{content.profileH5}</H5>
              </div>
            </Box4>
            <HorizontalLine2 />
            <ProfileForm user={user} content={content} />
          </ProfileContainer>
        </div>
      </div>
    </Wrapper>
  );
};

export default MyProfile;
