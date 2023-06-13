import React from 'react'
import { Formik } from 'formik'
import { Container, FormRow, Heading, BrowseFile, ButtonOne, ButtonTwo, ImageBrowse, BrowseBtn } from './AddInstructorComp'
import { H2 } from 'src/components'
import { AddInstructorContent } from './content'
import { FieldInput } from 'src/components/AdminInput/AdminInput'
import { icons } from 'src/helpers'

const AddInstructor = () => {

  const initialValues = {
    FirstName: 'Alexa',
    lastName: 'Morgan',
    EmailAddress: 'Alexa Morgan@,com',
    PhoneNo: '#########',
    JobTitle: 'Yoga Instructor',
    PremiumInstructor: 'Alex',
  };
  const handleSubmit = () => {

  }
  return (
    <React.Fragment>

      {/* <MainContainer> */}
      <Container >

        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <form >
            <Heading>
              <H2>{AddInstructorContent.heading}</H2>
            </Heading>
            <FormRow>
              <FieldInput
                label={AddInstructorContent.fullName}
                id="loginEmail"
                autofill
                name="email"
                type="email"
                placeholder={AddInstructorContent.fullNamePlace}
                style={{ fontSize: "16px" }}
              />

              <FieldInput
                label={AddInstructorContent.lastName}
                id="loginEmail"
                autofill
                name="email"
                type="email"
                placeholder={AddInstructorContent.lastNameplace}
                style={{ fontSize: "16px" }}
              />
            </FormRow>

            <FormRow>
              <FieldInput
                label={AddInstructorContent.email}
                id="loginEmail"
                autofill
                name="email"
                type="email"
                placeholder={AddInstructorContent.emailPlace}
                style={{ fontSize: "16px" }}
              />

              <FieldInput
                label={AddInstructorContent.phoneNo}
                id="loginEmail"
                autofill
                name="email"
                type="email"
                placeholder={AddInstructorContent.phoneNoPlace}
                style={{ fontSize: "16px" }}
              />
            </FormRow>

            <FormRow>
              <FieldInput
                label={AddInstructorContent.jobTitle}
                id="loginEmail"
                autofill
                name="email"
                type="email"
                placeholder={AddInstructorContent.jobTitlePlace}
                style={{ fontSize: "16px" }}
              />

              <FieldInput
                label={AddInstructorContent.premiumInstr}
                id="loginEmail"
                autofill
                name="email"
                type="email"
                placeholder={AddInstructorContent.premiumInstrPlace}
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <FormRow>
              <ButtonOne>{AddInstructorContent.btncancel}</ButtonOne>
              <ButtonTwo>{AddInstructorContent.btnSave}</ButtonTwo>
            </FormRow>

          </form>
        </Formik>

        <BrowseFile>
          <ImageBrowse>
            <img src={icons.browseFile} alt='' typeof='file' />
            <BrowseBtn>
              {AddInstructorContent.btnBrowse}
            </BrowseBtn>
          </ImageBrowse>
          <input type='file' placeholder='Browse file' />
        </BrowseFile>
      </Container>
      {/* </MainContainer> */}
    </React.Fragment>
  )
}

export default AddInstructor