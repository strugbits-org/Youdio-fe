import { store } from "src/store";

export const headers = {
  Accept: "application/json",
  "Content-Type": "",
};
export const formDataheaders = {
  Accept: "application/json",
  "Content-Type": "",
};

export const getHeaders = async (token, formData) => {
  const lang = store.getState().language.lang;
  const headers = {
    Accept: "application/json",
  };
  Object.assign(headers, { "Accept-Language": lang });
  if (token) Object.assign(headers, { authorization: token });
  if (formData) {
    Object.assign(headers, { "Content-Type": "multipart/form-data" });
  } else {
    Object.assign(headers, { "Content-Type": "application/json" });
  }

  return headers;
};
