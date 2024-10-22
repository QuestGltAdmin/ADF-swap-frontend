/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap-v5";
import { ToastContainer } from "react-toastify";
import { axiosSimpleSwap } from "../http/axios/axios_main";
import QRCode from "react-qr-code";

export const Exchange = () => {
  const [exchangeData, setExchangeData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    // Initial fetch if dependencies are set
    if (id) {
      fetchExchangeDetails();
    }

    const intervalId = setInterval(() => {
      if (id && exchangeData?.status !== "finished") {
        fetchExchangeDetails();
      }
    }, 10000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [id, exchangeData?.status]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Cleanup on unmount or when isLoading changes
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isLoading]);

  const fetchExchangeDetails = async () => {
    try {
      setIsLoading(true);
      const params = `api_key=${process.env.REACT_APP_SINGLE_SWAP_API_KEY}&id=${id}`;
      const { data } = await axiosSimpleSwap.get(`/get_exchange?${params}`);
      if (data) {
        setExchangeData(data);
      }
      setErrorMessage("");
    } catch (error) {
      const { response } = error;
      if (response?.data?.description) {
        setErrorMessage(response.data.description);
      }
      console.log("Something went wrong with fetch exchange api");
    } finally {
      setIsLoading(false);
    }
  };

  const getTitle = () => {
    const status = exchangeData.status;
    if (status === "waiting") {
      return "Awaiting your deposit";
    }

    if (status === "sending") {
      return "Sending your deposit";
    }

    if (status === "confirming") {
      return "Confirming your deposit";
    }

    if (status === "finished") {
      return "Finished successfully";
    }

    return "";
  };

  if (errorMessage) {
    return (
      <section className="">
        <ToastContainer />
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="cross-swap-inner">
                <div
                  className="first-row mb-0"
                  style={{ justifyContent: "center" }}
                >
                  <div className="cross-chain-row">
                    <div>
                      <h3>{errorMessage}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  if (!exchangeData) {
    return <></>;
  }

  return (
    <>
      <section>
        <ToastContainer />
        {isLoading && (
          <div
            className="loader-gif"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "99999",
              backdropFilter: "contrast(0.5)",
            }}
          >
            <img width={90} height={90} src="assets/img/loader.gif" />
          </div>
        )}
        <Container>
          <Row>
            <Col lg={6} className="m-auto">
              <div className="cross-swap-inner">
                <div className="first-row" style={{ justifyContent: "center" }}>
                  <div className="cross-chain-row">
                    <div>
                      <h3>{getTitle()}</h3>
                    </div>
                  </div>
                </div>

                {exchangeData.status === "finished" ? (
                  <div className="exchange-detail-box">
                    <div
                      className="exchange-detail-row row"
                      style={{
                        justifyContent: "center",
                        gap: "24px",
                      }}
                    >
                      <p className="exchange-detail-value col-md-6">
                        <img
                          className="img-first me-2"
                          alt="token"
                          src={
                            exchangeData.currencies?.[
                              `${exchangeData.currency_from}`
                            ]?.image || "assets/img/star.png"
                          }
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "assets/img/star.png";
                          }}
                        />{" "}
                        <span>
                          {exchangeData.amount_from}{" "}
                          {exchangeData.currencies?.[
                            `${exchangeData.currency_from}`
                          ]?.symbol?.toUpperCase()}{" "}
                          <span className="exchange-detail-sub-value">
                            (
                            {exchangeData.currencies?.[
                              `${exchangeData.currency_from}`
                            ]?.network?.toUpperCase()}
                            )
                          </span>
                        </span>
                      </p>

                      <i
                        style={{ color: "green" }}
                        className="fa fa-arrow-right"
                        aria-hidden="true"
                      ></i>

                      <p className="exchange-detail-value col-md-6">
                        <img
                          className="img-first me-2"
                          alt="token"
                          src={
                            exchangeData.currencies?.[
                              `${exchangeData.currency_to}`
                            ]?.image || "assets/img/star.png"
                          }
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "assets/img/star.png";
                          }}
                        />{" "}
                        <span>
                          {exchangeData.amount_to}{" "}
                          {exchangeData.currencies?.[
                            `${exchangeData.currency_to}`
                          ]?.symbol?.toUpperCase()}{" "}
                          <span className="exchange-detail-sub-value">
                            (
                            {exchangeData.currencies?.[
                              `${exchangeData.currency_to}`
                            ]?.network?.toUpperCase()}
                            )
                          </span>
                        </span>
                      </p>
                    </div>

                    <button
                      className="common-btn connect-btn"
                      style={{
                        width: "60%",
                        margin: "40px auto 0px",
                      }}
                      onClick={() => navigate("/")}
                    >
                      Start a new exchange
                    </button>
                  </div>
                ) : (
                  <div className="exchange-detail-box">
                    <div className=" mb-4 row">
                      <p className=" col-md-4">Send deposit:</p>{" "}
                      <p className=" col-md-8">
                        <img
                          className="img-first me-2"
                          alt="token"
                          src={
                            exchangeData.currencies?.[
                              `${exchangeData.currency_from}`
                            ]?.image || "assets/img/star.png"
                          }
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "assets/img/star.png";
                          }}
                        />{" "}
                        <span>
                          {exchangeData.amount_from}{" "}
                          {exchangeData.currencies?.[
                            `${exchangeData.currency_from}`
                          ]?.symbol?.toUpperCase()}{" "}
                          <span className="exchange-detail-sub-label ms-3">
                            Network:{" "}
                          </span>
                          <span className="exchange-detail-sub-value">
                            {exchangeData.currencies?.[
                              `${exchangeData.currency_from}`
                            ]?.network?.toUpperCase()}
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className="exchange-detail-row">
                      <p className="exchange-detail-label">Deposit address:</p>{" "}
                      <p className="exchange-detail-value">
                        <div className="exchange-detail-deposit">
                          <div className="exchange-detail-barcode-wrapper">
                            <div
                              className="me-2 qr-screen"
                              style={{ height: "auto", maxWidth: 88 }}
                            >
                              <QRCode
                                size={88}
                                value={`${exchangeData.address_from}`}
                              />
                            </div>
                            <span className="break-line">
                              {exchangeData.address_from}{" "}
                            </span>
                          </div>
                          <div className="exchange-detail-content-wrapper">
                            <a
                              href={`${exchangeData.currencies?.[
                                `${exchangeData.currency_from}`
                              ]?.address_explorer?.slice(0, -3)}/${
                                exchangeData.address_from
                              }`}
                              className="me-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                style={{ color: "black" }}
                                className="fa fa-external-link"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a
                              onClick={() =>
                                navigator.clipboard.writeText(
                                  exchangeData.address_from
                                )
                              }
                            >
                              <i
                                style={{ color: "black" }}
                                className="fa fa-clone"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </p>
                    </div>
                    {exchangeData.currencies?.[`${exchangeData.currency_from}`]
                      ?.has_extra_id &&
                      exchangeData.currencies?.[`${exchangeData.currency_from}`]
                        ?.extra_id &&
                      exchangeData.extra_id_from && (
                        <div className="exchange-detail-row">
                          <p className="exchange-detail-label">
                            Copy{" "}
                            {
                              exchangeData.currencies[
                                `${exchangeData.currency_from}`
                              ].extra_id
                            }
                            :
                          </p>{" "}
                          <p className="exchange-detail-value">
                            <div
                              className="exchange-detail-deposit"
                              style={{ flexWrap: "wrap" }}
                            >
                              <div className="exchange-detail-barcode-wrapper">
                                <span className="break-line">
                                  {exchangeData.extra_id_from}
                                </span>
                              </div>
                              <div className="exchange-detail-content-wrapper">
                                <a
                                  onClick={() =>
                                    navigator.clipboard.writeText(
                                      exchangeData.extra_id_from
                                    )
                                  }
                                >
                                  <i
                                    style={{ color: "black" }}
                                    className="fa fa-clone"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </div>
                              <hr
                                style={{
                                  color: "white",
                                  margin: "8px 0px",
                                  flex: "1 0 100%",
                                }}
                              />
                              <span
                                className="break-line"
                                style={{ fontSize: 12, flex: "1 0 100%" }}
                              >
                                To not lose your funds please enter the memo
                                while sending your deposit.
                              </span>
                            </div>
                          </p>
                        </div>
                      )}
                  </div>
                )}
              </div>

              <div className="cross-swap-inner mt-3">
                <div className="first-row" style={{ justifyContent: "center" }}>
                  <div className="cross-chain-row">
                    <div>
                      <h3>Operation details</h3>
                    </div>
                  </div>
                </div>

                <div className="exchange-detail-box">
                  <div className="exchange-detail-row">
                    <p className="exchange-detail-label">You get:</p>{" "}
                    <p className="exchange-detail-value">
                      <img
                        className="img-first me-2"
                        alt="token"
                        src={
                          exchangeData.currencies?.[
                            `${exchangeData.currency_to}`
                          ]?.image || "assets/img/star.png"
                        }
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = "assets/img/star.png";
                        }}
                      />{" "}
                      <span>
                        ~{exchangeData.amount_to}{" "}
                        {exchangeData.currencies?.[
                          `${exchangeData.currency_to}`
                        ]?.symbol?.toUpperCase()}{" "}
                        <span className="exchange-detail-sub-label ms-3">
                          Network:{" "}
                        </span>
                        <span className="exchange-detail-sub-value">
                          {exchangeData.currencies?.[
                            `${exchangeData.currency_to}`
                          ]?.network?.toUpperCase()}
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="exchange-detail-row">
                    <p className="exchange-detail-label">Recipient address:</p>{" "}
                    <p className="exchange-detail-value">
                      <div className="exchange-detail-deposit">
                        <div className="exchange-detail-barcode-wrapper">
                          <span className="break-line">
                            {exchangeData.address_to}{" "}
                          </span>
                        </div>
                        <div className="exchange-detail-content-wrapper">
                          <a
                            href={`${exchangeData.currencies?.[
                              `${exchangeData.currency_to}`
                            ]?.address_explorer?.slice(0, -3)}/${
                              exchangeData.address_to
                            }`}
                            className="me-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              style={{ color: "black" }}
                              className="fa fa-external-link"
                              aria-hidden="true"
                            ></i>
                          </a>
                          <a
                            onClick={() =>
                              navigator.clipboard.writeText(
                                exchangeData.address_to
                              )
                            }
                          >
                            <i
                              style={{ color: "black" }}
                              className="fa fa-clone"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </p>
                  </div>
                  {!!exchangeData.tx_to && (
                    <div className="exchange-detail-row">
                      <p className="exchange-detail-label">Hash out:</p>{" "}
                      <p className="exchange-detail-value">
                        <div className="exchange-detail-deposit">
                          <div className="exchange-detail-barcode-wrapper">
                            <span className="break-line">
                              {exchangeData.tx_to}{" "}
                            </span>
                          </div>
                          <div className="exchange-detail-content-wrapper">
                            <a
                              href={`${exchangeData.currencies?.[
                                `${exchangeData.currency_to}`
                              ]?.tx_explorer?.slice(0, -3)}/${
                                exchangeData.tx_to
                              }`}
                              className="me-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                style={{ color: "black" }}
                                className="fa fa-external-link"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a
                              onClick={() =>
                                navigator.clipboard.writeText(
                                  exchangeData.tx_to
                                )
                              }
                            >
                              <i
                                style={{ color: "black" }}
                                className="fa fa-clone"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </p>
                    </div>
                  )}

                  {["finished", "sending"].includes(exchangeData.status) && (
                    <>
                      <hr
                        style={{
                          color: "white",
                          margin: "40px 0px",
                        }}
                      />
                      <div className="exchange-detail-row">
                        <p className="exchange-detail-label">You sent:</p>{" "}
                        <p className="exchange-detail-value">
                          <img
                            className="img-first me-2"
                            alt="token"
                            src={
                              exchangeData.currencies?.[
                                `${exchangeData.currency_from}`
                              ]?.image || "assets/img/star.png"
                            }
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null;
                              currentTarget.src = "assets/img/star.png";
                            }}
                          />{" "}
                          <span>
                            ~{exchangeData.amount_from}{" "}
                            {exchangeData.currencies?.[
                              `${exchangeData.currency_from}`
                            ]?.symbol?.toUpperCase()}{" "}
                            <span className="exchange-detail-sub-label ms-3">
                              Network:{" "}
                            </span>
                            <span className="exchange-detail-sub-value">
                              {exchangeData.currencies?.[
                                `${exchangeData.currency_from}`
                              ]?.network?.toUpperCase()}
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="exchange-detail-row">
                        <p className="exchange-detail-label">
                          Deposit address:
                        </p>{" "}
                        <p className="exchange-detail-value">
                          <div className="exchange-detail-deposit">
                            <div className="exchange-detail-barcode-wrapper">
                              <span className="break-line">
                                {exchangeData.address_from}{" "}
                              </span>
                            </div>
                            <div className="exchange-detail-content-wrapper">
                              <a
                                href={`${exchangeData.currencies?.[
                                  `${exchangeData.currency_from}`
                                ]?.address_explorer?.slice(0, -3)}/${
                                  exchangeData.address_from
                                }`}
                                className="me-2"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i
                                  style={{ color: "black" }}
                                  className="fa fa-external-link"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a
                                onClick={() =>
                                  navigator.clipboard.writeText(
                                    exchangeData.address_from
                                  )
                                }
                              >
                                <i
                                  style={{ color: "black" }}
                                  className="fa fa-clone"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                      {!!exchangeData.tx_from && (
                        <div className="exchange-detail-row">
                          <p className="exchange-detail-label">Hash in:</p>{" "}
                          <p className="exchange-detail-value">
                            <div className="exchange-detail-deposit">
                              <div className="exchange-detail-barcode-wrapper">
                                <span className="break-line">
                                  {exchangeData.tx_from}{" "}
                                </span>
                              </div>
                              <div className="exchange-detail-content-wrapper">
                                <a
                                  href={`${exchangeData.currencies?.[
                                    `${exchangeData.currency_from}`
                                  ]?.tx_explorer?.slice(0, -3)}/${
                                    exchangeData.tx_from
                                  }`}
                                  className="me-2"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <i
                                    style={{ color: "black" }}
                                    className="fa fa-external-link"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <a
                                  onClick={() =>
                                    navigator.clipboard.writeText(
                                      exchangeData.tx_from
                                    )
                                  }
                                >
                                  <i
                                    style={{ color: "black" }}
                                    className="fa fa-clone"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </div>
                            </div>
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
