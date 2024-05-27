import React from "react";
import Sidebar from "../components/dashboard-page/sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-between">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
