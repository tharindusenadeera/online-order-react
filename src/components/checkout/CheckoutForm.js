import React from "react";

export const CheckoutForm = (props) => {
  return (
    <div className="col-xl-8 col-lg-7 order-lg-first">
      <div className="bg-white p-4 p-md-5 mb-4">
        <h4 className="border-bottom pb-4">
          <i className="ti ti-user mr-3 text-primary"></i>Basic informations
        </h4>
        <div className="row mb-5">
          <div className="form-group col-sm-6">
            <label>Name:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-sm-6">
            <label>Surename:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-sm-6">
            <label>Street and number:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-sm-6">
            <label>City:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-sm-6">
            <label>Phone number:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-sm-6">
            <label>E-mail address:</label>
            <input type="email" className="form-control" />
          </div>
        </div>

        <h4 className="border-bottom pb-4">
          <i className="ti ti-package mr-3 text-primary"></i>Delivery
        </h4>
        <div className="row mb-5">
          <div className="form-group col-sm-6">
            <label>Delivery time:</label>
            <div className="select-container">
              <select className="form-control">
                <option>As fast as possible</option>
                <option>In one hour</option>
                <option>In two hours</option>
              </select>
            </div>
          </div>
        </div>

        <h4 className="border-bottom pb-4">
          <i className="ti ti-wallet mr-3 text-primary"></i>Payment
        </h4>
        <div className="row text-lg">
          <div className="col-md-4 col-sm-6 form-group">
            <label className="custom-control custom-radio">
              <input
                type="radio"
                name="payment_type"
                className="custom-control-input"
              />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">PayPal</span>
            </label>
          </div>
          <div className="col-md-4 col-sm-6 form-group">
            <label className="custom-control custom-radio">
              <input
                type="radio"
                name="payment_type"
                className="custom-control-input"
              />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Credit Card</span>
            </label>
          </div>
          <div className="col-md-4 col-sm-6 form-group">
            <label className="custom-control custom-radio">
              <input
                type="radio"
                name="payment_type"
                className="custom-control-input"
              />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Cash</span>
            </label>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary btn-lg">
          <span>Order now!</span>
        </button>
      </div>
    </div>
  );
};
