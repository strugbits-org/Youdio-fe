import {
  confirmPassword,
  email,
  password,
  textField,
} from "../fieldsValidattion";
import * as Yup from "yup";

// const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

// function isValidFileType(fileName, fileType) {
//   return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
// }

// Login form Validation
const loginFormValidate = Yup.object({
  email,
  password: password({ reqMesg: "Password is Required" }),
});

// Register form Validation
const regsiterFormValidate = Yup.object({
  name: textField({ reqMesg: "Name is Required" }),
  email,
  password: password({ reqMesg: "Password is Required" }),
  confirmPassword: confirmPassword({
    reqMesg: "Password is Required",
    pass: "password",
  }),
});

// Forgot form Validation
const forgotFormValidate = Yup.object({
  email,
});

// Reset Password form Validation
const resetPasswordFormValidate = Yup.object({
  newPassword: password({ reqMesg: "Password is Required", min: 6 }),
});

// User Form Validation
const userFormValidate = Yup.object({
  name: textField({ reqMesg: "Full name is Required" }),
  userEmail: email,
  userImage: Yup.mixed(),
  nickName: textField({ reqMesg: "Nick name is Required" }),
  oldPassword: Yup.string(),
  newPassword: Yup.string().min(6, "Password should be 6 or more characters"),
});




const userProfileFormValidate = Yup.object().shape({
//   userImage: Yup
//       .mixed()
//       .required("Required")
//       .test("is-valid-type", "Not a valid image type",
//         value => isValidFileType(value && value.name.toLowerCase(), "image"))
//       .test("is-valid-size", "Max allowed size is 100KB",
//         value => value && value.size <= MAX_FILE_SIZE)
});

export {
  loginFormValidate,
  regsiterFormValidate,
  forgotFormValidate,
  resetPasswordFormValidate,
  userFormValidate,
  userProfileFormValidate,
};
