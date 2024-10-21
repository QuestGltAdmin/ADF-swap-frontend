import axios from "axios";

const axiosMain = axios.create({
  baseURL: "https://api.yuseswap.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosSimpleSwap = axios.create({
  baseURL: "https://api.simpleswap.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosMain;
