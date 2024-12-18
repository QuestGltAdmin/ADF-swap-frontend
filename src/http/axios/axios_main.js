import axios from "axios";

const axiosSimpleSwap = axios.create({
  baseURL: "https://api.simpleswap.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosMain = axios.create({
  baseURL: "https://dexapi.adftechnology.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosSimpleSwap;
