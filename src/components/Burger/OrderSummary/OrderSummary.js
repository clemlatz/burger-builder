import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(key => (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}</span>:
        {props.ingredients[key]}
      </li>
    ));
  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Total price: ${props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button type="Danger" clicked={props.orderCancelClicked}>CANCEL</Button>
      <Button type="Success" clicked={props.orderContinueClicked}>ORDER</Button>
    </React.Fragment>
  );
};

export default orderSummary;
