import React from 'react';
import PropTypes from 'prop-types';

import css from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad',  type: 'salad' },
	{ label: 'Meat',   type: 'meat' },
	{ label: 'Bacon',  type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
];

const buildControls = (props) => (
  <div className={css.BuildControls}>
    <p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
		{controls.map(control => (
			<BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
		))}
    <button
      className={css.OrderButton}
      disabled={!props.purchasable}
      onClick={props.orderButtonClicked}
    >Order now</button>
  </div>
);

buildControls.propTypes = {
  disabled: PropTypes.object.isRequired,
  orderButtonClicked: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired
}

export default buildControls;

