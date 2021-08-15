import React from "react";
import { Collapse, Input } from "antd";
import { SizeContent } from "./SizeContent";
import { AdditionsContent } from "./AdditionsContent";

const { Panel } = Collapse;
const { TextArea } = Input;

export const CartCollapse = () => {
  function callback(key) {
    console.log(key);
  }

  return (
    <Collapse accordion defaultActiveKey={["1"]} onChange={callback}>
      <Panel header="Size" key="1">
        <SizeContent />
      </Panel>
      <Panel header="Additions" key="2">
        <AdditionsContent />
      </Panel>
      <Panel header="Other" key="3">
        <TextArea rows={4} placeholder="Put this any other informations..." />
      </Panel>
    </Collapse>
  );
};
