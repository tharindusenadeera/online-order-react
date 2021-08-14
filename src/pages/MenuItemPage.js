import React from "react";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";
import { AddToCartModal } from "../components/items/AddToCartModal";

export const MenuItemPage = (props) => {
  return (
    <div id="body-wrapper" className="">
      <Header />
      <div id="content">
        {/* <!-- Page Title --> */}
        <div className="page-title bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-4">
                <h1 className="mb-0">Menu List</h1>
                <h4 className="text-muted mb-0">
                  Some informations about our restaurant
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Page Content --> */}
        <div className="page-content">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-3">
                {/* <!-- Menu Navigation --> */}
                <nav
                  id="menu-navigation"
                  className="stick-to-content"
                  data-local-scroll
                >
                  <ul className="nav nav-menu bg-dark dark">
                    <li>
                      <a href="#Burgers">Burgers</a>
                    </li>
                    <li>
                      <a href="#Pasta">Pasta</a>
                    </li>
                    <li>
                      <a href="#Pizza">Pizza</a>
                    </li>
                    <li>
                      <a href="#Sushi">Sushi</a>
                    </li>
                    <li>
                      <a href="#Desserts">Desserts</a>
                    </li>
                    <li>
                      <a href="#Drinks">Drinks</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-9">
                {/* <!-- Menu Category / Burgers --> */}
                <div id="Burgers" className="menu-category">
                  <div className="menu-category-title">
                    <div className="bg-image">
                      <img
                        src="http://assets.suelo.pl/soup/img/photos/menu-title-burgers.jpg"
                        alt=""
                      />
                    </div>
                    <h2 className="title">Burgers</h2>
                  </div>
                  <div className="menu-category-content">
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Beef Burger</h6>
                          <span className="text-muted text-sm">
                            Beef, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="1"
                          >
                            {/* <span>Add to cart</span> */}
                            <AddToCartModal />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Broccoli</h6>
                          <span className="text-muted text-sm">
                            Chicken, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="2"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Chicken Burger</h6>
                          <span className="text-muted text-sm">
                            Chicken, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>14.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="3"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Creste di Galli</h6>
                          <span className="text-muted text-sm">
                            Pasta, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>13.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="4"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Menu Category / Pasta --> */}
                <div id="Pasta" className="menu-category">
                  <div className="menu-category-title">
                    <div className="bg-image">
                      <img
                        src="http://assets.suelo.pl/soup/img/photos/menu-title-pasta.jpg"
                        alt=""
                      />
                    </div>
                    <h2 className="title">Pasta</h2>
                  </div>
                  <div className="menu-category-content">
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Beef Burger</h6>
                          <span className="text-muted text-sm">
                            Beef, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="1"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Broccoli</h6>
                          <span className="text-muted text-sm">
                            Chicken, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="2"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Chicken Burger</h6>
                          <span className="text-muted text-sm">
                            Chicken, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>14.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="3"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Creste di Galli</h6>
                          <span className="text-muted text-sm">
                            Pasta, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>13.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="4"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Menu Category / Pizza --> */}
                <div id="Pizza" className="menu-category">
                  <div className="menu-category-title">
                    <div className="bg-image">
                      <img
                        src="http://assets.suelo.pl/soup/img/photos/menu-title-pizza.jpg"
                        alt=""
                      />
                    </div>
                    <h2 className="title">Pizza</h2>
                  </div>
                  <div className="menu-category-content">
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Beef Burger</h6>
                          <span className="text-muted text-sm">
                            Beef, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="1"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Broccoli</h6>
                          <span className="text-muted text-sm">
                            Chicken, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="2"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Chicken Burger</h6>
                          <span className="text-muted text-sm">
                            Chicken, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>14.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="3"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Creste di Galli</h6>
                          <span className="text-muted text-sm">
                            Pasta, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>13.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="4"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Menu Category / Sushi --> */}
                <div id="Sushi" className="menu-category">
                  <div className="menu-category-title">
                    <div className="bg-image">
                      <img
                        src="http://assets.suelo.pl/soup/img/photos/menu-title-sushi.jpg"
                        alt=""
                      />
                    </div>
                    <h2 className="title">Sushi</h2>
                  </div>
                  <div className="menu-category-content">
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Beef Burger</h6>
                          <span className="text-muted text-sm">
                            Beef, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="1"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Broccoli</h6>
                          <span className="text-muted text-sm">
                            Chicken, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="2"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Chicken Burger</h6>
                          <span className="text-muted text-sm">
                            Chicken, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>14.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="3"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Creste di Galli</h6>
                          <span className="text-muted text-sm">
                            Pasta, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>13.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="4"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Menu Category / Desserts --> */}
                <div id="Desserts" className="menu-category">
                  <div className="menu-category-title">
                    <div className="bg-image">
                      <img
                        src="http://assets.suelo.pl/soup/img/photos/menu-title-desserts.jpg"
                        alt=""
                      />
                    </div>
                    <h2 className="title">Desserts</h2>
                  </div>
                  <div className="menu-category-content">
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Beef Burger</h6>
                          <span className="text-muted text-sm">
                            Beef, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="1"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Broccoli</h6>
                          <span className="text-muted text-sm">
                            Chicken, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="2"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Chicken Burger</h6>
                          <span className="text-muted text-sm">
                            Chicken, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>14.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="3"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Creste di Galli</h6>
                          <span className="text-muted text-sm">
                            Pasta, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>13.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="4"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Menu Category / Drinks --> */}
                <div id="Drinks" className="menu-category">
                  <div className="menu-category-title">
                    <div className="bg-image">
                      <img
                        src="http://assets.suelo.pl/soup/img/photos/menu-title-drinks.jpg"
                        alt=""
                      />
                    </div>
                    <h2 className="title">Drinks</h2>
                  </div>
                  <div className="menu-category-content">
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Beef Burger</h6>
                          <span className="text-muted text-sm">
                            Beef, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="1"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Broccoli</h6>
                          <span className="text-muted text-sm">
                            Chicken, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>9.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="2"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Chicken Burger</h6>
                          <span className="text-muted text-sm">
                            Chicken, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>14.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="3"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Menu Item --> */}
                    <div className="menu-item menu-list-item">
                      <div className="row align-items-center">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <h6 className="mb-0">Creste di Galli</h6>
                          <span className="text-muted text-sm">
                            Pasta, cheese, potato, onion, fries
                          </span>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                          <span className="text-md mr-4">
                            <span className="text-muted">from</span> $
                            <span data-product-base-price>13.00</span>
                          </span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            data-action="open-cart-modal"
                            data-id="4"
                          >
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
