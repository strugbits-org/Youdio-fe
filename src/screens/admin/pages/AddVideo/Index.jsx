import React from "react";
import { Form, Formik } from "formik";
import { H2 } from "src/components";
import { icons } from "src/helpers";
import {
  MainContainer,
  Container,
  BrowseFile,
  BOX4,
  ImageBrowse,
  FormRow,
  CenterContainer,
} from "./AddVideoComp";
import {
  Heading,
  ButtonOne,
  ButtonTwo,
  SIDEBAR,
} from "../AddInstructor/AddInstructorComp";
import {
  FieldInput,
  DropDownInput,
  TextArea,
} from "src/components/AdminInput/AdminInput";
import { addVideoValidate } from "src/helpers/forms/AdminValidateForm";

const AddVideo = () => {
  const initialValues = {
    category: "",
    date: "",
    title: "",
    trainer: "",
    difficulty: "",
    intensity: "",
    filter: "",
    totalTime: "",
    feature: "",
    // time: "",
    thumbnail: "",
    description: "",
    // image: "",
  };

  const handleCancel = (e) => {
    e.preventDefault();
  };
  //   const handleFeatureChange = (e, formik) => {
  //     console.log(e.target.value);
  //     formik.setFieldValue("feature", e.target.value);
  //   };
  const options = [
    { value: "", label: "Select" },
    { value: "Yoga", label: "Yoga" },
    { value: "saab", label: "Saab" },
    { value: "mercedes", label: "Mercedes" },
    { value: "audi", label: "Audi" },
  ];

  return (
    <React.Fragment>
      <MainContainer>
        <SIDEBAR>SideBar</SIDEBAR>
        <Container>
          <Formik
            initialValues={initialValues}
            validationSchema={addVideoValidate}
            onSubmit={(data) => {
              console.log("data", data);
            }}
          >
            {(formik) => (
              <CenterContainer>
                <Form className="form">
                  <Heading>
                    <H2>Add New Video</H2>
                  </Heading>
                  <FormRow>
                    <DropDownInput
                      label="Category"
                      id="category"
                      autofill
                      name="category"
                      type="text"
                      placeholder="select"
                      style={{ fontSize: "16px" }}
                      options={options}
                      value={formik.values.category}
                      onChange={(e) => {
                        formik.setFieldValue("category", e.target.value);
                      }}
                    />
                    <FieldInput
                      label="Date"
                      id="date"
                      autofill
                      name="date"
                      type="date"
                      placeholder="dd/mm/yy"
                      style={{ fontSize: "16px" }}
                      value={formik.values.date}
                      onChange={(e) => {
                        formik.setFieldValue("date", e.target.value);
                      }}
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
                      value={formik.values.title}
                      onChange={(e) => {
                        formik.setFieldValue("title", e.target.value);
                      }}
                    />
                    <DropDownInput
                      label="Trainer"
                      id="trainer"
                      autofill
                      name="trainer"
                      type="text"
                      placeholder="Elizabeth Lisa"
                      style={{ fontSize: "16px" }}
                      options={options}
                      value={formik.values.trainer}
                      onChange={(e) => {
                        formik.setFieldValue("trainer", e.target.value);
                      }}
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
                      value={formik.values.difficulty}
                      onChange={(e) => {
                        formik.setFieldValue("difficulty", e.target.value);
                      }}
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
                      value={formik.values.intensity}
                      onChange={(e) => {
                        formik.setFieldValue("intensity", e.target.value);
                      }}
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
                      value={formik.values.filter}
                      onChange={(e) => {
                        formik.setFieldValue("filter", e.target.value);
                      }}
                    />
                    <FieldInput
                      label="Total Time"
                      id="totalTime"
                      autofill
                      name="totalTime"
                      type="text"
                      placeholder="30 Mins"
                      style={{ fontSize: "16px" }}
                      value={formik.values.totalTime}
                      onChange={(e) => {
                        formik.setFieldValue("totalTime", e.target.value);
                      }}
                    />
                  </FormRow>
                  <FormRow>
                    <DropDownInput
                      label="You Want to Feature this Video?"
                      id="feature"
                      autofill
                      name="feature"
                      type="text"
                      placeholder="Yes"
                      style={{ fontSize: "16px" }}
                      options={options}
                      value={formik.values.feature}
                      onChange={(e) => {
                        formik.setFieldValue("feature", e.target.value);
                      }}
                    />
                    <DropDownInput
                      label="Upload video thumbnail"
                      id="thumbnail"
                      autofill
                      name="thumbnail"
                      type="text"
                      placeholder="Select"
                      style={{ fontSize: "16px" }}
                      options={options}
                      value={formik.values.thumbnail}
                      onChange={(e) => {
                        formik.setFieldValue("thumbnail", e.target.value);
                      }}
                    />
                  </FormRow>
                  <FormRow>
                    <TextArea
                      label="Decription"
                      id="description"
                      autofill
                      name="description"
                      type="textarea"
                      placeholder="Description"
                      style={{ fontSize: "16px" }}
                      value={formik.values.description}
                      onChange={(e) => {
                        console.log(e.target.value);
                        formik.setFieldValue("description", e.target.value);
                      }}
                    />
                  </FormRow>
                  <FormRow>
                    <ButtonOne onClick={handleCancel}>CANCEL</ButtonOne>
                    <ButtonTwo type="submit">SAVE</ButtonTwo>
                  </FormRow>
                </Form>
              </CenterContainer>
            )}
          </Formik>

          <BrowseFile>
            <ImageBrowse>
              <img src={icons.upload} alt="upload" />
            </ImageBrowse>
            <BOX4>
              <div className="upload-container">
                <input
                  id="userImage"
                  name="userImage"
                  type="file"
                  className="uploadInp"
                  // onChange={(e) =>
                  //   formikRef.current.setFieldValue("userImage", e.target.files[0])
                  // }
                />
              </div>
            </BOX4>
          </BrowseFile>
        </Container>
      </MainContainer>
    </React.Fragment>
  );
};

export default AddVideo;
