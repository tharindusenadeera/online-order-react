import React, { useEffect, useState } from "react";
import { getCategories } from "../api/Categories";
import { productsList } from "../api/products";
import { Footer } from "../components/common/Footer";
import { Header } from "../components/common/Header";
import { MenuItemNavigation } from "../components/common/MenuItemNavigation";
import { AddToCartModal } from "../components/items/AddToCartModal";
import * as Constants from "../constants/Constants";

export const MenuItemPage = (props) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const CategoryHeading = {
    fontWeight: "100",
    color: "white"
  }

  useEffect(() => {

    getCategories().then(res => {
      if (res.data.status) {
        setCategories(res.data.data);
      }
    });

    productsList().then(res => {
      if (res.data.status) {
        setProducts(res.data.data);
      }
    })
    // setCategories(Constants.categories.data);
    // console.log("Constants.categories.data", Constants.categories.data);
  }, []);

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
                <MenuItemNavigation categories={categories} />
              </div>

              <div className="col-md-9">

                { categories.map((category) => {
                    return (

                    <div className="menu-category" key={category.id}>
                      <div className="menu-category-title">
                        <div className="bg-image">
                          <img
                            src="http://assets.suelo.pl/soup/img/photos/menu-title-burgers.jpg"
                            alt=""
                          />
                        </div>
                        <h2 className="title" style={{...CategoryHeading}}>{category.name}</h2>
                      </div>

                      <div className="menu-category-content">

                        { products.map((product) => {

                          return product.menu_category === category.id ?  (
                            <div className="menu-item menu-list-item" key= {product.id}>
                              <div className="row align-items-center">
                                <div className="col-sm-6 mb-2 mb-sm-0">
                                  <h6 className="mb-0">{product.name}</h6>
                                  <span className="text-muted text-sm">
                                    {/* Beef, cheese, potato, onion, fries */}
                                  </span>
                                </div>
                                <div className="col-sm-6 d-flex align-items-center justify-content-end">
                                  <span className="text-md mr-4">
                                    <span className="text-muted">from&nbsp;</span> $
                                    <span data-product-base-price>&nbsp;{product.price}</span>
                                  </span>
                                  <AddToCartModal product={product}/>
                                </div>
                              </div>
                            </div>
                          ) : null
                          })
                        }
                      </div>

                    </div>
                      
                    )
                  })
                }
            
              </div>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
