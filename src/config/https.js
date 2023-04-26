import axios from "axios";
// import { useToast } from "vue-toastification";
import { getHeaders } from "src/helpers/config";
// import { logout } from "@/helpers/config";

// const base_url = "https://jsonplaceholder.typicode.com/"; 
const base_url = "https://youdio-app.herokuapp.com"; 
const auth_url = "";

const axiosBaseClient = (type) => {
  return axios.create({
    baseURL: type === "auth" ? auth_url : base_url,
  });
};

const axiosClient = axiosBaseClient("base");
// const axiosAuthClient = axiosBaseClient("auth");

// const toast = useToast();

const api = (axioss) => {
  return {
    get:(url, config = {}) => {
      return axioss.get (url, config);
    },
    post:( url, body, config = {} ) => {
      return axioss.post(url, body, config);
    },
    put: (url, body, config = {}) => {
      return axioss.put(url, body, config);
    },
    delete: (url, config = {}) => {
      return axioss.delete (url, config);
    },
  };
};

const requestHandlers = async (request) => {
  request.headers = getHeaders();

  return request;
};

const responseHandler = async (response) => {
  const { config } = response;

//   if (config && config.method === "put" && config.url === "auth/profile") {
//     toast.success("Profile Updated");
//   } else if (config && config.method === "post" && config.url === "addresses") {
//     toast.success("Address Created");
//   }

  return response;
};

const errorHandler = (error) => {
  const { response } = error;
  const message = response?.data.message;
  const status = response?.status;

  if (message) {
    // toast.error(message);
      alert(message)
  }

  // if (status === 401) {
  //   logout();
  //   return false;
  // }

  throw new Error(message);
};

//inceptors
axiosClient.interceptors.request.use(requestHandlers, errorHandler);
axiosClient.interceptors.response.use(responseHandler, errorHandler);
// axiosAuthClient.interceptors.response.use(responseHandler, errorHandler);

export const apiClient = api(axiosClient);
// export const authApiClient = api(axiosAuthClient);
