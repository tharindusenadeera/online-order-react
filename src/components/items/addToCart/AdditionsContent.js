import React, {useState} from "react";
import { Checkbox } from "antd";
import styled from "styled-components";
import theme from "../../../utils/theme";

const Wrapper = styled.div`
  .ant-checkbox {
    top: 6px;

    .ant-checkbox-inner {
      width: 24px;
      height: 24px;

      &::after {
        width: 7px;
        height: 12px;
        top: 45%;
        left: 25%;
      }
    }
  }

  .ant-checkbox-checked {
    .ant-checkbox-inner {
      background-color: ${theme.colors.gold};
      border-color: ${theme.colors.gold};
    }
    &::after {
      border: 2px solid ${theme.colors.gold};
    }
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${theme.colors.gold};
  }
`;

export const AdditionsContent = (props) => {
  const {updateDish, dish} = props;

  const onChange = (checkedValues) => {
    updateDish({...dish, addition: checkedValues});
  }

  return (
    <Wrapper>
      <Checkbox.Group
        onChange={onChange}
        value={dish.addition}
        style={{ width: "100%" }}
      >
        <div className="row">
          {dish.product.active_menu_item_addons?.map((addon) => {
            return (
              <div className="col-6 mb-2" key={addon.id}>
                <Checkbox value={addon.pivot.addon_id}>{addon.name}&nbsp;(&nbsp;${addon.pivot.amount}&nbsp;)</Checkbox>
              </div>
            )
          })}
        </div>
      </Checkbox.Group>
    </Wrapper>
  );
};
