import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-black">
    <Header />
    <main className="flex-grow pt-16">{children}</main>
    <Footer />
  </div>
);

export default Layout; 