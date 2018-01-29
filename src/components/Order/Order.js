import React from 'react';
import PropTypes from 'prop-types';

import css from './Order.css';

const order = (props) => {
  const ingredients = [];
  for (let name in props.ingredients) {
    ingredients.push(`${name} (${props.ingredients[name]})`);
  }
  return (
    <div className={css.Order}>
      <p>Ingredients: {ingredients.join(', ')}</p>
      <p>Price: <strong>{props.price.toFixed(2)} €</strong></p>
    </div>
  );
};

order.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
}

export default order;
