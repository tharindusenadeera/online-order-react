import React from "react";
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

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

//const plainOptions = ["Apple", "Pear", "Orange"];

export const AdditionsContent = () => {
  return (
    <Wrapper>
      <Checkbox.Group
        //options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
        style={{ width: "100%" }}
      >
        <div className="row">
          <div className="col-6 mb-2">
            <Checkbox value="A">Chicken ($2.00)</Checkbox>
          </div>
          <div className="col-6 mb-2">
            <Checkbox value="B">Angus Beef ($5.00)</Checkbox>
          </div>
          <div className="col-6 mb-2">
            <Checkbox value="C">Beef ($3.00)</Checkbox>
          </div>
          <div className="col-6 mb-2">
            <Checkbox value="D">Potato ($2.00)</Checkbox>
          </div>
          <div className="col-6 mb-2">
            <Checkbox value="E">Paprika ($2.00)</Checkbox>
          </div>
        </div>
      </Checkbox.Group>
    </Wrapper>
  );
};
