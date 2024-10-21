import React, { useEffect, useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap-v5";
import { ToastContainer } from "react-toastify";
import { FixedSizeList as List } from "react-window";
import { debounce } from "lodash";

export default function NewSwapModalSingleMainnet({
  tokenList,
  handleToken,
  ...props
}) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredTokens, setFilteredTokens] = useState([]);

  useEffect(() => {
    setFilteredTokens(tokenList);
  }, [tokenList]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedFilterTokens(value);
  };

  const debouncedFilterTokens = debounce((value) => {
    const filtered = tokenList.filter(
      (item) =>
        item.symbol.toLowerCase().includes(value.toLowerCase()) ||
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.contract_address?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTokens(filtered);
  }, 300);

  return (
    <>
      <ToastContainer />
      <Modal
        className="token-list-modal"
        centered
        size="lg"
        backdrop="static"
        keyboard={false}
        {...props.modalProps}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tokens List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search-box-inner">
            <Form.Group className="search-purple-box w-100">
              <InputGroup>
                <Form.Control
                  type="text"
                  className="search_data play-search1"
                  placeholder="Search name or paste address"
                  name="search"
                  onChange={handleSearch}
                  value={searchValue}
                />
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-search"></i>
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </div>
          <div className="sideby-box-surrecy">
            <div className="star-currency w-100" id="showMainDiv">
              <List
                className="list-ul"
                height={400}
                itemCount={filteredTokens.length}
                itemSize={60}
                width="100%"
              >
                {({ index, style }) => {
                  const token = filteredTokens[index];
                  return (
                    <div
                      style={style}
                      className="list-li"
                      onClick={(e) => {
                        e.preventDefault();
                        handleToken(token);
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          className="img-first me-2"
                          alt="token"
                          src={token.image || "assets/img/star.png"}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "assets/img/star.png";
                          }}
                        />
                        <div>
                          <h4>
                            <span>{token.symbol?.toUpperCase()}</span> (
                            {token.network?.toUpperCase()})
                          </h4>
                          <p>{token.name}</p>
                        </div>
                      </div>
                    </div>
                  );
                }}
              </List>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
