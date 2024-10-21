import React from 'react'
import { Col, Container, Row } from 'react-bootstrap-v5'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const HomePage2 = () => {

  var settings = {
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 1000,
    infinite: true,
    autoplaySpeed: 1000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  var settings2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 1000,
    infinite: true,
    autoplaySpeed: 500,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className='home-main-sec'>
        <Container fluid>
          <Row className='align-items-center'>
            <Col md={5} className='me-auto'>
              <div className='home-margin'>
                <h1>ADF Cross - Chain Dex</h1>
                <p>ADF has unveiled a groundbreaking Cross-chain Decentralized Exchange (DeX) that empowers users to trade their digital assets across multiple blockchain networks without the need for a centralized intermediary. By facilitating the direct exchange of value and information between disparate blockchain networks, ADF DeX enhances security, transparency, and user experience for trading assets across various blockchains.
                  <span className='home-bottom-border'></span></p>
                <div className='d-flex gap-3 home-sec-btns'>
                  {/* <Button className='purple-btn-border'>White paper</Button> */}
                  <Link className='purple-common-btn' to="/swap-simple">Launch App</Link>
                </div>
              </div>
            </Col>
            <Col md={7} className='p-0'>
              <div className='text-end  '>
                <img src='assets/home-img/homepage.png' className='img-fluid' alt="image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='cross-chain-sec'>
        <Container>
          <Row className='align-items-center'>
            <Col md={5} className='me-auto order-set-media'>
              <div className='text-center p-2'>
                <img src='assets/home-img/cross-chain-swap.png' className='img-fluid' alt="image" />
              </div>
            </Col>
            <Col md={5} className='me-auto' >
              <div>
                <h2 className='home-sec-header'>Unique features of ADF Cross Chain Protocol
                  <span className='home-bottom-border'></span>
                </h2>
                <p>ADF has utilized advanced degree of a smart contract technology that facilitates the exchange of tokens between two distinct blockchain ecosystems. ADF has implemented two level of security verification for performing transactions and has utilized event calling within the smart contract to ensure that transactions are genuine at all times. ADF is also using a signature concept to prevent attacks of address manipulation from attackers.There is a validation of signature based on actual time with time and deadline to ensure correctness.

                </p>
                {/* <div className='learn-more'>
                  <a>Learn More</a>
                </div> */}
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      <section className='feature-chain-sec'>
        <Container>
          <Row className='align-items-center'>
            <Col md={5} className='m-auto' >
              <div className='text-center'>
                <h2 className='home-third-header'>Features
                  <span className='home-bottom-border center'></span>
                </h2>
                <p className='text-center same-home-para'>Our cross-chain bridge is designed with an array of robust features:
                </p>
              </div>
            </Col>
          </Row>
          <Row className='feature-box-margin'>
          <Slider {...settings2}>
            <div>
              <div className='describe-box text-center'>
                <div className='pading-in'>
                  <div className='image-space'>
                    <img src="assets/home-img/Cross-chain aggregators.png" className='img-fluid' alt='image' />
                  </div>
                  <h3>Cross-chain aggregators</h3>
                  <p className='same-home-para text-center'>
                  These pull liquidity from multiple exchanges, ensuring the best prices and asset availability.

                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='describe-box text-center'>
                <div className='pading-in'>
                  <div className='image-space'>
                    <img src="assets/home-img/Cross-collateralization-.png" className='img-fluid' alt='image' />
                  </div>
                  <h3>Cross-collateralization</h3>
                  <p className='same-home-para text-center'>
                  This enables the efficient trading of virtual assets while minimizing the need for multiple tokens.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='describe-box text-center'>
                <div className='pading-in'>
                  <div className='image-space'>
                    <img src="assets/home-img/Factory contracts-.png" className='img-fluid' alt='image' />
                  </div>
                  <h3>Factory contracts</h3>
                  <p className='same-home-para text-center'>
                  Used for creating and recording ERC20 tokens within the ADF ecosystem, ensuring a smooth user experience
                  </p>
                </div>
              </div>
            </div>

{/* <div>sfsfsfdsf</div> */}

            <div>
              <div className='describe-box text-center'>
                <div className='pading-in'>
                  <div className='image-space'>
                    <img src="assets/home-img/Decentralized and tamper-resistant on-chain price feeds.png" className='img-fluid' alt='image' />
                  </div>
                  <h3>Decentralized and tamper-resistant on-chain price feeds</h3>
                  <p className='same-home-para text-center'>
                  These provide accurate, real-time pricing information that fosters a fair and transparent trading environment
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className='describe-box text-center'>
                <div className='pading-in'>
                  <div className='image-space'>
                    <img src="assets/home-img/Automated pricing and coordination-.png" className='img-fluid' alt='image' />
                  </div>
                  <h3>Automated pricing and coordination</h3>
                  <p className='same-home-para text-center'>
                  Our platform ensures efficient asset valuation and seamless transactions.

                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className='describe-box text-center'>
                <div className='pading-in'>
                  <div className='image-space'>
                    <img src="assets/home-img/Incentivized arbitrage and liquidity provision.png" className='img-fluid' alt='image' />
                  </div>
                  <h3>Incentivized arbitrage and liquidity provision</h3>
                  <p className='same-home-para text-center'>
                  ADF encourages users to contribute to the ecosystem, maintaining healthy liquidity levels and reducing price discrepancies.

                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className='describe-box text-center'>
                <div className='pading-in'>
                  <div className='image-space'>
                    <img src="assets/home-img/Optimized routing.png" className='img-fluid' alt='image' />
                  </div>
                  <h3>Optimized routing</h3>
                  <p className='same-home-para text-center'>
                  The platform's router enhances direct and multi-step swaps, improving fees and slippage on trading pairs
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className='describe-box text-center'>
                <div className='pading-in'>
                  <div className='image-space'>
                    <img src="assets/home-img/Autonomous liquidity pools-.png" className='img-fluid' alt='image' />
                  </div>
                  <h3>Autonomous liquidity pools</h3>
                  <p className='same-home-para text-center'>
                  Using a constant product market maker, our pools ensure a seamless trading experience.

                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className='describe-box text-center'>
                <div className='pading-in'>
                  <div className='image-space'>
                    <img src="assets/home-img/Exchange-token contract.png" className='img-fluid' alt='image' />
                  </div>
                  <h3>Exchange/token contract</h3>
                  <p className='same-home-para text-center'>
                  Each token's exchange address and interface are defined, streamlining the trading process
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className='describe-box text-center'>
                <div className='pading-in'>
                  <div className='image-space'>
                    <img src="assets/home-img/Liquidity withdrawal-.png" className='img-fluid' alt='image' />
                  </div>
                  <h3>Liquidity withdrawal</h3>
                  <p className='same-home-para text-center'>
                  Providers can easily withdraw their share of the reserves, encouraging participation and investment
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className='describe-box text-center'>
                <div className='pading-in'>
                  <div className='image-space'>
                    <img src="assets/home-img/On-chain leading exchange facilitation-.png" className='img-fluid' alt='image' />
                  </div>
                  <h3>On-chain leading exchange facilitation</h3>
                  <p className='same-home-para text-center'>
                  ADF supports seamless trading, even for non-standard tokens, with enhanced re-entrancy protection via mutex.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className='describe-box text-center'>
                <div className='pading-in'>
                  <div className='image-space'>
                    <img src="assets/home-img/Wallet support and connection- .png" className='img-fluid' alt='image' />
                  </div>
                  <h3>Wallet support and connection</h3>
                  <p className='same-home-para text-center'>
                  ADF facilitates borrowing, lending, and exchanging digital assets in one comprehensive platform.
                  </p>
                </div>
              </div>
            </div>
            {/* <div>dfkjdfidsfi</div> */}
</Slider>
          </Row>
        </Container>
      </section>
      <section className='cross-chain-sec'>
        <Container>
          <Row className='align-items-center'>

            <Col md={5} className='me-auto' >
              <div>
                <h2 className='home-sec-header'>Why Cross-Chain?
                  <span className='home-bottom-border'></span>
                </h2>
                <p>ADF represents a state-of-the-art solution for seamless interoperability and the exchange of digital assets across disparate blockchain networks. Committed to developing a comprehensive ecosystem powered by a versatile multi-utility token, our team of industry experts is dedicated to delivering exceptional products and services in various sectors, including digital wallets, metaverse offerings, gaming, NFT marketplaces, communication, dating, and travel. Our mission is to democratize access to web3 technology by reducing entry barriers and prioritizing innovation and user experience. We are confident in our ability to carve out a significant niche within the rapidly evolving Web 3 landscape.
                </p>
              </div>
            </Col>
            <Col md={6} className='me-auto'>
              <div className='text-center'>
                <img src='assets/home-img/why-do.png' className='img-fluid' alt="image" />
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      <section className='lorem-sec'>
        <Container>
          <Row className='align-items-center'>
            <Col md={6} className='me-auto  order-set-media'>
              <div className='text-center'>
                <img src='assets/home-img/dummy-home.png' className='img-fluid' alt="image" />
              </div>
            </Col>
            <Col md={5} className='me-auto' >
              <div>
                <h2 className='home-sec-header'>Referral Section
                  <span className='home-bottom-border'></span>
                </h2>

                <h5 style={{color:'white',fontWeight:'bold' }}>Elevating everyone's potential – that's our commitment!</h5>
                <p className='same-home-para'>Our platform incentivizes users by sharing a percentage of their referral's trading fees, creating a compelling motivation to promote our platform and attract new members. This approach not only fuels our community's growth but also cultivates a collaborative and mutually supportive atmosphere for all participants. If you seek to optimize your trading experience, we invite you to join our platform today and begin referring your friends and network.</p>
              </div>
            </Col>


          </Row>
        </Container>
      </section>
      <section className='chain-support-sec'>
        <Container fluid className=''>
          <Row className='align-items-center'>
            <Col md={12} className='me-auto p-0'>
              <h2 className='home-sec-header text-center'>Chains Supported
              </h2>
              <div className='chains-inner-sec'>
                <Container>
                  <Row>
                    <ul>
                      {/* <li>
                        <img src='assets/home-img/chain1.png' className='img-fluid' alt='image' />
                      </li>
                      <li>
                        <img src='assets/home-img/okex-new.png' className='img-fluid' alt='image' />
                      </li>
                      <li>
                        <img src='assets/home-img/FNCY.png' className='img-fluid' alt='image' />
                      </li> */}
                      <li>
                        <img src='assets/home-img/ETH.png' className='img-fluid' alt='image' />
                      </li>
                      <li>
                        <img src='assets/home-img/BNB-chain.png' className='img-fluid' alt='image' />
                      </li>
                      {/* <li>
                        <img src='assets/home-img/heco.png' className='img-fluid' alt='image' />
                      </li> */}
                      <li>
                        <img src='assets/home-img/Polygon.png' className='img-fluid' alt='image' />
                      </li>
                      {/* <li>
                        <img src='assets/home-img/Fantom.png' className='img-fluid' alt='image' />
                      </li> */}

                    </ul>
                  </Row>
                </Container>

              </div>
            </Col>
            <Col md={12} className='me-auto p-0'>
              <h2 className='home-sec-header text-center'>Token Supported
              </h2>
              <div className='chains-inner-sec token'>
                <Container>
                  <Row>
                    <Slider {...settings}>
                      <div className='inner-slide-token'>
                        <div className='text-center'>
                          <img src='assets/home-img/AI.png' className='img-fluid' alt='image' />

                        </div>
                      </div>
                      <div className='inner-slide-token'>
                        <div className='text-center'>
                          <img src='assets/home-img/AKRO.png' className='img-fluid' alt='image' />

                        </div>
                      </div>
                      <div className='inner-slide-token'>
                        <div className='text-center'>
                          <img src='assets/home-img/AMY.png' className='img-fluid' alt='image' />

                        </div>
                      </div>
                      <div className='inner-slide-token'>
                        <div className='text-center'>
                          <img src='assets/home-img/ANML.png' className='img-fluid' alt='image' />

                        </div>
                      </div>
                      <div className='inner-slide-token'>
                        <div className='text-center'>
                          <img src='assets/home-img/arbitrum.png' className='img-fluid' alt='image' />

                        </div>
                      </div>
                      <div className='inner-slide-token'>
                        <div className='text-center'>
                          <img src='assets/home-img/Astar.png' className='img-fluid' alt='image' />

                        </div>
                      </div>
                      <div className='inner-slide-token'>
                        <div className='text-center'>
                          <img src='assets/home-img/ASVA.png' className='img-fluid' alt='image' />

                        </div>
                      </div>
                      <div className='inner-slide-token'>
                        <div className='text-center'>
                          <img src='assets/home-img/ATL.png' className='img-fluid' alt='image' />

                        </div>
                      </div>
                      <div className='inner-slide-token'>
                        <div className='text-center'>
                          <img src='assets/home-img/ATOM.png' className='img-fluid' alt='image' />

                        </div>
                      </div>
                      <div className='inner-slide-token'>
                        <div className='text-center'>
                          <img src='assets/home-img/AURORA.png' className='img-fluid' alt='image' />

                        </div>
                      </div>
                      {/* <div className='inner-slide-token'>
                        <div className='text-center'>
                          <img src='assets/home-img/chain1.png' className='img-fluid' alt='image' />

                        </div>
                      </div> */}

                    </Slider>

                  </Row>
                </Container>

              </div>
            </Col>

          </Row>
        </Container>
      </section>
      {/* <section className='feature-chain-sec'>
        <Container>
          <Row className='align-items-center'>
            <Col md={5} className='m-auto' >
              <div className='text-center'>
                <h2 className='home-third-header'>Blogs and News
                  <span className='home-bottom-border center'></span>
                </h2>
                <p className='same-home-para text-center'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing sed do.   </p>
              </div>
            </Col>
          </Row>
          <Row >
            <Col md={4}>
              <div className='describe-box text-center'>
                <div className='image-no-space'>
                  <img src="assets/home-img/blog1.png" className='img-fluid' alt='image' />
                </div>
                <div className='pading-second-sec'>

                  <h4>Lorem ipsum dolor sit amet<br></br>
                    Lorem ipsum dolor sit amet</h4>
                  <p className='same-home-para text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className='read-more'>
                    <a>Read more</a>
                  </div>

                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className='describe-box text-center'>
                <div className='image-no-space'>
                  <img src="assets/home-img/blog2.png" className='img-fluid' alt='image' />
                </div>
                <div className='pading-second-sec'>

                  <h4>Lorem ipsum dolor sit amet<br></br>
                    Lorem ipsum dolor sit amet</h4>
                  <p className='same-home-para text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className='read-more'>
                    <a>Read more</a>
                  </div>

                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className='describe-box text-center'>
                <div className='image-no-space'>
                  <img src="assets/home-img/blog3.png" className='img-fluid' alt='image' />
                </div>
                <div className='pading-second-sec'>

                  <h4>Lorem ipsum dolor sit amet<br></br>
                    Lorem ipsum dolor sit amet</h4>
                  <p className='same-home-para text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className='read-more'>
                    <a>Read more</a>
                  </div>

                </div>
              </div>
            </Col>
            <div className='blogs-see text-center'>
              <Button className='purple-common-btn'>See more</Button>
            </div>
          </Row>
        </Container>
      </section>
      <section className='frequent-sec'>
        <Container>
          <Row className='align-items-center'>
            <Col md={12} className='m-auto' >
              <div className='text-center'>
                <h2 className='home-third-header'>Frequently Ask Questions
                  <span className='home-bottom-border center'></span>
                </h2>
                <p className='same-home-para text-center'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing sed do.
                </p>
              </div>
              <div className='frequent-ask-inner'>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing sed do. </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing sed do. </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
          <Row >

          </Row>
        </Container>
      </section> */}
    </>
  )
}

export default HomePage2
