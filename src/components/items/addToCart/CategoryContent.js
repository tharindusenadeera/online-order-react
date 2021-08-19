import React, {useEffect} from "react";
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

const RadioAnt = styled(Radio)``;

export const CategoryContent = (props) => {
  const {updateDish, category, dish} = props;

  const [value, setValue] = React.useState('');

  useEffect(() => {
    const cate = dish?.product?.menu_option_categories.find((cate) => cate.id === category.id);
    if (cate.selectOption) {
      setValue(cate.selectOption?.id);
    }
  },[updateDish,category,dish])

  
  const onChange = (e) => {
    const selectOptionId =  e.target.value;
    const selectedCategory = e.target.category;

    const product = dish.product;

    const selectOption = selectedCategory?.menu_item_options?.find((option) => option.id === selectOptionId);
    const selectCategory = {...selectedCategory, selectOption : selectOption}

    const categories = product?.menu_option_categories.filter((category) => category.id !== selectCategory.id)
    categories.push(selectCategory);

    const updatedProduct = {...product, menu_option_categories : categories};

    updateDish({...dish, product: updatedProduct, cost: dish.quantity * parseFloat(dish.product.price)});
  };
 
  return (
    <Wrapper>
      <RadioAnt.Group onChange={onChange} value={value} key={category.id}>
        { category?.menu_item_options?.map((option) => {
            return (
              <RadioAnt value={option.id} category={category} key={option.id}>{option.name}</RadioAnt>
            )
          })
        }
      </RadioAnt.Group>
    </Wrapper>
  );
};
