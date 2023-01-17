import { email, password, textField, phone, country, bool, tradeInvite } from "../fieldsValidattion";
import * as Yup from "yup";

// Login form Validation
const loginFormValidate = Yup.object({
    email,
    password: password({ reqMesg: "Password is Required" }),
});

export {
    loginFormValidate
}
