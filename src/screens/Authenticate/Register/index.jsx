import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";
import { setUserAuth } from "src/features/userSlice";

import {
  FieldPassword,
  FieldInput,
  PrimaryButton,
  H1,
  P2,
  P1,
} from "src/components";
import { regsiterFormValidate } from "src/helpers/forms/validateForms";
import { path } from "src/helpers";
import useFetch from "src/features/hooks/useFetch";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  background: #fff;
  margin-block: 24px;
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

  .txtSignIn {
    color: var(--backgroundGreen);
  }
`;

const CustomP2 = styled(P2)`
  margin-bottom: 60px;
`;

function Register() {
  const { loading, postData } = useFetch();
  const { t } = useTranslation();

  return (
    <Container>
      <div className="form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={regsiterFormValidate}
          onSubmit={(data) => {
            postData("register", data, setUserAuth);
          }}
        >
          {(formik) => (
            <div>
              <Form autoComplete="off">
                {" "}
                {/*Formik Form Import from Formik*/}
                <H1>{t("register.title")}</H1>
                <CustomP2>{t("register.subTitle")}</CustomP2>
                <FormRow>
                  <FieldInput
                    label={t("register.nameFieldTitle")}
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t("register.nameFieldPlaceholder")}
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                <FormRow>
                  <FieldInput
                    label={t("common.emailFieldTitle")}
                    id="registerEmail"
                    name="email"
                    type="email"
                    placeholder={t("common.emailFieldPlaceholder")}
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                <FormRow>
                  <FieldPassword
                    label={t("common.passwordFieldTitle")}
                    id="regsiterPassword"
                    name="password"
                    placeholder="******"
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                <FormRow>
                  <FieldPassword
                    label={t("common.confirmPasswordFieldTitle")}
                    id="regsiterConfirmPassword"
                    name="confirmPassword"
                    placeholder="******"
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                <FormRow>
                  <PrimaryButton type="submit" disabled={loading}>
                    {t("common.signupText")}
                  </PrimaryButton>
                </FormRow>
                <FormRow>
                  <P1>
                    {t("register.question.text")}{" "}
                    <NavLink className="txtSignIn" to={path.signIn}>
                      {t("register.question.linkText")}
                    </NavLink>
                  </P1>
                </FormRow>
              </Form>
            </div>
          )}
        </Formik>
      </div>
      {/* <ToastContainer /> */}
    </Container>
  );
}

export default Register;
