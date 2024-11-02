import React, { useRef } from 'react';
import styles from './Navbar.module.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsiveNav);
  };

  return (
    <header className={`${styles.header}`}>
      <a href='/' className={`${styles.header__logo}`}>
        Logo
      </a>

      <nav ref={navRef} className={`${styles.header__navbar}`}>
        <a href='/'>Home</a>
        <a href='/'> About</a>
        <a href='/'> Contact Us</a>

        <button
          className={`${styles.header__navBtn} ${styles.header__navBtnClose}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>

      <button className={`${styles.header__navBtn}`} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
