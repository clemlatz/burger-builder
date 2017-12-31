import React from 'react';
import PropTypes from 'prop-types';

import css from './Backdrop.css';

const backdrop = (props) => (
  props.show ? <div className={css.Backdrop} onClick={props.clicked}></div> : null
);

backdrop.propTypes = {
  clicked: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default backdrop;
