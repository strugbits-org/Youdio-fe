import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";

import { FieldInput, H1, P2, PrimaryButton } from "src/components";
import { forgotFormValidate } from "src/helpers/forms/validateForms";

import { logout } from "src/features/userSlice";
import "react-toastify/dist/ReactToastify.css";
import useFetch from "src/features/hooks/useFetch";
import { icons } from "src/helpers";

const Container = styled.div`
  background: #fff;
  height: 100vh;
  display: grid;
  place-content: center;
  padding-inline: 5vw;
  .form {
    width: 90vw;
    max-width: 474px;
    h1,
    p {
      text-align: center;
    }
  }
`;

const FormRow = styled.div`
  margin-bottom: 35px;

  .txtForgotPassword {
    color: var(--backgroundGrey);
    margin-top: 25px;
  }

  .txtSignUp {
    color: var(--backgroundGreen);
  }
`;

const CustomP2 = styled(P2)`
  margin-bottom: 60px;
`;

const CustomPrimaryButton = styled(PrimaryButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

function ForgotPassword() {
  const { loading, postData } = useFetch();

  return (
    <Container>
      <div className="form">
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={forgotFormValidate}
          onSubmit={(data) => {
            postData("forgot-password", data, logout);
          }}
        >
          {(formik) => (
            <div>
              <Form autoComplete="off">
                {/*Formik Form Import from Formik*/}
                <H1>Reset Password</H1>
                <CustomP2>
                  Lorem ipsum dolor sit amet tortor ut nulla amet dui.
                </CustomP2>
                <FormRow>
                  <FieldInput
                    label="Email"
                    id="forgotEmail"
                    autofill
                    name="email"
                    type="email"
                    placeholder="Enter E-mail address"
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                <FormRow>
                  <CustomPrimaryButton type="submit" disabled={loading}>
                    Send
                    <img src={icons.envelop} alt="envelop-icon" width="" height="" />
                  </CustomPrimaryButton>
                </FormRow>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default ForgotPassword;
