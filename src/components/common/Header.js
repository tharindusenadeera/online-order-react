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
      <header id="header" class="light">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              {/* Logo */}
              <div class="module module-logo dark">
                <a href="index.html">
                  <img src="assets/img/logo-light.svg" alt="" width="88" />
                </a>
              </div>
            </div>
            <div class="col-md-7">
              {/* Navigation */}
              <nav class="module module-navigation left mr-4">
                <ul id="nav-main" class="nav nav-main">
                  <li class="has-dropdown">
                    <a href="#">Home</a>
                    <div class="dropdown-container">
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
                            <span class="badge badge-success">New</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-dark.html">
                            Home Dark{" "}
                            <span class="badge badge-success">New</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="has-dropdown">
                    <a href="#">About</a>
                    <div class="dropdown-container">
                      <ul class="dropdown-mega">
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
                      <div class="dropdown-image">
                        <img
                          src="http://assets.suelo.pl/soup/img/photos/dropdown-about.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li class="has-dropdown">
                    <a href="#">Menu</a>
                    <div class="dropdown-container">
                      <ul>
                        <li class="has-dropdown">
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
                        <li class="has-dropdown">
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
                  <li class="has-dropdown">
                    <a href="#">More</a>
                    <div class="dropdown-container">
                      <ul class="dropdown-mega">
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
                      <div class="dropdown-image">
                        <img
                          src="http://assets.suelo.pl/soup/img/photos/dropdown-more.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div class="module left">
                <a
                  href="menu-list-navigation.html"
                  class="btn btn-outline-secondary"
                >
                  <span>Order</span>
                </a>
              </div>
            </div>
            <div class="col-md-2">
              <a
                href="#"
                class="module module-cart right"
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
      <header id="header-mobile" class="light">
        <div class="module module-nav-toggle">
          <a href="#" id="nav-toggle" data-toggle="panel-mobile">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div class="module module-logo">
          <a href="index.html">
            <img src="assets/img/logo-horizontal-dark.svg" alt="" />
          </a>
        </div>

        <a href="#" class="module module-cart" data-toggle="panel-cart">
          <CartMenu />
        </a>
      </header>
      {/* Header / End */}
    </Fragment>
  );
};
