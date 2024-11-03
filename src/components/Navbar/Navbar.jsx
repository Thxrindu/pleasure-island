import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss';

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
        <Link
          to='dashboard'
          smooth={true}
          duration={500}
          onClick={showNavbar}
          className={`${styles.header__link}`}
        >
          Home
        </Link>
        <Link
          to='about'
          smooth={true}
          duration={500}
          onClick={showNavbar}
          className={`${styles.header__link}`}
        >
          About
        </Link>
        <Link
          to='contact'
          smooth={true}
          duration={500}
          onClick={showNavbar}
          className={`${styles.header__link}`}
        >
          Contact Us
        </Link>

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
