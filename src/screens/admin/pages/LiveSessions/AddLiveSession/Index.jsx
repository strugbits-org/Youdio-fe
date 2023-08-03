import React, { useEffect, useMemo, useRef, useState } from "react";
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
} from "./AddLiveSessComo";
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
import { setInstructors, setStyles } from "src/features/filterSlice";
import { liveSessionValidateForm } from "src/helpers/forms/validateForms";
import { timeZones } from "src/helpers/constant";
import { useLocation } from "react-router-dom";
import usePutAPI from "src/features/hooks/usePutAPI";
import useGetAPI from "src/features/hooks/useGetAPI";
import moment from "moment";

const getTime = (time) => {
  const splitTime = time.split(":");
  return splitTime.map((val) => Number(val));
};

const initialValues = {
  category: "",
  date: "",
  title: "",
  trainer: "",
  difficulty: "",
  intensity: "",
  filter: "",
  totalTime: "",
  timeZone: "",
  start: "",
  end: "",
  description: "",
  thumbnail: "",
};
const AddLiveSession = () => {
  const [thumbnailImageValue, setThumbnailImageValue] = useState("Select");
  const [videoName, setVideoName] = useState("Upload Video Thumbnail");
  const [category, setCategory] = useState("");
  const { loading, postData, fetchMultipleData } = useFetch();
  const { getData, getRes } = useGetAPI();
  const { putLoading, putData } = usePutAPI();
  const { width } = useWindowSize();
  const formikRef = useRef();
  const location = useLocation();
  const { difficulties, intensities, instructors, styles } = useSelector(
    (state) => state.filter
  );
  useEffect(() => {
    fetchMultipleData(
      ["category/get-sub-category", "instructor/get-instructor"],
      [setStyles, setInstructors],
      [{}, {}]
    );
    isEditable && getData(`liveSession/get/${isEditable}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancel = (e) => {
    e.preventDefault();
    resetFormValues();
  };

  const handleSubmit = (data, action) => {
    const copyData = { ...data };
    copyData.time = `${copyData.start} - ${copyData.end}`;
    const splitTime = getTime(copyData.start);
    copyData.date = moment(
      new Date(copyData.date).setHours(splitTime[0], splitTime[1])
    ).format();
    delete copyData.start;
    delete copyData.end;
    const formData = new FormData();
    if (isEditable) {
      !copyData.thumbnail && delete copyData.thumbnail;
      Object.keys(copyData).forEach((key) =>
        formData.append(key, copyData[key])
      );
      putData(
        `liveSession/update/${isEditable}`,
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
        "liveSession/create",
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
    setThumbnailImageValue("Select");
    setVideoName("Select");
  };

  const isEditable = useMemo(() => {
    if (location && location.state?.sessionId) {
      return location.state.sessionId;
    }
    return false;
  }, [location]);

  const sessionDetail = useMemo(() => {
    if (getRes && getRes?.liveSession) {
      const {
        category,
        date,
        title,
        trainer,
        difficulty,
        intensity,
        filter,
        totalTime,
        timeZone,
        time,
        description,
      } = { ...getRes.liveSession };
      const liveSession = {
        category: category._id,
        date: moment(date).format("YYYY-MM-DD"),
        title,
        trainer: trainer._id,
        difficulty,
        intensity,
        filter,
        totalTime,
        timeZone,
        start: time.slice(0, time.indexOf("-")).trim(),
        end: time.slice(time.indexOf("-") + 1).trim(),
        description,
        thumbnail: "",
      };
      setCategory(category._id);
      return liveSession;
    }
    return initialValues;
  }, [getRes]);

  const dynamicLoading = useMemo(() => {
    if (location && location.state?.sessionId) {
      return putLoading;
    }
    return loading;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, putLoading]);

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
            value: val._id,
            label: val.category,
          };
        })
      : [];
  }, [styles]);

  const subCategoriesOption = useMemo(() => {
    const getId = styles.filter((val) => val._id === category && val);
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
        <H2>{isEditable ? "Edit Live Session" : "Add Live Session"}</H2>
        <Formik
          initialValues={sessionDetail}
          validationSchema={liveSessionValidateForm(isEditable)}
          onSubmit={handleSubmit}
          enableReinitialize={true}
          innerRef={formikRef}
        >
          {(formik) => (
            <CenterContainer>
              <Form className="form">
                <FormRow>
                  <DropDownInput
                    label="Category"
                    id="category"
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
                    disabled={dynamicLoading}
                  />

                  <DropDownInput
                    label="Filter"
                    id="filter"
                    name="filter"
                    type="text"
                    placeholder="Core"
                    style={{ fontSize: "16px" }}
                    options={subCategoriesOption}
                    value={formik.values.filter}
                    onChange={(e) => {
                      formik.setFieldValue("filter", e.target.value);
                    }}
                    disabled={!category || dynamicLoading}
                  />
                </FormRow>
                <FormRow>
                  <FieldInput
                    label="Title"
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Live Back Press"
                    style={{ fontSize: "16px" }}
                    value={formik.values.title}
                    onChange={(e) => {
                      formik.setFieldValue("title", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                  <DropDownInput
                    label="Trainer"
                    id="trainer"
                    autofill
                    name="trainer"
                    type="text"
                    placeholder="e.g. Elizabeth Lisa"
                    style={{ fontSize: "16px" }}
                    options={instructorsOption}
                    value={formik.values.trainer}
                    onChange={(e) => {
                      formik.setFieldValue("trainer", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                </FormRow>
                <FormRow>
                  <DropDownInput
                    label="Difficulty"
                    id="difficulty"
                    name="difficulty"
                    type="text"
                    placeholder="Medium"
                    style={{ fontSize: "16px" }}
                    options={difficultiesOption}
                    value={formik.values.difficulty}
                    onChange={(e) => {
                      formik.setFieldValue("difficulty", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                  <DropDownInput
                    label="Intensity"
                    id="intensity"
                    name="intensity"
                    type="text"
                    placeholder="Level 1"
                    style={{ fontSize: "16px" }}
                    options={intensitiesOption}
                    value={formik.values.intensity}
                    onChange={(e) => {
                      formik.setFieldValue("intensity", e.target.value);
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
                    min={String(new Date().toISOString().split("T")[0])}
                    placeholder="dd/mm/yy"
                    style={{ fontSize: "16px" }}
                    value={formik.values.date}
                    onChange={(e) => {
                      formik.setFieldValue("date", e.target.value);
                    }}
                    disabled={dynamicLoading}
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
                    disabled={dynamicLoading}
                  />
                </FormRow>
                <FormRow>
                  <div className="forTime">
                    <FieldInput
                      label="Start Time"
                      id="start"
                      name="start"
                      type="time"
                      style={{ fontSize: "16px" }}
                      onChange={(e) => {
                        formik.setFieldValue("start", e.target.value);
                      }}
                      disabled={dynamicLoading}
                    />
                    <FieldInput
                      label="End Time"
                      id="end"
                      name="end"
                      type="time"
                      style={{ fontSize: "16px" }}
                      onChange={(e) => {
                        formik.setFieldValue("end", e.target.value);
                      }}
                      disabled={dynamicLoading}
                    />
                  </div>
                  <DropDownInput
                    label="Time Zone"
                    id="timeZone"
                    name="timeZone"
                    placeholder="Select Time Zone"
                    style={{ fontSize: "16px" }}
                    options={timeZones}
                    value={formik.values.timeZone}
                    onChange={(e) => {
                      formik.setFieldValue("timeZone", e.target.value);
                    }}
                    disabled={dynamicLoading}
                  />
                  {/* Upload Video for small screens */}
                </FormRow>
                {width < 1468 && (
                  <FormRow>
                    <FieldInputIcon
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
                      isIcon={icons.cameraDark}
                      disabled={dynamicLoading}
                      {...{
                        "data-before": thumbnailImageValue,
                      }}
                    />
                  </FormRow>
                )}

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
                    <ButtonOne onClick={handleCancel}>RESET</ButtonOne>
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
                      id="thumbnail"
                      name="thumbnail"
                      type="file"
                      accept="image/*"
                      className="uploadInp"
                      value={""}
                      onChange={(e) => {
                        setVideoName(e.target.files[0].name);
                        formikRef.current.setFieldValue(
                          "thumbnail",
                          e.target.files[0]
                        );
                      }}
                    />
                  </div>
                  {videoName && videoName !== "Select" && (
                    <span>{videoName}</span>
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

export default AddLiveSession;
