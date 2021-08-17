import React, { useState } from "react";
import {useSelector} from "react-redux";
import { Drawer, Button } from "antd";
import { ShoppingCart } from "./ShoppingCart";
import styled from "styled-components";
import theme from "../../utils/theme";

const MenuWrap = styled.div`
  .ant-btn-ghost {
    border: unset;

    &:hover,
    &:focus {
      color: ${theme.colors.grey};
    }
  }
`;

export const CartMenu = () => {
  const [visible, setVisible] = useState(false);
  const cartItems = useSelector(state => state.cart);

  let deliveryCost = 0;
  let totalCost = 0;

  cartItems.forEach((cartItem) => {
    totalCost += cartItem.cost;
  })

  let finalCost = totalCost - deliveryCost;

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <MenuWrap>
      <Button type="ghost" onClick={showDrawer}>
        <span className="cart-icon">
          <i className="ti ti-shopping-cart"></i>
          <span className="notification">{cartItems.length}</span>
        </span>
        <span className="cart-value" style={{color: "#bbc4c6"}}>
          $&nbsp;<span className="value">{finalCost}</span>
        </span>
      </Button>
      <Drawer
        title="Your Cart"
        placement="right"
        onClose={onClose}
        visible={visible}
        className="drawer-custom"
      >
        <ShoppingCart />
      </Drawer>
    </MenuWrap>
  );
};
