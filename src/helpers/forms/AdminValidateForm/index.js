import { phone, email, textField, } from "../fieldsValidattion"
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

const dropDown = Yup.string()
    .required("category is required");


const liveSessionvalidate = Yup.object({
    category: dropDown,

})
export {
    instructorFormvalidate,
    liveSessionvalidate
}