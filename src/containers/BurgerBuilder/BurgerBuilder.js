import React from 'react';

import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
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
