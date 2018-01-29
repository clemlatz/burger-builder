import React from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends React.Component {
  state = {
    orders: [],
    loading: true,
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/orders.json');
      let fetchedOrders = [];
      for (let id in res.data) {
        fetchedOrders.push({ ...res.data[id], id });
      }
      this.setState({
        loading: false,
        orders: fetchedOrders,
      });
    } catch (error) {
      this.setState({ loading: false });
    }
  }

  render() {

    const orders = this.state.orders.map(order => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={+order.price}
      />
    ));

    return (
        <div>{this.state.loading ? <Spinner/> : orders}</div>
    );
  }

}

export default withErrorHandler(Orders, axios);

