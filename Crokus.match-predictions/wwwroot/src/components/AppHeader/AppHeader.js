import styles from './AppHeader.css';
import logoSrc from './logo.png';

import React, { PropTypes } from 'react';

export default function AppHeader ({ children }) {
  return (
    <header className="fixed fill-navy100 w100">
      <div className="posA mLm dF aiC">
        <img
          className="vaM"
          src={logoSrc}
          alt="Powel logo"
          height="50"
        />
        <span className={`${styles.appName} pLm vaM beta white100`}>
          {'EURO 2016 predictions'}
        </span>
      </div>
      {children}
    </header>
  );
}

AppHeader.propTypes = {
  children: PropTypes.node
};
