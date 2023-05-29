import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";

import {
  FieldPassword,
  FieldInput,
  PrimaryButton,
  H1,
  P2,
  P1,
} from "src/components";
import { loginFormValidate } from "src/helpers/forms/validateForms";
import { loginContent } from "./content";
import { contentTranslator } from "src/helpers/translator";
import { path } from "src/helpers";

import { setUserAuth } from "src/features/userSlice";
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
`

function Login() {
  const { loading, postData } = useFetch()
  const language = useSelector((state) => state.language.lang);
  const [content, setContent] = useState(loginContent);
  // const navigate = useNavigate()

  useEffect(() => {
    contentTranslator({
      staticContent: loginContent,
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
            email: "hamza@gmail.com",
            password: "1234567",
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
                <H1>{content.signIn}</H1>
                <CustomP2>{content.signInLine}</CustomP2>
                <FormRow>
                  <FieldInput
                    label={content.email}
                    id="loginEmail"
                    autofill
                    name="email"
                    type="email"
                    placeholder={content.emailPlaceHolder}
                    style={{ fontSize: "16px" }}
                  />
                </FormRow>
                <FormRow>
                  <FieldPassword
                    label={content.password}
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
                    {content.btnLogin}
                  </PrimaryButton>
                  <P2 className="txtForgotPassword">
                    <NavLink to={path.forgotPassword}>{content.forgot}</NavLink>
                  </P2>
                </FormRow>
                <FormRow>
                  <P1>
                    {content.dontHave}{" "}
                    <NavLink className="txtSignUp" to={path.register}>
                      {content.signUp}
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
