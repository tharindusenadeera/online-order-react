import React, { useState } from "react";
import { Modal } from "antd";
import styled from "styled-components";
import theme from "../../utils/theme";
import { Fragment } from "react";

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

export const ModalPopup = (props) => {
  const { visible, hideCancel, onCancel, onOK, status } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const ModalContent = () => (
    <ContentWrapper>
      <div className="modal-content">
        {/* <div className="modal-header modal-header-lg dark bg-dark"></div> */}
        <div
          className={`icon icon-xl ${
            status == "success" ? "icon-success" : "icon-danger"
          }`}
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "195px",
          }}
        >
          {status == "success" ? (
            <i className="ti ti-check-box"></i>
          ) : (
            <i className="ti ti-close"></i>
          )}
        </div>

        <div
          className="row"
          style={{
            marginLeft: "195px",
          }}
        >
          <h3 className="modal-title">
            {status == "success" ? "Successfull" : "Something Went Wrong !"}
          </h3>
        </div>

        <button
          type="button"
          className="modal-btn btn btn-secondary btn-block btn-lg"
          data-action="add-to-cart"
          onClick={onOK}
        >
          <span>OK</span>
        </button>
        {!hideCancel ? (
          <button
            type="button"
            className="modal-btn btn btn-secondary btn-block btn-lg"
            data-action="update-cart"
            onClick={onCancel}
          >
            <span>Cancel</span>
          </button>
        ) : (
          <Fragment />
        )}
      </div>
    </ContentWrapper>
  );
  return (
    <ModalWrapper>
      <Modal
        //title="Basic Modal"
        visible={visible}
        // onOk={handleOk}
        onCancel={handleCancel}
        className="ant-custom-modal"
        footer={null}
      >
        <ModalContent hideCancel={hideCancel} />
      </Modal>
    </ModalWrapper>
  );
};
