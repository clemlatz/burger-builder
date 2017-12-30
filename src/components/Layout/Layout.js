import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import css from './Layout.css';

export default (props) => (
  <React.Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={css.Content}>
      {props.children}
    </main>
  </React.Fragment>
);
