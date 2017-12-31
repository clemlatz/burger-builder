import React from 'react';
import PropTypes from 'prop-types';

import css from './BuildControl.css';

const buildControls = (props) => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.label}</div>
    <button className={css.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
    <button className={css.More} onClick={props.added}>More</button>
  </div>
);

buildControls.propTypes = {
  added: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  removed: PropTypes.func.isRequired
}

export default buildControls;
