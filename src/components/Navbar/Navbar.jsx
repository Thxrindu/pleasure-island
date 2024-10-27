import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={`${styles.header}`}>
      <a href='/' className={`${styles.logo}`}>
        Logo
      </a>

      <nav className={`${styles.navbar}`}>
        <a href='/'>Home</a>
        <a href='/'> About</a>
        <a href='/'> Contact Us</a>
      </nav>
    </header>
  );
};

export default Navbar;
