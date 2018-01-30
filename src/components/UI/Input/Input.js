import React from 'react';
import PropTypes from 'prop-types';

import css from './Input.css';

const input = (props) => {

  let inputElement;
  switch (props.elementType) {
    case('textarea'):
      inputElement = (
        <textarea
          className={css.InputElement}
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value} />
      );
      break;
    case('select'):
      inputElement = (
        <select
          className={css.InputElement}
          onChange={props.changed}
          value={props.value}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
          ))};
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={css.InputElement}
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value} />
    )
  }

  return (
    <div className={css.Input}>
      <label className={css.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}

input.propTypes = {
  changed: PropTypes.func.isRequired,
  elementConfig: PropTypes.object.isRequired,
  elementType: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
}

export default input;

