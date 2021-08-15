import React from "react";
import { Collapse, Input } from "antd";
import { SizeContent } from "./SizeContent";
import { AdditionsContent } from "./AdditionsContent";
import styled from "styled-components";
import CorrectIcon from "../../../assests/svg/correct.svg";

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

const { Panel } = Collapse;
const { TextArea } = Input;

export const CartCollapse = () => {
  function callback(key) {
    console.log(key);
  }

  return (
    <CollapseAnt
      accordion
      defaultActiveKey={["1"]}
      onChange={callback}
      expandIconPosition="right"
    >
      <Panel header="Size" key="1" showArrow={false} className="checked">
        <SizeContent />
      </Panel>
      <Panel header="Additions" key="2" showArrow={false}>
        <AdditionsContent />
      </Panel>
      <Panel header="Other" key="3" showArrow={false} className="checked">
        <TextArea rows={4} placeholder="Put this any other informations..." />
      </Panel>
    </CollapseAnt>
  );
};
