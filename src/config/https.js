import axios from "axios";

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

const api = (axioss) => {
  return {
    get: (url, config = {}) => {
      return axioss.get(url, config);
    },
    post: (url, body, config = {}) => {
      return axioss.post(url, body, config);
    },
    put: (url, body, config = {}) => {
      return axioss.put(url, body, config);
    },
    delete: (url, config = {}) => {
      return axioss.delete(url, config);
    },
    patch: (url, body, config = {}) => { 
      return axioss.patch(url, body, config)
    }
  };
};

async function requestHandlers(request) {
  
  return request;
}

const responseHandler = async (response) => {
  
  return response;
};

const errorHandler = (error) => {
  const { response } = error;
  const message = response?.data?.errors;
  // const status = response?.status;

  if (message && message.length > 0) {
    throw new Error(message[0].msg);
  }

  // if (status === 401) {
  //   logout();
  //   return false;
  // }
};

//inceptors
axiosClient.interceptors.request.use(requestHandlers, errorHandler);
axiosClient.interceptors.response.use(responseHandler, errorHandler);
// axiosAuthClient.interceptors.response.use(responseHandler, errorHandler);

export const apiClient = api(axiosClient);
// export const authApiClient = api(axiosAuthClient);
