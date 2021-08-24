import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { getCategories } from "../../api/Categories";

export const MenuItemNavigation = (props) => {
  const { categories } = props;

  return (
    <nav id="menu-navigation" className="stick-to-content" data-local-scroll>
      <ul className="nav nav-menu bg-dark dark">
        {categories?.length > 0 ? (
          <Fragment>
            {categories &&
              categories.map((category, index) => {
                return (
                  <li key={category.id}>
                    <a href={index}>{category.name}</a>
                  </li>
                );
              })}
          </Fragment>
        ) : (
          <Fragment></Fragment>
        )}
      </ul>
    </nav>
  );
};
