import React from "react";
import { Radio } from "antd";
import styled from "styled-components";
import theme from "../../../utils/theme";

const Wrapper = styled.div`
  .ant-radio-group {
    display: flex;
    flex-direction: column;

    .ant-radio-wrapper {
      margin-bottom: 8px;

      .ant-radio {
        top: 6px;
        .ant-radio-input {
          &:focus + .ant-radio-inner {
            box-shadow: 0 0 0 3px rgb(255 214 132 / 30%);
          }
        }
        .ant-radio-inner {
          width: 25px;
          height: 25px;
          &::after {
            width: 17px;
            height: 17px;
          }
        }

        &.ant-radio-checked {
          &::after {
            border: 1px solid ${theme.colors.border};
          }
          .ant-radio-inner {
            border-color: ${theme.colors.gold};
            &::after {
              background-color: ${theme.colors.gold};
            }
          }
        }
      }
    }

    .ant-radio-wrapper:hover .ant-radio,
    .ant-radio:hover .ant-radio-inner,
    .ant-radio-input:focus + .ant-radio-inner {
      border-color: ${theme.colors.gold};
    }
  }
`;

const RadioAnt = styled(Radio)``;

export const SizeContent = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <RadioAnt.Group onChange={onChange} value={value}>
        <RadioAnt value={1}>Normal - 200g ($9.00)</RadioAnt>
        <RadioAnt value={2}>Double - 400g ($12.00)</RadioAnt>
      </RadioAnt.Group>
    </Wrapper>
  );
};
