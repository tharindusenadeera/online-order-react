import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Modal } from "antd";
import styled from "styled-components";
import { CartCollapse } from "./addToCart/CartCollapse";
import theme from "../../utils/theme";
import {addDish, updateDish, deleteDish}  from "../../actions/Cart";
import { InputNumber } from 'antd';
import { GenerateUniqueId, CheckforMatch, GetItemFromId} from '../common/generateUniqueId';

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
  const {product, oldDish, resetEditCart} = props;

  const initialDish = {
    product: oldDish ? oldDish.product : product,
    addition: oldDish ? oldDish.addition : [],
    other: oldDish ? oldDish.other : {},
    quantity: oldDish ? oldDish.quantity : 1,
    cost: oldDish ? oldDish.cost : parseFloat(product.price),
  }
  const initialModalVisiblity = oldDish ? true : false;
  const initialQuantity = oldDish ? oldDish.product.qty : product.qty;

  const [isModalVisible, setIsModalVisible] = useState(initialModalVisiblity);
  const [dish, setDish] = useState(initialDish);
  const [avalableQuantity, setAvailableQuantity] = useState(initialQuantity);

  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    let existingQuantity = dish.product.qty;

    cartItems?.forEach(cartItem => {
      if (dish.product.id === cartItem.product.id) {
        existingQuantity-= cartItem.quantity;
      }
    })
    // oldDish means edit mode
    const remainingQuantity = oldDish ? existingQuantity + oldDish.quantity : existingQuantity;

    setAvailableQuantity(remainingQuantity);
  },[cartItems, dish, oldDish])

  const showModal = () => {
    setIsModalVisible(true);
  };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);

    if (resetEditCart instanceof Function){
      resetEditCart();
    }
  };

  const updateDishFunc = (updatedDish) => {
    setDish(updatedDish);
  }

  const onChangeQuantity = (qty) => {
    setDish({...dish, quantity: qty, cost: qty * parseFloat(dish.product.price)});
  }

  const addToCart = () => {

    const id = GenerateUniqueId(dish.product);
    const isExistingItem = CheckforMatch(id, cartItems);

    if (isExistingItem) {
      const existingItem = GetItemFromId(id, cartItems);

      // check if the existing item id is same as once before edit
      const isSameItemEdit = oldDish ? existingItem?.id === oldDish?.id : false;

      const newQuantity = isSameItemEdit ? dish.quantity : existingItem.quantity + dish.quantity;
      const updatedItem = {
        ...existingItem,
        cost : newQuantity * parseFloat(dish.product.price),
        quantity: newQuantity,
        addition: dish.addition,
        other: dish.other,
      };

      dispatch(updateDish(updatedItem));

      //when edit if the existing one is not the old one then the old one should delete
      if (oldDish && !isSameItemEdit) {
        dispatch(deleteDish(oldDish));
      }

    } else {
      dispatch(addDish({...dish, id: id}));
    }

    setIsModalVisible(false);
    setDish(initialDish);

    if (resetEditCart instanceof Function){
      resetEditCart();
    }
  }

  const ModalContent = () => (
    <ContentWrapper>
      <div className="modal-content">
        <div className="modal-header modal-header-lg dark bg-dark">
          <div className="bg-image">
            <img
              // src="http://assets.suelo.pl/soup/img/photos/modal-add.jpg"
              src={process.env.REACT_APP_IMAGE_URL + dish.product.main_image}
              alt=""
            />
          </div>
          <h4 className="modal-title">Specify your dish</h4>
        </div>
        <div className="modal-product-details">
          <div className="row align-items-center">
            <div className="col-9">
              <h6 className="mb-1 product-modal-name">{dish.product.name}</h6>
              {/* <span className="text-muted product-modal-ingredients">
                Pasta, Cheese, Tomatoes, Olives
              </span> */}
            </div>
            <div className="col-3 text-lg text-right">{dish.cost.toFixed(2)}
              $<span className="product-modal-price"></span>
            </div>
          </div>
        </div>

        <div className="modal-body panel-details-container">
          <CartCollapse updateDish={updateDishFunc} product={dish.product} dish={dish}/>
        </div>

        <div className="modal-btn btn btn-block btn-lg" style={{background: '#25282a'}}>
          <InputNumber size="large" min={1} max={avalableQuantity} defaultValue={1} value={dish.quantity} onChange={onChangeQuantity} />
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
        disabled = {avalableQuantity <= 0}
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
