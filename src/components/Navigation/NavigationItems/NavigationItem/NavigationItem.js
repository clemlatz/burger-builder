import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import css from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={css.NavigationItem}>
    <NavLink
      to={props.link}
      exact
      activeClassName={css.active}
    >{props.children}</NavLink>
  </li>
);

navigationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default navigationItem;

