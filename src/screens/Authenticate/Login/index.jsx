import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { NavLink, useLocation } from "react-router-dom";

import {
  FieldPassword,
  FieldInput,
  PrimaryButton,
  H1,
  P2,
  P1,
} from "src/components";
import { loginFormValidate } from "src/helpers/forms/validateForms";
import { path } from "src/helpers";

import { setUserAuth } from "src/features/userSlice";
import useFetch from "src/features/hooks/useFetch";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  background: #fff;
  margin-block: 24px;
  min-height: 60dvh;
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

function Login() {
  const { loading, postData } = useFetch();
  const { state } = useLocation();
  const { t } = useTranslation();

  return (
    <Container>
      <div className="form">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginFormValidate}
          onSubmit={(data) => {
            postData("login", data, setUserAuth);
          }}
        >
          {(formik) => (
            <div>
              <Form autoComplete="off">
                {" "}
                {/*Formik Form Import from Formik*/}
                <H1>{t("login.title")}</H1>
                <CustomP2>{t("login.subTitle")}</CustomP2>
                <FormRow>
                  <FieldInput
                    label={t("common.emailFieldTitle")}
                    id="loginEmail"
                    name="email"
                    type="email"
                    placeholder={t("common.emailFieldPlaceholder")}
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                <FormRow>
                  <FieldPassword
                    label={t("common.passwordFieldTitle")}
                    id="loginPassword"
                    name="password"
                    placeholder="******"
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                {/* <FormRow className='rememberBox'>
                  <input
                    type="checkbox"
                    id='rememberCheckbox'
                    name='rememberMe'
                  />
                  <Label htmlFor='rememberCheckbox'>{content.remember}</Label>
              </FormRow> */}
                <FormRow>{/* <P2>Message</P2> */}</FormRow>
                <FormRow>
                  <PrimaryButton type="submit" disabled={loading}>
                    {t("common.loginText")}
                  </PrimaryButton>
                  <P2 className="txtForgotPassword">
                    <NavLink to={path.forgotPassword}>
                      {t("login.forgotPassword")}
                    </NavLink>
                  </P2>
                </FormRow>
                <FormRow>
                  <P1>
                    {t("login.question.text")}{" "}
                    <NavLink
                      className="txtSignUp"
                      to={path.register}
                      state={state}
                    >
                      {t("login.question.linkText")}
                    </NavLink>
                  </P1>
                </FormRow>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default Login;
