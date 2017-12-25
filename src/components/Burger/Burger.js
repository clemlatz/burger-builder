import React from 'react';

import css from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export default (props) => {
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}
