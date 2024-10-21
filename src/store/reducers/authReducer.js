import { createSlice } from "@reduxjs/toolkit";
// import { decryptData } from "../../helpers/encryption";
// const JWT = process.env.REACT_APP_JWTKEY;

const isAuthenticated = localStorage.getItem("isAuthenticated");
const isUserAuthenticated = localStorage.getItem("isUserAuthenticated");
const userRole = localStorage.getItem("userRole");
const userData = localStorage.getItem("userData");
const walletAddress = localStorage.getItem("walletAddress");
const proupdatedata = localStorage.getItem("saveprodata");
const TokenListMainnet = localStorage.getItem("TokenListMainnet");
const TokenListTestnet = localStorage.getItem("TokenListTestnet");

const authSlice =  createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    walletAddress: !!walletAddress ? walletAddress : "",
    isAuthenticated: !!isAuthenticated ? true : false,
    isUserAuthenticated: !!isUserAuthenticated ? true : false,
    userRole: !!userRole ? userRole : "",
    TokenListMainnet: !!TokenListMainnet ? JSON.parse(TokenListMainnet) : {},
    TokenListTestnet: !!TokenListTestnet ? JSON.parse(TokenListTestnet) : {},
    user: !!userData ? JSON.parse(userData) : {},
    authToken: "",
    errorMsg: "",
    proupdate: !!proupdatedata ? JSON.parse(proupdatedata) : {},
  },

  reducers: {

    loginSaga: (state, action) => {
      return { ...state };
    },


    userLoginSaga: (state, action) => {
      return { ...state };
    },
    userLoginStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    userloginSuccess: (state, action) => {
      // console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: true,
        user: action.payload,
        userRole: action.payload.user_role,
        authToken : action.payload.token,
  
      };
    },

    
    saveprofiledata: (state, action) => {
      // console.log(action.payload , "data yha tak aa rha h");
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: true,
        proupdate : action.payload
      };
    },

    userLoginFail: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isUserAuthenticated: false,
        user: {},
        errorMsg: action.payload,
      };
    },

    logout: (state) => {
      localStorage.clear();
      return {
        ...state,
        isLoading: false,
        walletAddress: "",
        isUserAuthenticated : false,
        isAuthenticated: false,
        errorMsg: "",
        user : {},
        authToken : ""
      };
    },

    setWalletAddress: (state, action) => {
      localStorage.setItem("walletAddress", action.payload);
      return {
        ...state,
        walletAddress: action.payload,
      };
    },

    setTokenMainnetData: (state, action) => {
      localStorage.setItem("TokenListMainnet", JSON.stringify(action.payload));
      return {
        ...state,
        TokenListMainnet: action.payload,
      };
    },

    setTokenTestnetData: (state, action) => {
      localStorage.setItem("TokenListTestnet", JSON.stringify(action.payload));
      return {
        ...state,
        TokenListMainnet: action.payload,
      };
    },
  
  },
});

export const {
  logout,
  setWalletAddress,
  setTokenMainnetData,
  setTokenTestnetData,
  userLoginSaga,
  userLoginStart,
  saveprofiledata,
  userloginSuccess,
  userLoginFail,
} = authSlice.actions;

export default authSlice.reducer;
