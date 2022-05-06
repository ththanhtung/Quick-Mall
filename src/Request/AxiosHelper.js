import axios from "axios";
import queryString from "query-string";

const AxiosHelper = axios.create({
  baseURL: process.env.REACT_APP_REQUEST_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// TODO: config this
AxiosHelper.interceptors.request.use(
  async (request) => {
    if (localStorage.getItem("accessToken")) {
      request.headers.token = `JWT ${localStorage.getItem("accessToken")}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
AxiosHelper.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // console.error(error.response);
    return Promise.reject(error);
  }
);

export default AxiosHelper;
