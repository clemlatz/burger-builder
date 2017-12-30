import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';

import css from './Layout.css';

export default (props) => (
  <React.Fragment>
    <Toolbar />
    <main className={css.Content}>
      {props.children}
    </main>
  </React.Fragment>
);
