import React from "react";

export const HeaderMobile = (props) => {
  return (
    <header id="header-mobile" className="light">
      <div className="module module-nav-toggle">
        <a href="#" id="nav-toggle" data-toggle="panel-mobile">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div className="module module-logo">
        <a href="index.html">
          <img src="assets/img/logo-horizontal-dark.svg" alt="" />
        </a>
      </div>

      <a href="#" className="module module-cart" data-toggle="panel-cart">
        <i className="ti ti-shopping-cart"></i>
        <span className="notification">0</span>
      </a>
    </header>
  );
};
