import styles from './Loader.css';

import React, { PropTypes } from 'react';

export default function Loader ({
  message = 'Loading',
  className = ''
}) {
  return (
    <div className={className}>
      <div className="beta">
        {message}
        <span className={styles.ellipsis}>
          <span className={styles.ellipsisDot}>{'.'}</span>
          <span className={styles.ellipsisDot}>{'.'}</span>
          <span className={styles.ellipsisDot}>{'.'}</span>
        </span>
      </div>
    </div>
  );
}

Loader.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string
};
