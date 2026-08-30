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
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/as0yphqi/image/upload/v1786018073/WhatsApp_Image_2026-08-06_at_06.32.48_yczffr.jpg"
                    alt="🤔"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
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
                <NavLink to="/skills" className={({ isActive }) => `nav-links ${isActive ? ' activated' : ''}`} onClick={closeMobileMenu}>
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => `nav-links ${isActive ? ' activated' : ''}`} onClick={closeMobileMenu}>
                  Contact
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
