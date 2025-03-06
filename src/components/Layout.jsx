import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => (
  <>
    <Navigation />
    <Outlet />
    {/* 여기에 Footer 등 다른 공통 컴포넌트를 추가할 수 있습니다 */}
    <Footer />
  </>
);

export default Layout;


//Layout.jsx