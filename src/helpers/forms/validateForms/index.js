import moment from "moment";
import {
  confirmPassword,
  email,
  password,
  phone,
  textField,
} from "../fieldsValidattion";
import * as Yup from "yup";
import { errorsKey } from "src/helpers/constant";

const numberRejex = /^[0-9]*$/;
const { passwordFieldError, nameFieldError } = errorsKey;

// Login form Validation
const loginFormValidate = Yup.object({
  email,
  password: password({ reqMesg: passwordFieldError }),
});

// Register form Validation
const regsiterFormValidate = Yup.object({
  name: textField({ reqMesg: nameFieldError }),
  email,
  password: password({ reqMesg: passwordFieldError, min: 6 }),
  confirmPassword: confirmPassword({
    reqMesg: passwordFieldError,
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

// User Form For Payment
const paymentFormValidate = Yup.object({
  // email: textField({}),
  expiry: textField({ reqMesg: "Expiry is Required" }),
  monthYear: textField({ reqMesg: "Month is Required" }),
  cardNumber: textField({ reqMesg: "Card number is Required" }),
  nameOnCard: textField({ reqMesg: "Name on Card is Required" }),
  countryOrRegion: textField({ reqMesg: "Country is Required" }),
  // paymentAcceptRadio: textField({}),
});

// Admin Dashboard Live Session Form
const liveSessionValidateForm = (isEdit) => {
  return Yup.object({
    category: textField({ reqMesg: "Caregory is required" }),
    date: Yup.date()
      .min(
        new Date(moment().subtract(1, "day")),
        "Please select today or future date"
      )
      // .min(new Date(), "Please select future date")
      .required("Date is required"),
    title: textField({ reqMesg: "Title is required" }),
    trainer: textField({ reqMesg: "Trainer is required" }),
    difficulty: textField({ reqMesg: "Difficulty is required" }),
    intensity: textField({ reqMesg: "Intensity is required" }),
    filter: textField({ reqMesg: "Filter is required" }),
    totalTime: Yup.number().required("TotalTime is required"),
    timeZone: textField({ reqMesg: "Time Zone is required" }),
    start: Yup.string().required("Start time can't be empty"),
    end: Yup.string()
      .required("End time can't be empty")
      .test("is-greater", "End time should be greater", function (value) {
        const { start } = this.parent;
        return moment(value, "HH:mm").isSameOrAfter(moment(start, "HH:mm"));
      }),
    description: textField({ reqMesg: "Description is required" }),
    thumbnail: isEdit
      ? Yup.mixed()
      : Yup.mixed().required("Thumbnail Image is required"),
    // zoomLink: Yup.string()
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     "Enter correct url!"
    //   )
    //   .required("Zoom link is required"),
  });
};

// Admin Dashboard Add Instructor Form
const addInstructorValidateForm = (isEdit) => {
  return Yup.object({
    firstName: textField({ reqMesg: "First Name is required" }),
    lastName: textField({ reqMesg: "Last Name is required" }),
    email,
    phone,
    jobTitle: textField({ reqMesg: "Job Title is required" }),
    isPremium: Yup.string().required("Is Instructor Premium"),
    image: isEdit
      ? Yup.mixed()
      : Yup.mixed().required("Thumbnail Image is required"),
    bannerImage: isEdit
      ? Yup.mixed()
      : Yup.mixed().required("Thumbnail Image is required"),
    description: textField({ reqMesg: "Description is required" }),
  });
};

// Admin Dashboard Add Instructor Form
const addVideoValidateForm = (isEdit) => {
  return Yup.object({
    category: textField({ reqMesg: "Caregory is required" }),
    date: Yup.date()
      // .min(new Date(moment().subtract(1, 'day')), "Please select future date")
      .required("Date is required"),
    title: textField({ reqMesg: "Title is required" }),
    instructor: textField({ reqMesg: "Instructor is required" }),
    difficulty: textField({ reqMesg: "Difficulty is required" }),
    intensity: textField({ reqMesg: "Intensity is required" }),
    filter: textField({ reqMesg: "Filter is required" }),
    totalTime: Yup.string()
      .required("Total Time is required")
      .matches(numberRejex, "Total time must be a number"),
    isFeatured: Yup.string().required("Select Is video featured?"),
    description: textField({ reqMesg: "Description is required" }),
    thumbnail: isEdit
      ? Yup.mixed()
      : Yup.mixed().required("Thumbnail Image is required"),
    video: isEdit ? Yup.mixed() : Yup.mixed().required("Upload Video"),
  });
};

// Admin Dashboard Add Review Form
const addReviewValidateForm = (isEdit) => {
  return Yup.object({
    instructor: textField({ reqMesg: "Caregory is required" }),
    date: Yup.date().required("Date is required"),
    rating: Yup.number()
      .min(1, "Rating is Required")
      .required("Rating is Required"),
    customerName: textField({ reqMesg: "Instructor is required" }),
    review: textField({ reqMesg: "Description is required" }),
    customerImage: isEdit
      ? Yup.mixed()
      : Yup.mixed().required("Thumbnail Image is required"),
  });
};

// Admin Dashboard Add Review Form
const subscriberValidateForm = Yup.object({
  email,
});

export {
  loginFormValidate,
  regsiterFormValidate,
  forgotFormValidate,
  resetPasswordFormValidate,
  userFormValidate,
  paymentFormValidate,
  subscriberValidateForm,
  addVideoValidateForm,
  liveSessionValidateForm,
  addInstructorValidateForm,
  addReviewValidateForm,
};
