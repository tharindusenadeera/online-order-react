import React from "react";
import { Collapse, Input } from "antd";
import { CategoryContent } from "./CategoryContent";
import { AdditionsContent } from "./AdditionsContent";
import styled from "styled-components";
import CorrectIcon from "../../../assests/svg/correct.svg";
import theme from "../../../utils/theme";

const CollapseAnt = styled(Collapse)`
  .ant-collapse-item {
    &.checked {
      .ant-collapse-header {
        display: flex;
        &::before {
          content: url(${CorrectIcon});
          width: 26px;
          height: 26px;
          margin-right: 10px;
        }
      }
    }
  }
`;

const InputWrap = styled.div`
  .ant-input {
    &:hover {
      border-color: ${theme.colors.gold};
    }
    &:focus,
    .ant-input-focused {
      box-shadow: ${theme.colors.goldShadow};
    }
  }
`;

const { Panel } = Collapse;
const { TextArea } = Input;

export const CartCollapse = (props) => {
  const { updateDish, product, dish} = props;
  
  function callback(key) {
    // console.log(key);
  }

  return (
    <CollapseAnt
      accordion
      defaultActiveKey={["1"]}
      onChange={callback}
      expandIconPosition="right"
    >
      { product?.menu_option_categories?.map((category) => {
          return (
            <Panel header={category.name} key={category.id} showArrow={false} className="checked">
              <CategoryContent updateDish={updateDish} category={category} dish={dish}/>
            </Panel>
          )
        })
      }
      
      <Panel header="Additions" key="112" showArrow={false}>
        <AdditionsContent updateDish={updateDish} dish={dish}/>
      </Panel>
      <Panel header="Other" key="3111" showArrow={false} className="checked">
        <InputWrap>
          <TextArea rows={4} placeholder="Put this any other informations..." />
        </InputWrap>
      </Panel>
    </CollapseAnt>
  );
};
