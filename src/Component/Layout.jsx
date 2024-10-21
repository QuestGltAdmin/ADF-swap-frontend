import React, { useEffect, useState } from 'react';
import { Connect } from '../helpers/Connect';
import { Footer } from './Footer';
// import Footer from "./Footer";
import Header from "./Header";
import TokenList from "../Json/TokenListMainnet.json";

import { setTokenMainnetData } from "../store/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";


function Layout(props) {
  const [wallet, setWallet] = useState(null)

  const getWalletDetail = async () => {
    let data = localStorage.getItem("wallet");
    if (data === "undefined") {
      localStorage.removeItem("wallet");
    } else if (data === null) {
      localStorage.removeItem("wallet");
    } else {
      let walletData = JSON.parse(data);
      if (walletData) {
        let wallet = await Connect(walletData.type);
        if (walletData.type === "walletConnect") {
          document.addEventListener("ACCOUNT_CONNECTED", (e) => {
            setWallet(e.detail)
          });
          setWallet(wallet)
        } else {
          setWallet(wallet)
        }
      }
    }
  };

  useEffect(() => {
    getWalletDetail();
  }, [])

  const dispatch = useDispatch();
  const TokenListMainnet = useSelector((state) => state.auth.TokenListMainnet);

  useEffect(() => {
    if (Object.entries(TokenListMainnet).length === 0) {
      dispatch(setTokenMainnetData(TokenList))
    }
  }, []);

  return (
      <div className="dashboard-layout">
        <div className="inner-dash-bpx">
          <Header
            hideWalletButton={!!props.hideWalletButton}
            onWalletChange={(e) => {
              setWallet(e)
            }}
          />
          {props.children}
          <Footer />
        </div>
      </div>
  )
}

export default Layout