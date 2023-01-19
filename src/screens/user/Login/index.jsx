import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import { useSelector } from 'react-redux'
import { FieldPassword, FieldInput } from '../../../components/FormikInputs'
import { loginFormValidate } from '../../../helpers/forms/validateForms/index'
import { loginContent } from './content'
import { contentTranslator } from '../../../helpers/translator'
import { PrimaryButton } from '../../../components/Button'
import { Label } from '../../../components/Inputs'
import { H1, P2 } from '../../../components/Typography'



const Contaienr = styled.div`
    background:#fff;
    height:100vh;
    display:grid;
    place-content:center;
    .form{
      width:474px;
      h1,p{
        text-align:center;
      }
    }
`

const FormRow = styled.div`
  margin-bottom: 35px;
  
`



function Login() {
  const language = useSelector(state => state.language.lang)
  const [content, setContent] = useState(loginContent)


  useEffect(() => {
    contentTranslator({ staticContent: loginContent, contentToTranslate: content, setContent, language })

  }, [language])

  return (
    <Contaienr>
      <div className='form'>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginFormValidate}
          onSubmit={values => {
            console.log(values);
            // setLoader(true);
            // dispatch(PostLogin(values));
          }}
        >
          {formik => (
            <div>
              <Form autoComplete="off"> {/*Formik Form Import from Formik*/}
                <H1>{content.signIn}</H1>
                <P2>{content.signInLine}</P2>
                <FormRow>
                  <FieldInput label={content.email} id="loginEmail" autofill name="email" type="email" placeholder={content.emailPlaceHolder} style={{ fontSize: '16px' }} />
                </FormRow>
                <FormRow>
                  <FieldPassword label={content.password} id="loginPassword" name="password" placeholder="******" style={{ fontSize: '16px' }}/>
                </FormRow>
                <FormRow>
                  <input 
                    type="checkbox"
                    id='rememberCheckbox'
                    name='rememberMe'
                  />
                  <Label htmlFor='rememberCheckbox'>{content.remember}</Label>
                </FormRow>
                <FormRow>
                  <PrimaryButton type='submit'>{content.btnLogin}</PrimaryButton>
                  <p>{content.forgot}</p>
                </FormRow>
                <FormRow>
                  <p>{content.dontHave}<span>{content.signUp}</span></p>
                </FormRow>
              </Form>
            </div>
          )}
        </Formik>

      </div>
    </Contaienr>
  )
}

export default Login
