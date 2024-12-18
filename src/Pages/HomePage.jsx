import React from 'react'
import HomeHeader from '../HomeComponent/HomeHeader'

const HomePage = () => {
    return (
        <>
        <HomeHeader/>
            <section className="banner-main-sec">
                <img src="/assets/images/btcp-gif.gif" className='img-fluid banner-gif' alt="gif" />
                <div className="row">
                    <div className="col-md-12">
                        <div className='banner-index'>
                            <div>
                                <img src="/assets/images/adf-coin.png" className='img-fluid' alt="coin" />
                            </div>
                            <h2>Best Crypto Swap For You</h2>
                            <p>
                            Easily Swap, Trade & Earn digital assets on the leading decentralized crypto trading protocol.
                            </p>
                            <div className="flex-header-same">
                                <a
                                    className="common-btn"
                                    href="/swap"
                                >
                                    Enter App
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-swap-box">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6  col-md-6 col-sm-7">
                            <div>
                                <h2 className="common-heading">ADF Swap Protocol</h2>
                                <p className="commonpera">
                                The ADF Swap Protocol is a public entity owned and governed by all-inclusive ADF Swap holders. Designed with simplicity, speed, affordability and security in mind, ADF Swap allows users to diversify market offerings & make increasing gains.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-2 offset-lg-1 col-lg-5 text-center col-md-6 col-sm-5">
                            <img
                                className="m-auto img-fluid"
                                src="/assets/images/btcp-protocol.png"
                                alt='protocol'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-swap-box">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8">
                            <div>
                                <h2 className="common-heading text-center">How to Use ADF Swap  </h2>
                                <p className="commonpera text-center">
                                Swapping is a simple process exchanging one token for another. Prices of the asset depend on the supply and demand of the assets, which is community driven. Though there are some factors like slippage and price impact that can affect your trade, hence we also provide extra features for you to control your trades. Get started with ADF Swap in 4 simple steps- </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="pickone-box">
                                <img src="/assets/images/use-btcp1.png" className='img-fluid' alt="pair" />
                                <h5>Choose a currency pair</h5>
                                <p>Select currencies you want to swap and click the Exchange button.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="pickone-box">
                                <img src="/assets/images/use-btcp2.png" className='img-fluid' alt="pair" />
                                <h5>Enter the recipient’s address</h5>
                                <p>The currency you want to receive will be sent to this address after the exchange.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="pickone-box">
                                <img src="/assets/images/use-btcp3.png" className='img-fluid' alt="pair" />
                                <h5>Send and receive coins</h5>
                                <p>To continue, send the indicated amount of coins to the deposit address.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="pickone-box last-box">
                                <img src="/assets/images/use-btcp4.png" className='img-fluid' alt="pair" />
                                <h5>That’s All</h5>
                                <p>
                                The exchange status “Finished” means that the swap process is over.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default HomePage
