import React from 'react';

import css from './Logo.css';
import image from './Logo.png';

const logo = (props) => (
  <div className={css.Logo}>
    <img src={image} alt="Clément's Burgers" />
  </div>
);

export default logo;
