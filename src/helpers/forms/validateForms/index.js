import { email, password, textField } from "../fieldsValidattion";
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
  confirmPassword: password({ reqMesg: "Password is Required" }),
});

// User Form Validation
const userFormValidate = Yup.object({
  name: textField({ isRequired:false }),
  userEmail:email,
  nickName: textField({ reqMesg: "Nick name is Required" }),
  oldPassword: password({ isRequired:false }),
  newPassword: password({ isRequired: false }),
});

export { loginFormValidate, regsiterFormValidate, userFormValidate };
