import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const navRef = useRef();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsiveNav);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setVisible(false);
    } else {
      // Scrolling up
      setVisible(true);
      if (currentScrollY > 80) {
        // Change 80 to the height of your navbar if necessary
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${styles.header} ${visible ? styles.visible : styles.hidden} ${
        scrolled ? styles.scrolled : ''
      }`}
    >
      <a href='/' className={`${styles.header__logo}`}>
        Pleasure Island
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
