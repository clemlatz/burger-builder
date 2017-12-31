import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import css from './Layout.css';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = {
    showSideDrawer: false
  }

  _toggleSideDrawer = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  }

  _closeSideDrawer = () => {
    this.setState({ showSideDrawer: false });
  }

  render() {
    return (
        <React.Fragment>
          <Toolbar toggleSideDrawer={this._toggleSideDrawer} />
          <SideDrawer
            show={this.state.showSideDrawer}
            close={this._closeSideDrawer} />
          <main className={css.Content}>
            {this.props.children}
          </main>
        </React.Fragment>
      );
  }
}

