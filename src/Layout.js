import React from 'react';
import Header from './components/organisms/header/Header';
import Footer from './components/organisms/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;