import React, { useEffect } from "react";
import { RadioGroupStyle } from "../../../assests/styles/RadioGroupStyle";
import { Radio } from "antd";

export const CategoryContent = (props) => {
  const { updateDish, category, dish } = props;

  const [value, setValue] = React.useState("");

  useEffect(() => {
    const cate = dish?.product?.menu_option_categories.find(
      (cate) => cate.id === category.id
    );
    if (cate.selectOption) {
      setValue(cate.selectOption?.id);
    }
  }, [updateDish, category, dish]);

  const onChange = (e) => {
    const selectOptionId = e.target.value;
    const selectedCategory = e.target.category;

    const product = dish.product;

    const selectOption = selectedCategory?.menu_item_options?.find(
      (option) => option.id === selectOptionId
    );
    const selectCategory = { ...selectedCategory, selectOption: selectOption };

    const categories = product?.menu_option_categories.filter(
      (category) => category.id !== selectCategory.id
    );
    categories.push(selectCategory);

    const updatedProduct = { ...product, menu_option_categories: categories };

    updateDish({
      ...dish,
      product: updatedProduct,
      cost: dish.quantity * parseFloat(dish.product.price),
    });
  };

  return (
    <RadioGroupStyle>
      <Radio.Group onChange={onChange} value={value} key={category.id}>
        {category?.menu_item_options?.map((option) => {
          return (
            <Radio value={option.id} category={category} key={option.id}>
              {option.name}
            </Radio>
          );
        })}
      </Radio.Group>
    </RadioGroupStyle>
  );
};
