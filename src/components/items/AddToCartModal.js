import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { Modal } from "antd";
import styled from "styled-components";
import { CartCollapse } from "./addToCart/CartCollapse";
import theme from "../../utils/theme";
import {addDish} from "../../actions/Cart";
import { InputNumber } from 'antd';

const ModalWrapper = styled.div``;

const ContentWrapper = styled.div`
  .modal-header {
    border-top-left-radius: unset;
    border-top-right-radius: unset;

    .modal-title {
      font-weight: 400;
      color: ${theme.colors.white};
    }
  }
`;

export const AddToCartModal = (props) => {
  const product = {
    id: 1,
    name: "Grilled Sandwich",
    main_image: "60fa6c66eed47.png",
    price: "360.00",
    qty: 5,
    status: 1,
    created_by: 1,
    menu_category: 1,
    created_at: "2021-07-23T07:14:47.000000Z",
    updated_at: "2021-08-14T08:29:11.000000Z",
    menu_option_categories: [
      {
      id: 1,
      name: "Size",
      status: "1",
      created_by: 1,
      created_at: "2021-07-23T07:08:42.000000Z",
      updated_at: "2021-07-23T07:08:42.000000Z",
      menu_item_options: [
          {
          id: 2,
          name: "medium",
          status: "0",
          created_by: 1,
          created_at: "2021-07-23T07:08:19.000000Z",
          updated_at: "2021-08-14T04:42:44.000000Z",
          menu_option_category_menu_option_id: 5
          },
          {
          id: 1,
          name: "small",
          status: "0",
          created_by: 1,
          created_at: "2021-07-23T07:07:38.000000Z",
          updated_at: "2021-08-14T04:42:40.000000Z",
          menu_option_category_menu_option_id: 4
          }
        ]
      },
      {
        id: 2,
        name: "Type",
        status: "0",
        created_by: 1,
        created_at: "2021-07-23T07:12:33.000000Z",
        updated_at: "2021-08-12T16:08:56.000000Z",
        menu_item_options: [
          {
          id: 5,
          name: "Chicken",
          status: "1",
          created_by: 1,
          created_at: "2021-07-23T07:10:39.000000Z",
          updated_at: "2021-07-27T14:34:25.000000Z",
          menu_option_category_menu_option_id: 10
          }
        ]
      }
    ]
  }

  const initialDish = {
    product: product,
    addition: {},
    other: {},
    qunatity: 1,
    cost: 0,
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dish, setDish] = useState(initialDish);

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const updateDish = (updatedDish) => {
    setDish(updatedDish);
  }

  const onChangeQunatity = (qty) => {
    setDish({...dish, qunatity: qty, cost: dish.qunatity * parseInt(dish.product.price)});
  }

  const addToCart = () => {
    dispatch(addDish(dish));

    setIsModalVisible(false);
    setDish(initialDish);
  }

  const ModalContent = () => (
    <ContentWrapper>
      <div className="modal-content">
        <div className="modal-header modal-header-lg dark bg-dark">
          <div className="bg-image">
            <img
              src="http://assets.suelo.pl/soup/img/photos/modal-add.jpg"
              alt=""
            />
          </div>
          <h4 className="modal-title">Specify your dish</h4>
        </div>
        <div className="modal-product-details">
          <div className="row align-items-center">
            <div className="col-9">
              <h6 className="mb-1 product-modal-name">{product.name}</h6>
              {/* <span className="text-muted product-modal-ingredients">
                Pasta, Cheese, Tomatoes, Olives
              </span> */}
            </div>
            <div className="col-3 text-lg text-right">{dish.cost}
              $<span className="product-modal-price"></span>
            </div>
          </div>
        </div>

        <div className="modal-body panel-details-container">
          <CartCollapse updateDish={updateDish} product={product} dish={dish}/>
        </div>

        <div className="modal-btn btn btn-block btn-lg" style={{background: '#25282a'}}>
          <InputNumber size="large" min={1} max={dish.product.qty} defaultValue={1} value={dish.qunatity} onChange={onChangeQunatity} />
        </div>

        <button
          type="button"
          className="modal-btn btn btn-secondary btn-block btn-lg"
          data-action="add-to-cart"
          onClick={addToCart}
        >
          <span>Add to Cart</span>
        </button>
        {/* <button
          type="button"
          className="modal-btn btn btn-secondary btn-block btn-lg"
          data-action="update-cart"
        >
          <span>Update</span>
        </button> */}
      </div>
    </ContentWrapper>
  );

  return (
    <ModalWrapper>
      <button
        type="link"
        className="btn btn-outline-secondary btn-sm"
        onClick={showModal}
      >
        <span>ADD TO CART</span>
      </button>
      <Modal
        //title="Basic Modal"
        visible={isModalVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
        className="ant-custom-modal"
        footer={null}
      >
        <ModalContent />
      </Modal>
    </ModalWrapper>
  );
};

{
  /* <div className="modal-body panel-details-container">
         
          <div className="panel-details panel-details-size">
            <h5 className="panel-details-title">
              <label className="custom-control custom-radio">
                <input
                  name="radio_title_size"
                  type="radio"
                  className="custom-control-input"
                />
                <span className="custom-control-indicator"></span>
              </label>
              <a href="#panel-details-sizes-list" data-toggle="collapse">
                Size
              </a>
            </h5>
            <div id="panel-details-sizes-list" className="collapse show">
              <div className="panel-details-content">
                <div className="product-modal-sizes">
                  <div className="form-group">
                    <label className="custom-control custom-radio">
                      <input
                        name="radio_size"
                        type="radio"
                        className="custom-control-input"
                        checked
                      />
                      <span className="custom-control-indicator"></span>
                      <span className="custom-control-description">
                        Small - 100g ($9.99)
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="custom-control custom-radio">
                      <input
                        name="radio_size"
                        type="radio"
                        className="custom-control-input"
                      />
                      <span className="custom-control-indicator"></span>
                      <span className="custom-control-description">
                        Medium - 200g ($14.99)
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="custom-control custom-radio">
                      <input
                        name="radio_size"
                        type="radio"
                        className="custom-control-input"
                      />
                      <span className="custom-control-indicator"></span>
                      <span className="custom-control-description">
                        Large - 350g ($21.99)
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="panel-details panel-details-additions">
            <h5 className="panel-details-title">
              <label className="custom-control custom-radio">
                <input
                  name="radio_title_additions"
                  type="radio"
                  className="custom-control-input"
                />
                <span className="custom-control-indicator"></span>
              </label>
              <a href="#panel-details-additions-content" data-toggle="collapse">
                Additions
              </a>
            </h5>
            <div id="panel-details-additions-content" className="collapse">
              <div className="panel-details-content">
               
                <div className="row product-modal-additions">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">
                          Tomato ($1.29)
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">
                          Ham ($1.29)
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">
                          Chicken ($1.29)
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">
                          Cheese($1.29)
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">
                          Bacon ($1.29)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="panel-details panel-details-form">
            <h5 className="panel-details-title">
              <label className="custom-control custom-radio">
                <input
                  name="radio_title_other"
                  type="radio"
                  className="custom-control-input"
                />
                <span className="custom-control-indicator"></span>
              </label>
              <a href="#panel-details-other" data-toggle="collapse">
                Other
              </a>
            </h5>
            <div id="panel-details-other" className="collapse">
              <form action="#">
                <textarea
                  cols="30"
                  rows="4"
                  className="form-control"
                  placeholder="Put this any other informations..."
                ></textarea>
              </form>
            </div>
          </div>
        </div> */
}
