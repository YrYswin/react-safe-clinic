import axios from "axios";

const BASE_URL = "http://192.168.68.109:8080/";

const jsonHeaders = {
  "Content-Type": "application/json",
};
const formDataHeaders = {
  "Content-Type": "multipart/form-data",
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: jsonHeaders,
});

export const axiosWithFile = axios.create({
  baseURL: BASE_URL,
  headers: formDataHeaders,
});
