import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Col,
  Container,
  Row,
  Modal,
  Navbar,
  InputGroup,
  Dropdown,
  Form,
} from "react-bootstrap-v5";
import { useNavigate, useSearchParams } from "react-router-dom";
import { WalletContext } from "../contexts/WalletContext";
import { Connect, onDisconnect } from "../helpers/Connect";
import { Provider } from "../helpers/Web3Helper";
import ConnectWalletModal from "./ui/ConnectWalletModal";
import { toast, ToastContainer } from "react-toastify";
import { Notification } from "./Notification";

export default function Header({ hideWalletButton, onWalletChange }) {
  //==============================Global Variable====================================//
  const navigate = useNavigate();
  const [wallet, setWallet] = useContext(WalletContext);
  //==============================End Of Code====================================//

  //==============================Local Variable====================================//
  const [show, setShow] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [forMobileView, setForMobileView] = useState(
    window.innerWidth < 992 ? true : false
  );

  //===============For PopUp Modal====================//
  const [openModel, setOpenModel] = useState(false);
  const [modelMessage, setModelMessage] = useState("");
  const [randomVal, setRandomVal] = useState("");
  //===============End of code====================//

  //==============================Wallet Save To Local====================================//
  useEffect(() => {
    if (wallet) {
      let objData = localStorage.getItem("wallet");
      objData = JSON.parse(objData);
      setWalletAddress(objData.selectedAccount);
    }
  }, [wallet]);

  const handleClose = useCallback((e) => {
    setShow(false);
  });
  //==============================End Of Code====================================//

  const ConnectWalletModalProps = useMemo(() => ({
    modalProps: {
      show: show,
      onHide: handleClose,
    },
    onWalletChange,
    forMobileView,
  }));
  //=======================End of code============================//

  //======================Account changes with metamask========================//
  const getWalletAddress = async () => {
    //=================Account change code===============//
    const walletAcc = await Connect(wallet.type);
    if (wallet.type === "walletConnect") {
      document.addEventListener("ACCOUNT_CONNECTED", (e) => {
        localStorage.setItem("wallet", JSON.stringify(walletAcc));
      });
      localStorage.setItem("wallet", JSON.stringify(walletAcc));
    } else {
      localStorage.setItem("wallet", JSON.stringify(walletAcc));
    }
  };

  useEffect(() => {
    if (walletAddress) {
      getWalletAddress();
    }
  }, [walletAddress]);
  //==========================End of code==============================//


  //======================Account changes with metamask========================//
  useEffect(() => {
    if (wallet) {
      const handleChain = async () => {
        let provider = await Provider(wallet.type);
        //=================Account change code===============//
        provider.on("accountsChanged", async (accounts) => {
          const walletAcc = await Connect(wallet.type);
          if (wallet.type === "walletConnect") {
          } else {
            localStorage.setItem("wallet", JSON.stringify(walletAcc));
            window.location.reload();
          }
        });

        //=================Chain change code===============//
        provider.on("chainChanged", async (chainId) => {
          const walletChain = await Connect(wallet.type);
          if (wallet.type === "walletConnect") {
          } else {
            localStorage.setItem("wallet", JSON.stringify(walletChain));
            window.location.reload();
          }
        });
      };
      handleChain();
    }
  }, []);
  //==========================End of code==============================//

  //==========================End of code==============================//

  return (
    <>
      <header className="main-header">
        <Navbar expand="lg" sticky="top">
          <Notification
            message_mo={modelMessage}
            action_mo={openModel}
            random_val={randomVal}
          />
          <ToastContainer />
          <Container>
            <Row className="w-100 m-auto">
              <Col className="p-0">
                <div className="d-flex justify-content-between align-items-center">
                  <Navbar.Brand href="/">
                    <img src="assets/img/logo.png" />
                  </Navbar.Brand>
                  <div className="upper-header-new">
                    {/* <Link to="/singleswap">Swap</Link> */}
                    <div></div>
                    {/* {!hideWalletButton && (
                    <div className="d-flex align-items-center">
                      {!wallet ? (
                        <>
                          
                            <button
                              className="common-btn  connect-btn"
                              onClick={() => setShow(true)}
                            >
                              Connect Wallet
                            </button>
                       
                        </>
                      ) : (
                        <Dropdown>
                          <Dropdown.Toggle className="common-btn ">
                            {walletAddress.replace(
                              walletAddress.substring(5, 37),
                              "..."
                            )}
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-trade">
                            <Dropdown.Item
                              onClick={() => {
                                navigate("/recent-trades");
                              }}
                            >
                              Recent Trades
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                navigate("/referal-transaction");
                              }}
                            >
                              Referral Transaction
                            </Dropdown.Item>
                            <Dropdown.Item
                              style={{ color: "#d9573f" }}
                              onClick={() => {
                                HandleLogout();
                              }}
                            >
                              Logout
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      )}
                    </div>
                    )} */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>

      <ConnectWalletModal {...ConnectWalletModalProps} />

    </>
  );
}
