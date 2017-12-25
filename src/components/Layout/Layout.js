import React from 'react';

import css from './Layout.css';

export default (props) => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={css.Content}>
      {props.children}
    </main>
  </React.Fragment>
);
