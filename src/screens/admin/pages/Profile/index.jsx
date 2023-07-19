import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileForm from "src/screens/user/Dashboard/Screen/MyProfileScreen/ProfileForm";
import useFetch from "src/features/hooks/useFetch";
import { setUser } from "src/features/userSlice";

const Profile = () => {
  const { fetchData } = useFetch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    fetchData("user/user-profile", setUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ProfileForm user={user}/>
    </div>
  );
};

export default Profile;
