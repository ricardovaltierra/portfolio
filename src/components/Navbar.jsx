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
    <h3>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/profile.png?alt=media&token=2cd2797e-0be7-4cfc-9f3f-ed2ea1cb584c'
        alt="personal photography"
        className='w-[70px] h-[70px]'
      />
    </h3>
    <nav ref={navRef} className="bg-blue-900 ml-auto">
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
