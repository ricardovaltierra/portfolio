import { useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineBars3 } from 'react-icons/hi2';
import navLinks from '../constants';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
  <header className="bg-secondary flex items-center justify-between navbar h-[80px] py-0 px-8 text-white">
    <h3 className='border-[2px] border-dimWhite p-[3px] rounded-full md:ml-9'>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/profile.png?alt=media&token=2cd2797e-0be7-4cfc-9f3f-ed2ea1cb584c'
        alt="personal photography"
        className='w-[40px] h-[40px]'
      />
    </h3>
    <nav ref={navRef} className="bg-secondary md:flex md:place-items-center ml-auto">
      {navLinks.map((nav, index) => (
          <a key={index} href={`#${nav.id}`} className="my-0 mx-8 no-underline" onClick={showNavbar}>
            {nav.title}
          </a>
        ))}
        <button onClick={showNavbar} className="nav-btn nav-close-btn" type="button">
          <IoMdClose />
        </button>
      </nav>
      <button onClick={showNavbar} className="nav-btn" type="button">
        <HiOutlineBars3 />
      </button>
    </header>
  );
};

export default Navbar;
