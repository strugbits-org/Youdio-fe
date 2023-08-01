import React, { useMemo, useRef, useState } from "react";
import { Formik, Form } from "formik";

import { FieldInput, FieldPassword, Label } from "src/components";
import { userFormValidate } from "src/helpers/forms/validateForms";
import {
  SaveButton,
  ProfileFormHeader,
  Buttons,
  HorizontalLine2,
  FormRow,
} from "./ProfileComponent";
import useFetch from "src/features/hooks/useFetch";
import { setUser } from "src/features/userSlice";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Heading2 } from "src/screens/user/Dashboard/Components/Heading";
import { H5 } from "src/components";
import userIcon from "src/assets/icons/user.png";
import { useImagePreview } from "src/features/hooks/useImagePreview";

function ProfileForm({ user }) {
  const { loading, error, success, patchData } = useFetch();
  const [isUploading, setIsUploading] = useState("")
  const imagePreview = useImagePreview(isUploading)
  const formikRef = useRef();
  useEffect(() => {
    error &&
      toast.error(error, {
        position: "top-right",
      });
    success &&
      toast.success("Success", {
        position: "top-right",
      });
  }, [error, success]);

  const handleSubmit = (data, action) => {
    console.log(action);
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    patchData("user/update-profile", formData, setUser, resetFormValues);
  };

  const resetFormValues = () => {
    const formik = formikRef.current;
    formik.setFieldValue("userIamge", "");
    formik.setFieldValue("oldPassword", "");
    formik.setFieldValue("newPassword", "");
  };

  const profileSrc = useMemo(() => {
    if (imagePreview) {
      return imagePreview;
    }
    if (user?.userImage) {
      return user.userImage;
    }
    return userIcon;
  }, [user, imagePreview]);

  return (
    <React.Fragment>
      <ProfileFormHeader>
        <div className="image-container">
          <img className="profile-img" src={profileSrc} alt="profile-pic" />
          <input
            id="userImage"
            name="userImage"
            type="file"
            className="userImage"
            accept="image/*"
            onChange={(e) => {
              setIsUploading(e.target.files[0]);
              formikRef.current.setFieldValue("userImage", e.target.files[0]);
            }}
          />
        </div>
        <div>
          <Heading2>{user.name}</Heading2>
          <H5 style={{ color: "#999999" }}>{user.nickName}</H5>
        </div>
      </ProfileFormHeader>

      <Formik
        initialValues={{
          name: user.name,
          nickName: user.nickName,
          userEmail: user.email,
          userImage: "",
          oldPassword: "",
          newPassword: "",
        }}
        enableReinitialize={true}
        validationSchema={userFormValidate}
        onSubmit={handleSubmit}
        innerRef={formikRef}
      >
        {(formik) => (
          <Form>
            <FormRow>
              <Label htmlFor="name">Full Name</Label>
              <FieldInput
                id="name"
                name="name"
                type="text"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <HorizontalLine2 />

            <FormRow>
              <Label htmlFor="nickName">Nick Name</Label>
              <FieldInput
                id="nickName"
                name="nickName"
                type="text"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <HorizontalLine2 />

            <FormRow>
              <Label htmlFor="userEmail">Email</Label>
              <FieldInput
                id="userEmail"
                name="userEmail"
                type="email"
                readOnly="readonly"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <HorizontalLine2 />

            <FormRow>
              <Label htmlFor="oldPassword">Current Password</Label>
              <FieldPassword
                id="oldPassword"
                name="oldPassword"
                placeholder="Type your current password"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <HorizontalLine2 />

            <FormRow>
              <Label htmlFor="newPassword">New Password</Label>
              <FieldPassword
                id="newPassword"
                name="newPassword"
                placeholder="Type your new password"
                style={{ fontSize: "16px" }}
                disabled={formik.values.oldPassword ? false : true}
              />
            </FormRow>

            <Buttons>
              <SaveButton type="submit" disabled={loading}>
                Save
              </SaveButton>
            </Buttons>
          </Form>
        )}
      </Formik>
      <ToastContainer />
      {/* {error && } */}
    </React.Fragment>
  );
}

export default ProfileForm;
