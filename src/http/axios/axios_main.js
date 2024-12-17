import axios from "axios";

export const axiosSimpleSwap = axios.create({
  baseURL: "https://api.simpleswap.io",
  headers: {
    "Content-Type": "application/json",
  },
});


