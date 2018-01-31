import React from 'react';
import PropTypes from 'prop-types';

import css from './Input.css';

const input = (props) => {

  const inputClasses = [css.InputElement];
  if (props.invalid === true && props.shouldValidate && props.touched) {
    inputClasses.push(css.Invalid);
  }

  let inputElement;
  switch (props.elementType) {
    case('textarea'):
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value} />
      );
      break;
    case('select'):
      inputElement = (
        <select
          className={inputClasses.join(' ')}
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
          className={inputClasses.join(' ')}
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
  invalid: PropTypes.bool.isRequired,
  label: PropTypes.string,
  shouldValidate: PropTypes.bool.isRequired,
  touched: PropTypes.bool.isRequired,
  value: PropTypes.string,
}

export default input;

