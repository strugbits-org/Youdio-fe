import React from "react";
import { Formik } from "formik";
import { H2 } from "src/components";
import { icons } from "src/helpers";
import { Container, BrowseFile } from "./AddLiveSessComo";
import {
  FormRow,
  Heading,
  ButtonOne,
  ButtonTwo,
  SIDEBAR,
  ImageBrowse,
  BrowseBtn,
} from "../AddInstructor/AddInstructorComp";
import {
  FieldInput,
  DropDownInput,
  TextArea,
} from "src/components/AdminInput/AdminInput";
import { Addlivesession } from "./content";
import { liveSessionvalidate } from "src/helpers/forms/AdminValidateForm";

const AddLiveSession = () => {
  const initialValues = {
    category: "",
    date: "",
    title: "",
    trainer: "",
    difficulty: "",
    intensity: "",
    filter: "",
    totalTime: "",
    zoomLink: "",
    time: "",
    image: "",
    description: "",
  };
  const handleSubmit = () => { };

  const options = [
    { value: 'Yoga', label: 'Yoga' },
    { value: 'saab', label: 'Saab' },
    { value: 'mercedes', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' },
  ];

  return (
    <React.Fragment>
      <Container>
        <SIDEBAR>SideBar</SIDEBAR>
        <Formik
          initialValues={initialValues}
          validationSchema={liveSessionvalidate}
          onSubmit={handleSubmit}
        >
          <form>
            <Heading>
              <H2>{Addlivesession.heading}</H2>
            </Heading>
            <FormRow>
              <DropDownInput
                label="Category"
                id="category"
                autofill
                name="category"
                type="text"
                placeholder="Yoga"
                style={{ fontSize: "16px" }}
                options={options}
              />
              <FieldInput
                label="Date"
                id="date"
                autofill
                name="date"
                type="Date"
                placeholder="dd/mm/yy"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <FormRow>
              <FieldInput
                label="Title"
                id="title"
                autofill
                name="title"
                type="text"
                placeholder="Live Back Press"
                style={{ fontSize: "16px" }}
              />
              <DropDownInput
                label="Trainer"
                id="trainer"
                autofill
                name="trainer"
                type="trainer"
                placeholder="Elizabeth Lisa"
                style={{ fontSize: "16px" }}
                options={options}
              />
            </FormRow>
            <FormRow>
              <DropDownInput
                label="Difficulty"
                id="difficulty"
                autofill
                name="difficulty"
                type="text"
                placeholder="Medium"
                style={{ fontSize: "16px" }}
                options={options}
              />
              <DropDownInput
                label="Intensity"
                id="intensity"
                autofill
                name="intensity"
                type="text"
                placeholder="Level 1"
                style={{ fontSize: "16px" }}
                options={options}
              />
            </FormRow>
            <FormRow>
              <DropDownInput
                label="Filter"
                id="filter"
                autofill
                name="filter"
                type="text"
                placeholder="Core"
                style={{ fontSize: "16px" }}
                options={options}
              />
              <FieldInput
                label="Total Time"
                id="totalTime"
                autofill
                name="totalTime"
                type="text"
                placeholder="30 Mins"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <FormRow>
              <FieldInput
                label="Zoom Link"
                id="zoomLink"
                autofill
                name="zoomLink"
                type="text"
                placeholder="https/eiouuodins"
                style={{ fontSize: "16px" }}
              />
              <FieldInput
                label="Time"
                id="time"
                autofill
                name="time"
                type="text"
                placeholder="6:30-730  AM"
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <FormRow>
              <TextArea
                label="Decription"
                id="description"
                autofill
                name="description"
                type="textarea"
                placeholder="l...."
                style={{ fontSize: "16px" }}
              />
            </FormRow>
            <FormRow>
              <ButtonOne>CANCEL</ButtonOne>
              <ButtonTwo>SAVE</ButtonTwo>
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
    </React.Fragment>
  );
};

export default AddLiveSession;
