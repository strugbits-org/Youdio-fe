// import { useUserStore } from "@/stores";  //Get token from store
// import _ from "lodash";
// import { navigateReset } from "./utils";

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
export const formDataheaders = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
};

export const getHeaders = async (token, formData) => {
  if (formData) {
    if (token) Object.assign(formDataheaders, { authorization: token });
  } else {
    if (token) Object.assign(headers, { authorization: token });
  }

  return formData ? formDataheaders : headers;
};

// export const logout = () => {
//   const store = useUserStore();
//   store.clear();
//   navigateReset("/auth/login");
// };
