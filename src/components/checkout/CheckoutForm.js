import React, { useState, Fragment } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import PhoneInput from "react-phone-input-2";
import { addOrder } from "../../api/order";
import { cities, timeSlots } from "../../constants/Constants";
import { ModalPopup } from "../common/ModalPopup";
import { Checkbox, Radio } from "antd";
import { RadioGroupStyle } from "../../assests/styles/RadioGroupStyle";
import "react-phone-input-2/lib/style.css";
import { addDish, updateDish } from "../../actions/Cart";

export const CheckoutForm = ({ cartDetails }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [city, setCity] = useState();
  const [firstAddressLine, setFirstAddressLine] = useState("");
  const [secondAddressLine, setSecondAddressLine] = useState("");
  const [deliveryFirstName, setDeliveryFirstName] = useState("");
  const [deliverySecondName, setDeliverySecondName] = useState("");
  const [deliveryPhoneNumber, setDeliveryPhoneNumber] = useState();
  const [mealType, setMealType] = useState("");
  const [paymentType, setPaymentType] = useState({ selectedOption: "" });
  const [visible, setVisible] = useState(false);
  const [errorObj, setErrorObj] = useState({});
  const [modelStatus, setModalStatus] = useState("");
  const [isSame, setIsSame] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState("");

  const validation = (data) => {
    console.log("data", data);
    let errors = {};
    if (!data.first_name) {
      errors.firstName = "Required !";
    } else if (!data.last_name) {
      errors.lastName = "Required !";
    } else if (!data.contact_number) {
      errors.phoneNumber = "Required !";
    } else if (!data.order_type) {
      errors.mealType = "Required !";
    } else if (!data.payment_type) {
      errors.paymentType = "Required !";
    } else if (data.order_type == "deliver" && !data.delivery_address_line_1) {
      errors.firstAddressLine = "Required !";
    } else if (data.order_type == "deliver" && !data.delivery_address_line_2) {
      errors.secondAddressLine = "Required !";
    } else if (data.order_type == "deliver" && !data.delivery_phone_number) {
      errors.deliveryPhoneNumber = "Required !";
    } else if (data.order_type == "deliver" && !data.delivery_city_id) {
      errors.city = "Required !";
    }

    setErrorObj(errors);
    return errors;
  };

  const getOrderDetails = () => {
    let orderObj = [];
    cartDetails?.forEach((item) => {
      const id = item.product.id;
      const qty = item.quantity;

      const categories = item.product.menu_option_categories;
      const selectedCategory = [];

      categories?.forEach((category) => {
        const option =
          category?.selectOption?.menu_option_category_menu_option_id;
        if (option) {
          selectedCategory.push(option);
        }
      });

      orderObj.push({
        id: id,
        qty: qty,
        menu_option_category_menu_option_id: selectedCategory,
        addon_id: item.addition,
      });
    });

    return orderObj;
  };

  const handleSubmit = () => {
    const order_menu_items = getOrderDetails();
    const obj = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      contact_number: phoneNumber,
      order_type: mealType,
      payment_type: paymentType.selectedOption,
      order_menu_items: order_menu_items,
    };

    if (mealType == "deliver") {
      obj.delivery_first_name = isSame ? firstName : deliveryFirstName;
      obj.delivery_last_name = isSame ? lastName : deliverySecondName;
      obj.delivery_city_id = city;
      obj.delivery_address_line_1 = firstAddressLine;
      obj.delivery_address_line_2 = secondAddressLine;
      obj.delivery_phone_number = isSame ? phoneNumber : deliveryPhoneNumber;
      obj.delivery_time = deliveryTime;
    }

    if (!firstName && !lastName && !phoneNumber && !mealType) {
      setErrorObj({
        all: "Required !",
      });
    } else {
      let errors = validation(obj);
      if (!Object.keys(errors).length) {
        // addOrder(obj)
        //   .then((res) => {
        //     if (res.data.status == "success") {
        console.log("Order success");
        if (paymentType.selectedOption == "card") {
          console.log("Order done");
          history.push({
            pathname: "/confirmed",
          });
        } else {
          history.push({
            pathname: "/payment",
            state: { orderId: 1 },
          });
        }
        dispatch(addDish([]));
        dispatch(updateDish([]));
        // } else {
        //   console.log('res.data.status');
        //   setModalStatus("error");
        //   setVisible(true);
        // }
        // })
        // .catch((error) => {
        //   setModalStatus("error");
        //   setVisible(true);
        // });
      }
    }
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleChecked = (e) => {
    setIsSame(e.target.checked);
    setErrorObj({});
  };

  const handleRadio = (e) => {
    setPaymentType({ selectedOption: e });
  };
  console.log("paymentType.selectedOption", paymentType.selectedOption);
  return (
    <div className="col-xl-8 col-lg-7 order-lg-first">
      <div className="bg-white p-4 p-md-5 mb-4">
        <h4 className="border-bottom pb-4">
          <i className="ti ti-user mr-3 text-primary"></i>Basic informations
        </h4>
        <div className="row mb-5">
          <div className="form-group col-sm-6">
            <label>First Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errorObj.all || errorObj.firstName ? (
              <span style={{ color: "red" }}>Required</span>
            ) : (
              <Fragment />
            )}
          </div>
          <div className="form-group col-sm-6">
            <label>Last Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
            {errorObj.all || errorObj.lastName ? (
              <span style={{ color: "red" }}>Required</span>
            ) : (
              <Fragment />
            )}
          </div>
          <div className="form-group col-sm-6">
            <label>City:</label>
            <div className="select-container">
              <select
                className="form-control"
                onChange={(e) => setCity(e.target.value)}
              >
                <option value=""></option>
                {cities?.data.map((item, key) => {
                  return (
                    <option key={key} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {errorObj.city ? (
              <span style={{ color: "red" }}>Required</span>
            ) : (
              <Fragment />
            )}
          </div>
          <div className="form-group col-sm-6">
            <label>Phone number:</label>
            <PhoneInput
              disableDropdown={true}
              country={"au"}
              // value={this.state.phone}
              inputClass="form-control"
              containerStyle={{
                borderShadow: "inset 1px 1px 2px 0 rgb(40 43 46 / 6%)",
              }}
              inputStyle={{
                height: "49px",
                borderRadius: "inherit",
              }}
              onChange={(phoneNumber) => {
                setPhoneNumber(phoneNumber);
              }}
            />
            {errorObj.all || errorObj.phoneNumber ? (
              <span style={{ color: "red" }}>Required</span>
            ) : (
              <Fragment />
            )}
          </div>
          <div className="form-group col-sm-6">
            <label>Order Type:</label>
            <div className="select-container">
              <select
                className="form-control"
                onChange={(e) => {
                  setMealType(e.target.value);
                }}
              >
                <option value={""}></option>
                <option value={"deliver"}>Delivery</option>
                <option value={"take_away"}>Take Away</option>
              </select>
            </div>
            {errorObj.all || errorObj.mealType ? (
              <span style={{ color: "red" }}>Required</span>
            ) : (
              <Fragment />
            )}
          </div>
          <div className="form-group col-sm-6">
            <label>E-mail address:</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {mealType == "deliver" ? (
          <Fragment>
            {" "}
            <h4 className="border-bottom pb-4">
              <i className="ti ti-package mr-3 text-primary"></i>Delivery
            </h4>
            <div className="row mb-5">
              {phoneNumber ? (
                <Checkbox
                  className="form-group col-sm-12"
                  onChange={handleChecked}
                >
                  {" "}
                  Same Details{" "}
                </Checkbox>
              ) : (
                <Fragment />
              )}
              <div className="form-group col-sm-6">
                <label>Delivery time:</label>
                <div className="select-container">
                  <select
                    className="form-control"
                    onChange={(e) => {
                      setDeliveryTime(e.target.value);
                    }}
                  >
                    <option></option>
                    {timeSlots.map((item, key) => {
                      return (
                        <option key={key} value={item.value}>
                          {item.value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              {!isSame ? (
                <Fragment>
                  <div className="form-group col-sm-6">
                    <label>Phone number:</label>
                    <PhoneInput
                      disableDropdown={true}
                      country={"au"}
                      // value={this.state.phone}
                      inputClass="form-control"
                      containerStyle={{
                        borderShadow: "inset 1px 1px 2px 0 rgb(40 43 46 / 6%)",
                      }}
                      inputStyle={{
                        height: "49px",
                        borderRadius: "inherit",
                      }}
                      onChange={(phoneNumber) => {
                        setDeliveryPhoneNumber(phoneNumber);
                      }}
                    />
                    {errorObj.all || errorObj.deliveryPhoneNumber ? (
                      <span style={{ color: "red" }}>Required</span>
                    ) : (
                      <Fragment />
                    )}
                  </div>

                  <div className="form-group col-sm-6">
                    <label>First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setDeliveryFirstName(e.target.value)}
                    />
                    {errorObj.all || errorObj.firstName ? (
                      <span style={{ color: "red" }}>Required</span>
                    ) : (
                      <Fragment />
                    )}
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Last Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setDeliverySecondName(e.target.value)}
                    />
                    {errorObj.all || errorObj.lastName ? (
                      <span style={{ color: "red" }}>Required</span>
                    ) : (
                      <Fragment />
                    )}
                  </div>
                </Fragment>
              ) : (
                <Fragment />
              )}

              <div className="form-group col-sm-6">
                <label>Delivery address (First Line):</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setFirstAddressLine(e.target.value)}
                />
                {errorObj.all || errorObj.firstAddressLine ? (
                  <span style={{ color: "red" }}>Required</span>
                ) : (
                  <Fragment />
                )}
              </div>

              <div className="form-group col-sm-6">
                <label>Delivery address (Second Line):</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setSecondAddressLine(e.target.value)}
                />
                {errorObj.all || errorObj.secondAddressLine ? (
                  <span style={{ color: "red" }}>Required</span>
                ) : (
                  <Fragment />
                )}
              </div>
            </div>{" "}
          </Fragment>
        ) : (
          <Fragment />
        )}

        <h4 className="border-bottom pb-4">
          <i className="ti ti-wallet mr-3 text-primary"></i>Payment
        </h4>
        <div className="row text-lg">
          {/* <div className="col-md-4 col-sm-6 form-group">
            <label className="custom-control custom-radio">
              <input
                type="radio"
                name="payment_type"
                className="custom-control-input"
              />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">PayPal</span>
            </label>
          </div> */}
          <div className="radio col-md-12 col-sm-12 form-group">
            <RadioGroupStyle>
              <Radio.Group
                onChange={(e) => handleRadio(e.target.value)}
                value={paymentType.selectedOption}
              >
                <Radio value={"online"}>Online Card Payment</Radio>
                <Radio value={"card"}>Pay at Store</Radio>
              </Radio.Group>
            </RadioGroupStyle>
            {/* <div className="col-md-8 col-sm-8 form-group">
              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="payment_type"
                  className="custom-control-input"
                  disabled={false}
                  value="online"
                  checked={paymentType.selectedOption == "online"}
                  onChange={(e) => handleRadio(e.target.value)}
                />
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">
                  Online Payment{" "}
                  <span style={{ fontSize: "12px" }}>(Coming soon ...)</span>
                </span>
              </label>
            </div>
            <div className="col-md-8 col-sm-8 form-group">
              <label className="custom-control custom-radio">
                <input
                  type="radio"
                  name="payment_type"
                  className="custom-control-input"
                  value="card"
                  checked={paymentType.selectedOption == "card"}
                  onChange={(e) => handleRadio(e.target.value)}
                />
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">Credit Card </span>
                <div style={{ fontSize: "12px" }}>
                  (Call restaurant for card payments... 0889008068)
                </div>
              </label>
            </div> */}
          </div>

          {/* <div className="col-md-4 col-sm-6 form-group">
            <label className="custom-control custom-radio">
              <input
                type="radio"
                name="payment_type"
                className="custom-control-input"
              />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">
                Cash on Delivery
              </span>
            </label>
          </div> */}
          {errorObj.all || errorObj.paymentType ? (
            <span style={{ color: "red" }}>Required</span>
          ) : (
            <Fragment />
          )}
        </div>

        <div className="col-md-12 col-sm-12 form-group">
          <span style={{ color: "red" }}>*Cash on delivery *</span> We don’t do
          cash on delivery due to COVID-19 restrictions
        </div>
        <div className="col-md-12 col-sm-12 form-group">
          Call restaurant for card payments
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary btn-lg" onClick={handleSubmit}>
          <span>Order now!</span>
        </button>
      </div>

      {visible ? (
        <ModalPopup
          visible={visible}
          hideCancel={true}
          onOK={handleOk}
          status={modelStatus}
        />
      ) : (
        <Fragment />
      )}
    </div>
  );
};
