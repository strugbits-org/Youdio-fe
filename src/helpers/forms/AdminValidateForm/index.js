import { phone, email, textField, } from "../fieldsValidattion"
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
    category: dropDown({ reqMesg: "Caregory is requirexd" }),
    date: dropDown({ reqMesg: "Date is requirexd" }),
    title: dropDown({ reqMesg: "Title is requirexd" }),
    trainer: dropDown({ reqMesg: "Trainer is requirexd" }),
    difficulty: dropDown({ reqMesg: "Difficulty is requirexd" }),
    intensity: dropDown({ reqMesg: "Intensity is requirexd" }),
    filter: dropDown({ reqMesg: "Filter is requirexd" }),
    totalTime: dropDown({ reqMesg: "TotalTime is requirexd" }),
    zoomLink: dropDown({ reqMesg: "ZoomLink is requirexd" }),
    time: dropDown({ reqMesg: "Time is requirexd" }),
    // image: dropDown({ reqMesg: "Image is requirexd" }),
    description: dropDown({ reqMesg: "Description is requirexd" }),
})

const addVideoValidate = Yup.object({
    category: dropDown({ reqMesg: "Caregory is required" }),
    date: dropDown({ reqMesg: "Date is required" }),
    title: dropDown({ reqMesg: "Title is required" }),
    trainer: dropDown({ reqMesg: "Trainer is required" }),
    difficulty: dropDown({ reqMesg: "Difficulty is required" }),
    intensity: dropDown({ reqMesg: "Intensity is required" }),
    filter: dropDown({ reqMesg: "Filter is required" }),
    totalTime: dropDown({ reqMesg: "TotalTime is required" }),
    feature: dropDown({ reqMesg: "Feature is required" }),
    // time: dropDown({ reqMesg: "Time is required" }),
    // image: dropDown({ reqMesg: "Image is required" }),
    thumbnail: dropDown({ reqMesg: "thumbnail is required" }),
    description: dropDown({ reqMesg: "Description is required" }),
})

export {
    instructorFormvalidate,
    liveSessionvalidate,
    addVideoValidate
}