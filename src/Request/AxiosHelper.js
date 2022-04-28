import axios from "axios";

const AxiosHelper = axios.create({
  baseURL: "http://localhost:5000/api",
});

// TODO: config this
AxiosHelper.interceptors.request.use(
  (request) => {
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
    return response;
  },
  (error) => {
    // console.error(error.response);
    return Promise.reject(error);
  }
);

export default AxiosHelper;
