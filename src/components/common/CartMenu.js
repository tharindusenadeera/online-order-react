import React, { Fragment, useState } from "react";
import { Drawer, Button } from "antd";
import { ShoppingCart } from "./ShoppingCart";

export const CartMenu = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Fragment>
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
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={500}
      >
        <ShoppingCart />
      </Drawer>
    </Fragment>
  );
};
