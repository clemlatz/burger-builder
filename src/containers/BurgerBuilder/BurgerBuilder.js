import React from 'react';
import axios from '../../axios-orders';
import PropTypes from 'prop-types';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: .5,
  cheese: .4,
  meat: 1.3,
  bacon: .7
};

class BurgerBuilder extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://burger-builder-5b652.firebaseio.com/ingredients.json');
      this.setState({ ingredients: response.data });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  _updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingredientKey => ingredients[ingredientKey])
      .reduce((sum, el) => sum + el, 0);
    this.setState({ purchasable: sum > 0 });
  }

  _addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this._updatePurchaseState(updatedIngredients);
  }

  _removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this._updatePurchaseState(updatedIngredients);
  }

  _purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  _purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  _purchaseContinueHandler = async () => {
    //this.setState({ loading: true });
    //const order = {
    //  ingredients: this.state.ingredients,
    //  price: this.state.totalPrice,
    //  customer: {
    //    name: 'Clément Bourgoin',
    //    address: {
    //      street: 'Tesststreet 2',
    //      zipCode: '46600',
    //      country: 'France'
    //    },
    //    email: 'test@example.org',
    //  },
    //  deliveryMethod: 'fastest',
    //}

    //try {
    //  const response = await axios.post('/orders.json', order);
    //  this.setState({ loading: false, purchasing: false });
    //  console.log(response);
    //} catch(error) {
    //  this.setState({ loading: false, purchasing: false });
    //  console.log(error);
    //}

    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  render() {

    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
    let orderSummary = null;
    if (this.state.ingredients !== null) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this._addIngredientHandler}
            ingredientRemoved={this._removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
            orderButtonClicked={this._purchaseHandler}
          />
        </React.Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          orderContinueClicked={this._purchaseContinueHandler}
          orderCancelClicked={this._purchaseCancelHandler}
        />
      );
    }

    return (
      <React.Fragment>
				<Modal show={this.state.purchasing} modalClosed={this._purchaseCancelHandler}>
          {this.state.loading ? <Spinner/> : orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);

