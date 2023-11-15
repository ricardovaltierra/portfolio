import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import styles from '../style';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: 'rgba(255, 255, 255, 0.7)' }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className={styles.flexCenter} onClick={closeMobileMenu}>
              <h3 className="border-[2px] border-dimWhite p-[3px] rounded-full navbar-icon">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/profile_jul_20_2023.png?alt=media&token=836716e8-daac-4fcc-8072-47d6630ef146"
                  alt="personal photography"
                  className="w-[40px] h-[40px]"
                />
              </h3>
            </Link>
            <div className="menu-icon" onClick={handleClick} role="button" tabIndex={0} onKeyDown={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-links ${isActive ? 'activated' : ''}`} onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className={({ isActive }) => `nav-links ${isActive ? ' activated' : ''}`} onClick={closeMobileMenu}>
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/skills" className={({ isActive }) => `nav-links ${isActive ? ' activated' : ''}`} onClick={closeMobileMenu}>
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => `nav-links ${isActive ? ' activated' : ''}`} onClick={closeMobileMenu}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
