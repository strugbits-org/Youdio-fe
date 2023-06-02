import React, { useEffect } from "react";
import {
  Heading,
} from "src/screens/user/Dashboard/Components/Heading";
import { Wrapper } from "src/screens/user/Dashboard/Components/Wrapper";
import {
  HorizontalLine2,
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
            
            {/* <HorizontalLine2 /> */}
            <ProfileForm user={user} content={content} />
          </ProfileContainer>
        </div>
      </div>
    </Wrapper>
  );
};

export default MyProfile;
