import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";
import { register } from "src/features/userSlice";

import {
  FieldPassword,
  FieldInput,
  PrimaryButton,
  H1,
  P2,
} from "src/components";
import { regsiterFormValidate } from "src/helpers/forms/validateForms";
import { regsiterContent } from "./content";
import { contentTranslator } from "src/helpers/translator";
import { path } from "src/helpers";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  background: #fff;
  height: 100vh;
  display: grid;
  place-content: center;
  .form {
    width: 474px;
    h1,
    p {
      text-align: center;
    }
  }
`;
const FormRow = styled.div`
  margin-bottom: 35px;
`;

function Register() {
  const language = useSelector((state) => state.language.lang);
  const [content, setContent] = useState(regsiterContent);

  const { isLoading, errorMessage, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    contentTranslator({
      staticContent: regsiterContent,
      contentToTranslate: content,
      setContent,
      language,
    });
  }, [language, content]);

  useEffect(() => {
    errorMessage &&
      toast.error(errorMessage, {
        position: "top-right",
      });
      user !== null && toast.success("Registered Successfully", {
        position: "top-right",
      }); 
  }, [errorMessage, user]);

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
            console.log(data);
            // setLoader(true);
            dispatch(register({ data }));
          }}
        >
          {(formik) => (
            <div>
              <Form autoComplete="off">
                {" "}
                {/*Formik Form Import from Formik*/}
                <H1>{content.signUp}</H1>
                <P2>{content.signUpLine}</P2>
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
                  <PrimaryButton type="submit" disabled={isLoading}>
                    {content.btnSignup}
                  </PrimaryButton>
                </FormRow>
                <FormRow>
                  <p>
                    {content.ifYouHave}{" "}
                    <NavLink to={path.signIn}>{content.signIn}</NavLink>
                  </p>
                </FormRow>
              </Form>
            </div>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </Container>
  );
}

export default Register;
