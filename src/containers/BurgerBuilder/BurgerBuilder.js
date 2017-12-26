import React from 'react';

import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Build controls</div>
      </React.Fragment>
    );
  }
}
