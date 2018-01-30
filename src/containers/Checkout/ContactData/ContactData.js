import React from 'react';
import PropTypes from 'prop-types';

import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';

import css from './ContactData.css';

class ContactData extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    ingredients: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
  }

  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip Code',
        },
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your E-mail',
        },
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ]
        },
      }
    },
    loading: false,
  }

  _orderHandler = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
    }

    try {
      await axios.post('/orders.json', order);
      this.setState({ loading: false });
      this.props.history.push('/orders');
    } catch(error) {
      this.setState({ loading: false });
    }

  }

  render () {
    if (this.state.loading) {
      return <Spinner />;
    }

    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    return (
      <div className={css.ContactData}>
        <h4>Enter your contact data</h4>
        <form onSubmit={this._orderHandler}>
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
            />
          ))}
          <Button type="Success" clicked={this._orderHandler}>ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
