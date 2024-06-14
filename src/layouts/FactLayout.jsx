import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const FactLayout = ({ children }) => {
  return (
    <div className="home-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default FactLayout;
