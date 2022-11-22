import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineBars3 } from 'react-iconshi2';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      Navbar here!
    </div>
  );
};

export default Navbar;
