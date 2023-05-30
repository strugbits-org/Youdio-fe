import {
  confirmPassword,
  email,
  password,
  textField,
} from "../fieldsValidattion";
import * as Yup from "yup";

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
  name: textField({ isRequired: false }),
  userEmail: email,
  nickName: textField({ reqMesg: "Nick name is Required" }),
  oldPassword: password({ isRequired: false }),
  newPassword: password({ isRequired: false }),
});

export {
  loginFormValidate,
  regsiterFormValidate,
  forgotFormValidate,
  resetPasswordFormValidate,
  userFormValidate,
};
