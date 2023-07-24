import { phone, email, textField } from "../fieldsValidattion";
import { dropDown } from "./FieldValidations";
import * as Yup from "yup";

// ADD-Instructor FORM
const instructorFormvalidate = Yup.object({
  email,
  phone,
  firstName: textField({ reqMesg: "First Name is Required" }),
  lastName: textField({ reqMesg: "Last Name is Required" }),
  JobTitle: textField({ reqMesg: "Job Title is Required" }),
  isPremium: textField({ reqMesg: "Premium Instructor is Required" }),
  decription: textField({ reqMesg: "Decription is Required" }),
});

const liveSessionvalidate = Yup.object({
  category: dropDown({ reqMesg: "Caregory is required" }),
  date: dropDown({ reqMesg: "Date is required" }),
  title: dropDown({ reqMesg: "Title is required" }),
  instructor: dropDown({ reqMesg: "Instructor is required" }),
  difficulty: dropDown({ reqMesg: "Difficulty is required" }),
  intensity: dropDown({ reqMesg: "Intensity is required" }),
  filter: dropDown({ reqMesg: "Filter is required" }),
  //   totalTime: dropDown({ reqMesg: "TotalTime is required" }),
  zoomLink: dropDown({ reqMesg: "Intensity is required" }),
  time: dropDown({ reqMesg: "Intensity is required" }),
  description: dropDown({ reqMesg: "Description is required" }),
  thumbnail: Yup.mixed().required("Thumbnail Image is required"),
});



export { instructorFormvalidate, liveSessionvalidate };
