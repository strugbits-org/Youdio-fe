import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Form, Formik } from "formik";
import { H2 } from "src/components";
import { icons } from "src/helpers";
import useFetch from "src/features/hooks/useFetch";
import { useSelector } from "react-redux";
import useWindowSize from "src/features/hooks/useInnerWidth";
import {
  Container,
  BrowseFile,
  FormRow,
  CenterContainer,
  ButtonGroup,
} from "./AddVideoComp";
import {
  ButtonOne,
  ButtonTwo,
} from "../AddInstructor/AddInstructorComp";
import {
  FieldInput,
  DropDownInput,
  TextArea,
} from "src/components/AdminInput/AdminInput";
import { addVideoValidate } from "src/helpers/forms/AdminValidateForm";
import { setInstructors, setStyles } from "src/features/filterSlice";

const AddVideo = () => {
  const initialValues = {
    category: "",
    date: "",
    title: "",
    instructor: "",
    difficulty: "",
    intensity: "",
    filter: "",
    totalTime: "",
    isFeatured: "",
    description: "",
    thumbnail: "",
    video: "",
  };
  const { loading, postData, fetchMultipleData } = useFetch();
  const { width } = useWindowSize()
  const formikRef = useRef();
  const [thumbnailImageValue, setThumbnailImageValue] = useState('Select');
  const [videoName, setVideoName] = useState("Select");
  const [category, setCategory] = useState("");

  const handleCancel = (e) => {
    e.preventDefault();
    resetFormValues();
  };

  const handleSubmit = (data, action) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    postData(
      "video/upload-video",
      formData,
      undefined,
      undefined,
      true,
      resetFormValues
    );
  };

  const resetFormValues = () => {
    formikRef.current.resetForm();
    setThumbnailImageValue("Select");
    setVideoName("Select");
  }; 

  useEffect(() => {
    fetchMultipleData(
      ["category/get-sub-category", "instructor/get-instructor"],
      [setStyles, setInstructors]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { difficulties, intensities, instructors, styles } = useSelector(
    (state) => state.filter
  );
  const difficultiesOption = useMemo(() => {
    return difficulties?.map((val) => {
      return {
        value: val.name,
        label: val.name,
      };
    });
  }, [difficulties]);

  const intensitiesOption = useMemo(() => {
    return intensities?.map((val) => {
      return {
        value: val.name,
        label: val.name,
      };
    });
  }, [intensities]);

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

  const categoriesOption = useMemo(() => {
    return styles?.length > 0
      ? styles.map((val) => {
          return {
            value: val.category,
            label: val.category,
          };
        })
      : [];
  }, [styles]);

  const subCategoriesOption = useMemo(() => {
    const getId = styles.filter((val) => val.category === category && val);
    return getId.length === 1
      ? getId[0].name.map((val) => {
          return {
            value: val,
            label: val,
          };
        })
      : [];
  }, [category, styles]);

  return (
    <React.Fragment>
      <Container>
        <H2>Add New Video</H2>
        <Formik
          initialValues={initialValues}
          validationSchema={addVideoValidate}
          onSubmit={handleSubmit}
          innerRef={formikRef}
        >
          {(formik) => (
            <CenterContainer>
              <Form className="form">
                <FormRow>
                  <DropDownInput
                    label="Category"
                    id="category"
                    autofill
                    name="category"
                    type="text"
                    placeholder="select"
                    style={{ fontSize: "16px" }}
                    options={categoriesOption}
                    value={formik.values.category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      formik.setFieldValue("category", e.target.value);
                    }}
                    disabled={loading}
                  />

                  <DropDownInput
                    label="Filter"
                    id="filter"
                    autofill
                    name="filter"
                    type="text"
                    placeholder="Core"
                    style={{ fontSize: "16px" }}
                    options={subCategoriesOption}
                    value={formik.values.filter}
                    onChange={(e) => {
                      formik.setFieldValue("filter", e.target.value);
                    }}
                    disabled={!category || loading}
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
                    disabled={loading}
                  />
                  <DropDownInput
                    label="Instructor"
                    id="instructor"
                    autofill
                    name="instructor"
                    type="text"
                    placeholder="e.g. Elizabeth Lisa"
                    style={{ fontSize: "16px" }}
                    options={instructorsOption}
                    value={formik.values.trainer}
                    onChange={(e) => {
                      formik.setFieldValue("instructor", e.target.value);
                    }}
                    disabled={loading}
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
                    options={difficultiesOption}
                    value={formik.values.difficulty}
                    onChange={(e) => {
                      formik.setFieldValue("difficulty", e.target.value);
                    }}
                    disabled={loading}
                  />
                  <DropDownInput
                    label="Intensity"
                    id="intensity"
                    autofill
                    name="intensity"
                    type="text"
                    placeholder="Level 1"
                    style={{ fontSize: "16px" }}
                    options={intensitiesOption}
                    value={formik.values.intensity}
                    onChange={(e) => {
                      formik.setFieldValue("intensity", e.target.value);
                    }}
                    disabled={loading}
                  />
                </FormRow>
                <FormRow>
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
                    disabled={loading}
                  />
                  <FieldInput
                    label="Total Time (Min)"
                    id="totalTime"
                    name="totalTime"
                    type="text"
                    placeholder="e.g. 30"
                    style={{ fontSize: "16px" }}
                    onChange={(e) => {
                      formik.setFieldValue("totalTime", e.target.value);
                    }}
                    disabled={loading}
                  />
                </FormRow>
                <FormRow>
                  <DropDownInput
                    label="You Want to Feature this Video?"
                    id="isFeatured"
                    autofill
                    name="isFeatured"
                    type="text"
                    style={{ fontSize: "16px" }}
                    options={[
                      {
                        label: "Yes",
                        value: "yes",
                      },
                      {
                        label: "No",
                        value: "no",
                      },
                    ]}
                    value={
                      formik.values.isFeatured === true
                        ? "yes"
                        : formik.values.isFeatured === false
                        ? "no"
                        : ""
                    }
                    onChange={(e) => {
                      let val = false;
                      if (e.target.value === "yes") val = true;
                      formik.setFieldValue("isFeatured", val);
                    }}
                    disabled={loading}
                  />
                  <FieldInput
                    label="Upload video thumbnail"
                    id="thumbnail"
                    name="thumbnail"
                    type="file"
                    className="customUploadMedia"
                    accept="image/*"
                    style={{ fontSize: "16px" }}
                    value={""}
                    onChange={(e) => {
                      setThumbnailImageValue(e.target.value);
                      formik.setFieldValue("thumbnail", e.target.files[0]);
                    }}
                    disabled={loading}
                    {...{
                      "data-before": thumbnailImageValue,
                    }}
                  />
                </FormRow>
                {/* Upload Video for small screens */}
                {width < 1468 && (
                  <FormRow>
                    <FieldInput
                      label="Upload Video"
                      id="video"
                      name="video"
                      type="file"
                      className="customUploadMedia"
                      accept="video/*"
                      style={{ fontSize: "16px" }}
                      value={""}
                      onChange={(e) => {
                        setVideoName(e.target.value);
                        formik.setFieldValue("video", e.target.files[0]);
                      }}
                      disabled={loading}
                      {...{
                        "data-before": videoName,
                      }}
                    />
                  </FormRow>
                )}
                <FormRow {...{'data-type': 'textarea'}}>
                  <TextArea
                    label="Description"
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
                    disabled={loading}
                  />
                </FormRow>
                <ButtonGroup>
                  <ButtonOne onClick={handleCancel}>CANCEL</ButtonOne>
                  <ButtonTwo type="submit" disabled={loading}>
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
                      id="video"
                      name="video"
                      type="file"
                      accept="video/*"
                      className="uploadInp"
                      value={""}
                      onChange={(e) => {
                        setVideoName(e.target.files[0].name);
                        formikRef.current.setFieldValue(
                          "video",
                          e.target.files[0]
                        );
                      }}
                    />
                  </div>
                  {videoName && videoName !== 'Select' && <span>{videoName}</span>}
                </BrowseFile>
              )}
            </CenterContainer>
          )}
        </Formik>
      </Container>
    </React.Fragment>
  );
};

export default AddVideo;
