import React from "react";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { CheckoutForm } from "../components/checkout/CheckoutForm";
import { OrderDetails } from "../components/checkout/OrderDetails";

export const CheckoutPage = (props) => {
  return (
    <div id="body-wrapper" className="">
      <Header />
      <div id="content">
        {/* <!-- Page Title --> */}
        <div className="page-title bg-dark dark">
          {/* <!-- BG Image --> */}
          <div className="bg-image bg-parallax">
            <img
              src="http://assets.suelo.pl/soup/img/photos/bg-croissant.jpg"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-4">
                <h1 className="mb-0">Checkout</h1>
                <h4 className="text-muted mb-0">
                  Some informations about our restaurant
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Section --> */}
        <section className="section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <OrderDetails />
              </div>
              <CheckoutForm />
            </div>
          </div>
        </section>

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- Footer / End --> */}
      </div>
      <div id="body-overlay"></div>
    </div>
  );
};
