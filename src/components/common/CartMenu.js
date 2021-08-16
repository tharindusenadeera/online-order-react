import React, { useState } from "react";
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
          <span className="notification">0</span>
        </span>
        <span className="cart-value">
          $<span className="value">1.00</span>
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
