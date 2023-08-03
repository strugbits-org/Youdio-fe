import React, { useEffect, useMemo, useRef, useState } from "react";
import { Form, Formik } from "formik";
import { Error, H2, Label } from "src/components";
import { icons } from "src/helpers";
import useFetch from "src/features/hooks/useFetch";
import useWindowSize from "src/features/hooks/useInnerWidth";
import {
  Container,
  BrowseFile,
  FormRow,
  CenterContainer,
  ButtonGroup,
  RatingBox,
} from "./AddReviewComponent";
import {
  ButtonOne,
  ButtonTwo,
} from "../../Instructos/AddInstructor/AddInstructorComp";
import {
  FieldInput,
  DropDownInput,
  TextArea,
  FieldInputIcon,
} from "src/components/AdminInput/AdminInput";
import { addReviewValidateForm } from "src/helpers/forms/validateForms";
import { useLocation } from "react-router-dom";
import { setInstructors } from "src/features/filterSlice";
import { useSelector } from "react-redux";
import { FormControlLabel, Rating } from "@mui/material";

const initialValues = {
  instructor: "",
  date: "",
  rating: 0,
  customerName: "",
  customerImage: "",
  review: "",
};

const AddReview = () => {
  const [profileImageName, setProfileImageName] = useState(
    "Upload Customer Picture"
  );
  const { loading, postData } = useFetch();
  const { width } = useWindowSize();
  const { instructors } = useSelector((state) => state.filter);
  const location = useLocation();
  const formikRef = useRef();

  useEffect(() => {
    postData("instructor/get-instructor", {}, setInstructors);
    // isEditable && fetch single review;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancel = (e) => {
    e.preventDefault();
    resetFormValues();
  };

  const handleSubmit = (data, action) => {
    const copyData = { ...data };
    const formData = new FormData();
    if (isEditable) {
      //   If in future we will need to edit review functinality then this block working
    } else {
      Object.keys(copyData).forEach((key) =>
        formData.append(key, copyData[key])
      );
      postData(
        "review/add-review",
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
    formikRef.current.setFieldError("rating", "");
    formikRef.current.setFieldTouched("rating", false);
    setProfileImageName("Upload Customer Picture");
  };

  const isEditable = useMemo(() => {
    if (location && location.state?.reviewId) {
      return location.state.reviewId;
    }
    return false;
  }, [location]);

  const dynamicLoading = useMemo(() => {
    // if (location && location.state?.reviewId) {
    //   return putLoading;
    // }
    return loading;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

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

  const validateRating = () => {
    if (formikRef && formikRef.current) {
      const validate = formikRef.current.getFieldMeta("rating");
      return validate.touched && validate.error;
    }
    return false;
  };

  return (
    <React.Fragment>
      <Container>
        <H2>{isEditable ? "Edit Review" : "Add Review"}</H2>
        <Formik
          initialValues={initialValues}
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
                  <RatingBox isError={validateRating()}>
                    <Label>Rating</Label>
                    <div className="rating">
                      <FormControlLabel
                        control={
                          <>
                            <input
                              name="rating"
                              id="rating"
                              value={formik.values.rating}
                              hidden
                              readOnly
                              {...formik.getFieldProps("rating")}
                            />
                            <Rating
                              name="size-small"
                              defaultValue={0}
                              size="small"
                              value={formik.values.rating}
                              onBlur={formik.handleBlur}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  "rating",
                                  Number(e.target.value)
                                );
                              }}
                            />
                          </>
                        }
                      />
                    </div>
                    {validateRating() && <Error>{validateRating()}</Error>}
                  </RatingBox>
                </FormRow>

                <FormRow>
                  {width < 1468 && (
                    <FieldInputIcon
                      label="Customer Image"
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
                      isIcon={ icons.cameraDark}
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
                  {profileImageName &&
                    profileImageName !== "Upload Customer Picture" && (
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
