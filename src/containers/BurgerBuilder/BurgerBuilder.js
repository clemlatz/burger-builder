import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: .5,
  cheese: .4,
  meat: 1.3,
  bacon: .7
};

export default class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
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

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <React.Fragment>
				<Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
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
  }
}
