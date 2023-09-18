import React from 'react';
// router
import { NavLink } from 'react-router-dom';
// styles
import './nav.css';

const Nav = () => {
  return (
    <nav className="flex_row">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/appointments">Appointments</NavLink>
    </nav>
  );
};

export default Nav;
