import React from 'react';
import PropTypes from 'prop-types';

import css from './SideDrawerToggle.css';

const sideDrawerToggle = (props) => (
  <div className={css.DrawerToggle} onClick={props.onClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

sideDrawerToggle.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default sideDrawerToggle;

