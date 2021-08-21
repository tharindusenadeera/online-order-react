import React from "react";
import styled from "styled-components";
import theme from "../../utils/theme";

const Wrap = styled.div`
  .ant-radio-group {
    display: flex;
    flex-direction: column;

    .ant-radio-wrapper {
      margin-bottom: 8px;

      .ant-radio {
        top: 6px;
        .ant-radio-input {
          &:focus + .ant-radio-inner {
            box-shadow: ${theme.colors.goldShadow};
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

export const RadioGroupStyle = (props) => {
  return <Wrap>{props.children}</Wrap>;
};
