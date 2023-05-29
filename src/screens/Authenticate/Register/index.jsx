import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
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
import { regsiterContent } from "./content";
import { contentTranslator } from "src/helpers/translator";
import { path } from "src/helpers";
import useFetch from "src/features/hooks/useFetch";

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

  .txtSignIn {
    color: var(--backgroundGreen);
  }
`;

const CustomP2 = styled(P2)`
  margin-bottom: 60px;
`;

function Register() {
  const { loading, postData } = useFetch()
  const language = useSelector((state) => state.language.lang);
  const [content, setContent] = useState(regsiterContent);

  useEffect(() => {
    contentTranslator({
      staticContent: regsiterContent,
      contentToTranslate: content,
      setContent,
      language,
    });
  }, [language, content]);

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
                <H1>{content.signUp}</H1>
                <CustomP2>{content.signUpLine}</CustomP2>
                <FormRow>
                  <FieldInput
                    label={content.name}
                    id="name"
                    name="name"
                    type="text"
                    placeholder={content.namePlaceholder}
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                <FormRow>
                  <FieldInput
                    label={content.email}
                    id="registerEmail"
                    name="email"
                    type="email"
                    placeholder={content.emailPlaceHolder}
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                <FormRow>
                  <FieldPassword
                    label={content.password}
                    id="regsiterPassword"
                    name="password"
                    placeholder="******"
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                <FormRow>
                  <FieldPassword
                    label={content.confirmPassword}
                    id="regsiterConfirmPassword"
                    name="confirmPassword"
                    placeholder="******"
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                <FormRow>
                  <PrimaryButton type="submit" disabled={loading}>
                    {content.btnSignup}
                  </PrimaryButton>
                </FormRow>
                <FormRow>
                  <P1>
                    {content.ifYouHave}{" "}
                    <NavLink className="txtSignIn" to={path.signIn}>{content.signIn}</NavLink>
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
