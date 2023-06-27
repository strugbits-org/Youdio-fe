import React, { useRef } from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";

import { FieldInput, FieldPassword } from "src/components";
import {
  userFormValidate,
} from "src/helpers/forms/validateForms";
import { SaveButton, Box3 } from "./ProfileComponent";
import useFetch from "src/features/hooks/useFetch";
import { setUser } from "src/features/userSlice";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Heading2 } from "src/screens/user/Dashboard/Components/Heading";
import { H5 } from "src/components";
import { Box4 } from "./ProfileComponent";
import userIcon from "src/assets/icons/user.png"

const FormRow = styled.div`
  margin-bottom: 20px;
`;

function ProfileForm({ user, content }) {
  const { loading, error, success, patchData } = useFetch();
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

  const handleSubmit = (data) => {
    // const formData = new FormData();
    // Object.keys(data).forEach((key) => formData.append(key, data[key]));
    patchData("user/update-profile", data, setUser, resetFormValues);
  };

  const resetFormValues = () => {
    const formik = formikRef.current
    formik.setFieldValue('userIamge', "")
    formik.setFieldValue('oldPassword', "")
    formik.setFieldValue('newPassword', "")
  }

  return (
    <React.Fragment>
      <Box4>
        <div className="image-container">
          <img
            className="profile-img"
            src={user?.userImage ? user.userImage : userIcon}
            alt="profile-pic"
          />
          <input
            id="userImage"
            name="userImage"
            type="file"
            className="userImage"
            accept="image/*"
            onChange={(e) =>
              formikRef.current.setFieldValue("userImage", e.target.files[0])
            }
          />
        </div>
        <div>
          <Heading2>{user.name}</Heading2>
          <H5 style={{ color: "#999999" }}>{user.nickName}</H5>
        </div>
      </Box4>

      <Formik
        initialValues={{
          name: user.name,
          nickName: user.nickName,
          userEmail: user.email,
          userImage: "",
          oldPassword: "",
          newPassword: "",
        }}
        validationSchema={userFormValidate}
        onSubmit={handleSubmit}
        innerRef={formikRef}
      >
        {(formik) => (
          <Form>
            <FormRow>
              <FieldInput
                label={content.name}
                id="name"
                name="name"
                type="text"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            {/* <HorizontalLine2 /> */}

            <FormRow>
              <FieldInput
                label={content.nickName}
                id="nickName"
                name="nickName"
                type="text"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            {/* <HorizontalLine2 /> */}

            <FormRow>
              <FieldInput
                label={content.email}
                id="userEmail"
                name="userEmail"
                type="email"
                readOnly="readonly"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            {/* <HorizontalLine2 /> */}

            <FormRow>
              <FieldPassword
                label={content.currentPassword}
                id="oldPassword"
                name="oldPassword"
                placeholder="Type your current password"
                style={{ fontSize: "16px" }}
              />
            </FormRow>

            <FormRow>
              <FieldPassword
                label={content.newPassword}
                id="newPassword"
                name="newPassword"
                placeholder="Type your new password"
                style={{ fontSize: "16px" }}
                disabled={formik.values.oldPassword ? false : true}
              />
            </FormRow>

            <Box3>
              <div className="btn_gap">
                {/* <CancelButton>{content.cancelBtn}</CancelButton> */}
                <SaveButton type="submit" disabled={loading}>
                  {content.saveBTn}
                </SaveButton>
              </div>
            </Box3>
          </Form>
        )}
      </Formik>
      <ToastContainer />
      {/* {error && } */}
    </React.Fragment>
  );
}

export default ProfileForm;
