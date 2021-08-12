import React from "react";

export const CheckoutForm = (props) => {
  return (
    <div class="col-xl-8 col-lg-7 order-lg-first">
      <div class="bg-white p-4 p-md-5 mb-4">
        <h4 class="border-bottom pb-4">
          <i class="ti ti-user mr-3 text-primary"></i>Basic informations
        </h4>
        <div class="row mb-5">
          <div class="form-group col-sm-6">
            <label>Name:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-sm-6">
            <label>Surename:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-sm-6">
            <label>Street and number:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-sm-6">
            <label>City:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-sm-6">
            <label>Phone number:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-sm-6">
            <label>E-mail address:</label>
            <input type="email" class="form-control" />
          </div>
        </div>

        <h4 class="border-bottom pb-4">
          <i class="ti ti-package mr-3 text-primary"></i>Delivery
        </h4>
        <div class="row mb-5">
          <div class="form-group col-sm-6">
            <label>Delivery time:</label>
            <div class="select-container">
              <select class="form-control">
                <option>As fast as possible</option>
                <option>In one hour</option>
                <option>In two hours</option>
              </select>
            </div>
          </div>
        </div>

        <h4 class="border-bottom pb-4">
          <i class="ti ti-wallet mr-3 text-primary"></i>Payment
        </h4>
        <div class="row text-lg">
          <div class="col-md-4 col-sm-6 form-group">
            <label class="custom-control custom-radio">
              <input
                type="radio"
                name="payment_type"
                class="custom-control-input"
              />
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">PayPal</span>
            </label>
          </div>
          <div class="col-md-4 col-sm-6 form-group">
            <label class="custom-control custom-radio">
              <input
                type="radio"
                name="payment_type"
                class="custom-control-input"
              />
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">Credit Card</span>
            </label>
          </div>
          <div class="col-md-4 col-sm-6 form-group">
            <label class="custom-control custom-radio">
              <input
                type="radio"
                name="payment_type"
                class="custom-control-input"
              />
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">Cash</span>
            </label>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-primary btn-lg">
          <span>Order now!</span>
        </button>
      </div>
    </div>
  );
};
