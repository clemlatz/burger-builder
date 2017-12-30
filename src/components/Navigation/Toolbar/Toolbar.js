import React from 'react';

import Logo from '../../Logo/Logo';

import css from './Toolbar.css';

const toolbar = (props) => (
  <header className={css.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      ...
    </nav>
  </header>
);

export default toolbar;
