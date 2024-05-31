import React from "react";
import Sidebar from "../components/dashboard-page/sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-[100vh] flex justify-between gap-2 overflow-hidden font-mono">
      <Sidebar />
      <main className="w-4/5 h-full overflow-x-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout;
