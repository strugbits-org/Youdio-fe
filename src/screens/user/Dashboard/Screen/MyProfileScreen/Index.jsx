import React, { useEffect } from "react";
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
    <div>
      <ProfileForm user={user} content={content} />
    </div>
  );
};

export default MyProfile;
