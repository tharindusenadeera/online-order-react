import React, { useEffect, useState } from "react";
import { getCategories } from "../../api/Categories";

export const MenuItemNavigation = (props) => {
  const { categories } = props;

  return (
    <nav id="menu-navigation" className="stick-to-content" data-local-scroll>
      <ul className="nav nav-menu bg-dark dark">
        {categories &&
          categories.map((category, index) => {
            return (
              <li key={category.id}>
                <a href={index}>{category.name}</a>
              </li>
            );
          })}

        {/* <li>
          <a href="#Burgers">Burgers</a>
        </li>
        <li>
          <a href="#Pasta">Pasta</a>
        </li>
        <li>
          <a href="#Pizza">Pizza</a>
        </li>
        <li>
          <a href="#Sushi">Sushi</a>
        </li>
        <li>
          <a href="#Desserts">Desserts</a>
        </li>
        <li>
          <a href="#Drinks">Drinks</a>
        </li> */}

      </ul>
    </nav>
  );
};
