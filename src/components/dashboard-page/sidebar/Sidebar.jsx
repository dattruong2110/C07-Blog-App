import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faUsers,
  faCubes,
  faBook,
  faFile,
  faUser,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router";

const Sidebar = () => {
  const navigation = useNavigate();
  const LinksTop = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: faGauge,
    },
    {
      path: "/dashboard/users",
      name: "Users",
      icon: faUsers,
    },
    {
      path: "/blocks",
      name: "Blocks",
      icon: faCubes,
    },
    {
      path: "/books",
      name: "Books",
      icon: faBook,
    },
    {
      path: "/example-pages",
      name: "Example Pages",
      icon: faFile,
      badge: 14,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: faUser,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: faCog,
    },
    {
      path: "/",
      name: "Log Out",
      icon: faSignOutAlt,
    },
  ];

  const renderLink = (link) => (
    <Link
      key={link.name}
      to={link.path}
      className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
    >
      <div className="grid place-items-center mr-4">
        <FontAwesomeIcon icon={link.icon} />
      </div>
      {link.name}
      {link.badge && (
        <div className="grid place-items-center ml-auto justify-self-end">
          <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full">
            <span>{link.badge}</span>
          </div>
        </div>
      )}
    </Link>
  );

  return (
    <div className="relative flex flex-col m-[calc(1rem)] bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 overflow-y-auto">
      <div className="mb-2 p-4">
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
          Dashboard
        </h5>
      </div>
      <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
        {LinksTop.map(renderLink)}
      </nav>
    </div>
  );
};

export default Sidebar;
