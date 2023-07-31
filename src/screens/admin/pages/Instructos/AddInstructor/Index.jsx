import React, { useEffect, useMemo, useRef, useState } from "react";
import { Form, Formik } from "formik";
import { H2 } from "src/components";
import { icons } from "src/helpers";
import useFetch from "src/features/hooks/useFetch";
import useWindowSize from "src/features/hooks/useInnerWidth";
import {
  Container,
  BrowseFile,
  FormRow,
  CenterContainer,
  ButtonGroup,
} from "./AddInstructorComp";
import { ButtonOne, ButtonTwo } from "./AddInstructorComp";
import {
  FieldInput,
  DropDownInput,
  TextArea,
} from "src/components/AdminInput/AdminInput";
import { addInstructorValidateForm } from "src/helpers/forms/validateForms";
import { useLocation } from "react-router-dom";
import usePutAPI from "src/features/hooks/usePutAPI";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  jobTitle: "",
  isPremium: "",
  image: "",
  bannerImage: "",
  description: "",
};

const AddInstructor = () => {
  const [profileImageName, setProfileImageName] = useState(
    "Upload Profile Picture"
  );
  const [bannerImageName, setBannerImageName] = useState("Upload Cover Image");
  const { loading, postData, fetchData, res } = useFetch();
  const { putData, putLoading } = usePutAPI();
  const { width } = useWindowSize();
  const location = useLocation();
  const formikRef = useRef();

  useEffect(() => {
    isEditable && fetchData(`instructor/get-instructor/${isEditable}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancel = (e) => {
    e.preventDefault();
    resetFormValues();
  };

  const handleSubmit = (data, action) => {
    const copyData = { ...data };
    const isPremium = copyData.isPremium;
    copyData.isPremium = isPremium === "yes" && true;
    const formData = new FormData();
    if (isEditable) {
      !copyData.image && delete copyData.image;
      !copyData.bannerImage && delete copyData.bannerImage;
      Object.keys(copyData).forEach((key) =>
        formData.append(key, copyData[key])
      );
      putData(
        `instructor/update-instructor/${isEditable}`,
        formData,
        undefined,
        undefined,
        true
      );
    } else {
      Object.keys(copyData).forEach((key) =>
        formData.append(key, copyData[key])
      );
      postData(
        "instructor/add-instructor",
        formData,
        undefined,
        undefined,
        true,
        resetFormValues
      );
    }
  };

  const resetFormValues = () => {
    formikRef.current.resetForm();
    setProfileImageName("Upload Profile Picture");
    setBannerImageName("Upload Cover Image");
  };

  const isEditable = useMemo(() => {
    if (location && location.state?.instructorId) {
      return location.state.instructorId;
    }
    return false;
  }, [location]);

  const intructorDetail = useMemo(() => {
    if (res && res.instructor?.instructor) {
      const {
        firstName,
        lastName,
        email,
        phone,
        jobTitle,
        isPremium,
        description,
      } = { ...res.instructor.instructor };
      const instructor = {
        firstName,
        lastName,
        email,
        phone,
        jobTitle,
        isPremium: isPremium ? "yes" : "no",
        image: "",
        bannerImage: "",
        description,
      };
      return instructor;
    }
    return initialValues;
  }, [res]);

  const dynamicLoading = useMemo(() => {
    if (location && location.state?.instructorId) {
      return putLoading;
    }
    return loading;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, putLoading])

  return (
    <React.Fragment>
      <Container>
        <H2>{isEditable ? "Edit Instructor" : "Add Instructor"}</H2>
        <Formik
          initialValues={intructorDetail}
          validationSchema={addInstructorValidateForm(isEditable)}
          enableReinitialize={true}
          onSubmit={handleSubmit}
          innerRef={formikRef}
        >
          {(formik) => (
            <CenterContainer>
              <Form className="form">
                <FormRow>
                  <FieldInput
                    label="First Name"
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Your First Name"
                    style={{ fontSize: "16px" }}
                    value={formik.values.firstName}
                    onChange={(e) => {
                      formik.setFieldValue("firstName", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                  <FieldInput
                    label="Last Name"
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Your Last Name"
                    style={{ fontSize: "16px" }}
                    value={formik.values.lastName}
                    onChange={(e) => {
                      formik.setFieldValue("lastName", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                </FormRow>
                <FormRow>
                  <FieldInput
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    style={{ fontSize: "16px" }}
                    value={formik.values.email}
                    onChange={(e) => {
                      formik.setFieldValue("email", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                  <FieldInput
                    label="Phone"
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Phone e.g. 923241234567"
                    style={{ fontSize: "16px" }}
                    value={formik.values.phone}
                    onChange={(e) => {
                      formik.setFieldValue("phone", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                </FormRow>

                <FormRow>
                  <FieldInput
                    label="Job Title"
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    placeholder="Your Job Title"
                    style={{ fontSize: "16px" }}
                    value={formik.values.jobTitle}
                    onChange={(e) => {
                      formik.setFieldValue("jobTitle", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                  <DropDownInput
                    label="Is Premium"
                    id="isPremium"
                    name="isPremium"
                    type="text"
                    placeholderName="Select Instructor Type"
                    style={{ fontSize: "16px" }}
                    options={[
                      { label: "Yes", value: "yes" },
                      { label: "No", value: "no" },
                    ]}
                    value={formik.values.isPremium}
                    onChange={(e) => {
                      formik.setFieldValue("isPremium", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                </FormRow>

                <FormRow extend={ width >= 1468 && true}>
                  <FieldInput
                    label="Background Cover Image"
                    id="bannerImage"
                    name="bannerImage"
                    type="file"
                    className="customUploadMedia"
                    accept="image/*"
                    style={{ fontSize: "16px" }}
                    value={""}
                    onChange={(e) => {
                      setBannerImageName(e.target.value);
                      formik.setFieldValue("bannerImage", e.target.files[0]);
                    }}
                    disabled={dynamicLoading}
                    {...{
                      "data-before": bannerImageName,
                    }}
                  />
                  {width < 1468 && (
                    <FieldInput
                      label="Profile Picture"
                      id="image"
                      name="image"
                      type="file"
                      className="customUploadMedia"
                      accept="image/*"
                      style={{ fontSize: "16px" }}
                      value={""}
                      onChange={(e) => {
                        setProfileImageName(e.target.value);
                        formik.setFieldValue("image", e.target.files[0]);
                      }}
                      disabled={dynamicLoading}
                      {...{
                        "data-before": profileImageName,
                      }}
                    />
                  )}
                </FormRow>

                <FormRow {...{ "data-type": "textarea" }}>
                  <TextArea
                    label="Description"
                    id="description"
                    name="description"
                    type="textarea"
                    placeholder="Description"
                    style={{ fontSize: "16px" }}
                    value={formik.values.description}
                    onChange={(e) => {
                      formik.setFieldValue("description", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                </FormRow>
                <ButtonGroup>
                  {!isEditable && (
                    <ButtonOne onClick={handleCancel}>CANCEL</ButtonOne>
                  )}
                  <ButtonTwo type="submit" disabled={dynamicLoading}>
                    SAVE
                  </ButtonTwo>
                </ButtonGroup>
              </Form>
              {/* Upload Video For Desktop Large */}
              {width >= 1468 && (
                <BrowseFile>
                  <div className="imageBox">
                    <img src={icons.upload} alt="upload" />
                  </div>
                  <div className="uploadButton">
                    <input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/*"
                      className="uploadInp"
                      value={""}
                      onChange={(e) => {
                        setProfileImageName(e.target.files[0].name);
                        formikRef.current.setFieldValue(
                          "image",
                          e.target.files[0]
                        );
                      }}
                    />
                  </div>
                  {profileImageName && profileImageName !== "Select" && (
                    <span>{profileImageName}</span>
                  )}
                </BrowseFile>
              )}
            </CenterContainer>
          )}
        </Formik>
      </Container>
    </React.Fragment>
  );
};

export default AddInstructor;
