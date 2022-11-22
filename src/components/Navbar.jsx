import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <h3 className="border-[2px] border-dimWhite p-[3px] rounded-full md:ml-9">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/profile.png?alt=media&token=2cd2797e-0be7-4cfc-9f3f-ed2ea1cb584c"
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
              <NavLink to="/" className={({ isActive }) => `nav-links ${isActive ? 'activated' : ''}`}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className={({ isActive }) => `nav-links ${isActive ? ' activated' : ''}`}>
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
