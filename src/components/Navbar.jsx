import React from 'react';
import { navLinks } from '../constants';

const Navbar = () => (
  <header className="">
    <h3>Logo</h3>
    <nav>
      {navLinks.map((nav, index) => (
          <a key={index} href={`#${nav.id}`}>
            <div className="">{nav.title}</div>
          </a>
        ))
      }
    </nav>
  </header>
  );

export default Navbar;
