import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import css from './SideDrawer.css';

const sideDrawer = (props) => {
  const classes = [css.SideDrawer];
  if (props.show) {
    classes.push(css.Open);
  }

  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.close} />
      <div className={classes.join(' ')}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
}

sideDrawer.propTypes = {
  close: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default sideDrawer;

