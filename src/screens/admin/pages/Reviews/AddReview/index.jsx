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
} from "./AddReviewComponent";
import {
  ButtonOne,
  ButtonTwo,
} from "../../Instructos/AddInstructor/AddInstructorComp";
import {
  FieldInput,
  DropDownInput,
  TextArea,
} from "src/components/AdminInput/AdminInput";
import { addReviewValidateForm } from "src/helpers/forms/validateForms";
import { useLocation } from "react-router-dom";
import usePutAPI from "src/features/hooks/usePutAPI";
import { setInstructors } from "src/features/filterSlice";
import { useSelector } from "react-redux";

const initialValues = {
  instructor: "",
  date: "",
  rating: "",
  customerName: "",
  customerImage: "",
  review: "",
};

const AddReview = () => {
  const [profileImageName, setProfileImageName] = useState(
    "Upload Customer Picture"
  );
  const { loading, postData, fetchData, res } = useFetch();
  const { putData, putLoading } = usePutAPI();
  const { width } = useWindowSize();
  const { instructors } = useSelector((state) => state.filter);
  const location = useLocation();
  const formikRef = useRef();

  useEffect(() => {
      postData("instructor/get-instructor", {}, setInstructors);

    isEditable && fetchData(`instructor/get-instructor/${isEditable}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancel = (e) => {
    e.preventDefault();
    resetFormValues();
  };

  const handleSubmit = (data, action) => {
    const copyData = { ...data };
    console.log(copyData);
      const formData = new FormData();
    if (isEditable) {
      !copyData.image && delete copyData.image;
      !copyData.bannerImage && delete copyData.bannerImage;
      Object.keys(copyData).forEach((key) =>
        formData.append(key, copyData[key])
      );
    //   putData(
    //     `instructor/update-instructor/${isEditable}`,
    //     formData,
    //     undefined,
    //     undefined,
    //     true
    //   );
    } else {
      Object.keys(copyData).forEach((key) =>
        formData.append(key, copyData[key])
      );
    //   postData(
    //     "instructor/add-instructor",
    //     formData,
    //     undefined,
    //     undefined,
    //     true,
    //     resetFormValues
    //   );
    }
  };

  const resetFormValues = () => {
    formikRef.current.resetForm();
    setProfileImageName("Upload Customer Picture");
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
    if (location && location.state?.reviewId) {
      return putLoading;
    }
    return loading;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, putLoading]);

  const instructorsOption = useMemo(() => {
    return instructors?.length > 0
      ? instructors.map((val) => {
          return {
            value: val._id,
            label: `${val?.firstName ? val.firstName : ""} ${
              val?.lastName ? val.lastName : ""
            }`,
          };
        })
      : [];
  }, [instructors]);

  return (
    <React.Fragment>
      <Container>
        <H2>{isEditable ? "Edit Review" : "Add Review"}</H2>
        <Formik
          initialValues={intructorDetail}
          validationSchema={addReviewValidateForm(isEditable)}
          enableReinitialize={true}
          onSubmit={handleSubmit}
          innerRef={formikRef}
        >
          {(formik) => (
            <CenterContainer>
              <Form className="form">
                <FormRow>
                  <DropDownInput
                    label="Intructor Name"
                    id="instructor"
                    name="instructor"
                    type="text"
                    style={{ fontSize: "16px" }}
                    options={instructorsOption}
                    value={formik.values.instructor}
                    onChange={(e) => {
                      formik.setFieldValue("instructor", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                  <FieldInput
                    label="Customer Name"
                    id="customerName"
                    name="customerName"
                    type="text"
                    placeholder="Customer Name"
                    style={{ fontSize: "16px" }}
                    value={formik.values.customerName}
                    onChange={(e) => {
                      formik.setFieldValue("customerName", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                </FormRow>
                <FormRow>
                  <FieldInput
                    label="Date"
                    id="date"
                    name="date"
                    type="date"
                    placeholder="dd/mm/yy"
                    style={{ fontSize: "16px" }}
                    value={formik.values.date}
                    onChange={(e) => {
                      formik.setFieldValue("date", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                  {/* Ratings */}
                </FormRow>

                <FormRow>
                  {width < 1468 && (
                    <FieldInput
                      label="Profile Picture"
                      id="customerImage"
                      name="customerImage"
                      type="file"
                      className="customUploadMedia"
                      accept="image/*"
                      style={{ fontSize: "16px" }}
                      value={""}
                      onChange={(e) => {
                        setProfileImageName(e.target.value);
                        formik.setFieldValue(
                          "customerImage",
                          e.target.files[0]
                        );
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
                    label="Review"
                    id="review"
                    name="review"
                    type="textarea"
                    placeholder="Description"
                    style={{ fontSize: "16px" }}
                    value={formik.values.review}
                    onChange={(e) => {
                      formik.setFieldValue("review", e.target.value);
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
                      id="customerImage"
                      name="customerImage"
                      type="file"
                      accept="image/*"
                      className="uploadInp"
                      value={""}
                      onChange={(e) => {
                        setProfileImageName(e.target.files[0].name);
                        formikRef.current.setFieldValue(
                          "customerImage",
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

export default AddReview;
