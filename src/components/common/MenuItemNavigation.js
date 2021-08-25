import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { getCategories } from "../../api/Categories";
import { Link } from "react-scroll";

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
                    <Link to={`ref_${category.id}`} spy={true} smooth={true}>
                      {category.name}
                    </Link>
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
