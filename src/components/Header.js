import React from 'react';
import { Link } from 'gatsby';

import styles from './Header.module.css';
import utilStyles from '../styles/utilStyles.module.css';

const Header = () => {
  return (
    <div className={utilStyles.wrapper}>
      <nav className={styles.mainNav}>
        <Link to='/'>Home</Link>
        <ul>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;