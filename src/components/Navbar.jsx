import { React } from 'react';
import { close, profile, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src='https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/profile.png?alt=media&token=2cd2797e-0be7-4cfc-9f3f-ed2ea1cb584c' alt="personal photography" className='w-[70px] h-[70px]' />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white`} >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Navbar;