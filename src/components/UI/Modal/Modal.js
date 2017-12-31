import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop/Backdrop';

import css from './Modal.css';

const modal = (props) => (
  <React.Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div className={css.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? 1 : 0
        }}
      >
      {props.children}
    </div>
  </React.Fragment>
);

modal.propTypes = {
  children: PropTypes.element.isRequired,
  modalClosed: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default modal;
