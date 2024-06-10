import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import UserPageProfile from "../components/user-page-profile/UserPageProfile";

const UserLayout = ({ children }) => {
  return (
    <div className="user-layout">
      <Header />
      <UserPageProfile />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;
