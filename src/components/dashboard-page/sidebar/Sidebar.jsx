import React from "react";

const columns = [
  {
    href: "/Dashboard?=Users",
    title: "Users",
  },
  {
    href: "",
    title: "Table 02",
  },
];

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-gray-800 h-screen">
      <div className="w-full h-full p-6">
        <div className="h-full text-3xl text-white flex flex-col justify-between items-center">
          <a href="/dashboard">Dashboard</a>
          <div className="w-full h-full flex flex-col gap-2">
            {columns.map((column) => (
              <div className="flex flex-col text-lg hover:bg-white hover:text-black p-1 rounded ">
                <a href={column.href}>{column.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
