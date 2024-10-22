import React from 'react'
import { Col, Row } from 'react-bootstrap-v5';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function HomeHeader() {
  return (
      <div className='home-header-new'>
        <Container>
          <Row>
            <Col md={12}>
              <Navbar  expand="lg">
              <Navbar.Brand className="" href="https://adfswap.io">
                          <img src="assets/img/logo.png" className='img-fluid' alt='logo' />
                        </Navbar.Brand>
                
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className="">
                    <Nav.Link href="https://adfswap.io">Home</Nav.Link>
                    <Nav.Link href="/">Swap</Nav.Link>
                    <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
                    <Nav.Link href="/terms">Terms & Condition</Nav.Link>

                  </Nav>
                </Navbar.Collapse>
                <Link className='purple-common-btn' variant="outline-success" to="/">Launch App</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

