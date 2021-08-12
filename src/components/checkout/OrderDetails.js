import React from "react";

export const OrderDetails = (props) => {
  return (
    <div class="cart-details shadow bg-white stick-to-content mb-4">
      <div class="bg-dark dark p-4">
        <h5 class="mb-0">You order</h5>
      </div>
      <table class="cart-table">
        <tr>
          <td class="title">
            <span class="name">
              <a href="#product-modal" data-toggle="modal">
                Pizza Chicked BBQ
              </a>
            </span>
            <span class="caption text-muted">26”, deep-pan, thin-crust</span>
          </td>
          <td class="price">$9.82</td>
          <td class="actions">
            <a href="#product-modal" data-toggle="modal" class="action-icon">
              <i class="ti ti-pencil"></i>
            </a>
            <a href="#" class="action-icon">
              <i class="ti ti-close"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td class="title">
            <span class="name">
              <a href="#product-modal" data-toggle="modal">
                Beef Burger
              </a>
            </span>
            <span class="caption text-muted">Large (500g)</span>
          </td>
          <td class="price">$9.82</td>
          <td class="actions">
            <a href="#product-modal" data-toggle="modal" class="action-icon">
              <i class="ti ti-pencil"></i>
            </a>
            <a href="#" class="action-icon">
              <i class="ti ti-close"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td class="title">
            <span class="name">
              <a href="#product-modal" data-toggle="modal">
                Extra Burger
              </a>
            </span>
            <span class="caption text-muted">Small (200g)</span>
          </td>
          <td class="price text-success">$0.00</td>
          <td class="actions">
            <a href="#product-modal" data-toggle="modal" class="action-icon">
              <i class="ti ti-pencil"></i>
            </a>
            <a href="#" class="action-icon">
              <i class="ti ti-close"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td class="title">
            <span class="name">Weekend 20% OFF</span>
          </td>
          <td class="price text-success">-$8.22</td>
          <td class="actions"></td>
        </tr>
      </table>
      <div class="cart-summary">
        <div class="row">
          <div class="col-7 text-right text-muted">Order total:</div>
          <div class="col-5">
            <strong>
              $<span class="cart-products-total">0.00</span>
            </strong>
          </div>
        </div>
        <div class="row">
          <div class="col-7 text-right text-muted">Devliery:</div>
          <div class="col-5">
            <strong>
              $<span class="cart-delivery">0.00</span>
            </strong>
          </div>
        </div>
        <hr class="hr-sm" />
        <div class="row text-lg">
          <div class="col-7 text-right text-muted">Total:</div>
          <div class="col-5">
            <strong>
              $<span class="cart-total">0.00</span>
            </strong>
          </div>
        </div>
      </div>
      <div class="cart-empty">
        <i class="ti ti-shopping-cart"></i>
        <p>Your cart is empty...</p>
      </div>
    </div>
  );
};
