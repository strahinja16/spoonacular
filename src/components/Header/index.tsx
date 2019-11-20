import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

interface Props {
  activeItem: string;
}

const Header: FC<Props> = ({ activeItem }) => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
    </nav>
  );
};

export default Header;
