import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header: FC = () => {
  return (
    <nav>
      <NavLink className="navLink" to="/search">
        Search
      </NavLink>
      <NavLink className="navLink" to="/featured">
        Featured
      </NavLink>
      <NavLink className="navLink" to="/">
        Home
      </NavLink>
    </nav>
  );
};

export default Header;
