import React from 'react';

import css from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export default (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
      });
    });
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}
