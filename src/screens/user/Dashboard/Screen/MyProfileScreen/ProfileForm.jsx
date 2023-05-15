import React from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";

import { FieldInput, FieldPassword } from "src/components";
import { userFormValidate } from "src/helpers/forms/validateForms";
import {
  CancelButton,
  SaveButton,
  Box3,
  HorizontalLine2,
} from "./ProfileComponent";

const FormRow = styled.div``;

function ProfileForm({ user, dispatch, content }) {
  return (
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
        // dispatch(login({ data }));
      }}
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
          <HorizontalLine2 />

          <FormRow>
            <FieldInput
              label={content.nickName}
              id="nickName"
              name="nickName"
              type="text"
              style={{ fontSize: "16px" }}
            />
          </FormRow>
          <HorizontalLine2 />

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
          <HorizontalLine2 />

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
            />
          </FormRow>

          <Box3>
            <div className="btn_gap">
              <CancelButton>{content.cancelBtn}</CancelButton>
              <SaveButton>{content.saveBTn}</SaveButton>
            </div>
          </Box3>
        </Form>
      )}
    </Formik>
  );
}

export default ProfileForm;
