import axios from "axios";

const axiosSimpleSwap = axios.create({
  baseURL: "https://api.simpleswap.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosSimpleSwap;
