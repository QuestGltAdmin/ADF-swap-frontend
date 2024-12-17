import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap-v5";

export const Footer = () => {
  return (
    <footer className="footer-box">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            {/* <p>
              <img alt="img" src="assets/img/money.png" /> Accumulated
              transaction Volume : <span>$ {((accumulatedData*1)+124000).toFixed(2)}</span>
            </p> */}
            <div className="footer-link">
              <a href="https://x.com/Addfill" target="_blank">
                <img alt="img" src="assets/img/twitter.png" />
              </a>
              <a href="https://www.facebook.com/people/AddFill_Official/61550275840614/" target="_blank">
                <img alt="img" src="assets/img/facebook.png" />
              </a>
              {/* <a href="https://discord.com/invite/" target="_blank">
                <img alt="img" src="assets/img/discord.png" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img alt="img" src="assets/img/youtube.png" />
              </a>
              <a href="https://t.me/joinchat" target="_blank">
                <img alt="img" src="assets/img/telegram.png" />
              </a> */}
            </div>
            <p>
              © Copyright ADF Swap 2024,{" "}
              <a href="/privacy">Privacy Policy</a> |{" "}
              <a href="/terms">Terms of Services</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
