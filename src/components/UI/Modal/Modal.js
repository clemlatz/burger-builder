import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop/Backdrop';

import css from './Modal.css';

class Modal extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={css.Modal}
            style={{
              transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: this.props.show ? 1 : 0
            }}
          >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  modalClosed: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
