import React from 'react';
import NavigationBar from './NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => (
  <>
    <NavigationBar />
    <div className="page-wrapper">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default Layout;
