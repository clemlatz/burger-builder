import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle';

import css from './Toolbar.css';

const toolbar = (props) => (
  <header className={css.Toolbar}>
    <SideDrawerToggle onClick={props.toggleSideDrawer} />
    <div className={css.Logo}>
      <Logo />
    </div>
    <nav className={css.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

toolbar.propTypes = {
  toggleSideDrawer: PropTypes.func.isRequired
};

export default toolbar;
