import React from 'react';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import css from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={css.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button type="Danger" clicked>CANCEL</Button>
      <Button type="Success" clicked>CONTINUE</Button>
    </div>
  );
};

checkoutSummary.propTypes = {
  ingredients: PropTypes.object.isRequired
}

export default checkoutSummary;

