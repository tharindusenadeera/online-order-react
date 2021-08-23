import React from "react";

export const OrderDetails = ({ cartDetails }) => {

  let deliveryCost = 0;
  let totalCost = 0;

  cartDetails.forEach((cartItem) => {
    totalCost += cartItem.cost;
  })

  let finalCost = totalCost + deliveryCost;

  return (
    <div className="cart-details shadow bg-white stick-to-content mb-4">
      <div className="bg-dark dark p-4">
        <h5 className="mb-0">You order</h5>
      </div>
      <table className="cart-table">
        <tbody>
          {cartDetails &&
            cartDetails.map((item, key) => {
              return (
                <tr key={key}>
                  <td className="title">
                    <span className="name">
                      <a href="#product-modal" data-toggle="modal">
                        {item?.product?.name}
                      </a>
                    </span>
                    <span className="caption text-muted">
                      26”, deep-pan, thin-crust
                    </span>
                  </td>
                  <td className="price">${item?.cost?.toFixed(2)}</td>
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
              );
            })}
        </tbody>
      </table>
      <div className="cart-summary">
        <div className="row">
          <div className="col-7 text-right text-muted">Order total:</div>
          <div className="col-5">
            <strong>
              $<span className="cart-products-total">{totalCost.toFixed(2)}</span>
            </strong>
          </div>
        </div>
        <div className="row">
          <div className="col-7 text-right text-muted">Devliery:</div>
          <div className="col-5">
            <strong>
              $<span className="cart-delivery">{deliveryCost.toFixed(2)}</span>
            </strong>
          </div>
        </div>
        <hr className="hr-sm" />
        <div className="row text-lg">
          <div className="col-7 text-right text-muted">Total:</div>
          <div className="col-5">
            <strong>
              $<span className="cart-total">{finalCost.toFixed(2)}</span>
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
