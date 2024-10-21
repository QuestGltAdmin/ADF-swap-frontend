import React from "react";
import { Modal, Button } from "react-bootstrap-v5";
import { Connect } from "../../helpers/Connect";

export default function ConnectWalletModal({onWalletChange, forMobileView , ...props}) {


  const connect = async (type) => {

    try {
      props.modalProps.onHide()
      const wallet = await Connect(type);
      if(type === "walletConnect"){
        document.addEventListener("ACCOUNT_CONNECTED", (e) => {
          localStorage.setItem("wallet",JSON.stringify(e.detail));   
          onWalletChange(e.detail);
        });
        localStorage.setItem("wallet",JSON.stringify(wallet));      
        onWalletChange(wallet);
      }else{
        localStorage.setItem("wallet",JSON.stringify(wallet));      
        onWalletChange(wallet);
      }
    } catch (err) {
      console.log("Connect Wallet: ",err)
    }
  };

  return (
    <Modal
      className="token-list-modal connect-wallet-modal"
      centered
      size="lg"
      {...props.modalProps}
    >
      <Modal.Header closeButton>
        <Modal.Title>Connect Wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="connect-tech-div">
       {forMobileView === false ? <Button onClick={() => connect("metamask")}>
            Metamask <img src="assets/img/metamask.svg" />
          </Button> : ""}
          {/* <Button onClick={() => connect("metamask")}>TronLink <img src="assets/img/tronlink.webp" /></Button> */}
          {/* <Button onClick={() => connect("metamask")}>BitKeep <img src="assets/img/bitkeep.svg" /></Button> */}
          {forMobileView === false ?  <Button onClick={() => connect("Coinbase")}>
            Coinbase Wallet <img src="assets/img/coinbase.webp" />
          </Button> : "" }
          <Button onClick={() => connect("walletConnect")}>
            WalletConnect <img src="assets/img/walletconnect.svg" />
          </Button>
        </div>
        <p className="learnmore-link">
          New to Ethereum?{" "}
          <a href="https://ethereum.org/en/wallets/" target={"_blank"}>
            Learn more about wallets
          </a>
        </p>
      </Modal.Body>
    </Modal>
  );
}
