import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { CheckoutForm } from "../components/checkout/CheckoutForm";
import { OrderDetails } from "../components/checkout/OrderDetails";
import { useSelector } from "react-redux";
import { PaymentForm } from "../components/checkout/PaymentForm";

export const PaymentPage = (props) => {
    const location = useLocation();
    let order_id = location.state.orderId;
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
                <h1 className="mb-0">Payment</h1>
                <h4 className="text-muted mb-0">
                  
                </h4>
              </div>
            </div>
          </div>
        </div>

        <PaymentForm order_id={order_id}/>

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- Footer / End --> */}
      </div>
      <div id="body-overlay"></div>
    </div>
  );
};
