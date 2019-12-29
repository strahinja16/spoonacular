import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../store/reducer';
import './Header.scss';

const Header: FC = () => {
  const userLoggedIn = !!useSelector((state: AppState) => state.auth.token);

  if (!userLoggedIn) {
    return (
      <nav>
        <NavLink className="navLink" to="/sign-up">
          Sign up
        </NavLink>
        <NavLink className="navLink" to="/login">
          Login
        </NavLink>
        <NavLink className="navLink" to="/featured">
          Featured
        </NavLink>
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
      </nav>
    );
  }

  return (
    <nav>
      <NavLink className="navLink" to="/logout">
        Logout
      </NavLink>
      <NavLink className="navLink" to="/profile">
        Profile
      </NavLink>
      <NavLink className="navLink" to="/search-by-nutrients">
        Search by nutrients
      </NavLink>
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
