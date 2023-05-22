// import { useUserStore } from "@/stores";  //Get token from store
// import _ from "lodash";
// import { navigateReset } from "./utils";

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getHeaders = async (token) => {
  if (token) Object.assign(headers, { "authorization": token });

  return headers;
};

// export const logout = () => {
//   const store = useUserStore();
//   store.clear();
//   navigateReset("/auth/login");
// };
