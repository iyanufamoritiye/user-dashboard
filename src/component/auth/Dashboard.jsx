import React, { useEffect, useState } from "react";
import CustomerList from "./CustomerList";

import { IoSearch } from "react-icons/io5";

import { NavLink, useNavigate } from "react-router-dom";
import { RiSettingsLine } from "react-icons/ri";

import { TbUserSquareRounded } from "react-icons/tb";
import Dashboardicon from "../images/Dashboardicon.svg";
import Productionicon from "../images/Productionicon.svg";
import { HiOutlineUsers } from "react-icons/hi2";
import { GrUserExpert } from "react-icons/gr";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import Ellipse0 from "../images/Ellipse0.png";
import Ellipse1 from "../images/Ellipse1.png";
import Ellipse2 from "../images/Ellipse2.png";
import Ellipse3 from "../images/Ellipse3.png";
import Ellipse4 from "../images/Ellipse4.png";
import Incomeicon from "../images/Incomeicon.svg";
import Manager from "../images/Manager.png";
import Promoteicon from "../images/Promoteicon.svg";
import Helpicon from "../images/Helpicon.svg";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useAuth } from "./AuthContext";
import styled from "styled-components";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const MAX_WIDTH = 1256;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= MAX_WIDTH) {
        setIsSidebarExpanded(false);
      } else {
        setIsSidebarExpanded(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex w-screen  gap-20 sm:gap-6 md:gap-6 xs:gap-4  items-center h-svh   bg-gray-100 mt-0 md:gap-6  ">
      {/* //side bard */}

      <div
        className={`  flex flex-col h-full 
          max-h-dvh pt-2 bg-white p-6 transition-all duration-300   ${
            isSidebarExpanded ? " 40" : " 16"
          }   lg:max-w-48   md:z-40 md:max-w-48 xs:z-40 xs:hidden  
           `}
      >
        <div className="mb-6 flex gap-2 cursor-pointer    ">
          <RiSettingsLine
            className="h-8 w-8 text-2xl xs:h-6   xs:w-6   "
            onClick={toggleSidebar}
          />
          {isSidebarExpanded && (
            <h1 className="text-xl font-bold    ">
              Dashboard
              <span className="text-xs font-light md:hidden  ">v.01</span>
            </h1>
          )}
        </div>
        <div className="flex flex-col  ">
          <nav className="flex-1  mb-40  ">
            <NavLink
              to="/dashboard"
              className="flex items-center relative focus:bg-purple-600 focus:text-white text-xs text-gray-600 rounded-md p-2"
            >
              <img
                src={Dashboardicon}
                className="h-6 w-6 text-gray-400 focus:stroke-black sm:hidden xs:h-6 xs:w-6 "
                alt=""
              />
              {isSidebarExpanded && <span className="ml-4">Dashboard</span>}
              {isSidebarExpanded && (
                <FaChevronRight className="absolute right-4 text-gray-400 focus:text-white hover:text-white" />
              )}
            </NavLink>
            <NavLink
              to="#"
              className="flex items-center text-xs  relative focus:bg-purple-600 focus:text-white active:bg-blue-600 focus:last-child:text-white  text-gray-600 rounded-md p-2"
            >
              <img
                src={Productionicon}
                className="h-6 w-6  focus:stroke-black xs:h-6 xs:w-6 "
                alt=""
              />
              {isSidebarExpanded && <span className="ml-4">Product</span>}
              {isSidebarExpanded && (
                <FaChevronRight className="absolute right-4 text-gray-400  hover:text-white" />
              )}
            </NavLink>
            <NavLink
              to="#"
              className="flex items-center  relative  text-xs focus:bg-purple-600 focus:text-white rounded-md p-2"
            >
              <TbUserSquareRounded className="h-6 w-6 text-gray-400 focus:text-white   xs:h-6 xs:w-6 " />
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
                className="h-6 w-6 text-gray-400 focus:stroke-white xs:h-6 xs:w-6 "
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
                className="h-6 w-6 text-gray-400 focus:stroke-black xs:h-6 xs:w-6 "
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
                <img
                  src={Helpicon}
                  alt=""
                  className="h-6 w-6 text-gray-400 focus:stroke-black xs:h-6 xs:w-6 "
                />
              </div>
              {isSidebarExpanded && <span className="ml-4">Help</span>}
              {isSidebarExpanded && (
                <FaChevronRight className="absolute right-4 text-gray-400 focus:text-white hover:text-white" />
              )}
            </NavLink>
          </nav>
          <div>
            {isSidebarExpanded && (
              <div className="bg-gradient-to-r from-pink-400 to-blue-500 text-center p-4 rounded-lg mb-4">
                <p className="text-sm md:text-xs text-white font-semibold mb-4 ">
                  Upgrade to PRO to get access to all features!
                </p>
                <button className="bg-white text-sm md:text-xs font-bold  text-purple-600 px-2 py-2 rounded-full w-full">
                  Get Pro Now!
                </button>
              </div>
            )}

            <div className="flex items-center">
              <img
                src={Manager}
                alt="Profile"
                className="rounded-full w-6 h-6"
              />
              {isSidebarExpanded && (
                <div className="ml-4">
                  <p className="text-gray-800 text-xs text-start font-semibold">
                    Evano
                  </p>
                  <p className="text-gray-600 text-xs">Project Manager</p>
                </div>
              )}
              <div className="relative">
                <FaChevronDown
                  onClick={togglePopup}
                  className={`ml-${
                    isSidebarExpanded ? "20" : "2"
                  } text-xs text-gray-400  `}
                />
                {isOpen && (
                  <button
                    onClick={handleLogout}
                    className="border  00 font-bold text-xs text-white   bg-purple-600 rounded-lg py-1 px-2 absolute top-5 right-0 "
                  >
                    {" "}
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //header */}

      <div
        className={`   md:ml-auto  md:w-11/12 flex flex-col gap-2 md:max-h-full  z-30   
           w-full h-screen md:fixed  md:top-10 md:-right-10 md:z-1
            xs:fixed xs:top-6 xs:-right-5
           
           `}
      >
        <div className="flex   flex-col gap-2    w-11/12   ">
          <div className="relative flex justify-between mt-2 mb-1  ">
            <RiSettingsLine
              className="h-8 w-8 text-2xl xs:h-6   xs:w-6   "
              onClick={toggleSidebar}
            />
            <h1 className="text-base font-bold flex xs:text-sm xs:ml-12 ">
              {" "}
              Hello, Evano👋🏼,
            </h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
                className="flex-grow py-1 pl-10 pr-3 text-xs text-gray-600  bg-gray-50  
                border w-44 border-0 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <IoSearch className="absolute text-sm right-36 top-2  text-gray-400  " />
            </div>
          </div>
          {/* //card*/}
          <div
            className="flex   justify-between items-center bg-white rounded-lg shadow   w-full md md:h-[85px] xs:flex-col  
          xs:bg-transparent xs:border-0 XS:justify-between xs:shadow-none  "
          >
            <div
              className="flex items-center justify-center w-full border-r-2  
                  py-4 md:py-0  xs:border xs:bg-white xs:w-56 xs:rounded-lg xs:p-1 xs:mb-2"
            >
              <div className="bg-green-100 p-4    rounded-full  ">
                <HiOutlineUsers className="h-6 w-6 text-green-600  " />
              </div>
              <div className="ml-2 text-start">
                <p className="text-gray-400 text-xs xs:text-[8px] ">
                  Total Customers
                </p>
                <p className="text-lg    font-bold xs-text-sm ">5,423</p>
                <p className="text-green-500 text-xs xs:text-[8px]">
                  ▲ 16% this month
                </p>
              </div>
            </div>
            <div
              className="flex items-center justify-center w-full border-r-2  
                  py-4 md:py-0 xs:border xs:bg-white xs:w-56 xs:rounded-lg xs:p-1 xs:mb-2 "
            >
              <div className="bg-green-100 p-4 xs:p-1 rounded-full">
                <GrUserExpert className="h-6 w-6 text-green-600 xs:h-4 xs:w-4" />
              </div>
              <div className="ml-2 text-start">
                <p className="text-gray-400 text-xs xs:text-[8px]">Members</p>
                <p className="text-lg font-bold xs-text-sm">1,893</p>
                <p className="text-red-500 text-xs xs:text-[8px]">
                  ▼ 1% this month
                </p>
              </div>
            </div>
            <div
              className="flex items-center justify-center w-full border-r-2  
                  py-4 md:py-0 xs:border xs:bg-white xs:w-56 xs:rounded-lg xs:p-1 xs:mb-2"
            >
              <div className="bg-green-100 p-4 rounded-full">
                <HiOutlineComputerDesktop className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-2 text-start">
                <p className="text-gray-400 text-xs  xs:text-[8px]">
                  Active Now
                </p>
                <p className="text-lg font-bold xs-text-sm">189</p>
                <div className=" flex">
                  <img src={Ellipse0} alt="usersimage" className=" -mr-3  " />
                  <img src={Ellipse1} alt="usersimage" className=" -mr-3" />
                  <img src={Ellipse2} alt="usersimage" className=" -mr-3" />
                  <img src={Ellipse3} alt="usersimage" className=" -mr-3" />
                  <img src={Ellipse4} alt="usersimage" className=" -mr-3" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-full w-full   ">
          <CustomerList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
