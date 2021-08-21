import React from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteDish } from "../../actions/Cart";
import theme from "../../utils/theme";

const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  white-space: nowrap;
  z-index: 3;
`;

const Empty = styled.div`
  text-align: center;
  color: ${theme.colors.grey};
  i {
    font-size: 2rem;
  }
  p {
    font-weight: 500;
    margin-top: 10px;
  }
`;

export const ShoppingCart = (props) => {
  const { handleEditCart } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  let deliveryCost = 0;
  let totalCost = 0;

  cartItems.forEach((cartItem) => {
    totalCost += cartItem.cost;
  });

  let finalCost = totalCost - deliveryCost;

  const handleCheckout = () => {
    history.push({
      pathname: "/checkout",
    });
  };

  const onClickClose = (selectCartItem) => {
    dispatch(deleteDish(selectCartItem));
  };

  const onClickEdit = (cartItem) => {
    handleEditCart(cartItem);
  };

  return (
    <div className="h-100">
      {/* Empty Screen */}
      { cartItems?.length === 0 ? (
        <div className="h-50 d-flex align-items-center justify-content-center">
          <Empty>
            <i className="ti ti-shopping-cart"></i>
            <p>Your cart is empty...</p>
          </Empty>
        </div>
      ) : (
        <div>
        {/* Cart Screen */}
        <div className="panel-cart-container">
          <div className="panel-cart-content cart-details">
            <table className="cart-table">
              <tbody>
                {cartItems.map((cart) => {
                  return (
                    <tr key={cart.id}>
                      <td className="title">
                        <span className="name">
                          <a href="#product-modal" data-toggle="modal">
                            {cart.product.name}
                          </a>
                        </span>
                        {cart.product?.menu_option_categories?.map(
                          (category) => {
                            return (
                              category?.selectOption && (
                                <span
                                  className="caption text-muted"
                                  key={category?.selectOption.id}
                                >
                                  {category?.selectOption.name}&nbsp;
                                </span>
                                // <span className="caption text-muted">Large (500g)</span>
                              )
                            );
                          }
                        )}
                      </td>
                      <td>{cart.quantity}</td>
                      <td className="price">${cart.cost.toFixed(2)}</td>
                      <td className="actions">
                        <a
                          href="#product-modal"
                          data-toggle="modal"
                          className="action-icon"
                        >
                          <i
                            className="ti ti-pencil"
                            onClick={() => onClickEdit(cart)}
                          ></i>
                        </a>
                        &nbsp;
                        <a href="#" className="action-icon">
                          <i
                            className="ti ti-close"
                            onClick={() => onClickClose(cart)}
                          ></i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="cart-summary">
                  <div className="row">
                    <div className="col-7 text-right text-muted">
                      Order total:
                    </div>
                    <div className="col-5">
                      <strong>
                        $
                        <span className="cart-products-total">
                          {totalCost.toFixed(2)}
                        </span>
                      </strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-7 text-right text-muted">Devliery:</div>
                    <div className="col-5">
                      <strong>
                        $
                        <span className="cart-delivery">
                          {deliveryCost.toFixed(2)}
                        </span>
                      </strong>
                    </div>
                  </div>
                  <hr className="hr-sm" />
                  <div className="row text-lg">
                    <div className="col-7 text-right text-muted">Total:</div>
                    <div className="col-5">
                      <strong>
                        $
                        <span className="cart-total">{finalCost.toFixed(2)}</span>
                      </strong>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <Button
          className="panel-cart-action btn btn-secondary btn-block btn-lg"
          onClick={handleCheckout}
        >
          <span>Go to checkout</span>
        </Button>
      </div>
      )}
    </div>
  );
};
