import React from "react";
import { Checkbox } from "antd";

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

const plainOptions = ["Apple", "Pear", "Orange"];

export const AdditionsContent = () => {
  return (
    <Checkbox.Group
      options={plainOptions}
      defaultValue={["Apple"]}
      onChange={onChange}
    />
  );
};
