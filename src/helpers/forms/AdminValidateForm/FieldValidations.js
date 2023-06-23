import * as Yup from "yup";

// Email
export const email = Yup.string()
    .email("Email is invalid")
    .required("Email is required");

export const dropDown = ({ reqMesg }) => {
    reqMesg = reqMesg ? reqMesg : (reqMesg = "Required");

    return Yup.string().required(reqMesg)

}