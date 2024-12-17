import React from "react";
import { useState } from "react";
import { Col, Container, InputGroup, Row, Form, Nav, Navbar } from "react-bootstrap-v5";
import { Notification } from "../Component/Notification";

export default function HomeFooter() {
  //==========================Local Variable============================//
  //===============For PopUp Modal====================//
  const [openModel, setOpenModel] = useState(false);
  const [modelMessage, setModelMessage] = useState("");
  const [randomVal, setRandomVal] = useState("");
  //===============End of code====================//

  //==========================End Of Code============================//
  return (
    <div id="home-footer" className="">
      <Container>
        <Notification
          message_mo={modelMessage}
          action_mo={openModel}
          random_val={randomVal}
        />
        <Row>
          <Col md={4}>
            <div className="footer-content">
              <Navbar.Brand className="" href="/">
                <img
                  src="assets/img/logo.png"
                  className="img-fluid logo-img"
                  alt="logo"
                />
              </Navbar.Brand>
              <p>
                As we continue to grow and expand our ecosystem, we invite you to join us on this journey. Together, we can redefine the future of digital asset management and create endless possibilities for innovation and collaboration.
                {" "}
              </p>
              <div className="d-flex footer-social-link">
                <a href="https://twitter.com/" target="_blank">
                  <img alt="img" src="assets/img/twitter.png" />
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <img alt="img" src="assets/img/facebook.png" />
                </a>
                <a href="https://discord.com/invite/" target="_blank">
                  <img alt="img" src="assets/img/discord.png" />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                  <img alt="img" src="assets/img/youtube.png" />
                </a>
                <a href="https://t.me/joinchat/" target="_blank">
                  <img alt="img" src="assets/img/telegram.png" />
                </a>
              </div>
              {/* <div className="d-flex footer-social-link">
                <a>
                  {" "}
                  <img
                    src="assets/home-img/twitter.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </a>
                <a>
                  {" "}
                  <img
                    src="assets/home-img/vector-1.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </a>
                <a>
                  {" "}
                  <img
                    src="assets/home-img/youtube.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </a>
                <a>
                  {" "}
                  <img
                    src="assets/home-img/github.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </a>
              </div> */}
            </div>
          </Col>
          <Col className="ms-auto" md={3}>
            <div className="footer-box1">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <Nav.Link href="/">Swap</Nav.Link>

                </li>
                <li>
                  <Nav.Link href="/privacy">Privacy Policy</Nav.Link>

                </li>
                <li>
                  <Nav.Link href="/terms">Terms & Condition</Nav.Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
