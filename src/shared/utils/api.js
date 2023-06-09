import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

const api = () => {
  const axiosInstance = axios.create({
    baseURL,
    responseType: "json",
  });
  return axiosInstance;
};

export default api;
