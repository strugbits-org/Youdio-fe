import * as Yup from "yup";

let phoneRejex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Email
export const email = Yup.string()
  .email("common.emailFieldInvalid")
  .required("common.emailFieldError");

// Password
export const password = ({ min, reqMesg, isRequired, minMesg }) => {
  reqMesg = reqMesg ? reqMesg : (reqMesg = "Password is Required");
  minMesg = minMesg
    ? minMesg
    : (minMesg = `Password should be ${min} or more characters`);

  if (typeof min === "number") {
    return Yup.string().required(reqMesg).min(min, minMesg);
  } else {
    return Yup.string().required(reqMesg);
  }
};

export const confirmPassword = ({ reqMesg, isRequired, pass }) => {
  reqMesg = reqMesg ? reqMesg : (reqMesg = "Password is Required");

  return Yup.string().required(reqMesg).oneOf([Yup.ref(pass), null], "Password not matched");
};

// Simple Text Field
export const textField = ({ min, reqMesg, isRequired, minMesg }) => {
  min = typeof min === "number" ? min : (min = 3);
  reqMesg = reqMesg ? reqMesg : (reqMesg = "Required");
  minMesg = minMesg
    ? minMesg
    : (minMesg = `Should be ${min} or more characters`);

  return Yup.string().required(reqMesg).min(min, minMesg);
};

// Phone
export const phone = Yup.string()
  .required("Phone Number is required")
  .matches(phoneRejex, "Phone Number is not valid");

// Country
export const country = Yup.string().required("Select your Country");

export const tradeInvite = Yup.string().required("Select a trade");

// Array
export const array = Yup.array()
  .required("Required")
  .min(1, "Select at least 1 skill");

// Boolean
export const bool = Yup.boolean();

// Boolean
export const boolReq = Yup.boolean().required("Must be checked").isTrue();
