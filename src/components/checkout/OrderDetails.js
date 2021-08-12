import React from "react";

export const OrderDetails = (props) => {
  return (
    <div className="cart-details shadow bg-white stick-to-content mb-4">
      <div className="bg-dark dark p-4">
        <h5 className="mb-0">You order</h5>
      </div>
      <table className="cart-table">
        <tr>
          <td className="title">
            <span className="name">
              <a href="#product-modal" data-toggle="modal">
                Pizza Chicked BBQ
              </a>
            </span>
            <span className="caption text-muted">26”, deep-pan, thin-crust</span>
          </td>
          <td className="price">$9.82</td>
          <td className="actions">
            <a href="#product-modal" data-toggle="modal" className="action-icon">
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
                Beef Burger
              </a>
            </span>
            <span className="caption text-muted">Large (500g)</span>
          </td>
          <td className="price">$9.82</td>
          <td className="actions">
            <a href="#product-modal" data-toggle="modal" className="action-icon">
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
          <td className="price text-success">$0.00</td>
          <td className="actions">
            <a href="#product-modal" data-toggle="modal" className="action-icon">
              <i className="ti ti-pencil"></i>
            </a>
            <a href="#" className="action-icon">
              <i className="ti ti-close"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td className="title">
            <span className="name">Weekend 20% OFF</span>
          </td>
          <td className="price text-success">-$8.22</td>
          <td className="actions"></td>
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
  );
};
