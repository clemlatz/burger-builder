import React from 'react';

import css from './Spinner.css';

export default () => (
  <div className={css.Spinner}>
		<div className={css.doubleBounce1}></div>
		<div className={css.doubleBounce2}></div>
	</div>
);
