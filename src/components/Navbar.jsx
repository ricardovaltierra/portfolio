import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from '../constants';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
  <header className="bg-blue-900 flex items-center justify-between navbar h-[80px] py-0 px-8 text-white">
    <h3>Logo</h3>
    <nav ref={navRef} className="bg-blue-900">
      {navLinks.map((nav, index) => (
          <a key={index} href={`#${nav.id}`} className="my-0 mx-8 no-underline" onClick={showNavbar}>
            {nav.title}
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
