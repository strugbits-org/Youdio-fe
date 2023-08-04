import * as Yup from "yup";
import { errorsKey } from "../constant";

let phoneRejex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const {
  emailFieldInvalid,
  emailFieldError,
  passwordRequired,
  passwordFieldNotMatched,
  phoneNumberFieldInvalid,
  phoneNumberFieldRequired,
  passwordFieldMinimum,
  nameFieldLimit,
} = errorsKey;
// Email
export const email = Yup.string()
  .email(emailFieldInvalid)
  .required(emailFieldError);

// Password
export const password = ({ min, reqMesg, isRequired, minMesg }) => {
  reqMesg = reqMesg ? reqMesg : (reqMesg = passwordRequired);
  minMesg = minMesg ? minMesg : (minMesg = passwordFieldMinimum);

  if (typeof min === "number") {
    return Yup.string().required(reqMesg).min(min, minMesg);
  } else {
    return Yup.string().required(reqMesg);
  }
};

export const confirmPassword = ({ reqMesg, isRequired, pass }) => {
  reqMesg = reqMesg ? reqMesg : (reqMesg = passwordRequired);

  return Yup.string()
    .required(reqMesg)
    .oneOf([Yup.ref(pass), null], passwordFieldNotMatched);
};

// Simple Text Field
export const textField = ({ min, reqMesg, minMesg }) => {
  min = typeof min === "number" ? min : (min = 3);
  reqMesg = reqMesg ? reqMesg : (reqMesg = "Required");
  minMesg = minMesg ? minMesg : (minMesg = nameFieldLimit);

  if (typeof min === "number") {
    return Yup.string().required(reqMesg).min(min, minMesg);
  }
  return Yup.string().required(reqMesg)
};

// Phone
export const phone = Yup.string()
  .required(phoneNumberFieldRequired)
  .matches(phoneRejex, phoneNumberFieldInvalid);
