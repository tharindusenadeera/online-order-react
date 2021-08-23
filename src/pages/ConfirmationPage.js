import React, { useState } from "react";

import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { HeaderMobile } from "../components/common/HeaderMobile";

export const ConfirmationPage = (props) => {
  return (
    <div id="body-wrapper" className="">
      {/* <!-- Header --> */}
      <Header />
      {/* <!-- Header / End --> */}

      {/* <!-- Header --> */}
      <HeaderMobile />
      {/* <!-- Header / End --> */}

      {/* <!-- Content --> */}
      <div id="content">
        {/* <!-- Section --> */}
        <section className="section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-4">
                <span className="icon icon-xl icon-success">
                  <i className="ti ti-check-box"></i>
                </span>
                <h1 className="mb-2">Thank you for your order!</h1>
                <h4 className="text-muted mb-5">
                  You will recieve it in 30 minutes.
                </h4>
                <a
                  href="/"
                  className="btn btn-outline-secondary"
                >
                  <span>Go back to menu</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- Footer / End --> */}
      </div>
      {/* <!-- Content / End --> */}

      {/* <!-- Panel Cart --> */}

      {/* <!-- Panel Mobile --> */}
      <nav id="panel-mobile">
        <div className="module module-logo bg-dark dark">
          <a href="#">
            <img src="assets/img/logo-light.svg" alt="" width="88" />
          </a>
          <button className="close" data-toggle="panel-mobile">
            <i className="ti ti-close"></i>
          </button>
        </div>
        <nav className="module module-navigation"></nav>
        <div className="module module-social">
          <h6 className="text-sm mb-3">Follow Us!</h6>
          <a
            href="#"
            className="icon icon-social icon-circle icon-sm icon-facebook"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="#"
            className="icon icon-social icon-circle icon-sm icon-google"
          >
            <i className="fa fa-google"></i>
          </a>
          <a
            href="#"
            className="icon icon-social icon-circle icon-sm icon-twitter"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="#"
            className="icon icon-social icon-circle icon-sm icon-youtube"
          >
            <i className="fa fa-youtube"></i>
          </a>
          <a
            href="#"
            className="icon icon-social icon-circle icon-sm icon-instagram"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </nav>
      {/* <!-- Body Overlay --> */}
      <div id="body-overlay"></div>
    </div>
  );
};
