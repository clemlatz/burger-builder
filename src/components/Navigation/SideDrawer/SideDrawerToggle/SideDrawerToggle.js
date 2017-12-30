import React from 'react';

import css from './SideDrawerToggle.css';

export default (props) => (
  <div className={css.DrawerToggle} onClick={props.onClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
