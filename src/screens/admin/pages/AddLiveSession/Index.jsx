import React from "react";
import { Formik } from "formik";
import { H2 } from "src/components";
import { Container } from "./AddLiveSessComo";
import {
  FormRow,
  Heading,
  ButtonOne,
  ButtonTwo,
} from "../AddInstructor/AddInstructorComp";
import {
  FieldInput,
  DropDownInput,
  TextArea,
} from "src/components/AdminInput/AdminInput";
import { Addlivesession } from "./content";

const AddLiveSession = () => {
  const initialValues = {
    FirstName: "Alexa",
    lastName: "Morgan",
    EmailAddress: "Alexa Morgan@,com",
    PhoneNo: "#########",
    JobTitle: "Yoga Instructor",
    PremiumInstructor: "Alex",
  };
  const handleSubmit = () => {};
  return (
    <React.Fragment>
      <Container>
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <form>
            <Heading>
              <H2>{Addlivesession.heading}</H2>
            </Heading>
            <FormRow>
              <DropDownInput
                label="Category"
                id="Category"
                autofill
                name="Category"
                type="Category"
                placeholder="Yoga"
                style={{ fontSize: "16px" }}
              />
              <FieldInput
                label="Date"
                id="Date"
                autofill
                name="Date"
                type="Date"
                placeholder="dd/mm/yy"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <FormRow>
              <FieldInput
                label="Title"
                id="Title"
                autofill
                name="Title"
                type="Title"
                placeholder="Live Back Press"
                style={{ fontSize: "16px" }}
              />
              <DropDownInput
                label="Trainer"
                id="Trainer"
                autofill
                name="Trainer"
                type="Trainer"
                placeholder="Elizabeth Lisa"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <FormRow>
              <DropDownInput
                label="Difficulty"
                id="Difficulty"
                autofill
                name="Difficulty"
                type="Difficulty"
                placeholder="Medium"
                style={{ fontSize: "16px" }}
              />
              <DropDownInput
                label="Intensity"
                id="Intensity"
                autofill
                name="Intensity"
                type="Intensity"
                placeholder="Level 1"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <FormRow>
              <DropDownInput
                label="Filter"
                id="Filter"
                autofill
                name="Filter"
                type="Filter"
                placeholder="Core"
                style={{ fontSize: "16px" }}
              />
              <FieldInput
                label="Total Time"
                id="Total Time"
                autofill
                name="Total Time"
                type="Total Time"
                placeholder="30 Mins"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <FormRow>
              <FieldInput
                label="Zoom Link"
                id="Zoom Link"
                autofill
                name="Zoom Link"
                type="Zoom Link"
                placeholder="https/eiouuodins"
                style={{ fontSize: "16px" }}
              />
              <FieldInput
                label="Time"
                id="Time"
                autofill
                name="Time"
                type="Tiem"
                placeholder="6:30-730  AM"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <FormRow>
              <TextArea
                label="Decription"
                id="Decription"
                autofill
                name="Decription"
                placeholder="Description"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <FormRow>
              <ButtonOne>CANCEL</ButtonOne>
              <ButtonTwo>SAVE</ButtonTwo>
            </FormRow>
          </form>
        </Formik>
      </Container>
    </React.Fragment>
  );
};

export default AddLiveSession;
