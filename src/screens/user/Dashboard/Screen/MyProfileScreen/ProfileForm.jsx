import React from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";

import { FieldInput, FieldPassword } from "src/components";
import { userFormValidate } from "src/helpers/forms/validateForms";
import {
  SaveButton,
  Box3,
} from "./ProfileComponent";
import useFetch from "src/features/hooks/useFetch";
import { setUser } from "src/features/userSlice";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Heading2 } from "src/screens/user/Dashboard/Components/Heading";
import Women from "src/assets/sample/women.png";
import { H5 } from "src/components";
import { Box4 } from "./ProfileComponent";

const FormRow = styled.div`
  margin-bottom: 20px;
`;

function ProfileForm({ user, content }) {
  const { loading, error, success, patchData } = useFetch();
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

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: user.name,
          nickName: user.nickName,
          userEmail: user.email,
          oldPassword: "",
          newPassword: "",
        }}
        validationSchema={userFormValidate}
        onSubmit={(data) => {
          patchData("user/update-profile", data, setUser);
        }}
      >
        {(formik) => (
          <Form>
            <FormRow>
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
              {/* <FieldInput
                id="userImage"
                name="userImage"
                type="file"
                className="userImage"
                
              /> */}
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
                <SaveButton type="submit" disabled={loading}>{content.saveBTn}</SaveButton>
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
