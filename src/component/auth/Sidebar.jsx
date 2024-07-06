import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiSettingsLine } from "react-icons/ri";

import { TbUserSquareRounded } from "react-icons/tb";
import Dashboardicon from "../images/Dashboardicon.svg";
import Productionicon from "../images/Productionicon.svg";

import Incomeicon from "../images/Incomeicon.svg";
import Manager from "../images/Manager.png";
import Promoteicon from "../images/Promoteicon.svg";
import Helpicon from "../images/Helpicon.svg";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useAuth } from "./AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  async function handleLogout() {
    try {
      await logout();
      navigate("/ ");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex flex-col h-screen pt-2 ${isSidebarExpanded ? 'w-64' : 'w-16'} bg-white p-6 transition-all duration-300`} ">
      <div className="mb-6 flex gap-2 cursor-pointer" onClick={toggleSidebar}>
        <RiSettingsLine className="h-8 w-8 text-2xl" />
        {isSidebarExpanded && (
          <h1 className="text-xl font-bold">
            Dashboard <span className="text-xs font-light">v.01</span>
          </h1>
        )}
      </div>

      <nav className="flex-1">
        <NavLink
          to="/dashboard"
          className="flex items-center relative focus:bg-purple-600 focus:text-white text-xs text-gray-600 rounded-md p-2"
        >
          <img
            src={Dashboardicon}
            className="h-6 w-6 text-gray-400 focus:stroke-black "
            alt=""
          />
          {isSidebarExpanded && <span className="ml-4">Dashboard</span>}
          {isSidebarExpanded && (
            <FaChevronRight className="absolute right-4 text-gray-400 focus:text-white hover:text-white" />
          )}
        </NavLink>
        <NavLink
          to="#"
          className="flex items-center text-xs  relative focus:bg-purple-600 focus:text-white text-gray-600 rounded-md p-2"
        >
          <img
            src={Productionicon}
            className="h-6 w-6  focus:stroke-black "
            alt=""
          />
          {isSidebarExpanded && <span className="ml-4">Product</span>}
          {isSidebarExpanded && (
            <FaChevronRight className="absolute right-4 text-gray-400 focus:text-white hover:text-white" />
          )}
        </NavLink>
        <NavLink
          to="#"
          className="flex items-center  relative  text-xs focus:bg-purple-600 focus:text-white rounded-md p-2"
        >
          <TbUserSquareRounded className="h-6 w-6 text-gray-400 focus:text-gray-100 " />
          {isSidebarExpanded && <span className="ml-4">Customers</span>}
          {isSidebarExpanded && (
            <FaChevronRight className="absolute right-4 text-gray-400 focus:text-white hover:text-white" />
          )}
        </NavLink>
        <NavLink
          to="#"
          className="flex items-center  relative  text-xs focus:bg-purple-600 focus:text-white text-gray-600 rounded-md p-2"
        >
          <img
            src={Incomeicon}
            className="h-6 w-6 text-gray-400 focus:stroke-black "
            alt=""
          />
          {isSidebarExpanded && <span className="ml-4">Income</span>}
          {isSidebarExpanded && (
            <FaChevronRight className="absolute right-4 text-gray-400 focus:text-white hover:text-white" />
          )}
        </NavLink>
        <NavLink
          to="#"
          className="flex items-center  relative    text-xs  text-gray-600 rounded-md p-2 focus:bg-purple-600 focus:text-white"
        >
          <img
            src={Promoteicon}
            className="h-6 w-6 text-gray-400 focus:stroke-black "
            alt=""
          />
          {isSidebarExpanded && <span className="ml-4">Promote</span>}
          {isSidebarExpanded && (
            <FaChevronRight className="absolute right-4 text-gray-400 focus:text-white hover:text-white" />
          )}
        </NavLink>
        <NavLink
          to="#"
          className="flex relative items-center   text-xs focus:bg-purple-600 focus:text-white text-gray-600 rounded-md p-2"
        >
          <div className="h-6 w-6 text-gray-400  focus:brightness-0 focus:invert  ">
            <img src={Helpicon} alt="" />
          </div>
          {isSidebarExpanded && <span className="ml-4">Help</span>}
          {isSidebarExpanded && (
            <FaChevronRight className="absolute right-4 text-gray-400 focus:text-white hover:text-white" />
          )}
        </NavLink>
      </nav>
      {isSidebarExpanded && (
        <div className="bg-gradient-to-r from-pink-400 to-blue-500 text-center p-4 rounded-lg mb-4">
          <p className="text-sm text-white font-semibold mb-4 ">
            Upgrade to PRO to get access to all features!
          </p>
          <button className="bg-white text-sm font-bold  text-purple-600 px-2 py-2 rounded-full w-full">
            Get Pro Now!
          </button>
        </div>
      )}
      <div className="flex items-center">
        <img src={Manager} alt="Profile" className="rounded-full w-6 h-6" />
        {isSidebarExpanded && (
          <div className="ml-4">
            <p className="text-gray-800 text-xs text-start font-semibold">
              Evano
            </p>
            <p className="text-gray-600 text-xs">Project Manager</p>
          </div>
        )}
        <FaChevronDown
          onClick={handleLogout}
          className={`ml-${
            isSidebarExpanded ? "14" : "2"
          } text-xs text-gray-400`}
        />
      </div>
    </div>
  );
};

export default Sidebar;
