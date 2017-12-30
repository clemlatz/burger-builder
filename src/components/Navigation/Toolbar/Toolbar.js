import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import css from './Toolbar.css';

const toolbar = (props) => (
  <header className={css.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
