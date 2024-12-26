import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, InputGroup } from "react-bootstrap-v5";
import { ToastContainer } from "react-toastify";
import NewSwapModalSingleMainnet from "../Component/ui/NewSwapModalSingleMainnet";
import { useNavigate } from "react-router-dom";
import { axiosMain } from "../http/axios/axios_main";
import ExchangeTabs from "../Component/exchange-tabs";

const fiatCurrencyCodes = [
  "EUR",
  "USD",
  "GBP",
  "ZAR",
  "JPY",
  "MXN",
  "IDR",
  "TL",
  "VND",
  "NGN",
];

export const Buy = () => {
  const [fromTokenAmount, setFromTokenAmount] = useState(0);
  const [toTokenAmount, setToTokenAmount] = useState(0);
  const [tokenList, setTokenList] = useState([]);
  const [fiatList, setFiatList] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");
  const [memoData, setMemoData] = useState("");
  const [tokens, setTokens] = useState({ from: {}, to: {} });
  const [walletAddressDeCheck, setWalletAddressDeCheck] = useState(false);
  const [memoDataDeCheck, setMemoDataDeCheck] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState({
    show: false,
    isFrom: false,
  });
  const [exchangeErrorMessage, setExchangeErrorMessage] = useState("");
  const [postExchangeErrorMessage, setPostExchangeErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchTokenList();
  }, []);

  useEffect(() => {
    // Initial fetch if dependencies are set
    if (fromTokenAmount && tokens.from && tokens.to) {
      fetchEstimatedExchange();
    }

    const intervalId = setInterval(() => {
      if (fromTokenAmount && tokens.from && tokens.to) {
        fetchEstimatedExchange();
      }
    }, 5000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [fromTokenAmount, tokens.from, tokens.to]);

  const fetchTokenList = async () => {
    try {
      const response = await axiosMain.get(`/get_all_currencies?type=to`);
      const data = response?.data?.message?.data;
      if (data?.length) {
        const filterFiatData = data.filter(
          (item) =>
            item.isFiat &&
            fiatCurrencyCodes.includes(item.symbol?.toUpperCase())
        );
        const filterData = data.filter(
          (item) => !item.isFlat && item.validation_address !== null
        );
        // console.log(filterData)
        if (filterFiatData?.length && filterData.length) {
          setFiatList(filterFiatData);
          setTokenList(filterData);
          setTokens((prevState) => ({
            ...prevState,
            from: filterFiatData[0],
            to: filterData[0]
          }));

          // if (filterData.length > 1) {
          //   setTokens((prevState) => ({
          //     ...prevState,
          //     to: filterData[1],
          //   }));
          // }
        }
      }
    } catch (error) {
      console.log("Something went wrong with fetch token list api");
    }
  };

  const fetchEstimatedExchange = async () => {
    const params = `fixed=${false}&currency_from=${
      tokens.from.symbol
    }&currency_to=${tokens.to.symbol}&amount=${fromTokenAmount}`;
    try {
      const response = await axiosMain.get(`/get_estimated?${params}`);
      const data = response?.data?.message?.data;
      if (data) {
        setToTokenAmount(data);
      }
      setExchangeErrorMessage("");
    } catch (error) {
      setToTokenAmount(0);

      const response = error;
      if (response?.response?.data?.message?.description) {
        setExchangeErrorMessage(response?.response?.data?.message?.description);
      }
    }
  };

  const createExchange = async () => {
    const body = {
      fixed: false,
      currency_from: tokens.from.symbol,
      currency_to: tokens.to.symbol,
      amount: fromTokenAmount,
      address_to: walletAddress,
      extra_id_to: memoData,
      user_refund_address: "",
      user_refund_extra_id: "",
    };

    try {
      const response = await axiosMain.post(`/create_exchange`, body);
      const data = response?.data?.message?.data;
      if (data?.id) {
        setToTokenAmount(0);
        setFromTokenAmount(0);
        setWalletAddress("");
        navigate(`/exchange?id=${data.id}`);
      }
      setPostExchangeErrorMessage("");
    } catch (error) {
      const response = error;
      if (response?.response?.data?.message?.error) {
        setPostExchangeErrorMessage(response?.response?.data?.message?.error);
      }
      if (response?.response?.data?.message?.description) {
        setPostExchangeErrorMessage(
          response?.response?.data?.message?.description
        );
      }
    }
  };

  const handleAmount = async (e) => {
    let value = e.target.value;
    if (value < 0) {
      value = 0;
    }
    setFromTokenAmount(value);
  };

  const switcher = (e) => {
    if (tokens.to.symbol !== "adf") {
      e.preventDefault();
      setTokens((prevState) => {
        return { from: prevState.to, to: prevState.from };
      });
    }
  };

  useEffect(() => {
    checkValidWallet();
  }, [tokens.to, walletAddress]);

  const checkValidWallet = () => {
    let regex = new RegExp(tokens.to?.validation_address);
    const isCheck = regex.test(walletAddress);
    if (isCheck) {
      setWalletAddressDeCheck(true);
    } else {
      setWalletAddressDeCheck(false);
    }
    return isCheck;
  };

  const checkValidMemo = () => {
    let regex = new RegExp(tokens.to?.validation_extra);
    const isCheck = regex.test(memoData);
    if (isCheck) {
      setMemoDataDeCheck(true);
    } else {
      setMemoDataDeCheck(false);
    }
    return isCheck;
  };

  const handleExchange = () => {
    if (!tokens.from) {
      setPostExchangeErrorMessage("Please select From token");
    } else if (!tokens.to) {
      setPostExchangeErrorMessage("Please select To token");
    } else if (!fromTokenAmount) {
      setPostExchangeErrorMessage("Please enter From token amount");
    } else if (!walletAddress) {
      setPostExchangeErrorMessage("Please enter wallet address");
    } else {
      const isValidWallet = checkValidWallet();
      if (isValidWallet) {
        if (tokens.to?.extra_id) {
          const isValidMemo = checkValidMemo();

          if (isValidMemo) {
            createExchange();
          } else {
            setPostExchangeErrorMessage(
              `Please enter valid ${tokens.to?.extra_id}`
            );
          }
        } else {
          createExchange();
        }
      } else {
        setPostExchangeErrorMessage("Please enter valid wallet address");
      }
    }
  };

  const handleToken = (token) => {
    if (showSearchModal.isFrom) {
      setTokens((prevState) => ({ ...prevState, from: token }));
    } else {
      setTokens((prevState) => ({ ...prevState, to: token }));
    }
    setShowSearchModal((prevState) => ({ ...prevState, show: false }));
  };

  return (
    <>
      <section className="">
        <ToastContainer />
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="cross-swap-inner">
                <ExchangeTabs />

                <div className="select-one-row">
                  <div>
                    <button
                      className="select-btn"
                      onClick={() =>
                        setShowSearchModal((prevState) => ({
                          show: true,
                          isFrom: true,
                        }))
                      }
                    >
                      {tokens.from ? (
                        <>
                          <img
                            className="eth-icon"
                            src={tokens.from.image || "assets/img/star.png"}
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null;
                              currentTarget.src = "assets/img/star.png";
                            }}
                          />
                          {tokens.from.symbol?.toUpperCase()}
                        </>
                      ) : (
                        "Select From Token"
                      )}
                      <img className="down-arrow" src="assets/img/down.png" />
                    </button>
                  </div>
                  <div>
                    <div>
                      <h5>
                        <Form.Control
                          type="number"
                          onChange={handleAmount}
                          min={0}
                          placeholder="0.00"
                          value={fromTokenAmount}
                        />
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="swap-btn add-ico">
                  <a onClick={switcher}>
                    <img src="assets/img/swithcer.svg" />
                  </a>
                </div>

                <div className="select-one-row">
                  <button
                    className="select-btn"
                    onClick={() =>
                      setShowSearchModal((prevState) => ({
                        show: true,
                        isFrom: false,
                      }))
                    }
                  >
                    {tokens.to ? (
                      <>
                        <img
                          className="eth-icon"
                          src={tokens.to.image || "assets/img/star.png"}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "assets/img/star.png";
                          }}
                        />
                        {tokens.to.symbol?.toUpperCase()}
                      </>
                    ) : (
                      "Select From Token"
                    )}
                    <img className="down-arrow" src="assets/img/down.png" />
                  </button>
                  <div className="afterexch">
                    {exchangeErrorMessage ? (
                      <p className="error-msg">{exchangeErrorMessage}</p>
                    ) : (
                      <>
                        {toTokenAmount ? (
                          <h5>
                            <Form.Control
                              readOnly
                              type="text"
                              value={toTokenAmount.toLocaleString(undefined, {
                                minimumFractionDigits: 8,
                              })}
                            />
                          </h5>
                        ) : (
                          <h5>{fromTokenAmount ? "..." : ""}</h5>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className="wallet-address-box">
                  <p>Wallet Address to Receive Token</p>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter or Paste Address"
                      onChange={(e) => {
                        setWalletAddress(e.target.value);
                      }}
                      value={walletAddress}
                      // onKeyUp={() => {
                      //   checkValidWallet();
                      // }}
                    />
                    <InputGroup.Text
                      onClick={async () => {
                        let text = await navigator.clipboard.readText();
                        setWalletAddress(text);
                      }}
                    >
                      <i
                        class="fa fa-clipboard text-white"
                        aria-hidden="true"
                      ></i>
                    </InputGroup.Text>
                    {walletAddress.length > 0 ? (
                      <InputGroup.Text>
                        {walletAddressDeCheck ? (
                          <img src="assets/img/insurance.png" />
                        ) : (
                          <img src="assets/img/warning.png" />
                        )}
                      </InputGroup.Text>
                    ) : (
                      <></>
                    )}
                    {walletAddress.length > 0 ? (
                      <InputGroup.Text>
                        <img
                          src="assets/img/x.png"
                          onClick={() => {
                            setWalletAddress("");
                          }}
                        />
                      </InputGroup.Text>
                    ) : (
                      ""
                    )}
                  </InputGroup>
                </div>

                {tokens.to?.has_extra_id && tokens.to?.extra_id && (
                  <div className="wallet-address-box">
                    <p>{tokens.to.extra_id}</p>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Enter your data"
                        onChange={(e) => {
                          setMemoData(e.target.value);
                        }}
                        value={memoData}
                        onKeyUp={() => {
                          checkValidMemo();
                        }}
                      />
                      {memoData.length > 0 ? (
                        <InputGroup.Text>
                          {memoDataDeCheck ? (
                            <img src="assets/img/insurance.png" />
                          ) : (
                            <img src="assets/img/warning.png" />
                          )}
                        </InputGroup.Text>
                      ) : (
                        <></>
                      )}
                      {memoData.length > 0 ? (
                        <InputGroup.Text>
                          <img
                            src="assets/img/x.png"
                            onClick={() => {
                              setMemoData("");
                            }}
                          />
                        </InputGroup.Text>
                      ) : (
                        ""
                      )}
                    </InputGroup>
                  </div>
                )}

                <div>
                  {postExchangeErrorMessage ? (
                    <p className="error-msg">{postExchangeErrorMessage}</p>
                  ) : (
                    <></>
                  )}
                  <button
                    className="common-btn connect-btn"
                    onClick={handleExchange}
                  >
                    Exchange
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {showSearchModal.show && (
        <NewSwapModalSingleMainnet
          modalProps={{
            show: showSearchModal.show,
            onHide: () =>
              setShowSearchModal((prevState) => ({
                ...prevState,
                show: false,
              })),
          }}
          tokenList={
            showSearchModal.isFrom
              ? fiatList.filter((token) => token.symbol !== tokens.to.symbol)
              : tokenList
          }
          handleToken={handleToken}
        />
      )}
    </>
  );
};
