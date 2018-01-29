import React from 'react';
import PropTypes from 'prop-types';

import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import css from './ContactData.css';

class ContactData extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    ingredients: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
  }

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false,
  }

  _orderHandler = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Clément Bourgoin',
        address: {
          street: 'Tesststreet 2',
          zipCode: '46600',
          country: 'France'
        },
        email: 'test@example.org',
      },
      deliveryMethod: 'fastest',
    }

    try {
      await axios.post('/orders.json', order);
      this.setState({ loading: false });
      this.props.history.push('/');
    } catch(error) {
      this.setState({ loading: false });
    }

  }

  render () {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <div className={css.ContactData}>
        <h4>Enter your contact data</h4>
        <form onSubmit={this._orderHandler}>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal code" />
          <Button type="Success" clicked={this._orderHandler}>ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
