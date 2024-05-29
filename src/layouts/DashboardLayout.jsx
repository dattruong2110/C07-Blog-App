import React from "react";
import Sidebar from "../components/dashboard-page/sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-between gap-2">
      <Sidebar />
      <main className="w-4/5 h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
