import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";

import { FieldPassword, H1, P2, PrimaryButton } from "src/components";
import { resetPasswordFormValidate } from "src/helpers/forms/validateForms";

import "react-toastify/dist/ReactToastify.css";
import useFetch from "src/features/hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";

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

function ResetPassword() {
  const { loading, postData, res } = useFetch();
  const [resetToken, setResetToken] = useState("");
  const location = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (location?.token) {
      setResetToken(location.token);
    }
    if (res && res.message) navigate("/login");
  }, [resetToken, res, location, navigate]);

  return (
    <Container>
      <div className="form">
        <Formik
          initialValues={{
            newPassword: "",
          }}
          validationSchema={resetPasswordFormValidate}
          onSubmit={(data) => {
            postData("reset-password", data, undefined, resetToken);
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
                  <FieldPassword
                    label="New Password"
                    id="newPassword"
                    name="newPassword"
                    placeholder="******"
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                <FormRow>
                  <CustomPrimaryButton type="submit" disabled={loading}>
                    Reset Password
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

export default ResetPassword;
