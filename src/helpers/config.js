// import { useUserStore } from "@/stores";  //Get token from store
import _ from "lodash";
// import { navigateReset } from "./utils";

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getHeaders = () => {
  const { token } = useUserStore();
  if (!_.isEmpty(token))
    Object.assign(headers, { Authorization: `Bearer ${token}` });

  return headers;
};

export const logout = () => {
  const store = useUserStore();
  store.clear();
  navigateReset("/auth/login");
};
