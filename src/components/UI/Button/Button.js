import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.css';

const button = (props) => (
  <button
    className={[css.Button, css[props.type]].join(' ')}
    disabled={props.disabled}
    onClick={props.clicked}>
      {props.children}
  </button>
);

button.propTypes = {
  children: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

export default button;
