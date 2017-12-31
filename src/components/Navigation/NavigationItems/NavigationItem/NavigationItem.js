import React from 'react';
import PropTypes from 'prop-types';

import css from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={css.NavigationItem}>
    <a
      href={props.link}
      className={props.active ? css.active : null}
    >{props.children}</a>
  </li>
);

navigationItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default navigationItem;

