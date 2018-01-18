import React from 'react';
import PropTypes from 'prop-types';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
  state = {
    ingredients: {
      meat: 1,
      salad: 1,
      cheese: 1,
      bacon: 1,
    }
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={this.state.ingredients}/>
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.object.isRequired
}

export default Checkout;
