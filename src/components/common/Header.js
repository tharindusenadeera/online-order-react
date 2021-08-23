import React, { Fragment } from "react";
import { CartMenu } from "./CartMenu";

export const Header = (props) => {
  const { onclick } = props;

  const handleonClick = () => {
    onclick();
  };

  return (
    <Fragment>
      {/* Header */}
      <header id="header" className="dark">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              {/* Logo */}
              <div className="module module-logo dark">
                <a href="index.html">
                  <img src="assets/img/logo-light.svg" alt="" width="88" />
                </a>
              </div>
            </div>
            <div className="col-md-7">
              {/* Navigation */}
              <nav className="module module-navigation left mr-4">
                {/* <ul id="nav-main" className="nav nav-main">
                  <li className="has-dropdown">
                    <a href="#">Home</a>
                    <div className="dropdown-container">
                      <ul>
                        <li>
                          <a href="index.html">Home Basic</a>
                        </li>
                        <li>
                          <a href="index-burgers.html">Home Burgers</a>
                        </li>
                        <li>
                          <a href="index-slider.html">Home Fullwidth Slider</a>
                        </li>
                        <li>
                          <a href="index-video.html">Home Video</a>
                        </li>
                        <li>
                          <a href="index-fresh.html">
                            Home Fresh{" "}
                            <span className="badge badge-success">New</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-dark.html">
                            Home Dark{" "}
                            <span className="badge badge-success">New</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">About</a>
                    <div className="dropdown-container">
                      <ul className="dropdown-mega">
                        <li>
                          <a href="page-about.html">About Us</a>
                        </li>
                        <li>
                          <a href="page-services.html">Services</a>
                        </li>
                        <li>
                          <a href="page-gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="page-reviews.html">Reviews</a>
                        </li>
                        <li>
                          <a href="page-faq.html">FAQ</a>
                        </li>
                      </ul>
                      <div className="dropdown-image">
                        <img
                          src="http://assets.suelo.pl/soup/img/photos/dropdown-about.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Menu</a>
                    <div className="dropdown-container">
                      <ul>
                        <li className="has-dropdown">
                          <a href="#">List</a>
                          <ul>
                            <li>
                              <a href="menu-list-navigation.html">Navigation</a>
                            </li>
                            <li>
                              <a href="menu-list-collapse.html">Collapse</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">Grid</a>
                          <ul>
                            <li>
                              <a href="menu-grid-navigation.html">Navigation</a>
                            </li>
                            <li>
                              <a href="menu-grid-collapse.html">Collapse</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="page-offers.html">Offers</a>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact</a>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">More</a>
                    <div className="dropdown-container">
                      <ul className="dropdown-mega">
                        <li>
                          <a href="page-offer-single.html">Offer single</a>
                        </li>
                        <li>
                          <a href="page-product.html">Product</a>
                        </li>
                        <li>
                          <a href="book-a-table.html">Book a table</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="confirmation.html">Confirmation</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-sidebar.html">Blog + Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-post.html">Blog Post</a>
                        </li>
                        <li>
                          <a href="documentation/" target="_blank">
                            Documentation
                          </a>
                        </li>
                      </ul>
                      <div className="dropdown-image">
                        <img
                          src="http://assets.suelo.pl/soup/img/photos/dropdown-more.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                </ul> */}
              </nav>
              {/* <div className="module left">
                <a
                  href="menu-list-navigation.html"
                  className="btn btn-outline-secondary"
                >
                  <span>Order</span>
                </a>
              </div> */}
            </div>
            <div className="col-md-2">
              <a
                href="#"
                className="module module-cart right"
                data-toggle="panel-cart"
              >
                <CartMenu />
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Header / End */}

      {/* Header */}
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
          <CartMenu />
        </a>
      </header>
      {/* Header / End */}
    </Fragment>
  );
};
