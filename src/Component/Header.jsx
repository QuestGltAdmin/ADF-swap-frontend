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
import { toast, ToastContainer } from "react-toastify";
import { Notification } from "./Notification";

export default function Header() {
  //===============For PopUp Modal====================//
  const [openModel, setOpenModel] = useState(false);
  const [modelMessage, setModelMessage] = useState("");
  const [randomVal, setRandomVal] = useState("");
  //===============End of code====================//

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
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>

    </>
  );
}
