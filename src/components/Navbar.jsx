import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from '../constants';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("reponsive_nav");
  }

  return (
  <header className="">
    <h3>Logo</h3>
    <nav ref={navRef}>
      {navLinks.map((nav, index) => (
          <a key={index} href={`#${nav.id}`}>
            <div className="">{nav.title}</div>
          </a>
        ))
      }
      <button onClick={showNavbar} className="nav-btn nav-close-btn">
        <FaTimes />
      </button>
    </nav>
    <button onClick={showNavbar} className="nav-btn">
      <FaBars />
    </button>
  </header>
  )
};

export default Navbar;
