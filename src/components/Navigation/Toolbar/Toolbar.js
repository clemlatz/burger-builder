import React from 'react';

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

export default toolbar;
