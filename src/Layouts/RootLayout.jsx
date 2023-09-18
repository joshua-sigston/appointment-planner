import React from 'react';
// router
import { Outlet } from 'react-router-dom';
// components
import { Nav } from '../components';
// styles
import './rootLayout.css';
const RootLayout = () => {
  return (
    <main className="layout flex_column">
      <Nav />
      <Outlet />
    </main>
  );
};

export default RootLayout;
