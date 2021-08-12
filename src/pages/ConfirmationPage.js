import React from "react";
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
                  href="menu-list-navigation.html"
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
      <div id="panel-cart">
        <div className="panel-cart-container">
          <div className="panel-cart-title">
            <h5 className="title">Your Cart</h5>
            <button className="close" data-toggle="panel-cart">
              <i className="ti ti-close"></i>
            </button>
          </div>
          <div className="panel-cart-content cart-details">
            <table className="cart-table">
              <tr>
                <td className="title">
                  <span className="name">
                    <a href="#product-modal" data-toggle="modal">
                      Beef Burger
                    </a>
                  </span>
                  <span className="caption text-muted">Large (500g)</span>
                </td>
                <td className="price">$9.00</td>
                <td className="actions">
                  <a
                    href="#product-modal"
                    data-toggle="modal"
                    className="action-icon"
                  >
                    <i className="ti ti-pencil"></i>
                  </a>
                  <a href="#" className="action-icon">
                    <i className="ti ti-close"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="title">
                  <span className="name">
                    <a href="#product-modal" data-toggle="modal">
                      Extra Burger
                    </a>
                  </span>
                  <span className="caption text-muted">Small (200g)</span>
                </td>
                <td className="price text-success">$9.00</td>
                <td className="actions">
                  <a
                    href="#product-modal"
                    data-toggle="modal"
                    className="action-icon"
                  >
                    <i className="ti ti-pencil"></i>
                  </a>
                  <a href="#" className="action-icon">
                    <i className="ti ti-close"></i>
                  </a>
                </td>
              </tr>
            </table>
            <div className="cart-summary">
              <div className="row">
                <div className="col-7 text-right text-muted">Order total:</div>
                <div className="col-5">
                  <strong>
                    $<span className="cart-products-total">0.00</span>
                  </strong>
                </div>
              </div>
              <div className="row">
                <div className="col-7 text-right text-muted">Devliery:</div>
                <div className="col-5">
                  <strong>
                    $<span className="cart-delivery">0.00</span>
                  </strong>
                </div>
              </div>
              <hr className="hr-sm" />
              <div className="row text-lg">
                <div className="col-7 text-right text-muted">Total:</div>
                <div className="col-5">
                  <strong>
                    $<span className="cart-total">0.00</span>
                  </strong>
                </div>
              </div>
            </div>
            <div className="cart-empty">
              <i className="ti ti-shopping-cart"></i>
              <p>Your cart is empty...</p>
            </div>
          </div>
        </div>
        <a
          href="checkout.html"
          className="panel-cart-action btn btn-secondary btn-block btn-lg"
        >
          <span>Go to checkout</span>
        </a>
      </div>

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
