import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
  state = {
    ingredients: {},
    totalPrice: 0,
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
        continue;
      }
      ingredients[param[0]] = +param[1];
    }

    this.setState({ ingredients: ingredients, totalPrice: price }, () => this.render());
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
        <Route
          path={this.props.match.path + '/contact-data'}
          component={(props) => (<ContactData
            {...props}
            ingredients={this.state.ingredients}
            price={this.state.totalPrice} />)}
        />
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default Checkout;
