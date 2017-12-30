import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import css from './SideDrawer.css';

export default (props) => {
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
