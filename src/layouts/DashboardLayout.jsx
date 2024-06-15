// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "../components/dashboard-page/sidebar/Sidebar";

// eslint-disable-next-line react/prop-types
const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-[100vh] flex justify-between gap-2 overflow-hidden font-mono">
      <Sidebar />
      <main className="w-4/5 h-full overflow-x-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout;
