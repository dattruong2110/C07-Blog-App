import React from "react";
import Sidebar from "./sidebar/Sidebar";

const DashboardPage = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <Sidebar />
      <div className="w-4/5">
      </div>
    </div>
  );
};

export default DashboardPage;
