import React from "react";
import { Formik } from "formik";
import {
  Container,
  FormRow,
  Heading,
  BrowseFile,
  ButtonOne,
  ButtonTwo,
  ImageBrowse,
  BrowseBtn,
  SIDEBAR
} from "./AddInstructorComp";
import { H2 } from "src/components";
import { AddInstructorContent } from "./content";
import { FieldInput, TextArea } from "src/components/AdminInput/AdminInput";
import { icons } from "src/helpers";
import { instructorFormvalidate } from "src/helpers/forms/AdminValidateForm";

const AddInstructor = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    JobTitle: "",
    isPremium: "",
    decription: ""
  };
  const handleSubmit = () => { };

  return (
    <React.Fragment>
      {/* <MainContainer> */}
      <Container>
        <SIDEBAR>SideBar</SIDEBAR>
        <Formik
          initialValues={initialValues}
          validationSchema={instructorFormvalidate}
          onSubmit={handleSubmit}
        >
          <form autoComplete="off">
            <Heading>
              <H2>{AddInstructorContent.heading}</H2>
            </Heading>
            <FormRow>
              <FieldInput
                label={AddInstructorContent.fullName}
                id="firstName"
                autofill
                name="firstName"
                type="text"
                placeholder={AddInstructorContent.fullNamePlace}
                style={{ fontSize: "16px" }}
              />

              <FieldInput
                label={AddInstructorContent.lastName}
                id="lastName"
                autofill
                name="lastName"
                type="text"
                placeholder={AddInstructorContent.lastNameplace}
                style={{ fontSize: "16px" }}
              />
            </FormRow>

            <FormRow>
              <FieldInput
                label={AddInstructorContent.email}
                id="email"
                autofill
                name="email"
                type="email"
                placeholder={AddInstructorContent.emailPlace}
                style={{ fontSize: "16px" }}
              />

              <FieldInput
                label={AddInstructorContent.phoneNo}
                id="phone"
                autofill
                name="phone"
                type="number"
                placeholder={AddInstructorContent.phoneNoPlace}
                style={{ fontSize: "16px" }}
              />
            </FormRow>

            <FormRow>
              <FieldInput
                label={AddInstructorContent.jobTitle}
                id="JobTitle"
                autofill
                name="JobTitle"
                type="text"
                placeholder={AddInstructorContent.jobTitlePlace}
                style={{ fontSize: "16px" }}
              />

              <FieldInput
                label={AddInstructorContent.premiumInstr}
                id="isPremium"
                autofill
                name="isPremium"
                type="text"
                placeholder={AddInstructorContent.premiumInstrPlace}
                style={{ fontSize: "16px" }}
              />
            </FormRow>

            <FormRow>
              <TextArea
                label="Decription"
                id="decription"
                autofill
                name="decription"
                type="textarea"
                placeholder="l...."
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
            <img src={icons.upload} alt="upload" />
          </ImageBrowse>
          <BrowseBtn>
            <input
              type="file"
              id="myFile"
              // value={AddInstructorContent.btnBrowse}
              className="input"
            />
          </BrowseBtn>
        </BrowseFile>
      </Container>
      {/* </MainContainer> */}
    </React.Fragment>
  );
};

export default AddInstructor;
